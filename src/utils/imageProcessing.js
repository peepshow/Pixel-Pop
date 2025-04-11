import { rgbToHex } from './colorUtils'; // Import needed helper

/**
 * Performs k-means clustering on a list of pixels to find dominant colors.
 * @param {Array<Object>} pixels - Array of pixel objects { r, g, b, index }.
 * @param {number} k - The target number of clusters (colors).
 * @returns {Array<Object>} Array of cluster objects { center: {r,g,b}, pixels: [...] }.
 */
export const kMeansClustering = (pixels, k) => {
    if (!pixels || pixels.length === 0) {
        return [];
    }

    // Clamp k to be at most the number of unique input pixels
    const uniquePixelColors = new Set(pixels.map(p => rgbToHex(p.r, p.g, p.b)));
    k = Math.min(k, uniquePixelColors.size);
    k = Math.max(k, 1); // Ensure k is at least 1

    // Initialize k random centroids from actual unique pixels
    const centroids = [];
    const initialPixelSamples = [...uniquePixelColors].map(hex => {
        // Find the first pixel that matches this unique hex color
        const firstPixel = pixels.find(p => rgbToHex(p.r, p.g, p.b) === hex);
        return { r: firstPixel.r, g: firstPixel.g, b: firstPixel.b }; 
    });

    // Shuffle initial samples and take k
    const shuffledSamples = initialPixelSamples.sort(() => 0.5 - Math.random());
    centroids.push(...shuffledSamples.slice(0, k));

    // If k is 1, just calculate the average color
    if (k === 1 && pixels.length > 0) {
        const avgR = Math.round(pixels.reduce((sum, p) => sum + p.r, 0) / pixels.length);
        const avgG = Math.round(pixels.reduce((sum, p) => sum + p.g, 0) / pixels.length);
        const avgB = Math.round(pixels.reduce((sum, p) => sum + p.b, 0) / pixels.length);
        return [{ center: { r: avgR, g: avgG, b: avgB }, pixels: pixels }];
    }

    // Perform clustering iterations
    const maxIterations = 20; // Increased iterations for potentially better convergence
    let iterations = 0;
    let clusters = [];
    let lastCentroids = null;

    while (iterations < maxIterations) {
        clusters = centroids.map(centroid => ({ center: centroid, pixels: [] }));

        // Assign pixels to nearest centroid using weighted distance
        pixels.forEach(pixel => {
            let minDistance = Infinity;
            let nearestClusterIndex = 0;

            centroids.forEach((centroid, index) => {
                // Use weighted RGB distance (coefficients from ITU-R BT.709)
                const rWeight = 0.2126;
                const gWeight = 0.7152;
                const bWeight = 0.0722;

                const dr = (pixel.r - centroid.r) * rWeight;
                const dg = (pixel.g - centroid.g) * gWeight;
                const db = (pixel.b - centroid.b) * bWeight;
                const distance = dr * dr + dg * dg + db * db;

                if (distance < minDistance) {
                    minDistance = distance;
                    nearestClusterIndex = index;
                }
            });
            // Ensure index is valid before pushing
            if (clusters[nearestClusterIndex]) {
                clusters[nearestClusterIndex].pixels.push(pixel);
            }
        });

        // Update centroids - avoid division by zero for empty clusters
        const newCentroids = clusters.map(cluster => {
            if (cluster.pixels.length === 0) {
                // If a cluster becomes empty, reinitialize its centroid randomly
                // from the overall pixel set to avoid losing a cluster.
                const randomIndex = Math.floor(Math.random() * pixels.length);
                const randomPixel = pixels[randomIndex];
                return { r: randomPixel.r, g: randomPixel.g, b: randomPixel.b };
            }
            return {
                r: Math.round(cluster.pixels.reduce((sum, p) => sum + p.r, 0) / cluster.pixels.length),
                g: Math.round(cluster.pixels.reduce((sum, p) => sum + p.g, 0) / cluster.pixels.length),
                b: Math.round(cluster.pixels.reduce((sum, p) => sum + p.b, 0) / cluster.pixels.length)
            };
        });

        // Check for convergence (allow small tolerance)
        const tolerance = 1e-4;
        if (lastCentroids && newCentroids.every((centroid, i) => {
            const old = lastCentroids[i];
            return Math.abs(centroid.r - old.r) < tolerance &&
                   Math.abs(centroid.g - old.g) < tolerance &&
                   Math.abs(centroid.b - old.b) < tolerance;
        })) {
            // console.log(`K-means converged after ${iterations + 1} iterations.`);
            break;
        }

        lastCentroids = newCentroids;
        centroids.splice(0, centroids.length, ...newCentroids);
        iterations++;
    }

    // if (iterations === maxIterations) {
    //     console.log('K-means reached max iterations.');
    // }

    // Return clusters, filtering out any that might have ended up empty
    // although the reinitialization logic should prevent this.
    return clusters.filter(c => c.pixels.length > 0);
}; 