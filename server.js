// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Whitelist of hostnames you will allow to be framed
const WHITELIST = [
  'open.spotify.com',
  'www.wikipedia.org',
  'www.khanacademy.org'
];

// Serve static files from /public
app.use(express.static('public'));

// Route /open?url=<encodedURL>
app.get('/open', (req, res) => {
  const raw = req.query.url;
  if (!raw) return res.status(400).send('Missing url parameter');

  let parsed;
  try {
    parsed = new URL(raw);
  } catch (e) {
    return res.status(400).send('Invalid URL');
  }

  // Only allow exact hostname matches
  if (!WHITELIST.includes(parsed.hostname)) {
    return res.status(403).send(`
      <html><body style="font-family:Arial;padding:20px;">
        <h2>Blocked</h2>
        <p>The requested site (${parsed.hostname}) is not on the approved list.</p>
        <p><a href="/">Back</a></p>
      </body></html>`);
  }

  // Send an HTML wrapper containing an iframe pointing to the allowed site.
  // (Note: target site may still refuse to be framed.)
  res.send(`<!doctype html>
    <html>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <title>Framed: ${parsed.hostname}</title>
      <style>body,html{height:100%;margin:0}iframe{border:0;width:100%;height:100vh}</style>
    </head>
    <body>
      <iframe src="${parsed.toString()}" sandbox="allow-same-origin allow-scripts allow-forms allow-popups"></iframe>
    </body>
    </html>`);
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
