import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));


const cats = [{
  cat_id: 1,
  name: "cat1",
  birthdate: "1.1.2001",
  weight: 6,
  owner: 'owner1',
  image: 'https://loremflickr.com/320/240/cat'
},
{
  cat_id: 2,
  name: "cat2",
  birthdate: "2.2.2002",
  weight: 7,
  owner: 'owner2',
  image: 'https://loremflickr.com/320/240/cat'
},
{
  cat_id: 3,
  name: "cat3",
  birthdate: "3.3.2003",
  weight: 8,
  owner: 'owner3',
  image: 'https://loremflickr.com/320/240/cat'
},
]

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//app.post

app.get('/api/test', (request, response) => {
  const responseData = {vastaus: "toimii"};
  response.send(responseData);
});


app.get('/api/v1/cats', (req, res) => {
  res.json(cats);
});