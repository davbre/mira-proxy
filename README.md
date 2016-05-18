
Assumes a Mira server is running, and a read API key has been applied. This
is a simple node.js proxy server which hides the API key.

Create a file config/mira.json, adding the Mira server url and the API key:

    {
      "mira-url": "PUT MIRA SERVER URL HERE",
      "mira-api-Key": "PUT MIRA API KEY HERE"
    }


Start server:

    node app.js
