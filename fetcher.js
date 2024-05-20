const needle = require('needle');
const fs = require('fs');

const [url, filePath] = process.argv.slice(2);
needle.get(url, (error,response) => {
  if (error) {
    console.error(`Failed to fetch URL: ${error}`);
    return;
  }
  fs.writeFile(filePath, response.body, (err) => {
    if (err) {
      console.error(`Failed to write to file: ${err}`);
    } else {
      console.log(`Downloaded and saved content from ${url} to ${filePath}.`);
    }
  });
});
