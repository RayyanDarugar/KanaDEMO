const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Supported MIME types for brand asset packaging
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Parse incoming request URL
  let decodedUrl = '';
  try {
    decodedUrl = decodeURIComponent(req.url);
  } catch (e) {
    decodedUrl = req.url;
  }

  // Strip query parameters
  const cleanUrl = decodedUrl.split('?')[0];
  
  let filePath = path.join(__dirname, cleanUrl);

  // Directory handling
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Handle clean URLs without .html extensions (e.g. /industries/cpg)
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    const htmlPath = filePath + '.html';
    if (fs.existsSync(htmlPath)) {
      filePath = htmlPath;
    } else {
      const indexHtmlPath = path.join(filePath, 'index.html');
      if (fs.existsSync(indexHtmlPath)) {
        filePath = indexHtmlPath;
      }
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>404 Not Found - Kana Demo</title>
            <style>
              body { background-color: #15171a; color: #ffffff; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
              h1 { color: #ff7a59; }
              a { color: #d8d6d4; text-decoration: none; border-bottom: 1px dashed; }
            </style>
          </head>
          <body>
            <h1>404 Not Found</h1>
            <p>The requested file or route was not found on the server.</p>
            <p>Go to the <a href="/industries/cpg/index.html">CPG Working Demo</a></p>
          </body>
          </html>
        `, 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code} ..\n`);
      }
    } else {
      // Set responsive headers
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Content-Type-Options': 'nosniff'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('\x1b[32m%s\x1b[0m', `✓ Local dev server is running!`);
  console.log(`  Access the site at:     \x1b[36mhttp://localhost:${PORT}/\x1b[0m`);
  console.log(`  Access the CPG Demo:    \x1b[36mhttp://localhost:${PORT}/industries/cpg/\x1b[0m`);
  console.log(`\nPress Ctrl+C to terminate the server.\n`);
});
