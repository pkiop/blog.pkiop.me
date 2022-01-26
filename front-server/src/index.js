const fs = require('fs');
const path = require('path');
const React = require('React');
const ReactDOMServer = require('ReactDOMServer');
const express = require('express');

const PORT = process.env.PORT || 3006;
const app = express();

const TestApp = () => {
  return (
    <>
      <div>test</div>
    </>
  );
};

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToPipeableStream(<TestApp />);
  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
