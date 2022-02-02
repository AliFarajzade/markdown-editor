import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

export default function App() {
    const [textValue, setTextValue] = useState('Start Typing...');

    return (
        <div className="app">
            <textarea
                value={textValue}
                onChange={e => setTextValue(e.target.value)}
            />

            <div className="preview">
                <p>
                    <ReactMarkdown>{textValue}</ReactMarkdown>
                </p>
            </div>
            {/* <a
                className="attribution"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alifarajzade"
            >
                Built by Ali Farajzade 2022&copy;
            </a> */}
        </div>
    );
}
