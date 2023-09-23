import React, { useEffect, useState } from 'react';
// import Nodehun from 'nodehun';
import OpenAIApi from 'openai';
// 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
// Initialize nodehun with dictionaries. You'll have to get these dictionaries.
// const nodehun = new Nodehun(affixData, dictionaryData);

// Initialize GPT-3
const openai = new OpenAIApi({
    apiKey: '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',
    dangerouslyAllowBrowser: true
});

function AutoReply({ msg }) {
    const [gptReply, setGptReply] = useState('');

    useEffect(() => {
        const processMessage = async () => {
            // Step 1: Correct the user's message
            let correctedMsg = await checkGrammarAndSpelling(msg);
            
            // Step 2: Get GPT's reply
            let gptResponse = await getGPTReply(correctedMsg);
            setGptReply(gptResponse);
        };

        processMessage();
    }, [msg]);

    const checkGrammarAndSpelling = async (text) => {
        // Use nodehun to check and correct text
        // ...implementation here...

        // Just a placeholder for demonstration, replace with real correction
        return text;
    };

    const getGPTReply = async (text) => {
        if (!text || text.trim() === '') {
            return "Please provide a valid input.";
        }
    
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": text}
                ]
            });
            
            return response.choices[0].message.content.trim();
        } catch (error) {
            console.error("Error getting reply from OpenAI:", error);
            return "Sorry, there was an error processing your request.";
        }
    };
    
        
    return (
        <div className="flex justify-start items-center bg-green-500 rounded-md w-fit my-1">
            <div className="flex justify-between items-end max-w-[410px] p-2" style={{ wordBreak: "break-word" }}>
                <p className="text-white text-sm mr-2">{gptReply}</p>
                <p className="text-gray-300 text-[10px] min-w-[50px]">{new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    );
}

export default AutoReply;




