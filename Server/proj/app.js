const http = require("http");
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "/templates");

//read html file
let file2send = fs.readFileSync(`${dirPath}/page.html`);

const server = http.createServer((req, res) => {
  //setting the header content type to html
  res.setHeader("Content-type", "text/html");
  //handle incoming requests here.
  console.log(req);
  //sending html content
  res.write(file2send);
  //ending
  res.end();
});

server.listen(3000, () => {});
