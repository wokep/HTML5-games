<!-- client-only approach (no /open route) -->
<script>
const ALLOWED = ['open.spotify.com','www.wikipedia.org','www.khanacademy.org'];
function openUrl(raw) {
  let url = raw.trim();
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  try {
    const parsed = new URL(url);
    if (!ALLOWED.includes(parsed.hostname)) { alert('Not allowed'); return; }
    document.getElementById('viewer').src = parsed.toString();
  } catch(e){ alert('invalid url'); }
}
</script>
