import React from 'react';
import './ButtonStyle.css'

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

export default React.memo(Button);