const { serve, Route } = require('fx87');
const fs = require('fs');
const path = require('path');

serve({
  path: './',
  port: 8080,
  routes: [
    new Route('/src/toolset/*', (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const componentName = path.parse(req.url).name;
      const html = `<html>
<head>
</head>
<body>
<${componentName}></${componentName}>
<script src="../../src/ls/en.js"></script>
<script src="../../dist/main.js"></script>
</body>
</html>`;
      console.log(html);
      res.end(html);
    }),
  ],
});
