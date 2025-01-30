import React, { useState, useEffect } from 'react';
import '../styles.css';

const Calculator = () => {
    const [display, setDisplay] = useState('');

    const appendToDisplay = (input) => {
        setDisplay(display + input);
    };

    const calculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay('Error');
            setTimeout(() => setDisplay(''), 1500); 
        }
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    const backspace = () => {
        setDisplay(display.slice(0, -1));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;

            if (/[0-9+\-*/.=]/.test(key)) {
                event.preventDefault();
                if (key === '=' || key === 'Enter') {
                    calculate();
                } else {
                    appendToDisplay(key);
                }
            } else if (key === 'Backspace') {
                backspace();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [display]);

    return (
        <div className="calculator">
            <input type="text" id="display" value={display} readOnly />
            <div className="keys">
                <button onClick={() => appendToDisplay('+')} id="operator_btn">+</button>
                <button onClick={() => appendToDisplay('7')}>7</button>
                <button onClick={() => appendToDisplay('8')}>8</button>
                <button onClick={() => appendToDisplay('9')}>9</button>
                <button onClick={() => appendToDisplay('-')} id="operator_btn">-</button>
                <button onClick={() => appendToDisplay('4')}>4</button>
                <button onClick={() => appendToDisplay('5')}>5</button>
                <button onClick={() => appendToDisplay('6')}>6</button>
                <button onClick={() => appendToDisplay('*')} id="operator_btn">*</button>
                <button onClick={() => appendToDisplay('1')}>1</button>
                <button onClick={() => appendToDisplay('2')}>2</button>
                <button onClick={() => appendToDisplay('3')}>3</button>
                <button onClick={() => appendToDisplay('/')} id="operator_btn">/</button>
                <button onClick={() => appendToDisplay('0')}>0</button>
                <button onClick={() => appendToDisplay('.')}>.</button>
                <button onClick={calculate}>=</button>
                <button onClick={clearDisplay} id="operator_btn">C</button>
                <button onClick={backspace} id="operator_btn">⌫</button>
            </div>
        </div>
    );
};

export default Calculator;