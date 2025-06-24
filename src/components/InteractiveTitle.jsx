import React from 'react';

const InteractiveTitle = ({ children, mousePosition, className = "" }) => {
    const style = mousePosition ? {
        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
    } : {};

    return (
        <div
            className={`interactive-title ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default InteractiveTitle;