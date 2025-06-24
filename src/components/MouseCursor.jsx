import React from 'react';

const MouseCursor = ({ position, isScrolling }) => {
    return (
        <div
            className={`mouse-cursor ${isScrolling ? 'scrolling' : ''}`}
            style={{
                left: position.x - 8,
                top: position.y - 8,
            }}
        />
    );
};

export default MouseCursor;