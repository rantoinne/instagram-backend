import db from './models';
import routes from './routes';
import processReady from './utils/onProcessReady';

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.raw({ type: 'application/xml', limit: '10mb' }));
app.use(express.raw({ type: 'text/xml', limit: '5mb' }));

// app.use(express.static(`${__dirname}/../build`));

routes(app);

app.get('/ping', (req, res) => res.send('Pong'));

const port = 8000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server up and running on port ${port}`);
  // processReady();
});
