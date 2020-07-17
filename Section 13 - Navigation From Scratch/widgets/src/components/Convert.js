import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedText(text);
        }, 500)

        return () => {
            clearTimeout(timerID);
        }

    }, [text])

    useEffect(() => {
        const doTranslate = async () => {
            if (debouncedText !== '') {
                const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: KEY
                    }
                })
                setTranslatedText(data.data.translations[0].translatedText)
            } else {
                setTranslatedText('')
            }
        }

        doTranslate();
        
    }, [language, debouncedText]);
    
    return <div>{translatedText}</div>
}

export default Convert;