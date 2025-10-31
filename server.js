// server.js
const express = require('express');
const url = require('url');
const app = express();
const PORT = process.env.PORT || 3000;

// Whitelist: only these hostnames are allowed.
// Edit to include only domains you have permission to show.
const WHITELIST = [
  'open.spotify.com',
  'www.wikipedia.org',
  'www.khanacademy.org'
];

app.use(express.static('public')); // serve your blank.html and client assets

// /open?url=<encoded>
app.get('/open', (req, res) => {
  const raw = req.query.url;
  if (!raw) return res.status(400).send('Missing url parameter');

  let parsed;
  try {
    parsed = new URL(raw);
  } catch (e) {
    return res.status(400).send('Invalid URL');
  }

  // Only allow exact hostnames in whitelist
  if (!WHITELIST.includes(parsed.hostname)) {
    return res.status(403).send(`
      <html><body style="font-family:Arial;padding:20px;">
        <h2>Blocked</h2>
        <p>The requested site (${parsed.hostname}) is not on the approved list.</p>
      </body></html>`);
  }

  // Option A: Return a simple HTML wrapper with an iframe pointing to the allowed site.
  // This helps keep the top-level origin as your domain (but CSP/X-Frame might block actual framing).
  const escaped = encodeURI(parsed.toString());
  res.send(`<!doctype html>
    <html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0">
      <iframe src="${escaped}" style="border:0;width:100%;height:100vh;"></iframe>
    </body></html>`);
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
