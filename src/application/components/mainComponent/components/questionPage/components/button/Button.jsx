import React from 'react';
import './ButtonStyle.css'

const Button = ({ children }) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default React.memo(Button);