import { NextApiResponse } from 'next';

// need to read documentation NExt js. Route has post and get 
// read data then return response - answer from open ai 
export const POST = async function handler(req: Request, res: NextApiResponse) {
    try {
        //request has multiple things, this get the json body of the requst 
        const dataJson = await req.json();

        // Call Open AI API here,
        const url = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY}`
        };
        console.log(dataJson)

        const message = `Answer concisely: ${dataJson.message}`

        console.log("Sending", message)

        const data = {
            model: "gpt-3.5-turbo-1106",
            messages: [{ "role": "user", "content": message }]
        };

        console.log("Sending")

        // Send lai
        // Send the POST request to the OpenAI API with the specified URL, data payload, and headers
        let response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        let responseText = await response.text();
        //tu n
        if (!response.ok) {
            // If the response status is not okay, handle the error
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        // Log the response for debugging
        console.log(responseData.choices[0].message.content);

        // Return the desired response based on the OpenAI API response
        return new Response(JSON.stringify({ content: responseData.choices[0].message.content }));
    } catch (error) {
        // Log the error for debugging
        console.error(error);

        // Return an error response
        return new Response(JSON.stringify({ content: "error" }));
    }
}
