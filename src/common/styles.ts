const styles = new CSSStyleSheet() as any;
styles.replaceSync(
  `
body {
  font-family: -apple-system, BlinkMacSystemFont, "Open Sans", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

code {
  font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Courier New", monospace;
}

blockquote {
  background-color: #ededed;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-left: 5px solid #777777;
}

kbd {
  border: 1px solid #777777;
  border-bottom: 2px solid #777777;
  border-radius: 3px;
  padding: 1px 4px;
  margin: 0 4px;
}

label {
  font-style: bold;
  font-size: 1.2rem;
}
`,
);

export default styles;
