import express from 'express';
import catRoutes from './api/routes/cat-router.js';
import userRoutes from './api/routes/user-router.js';
import authRouter from './api/routes/auth-router.js';
//const hostname = '127.0.0.1';
const app = express();
app.use(express.json());
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
app.use('/api/v1/auth', authRouter);



export default app;