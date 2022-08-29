import React, { useState } from 'react';

// the current value
// a function to change that value


const Echo = () => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <h2>{ message }</h2>
            <input placeholder="Your message here" onInput={ (e) => setMessage( e.target.value ) } />
        </div>
    );
};

export default Echo