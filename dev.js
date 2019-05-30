const { serve, Route } = require('fx87');
const fs = require('fs');
const path = require('path');

serve({
  path: './',
  port: 8080,
  routes: [
    new Route('/src/toolset/*.ts', (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const componentName = path.parse(req.url).name;
      const html = `<html lang="en">
<head>
</head>
<body>
<${componentName}></${componentName}>
<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/3.1.6/s.min.js"></script>
<script src="../../src/ls/en.js"></script>

<script>
System.import('../../dist/${componentName}.js');
</script>
</body>
</html>`;
      res.end(html);
    }),
  ],
});
