import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  
  /* Apply variant styles */
  background-color: ${props => {
    if (props.disabled) return 'var(--bg-disabled)';
    if (props.variant === 'primary') return 'var(--accent-color)';
    if (props.variant === 'secondary') return 'var(--bg-tertiary)';
    if (props.variant === 'danger') return '#e53935';
    return 'var(--bg-tertiary)';
  }};
  
  color: ${props => {
    if (props.disabled) return 'var(--text-disabled)';
    if (props.variant === 'primary') return 'white';
    return 'var(--text-primary)';
  }};
  
  &:hover:not(:disabled) {
    background-color: ${props => {
      if (props.variant === 'primary') return 'var(--accent-hover)';
      if (props.variant === 'secondary') return 'var(--bg-hover)';
      if (props.variant === 'danger') return '#c62828';
      return 'var(--bg-hover)';
    }};
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({ 
  children, 
  variant = 'secondary',
  type = 'button',
  onClick,
  disabled = false,
  ...props 
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 