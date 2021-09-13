const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Node JS course");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else
    res.end(`
    <h1>Oops</h1>
    <p>on Wrong Page</p>
    `);
});
server.listen(3000);
