import React from 'react';

const SpinnerPage = () => {
    return (
        <div
            className="spinner_page"
            style={{
                padding: '10rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span
                className="spinner"
                style={{ border: '4px solid var(--c-chip-1)' }}
            ></span>
        </div>
    );
};

export default SpinnerPage;
