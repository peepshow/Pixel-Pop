import React from 'react';

const CustomShapeIcon = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3L18 9L12 15L6 9L12 3Z" />
      <path d="M3 15L9 21H15L21 15" />
      <path d="M9 9L3 15L9 21" />
      <path d="M15 9L21 15L15 21" />
    </svg>
  );
};

export default CustomShapeIcon; 