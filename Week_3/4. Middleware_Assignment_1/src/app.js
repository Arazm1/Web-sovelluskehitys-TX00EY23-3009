import express from 'express';
import catRoutes from './api/routes/cat-router.js';
import userRoutes from './api/routes/user-router.js';
//const hostname = '127.0.0.1';
const app = express();
//const port = 3000;


app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/test', (request, response) => {
  const responseData = {vastaus: "toimii"};
  response.send(responseData);
});


app.use('/api/v1/cat', catRoutes);
app.use('/api/v1/user', userRoutes);

app.use(express.json());


export default app;