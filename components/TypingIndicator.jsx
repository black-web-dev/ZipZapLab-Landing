import React from 'react';

/**
 * TypingIndicator - A component that displays 3 dots symbol
 * @param {string} className - Additional CSS classes
 * @param {string} color - Color of the dots (default: '#f5f5f5')
 * @param {number} size - Size of each dot in pixels (default: 4)
 * @param {number} spacing - Spacing between dots in pixels (default: 3)
 */
export default function TypingIndicator({ 
  className = '', 
  color = '#f5f5f5', 
  size = 4,
  spacing = 3 
}) {
  const dots = [0, 1, 2];

  return (
    <div className={`flex items-center ${className}`} style={{ gap: `${spacing}px` }}>
      {dots.map((index) => (
        <div
          key={index}
          className="rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}