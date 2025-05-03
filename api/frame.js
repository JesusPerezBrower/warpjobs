export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Empleos Web3 en WarpJobs" />
        <meta property="og:image" content="https://warpjobs.vercel.app/preview.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://warpjobs.vercel.app/preview.png" />
        <meta property="fc:frame:button:1" content="Ir al sitio" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://warpjobs.vercel.app/" />
      </head>
      <body></body>
    </html>
  `);
} 