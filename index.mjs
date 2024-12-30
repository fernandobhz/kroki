import fetch from 'node-fetch';

const fetchResponse = await fetch(`https://kroki.io/graphviz/`, {    
    method: 'POST',
    headers: {
        Accept: 'image/svg+xml',
        'Content-Type': 'text/plain',
    },
    body: `
        digraph G {
            Hello->World
        }
    `,
    });

const fetchResponseText = await fetchResponse.text();

if (fetchResponse.status !== 200) {
    console.log(`Error: ${fetchResponse.status} ${fetchResponse.statusText}`);
}

console.log(`Success: ${fetchResponseText}`);
