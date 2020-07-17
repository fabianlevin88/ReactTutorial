import React, {useState} from 'react';
import Dropdown from './DropDown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    },
    {
        label: 'Hebrew',
        value: 'he'
    },
    {
        label: 'Italian',
        value: 'it'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Greek',
        value: 'el'
    }
]

const Translate = () => {

    const [language, setLanguage] = useState(options[Math.floor(Math.random() * options.length)]);
    const [text, setText] = useState('hola');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter a word</label>
                    <input 
                        value={text} 
                        onChange={event => setText(event.target.value)}
                        className="input" />
                    </div>
            </div>
            <Dropdown 
                options={options} 
                message="Select a language" 
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h4 className="ui header">Output</h4>
            <Convert
                language={language} 
                text={text}
            />
        </div>
    )
}

export default Translate;



