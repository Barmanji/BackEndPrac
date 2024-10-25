import express from 'express';

const app = express();

app.get('/', (req, res)=> {
  res.send('Hello World!')
})
app.get('/api/jokes', (req, res)=> {
    const jokes = [
        {
            id: 1,
            title: 'Joke One',
            content: 'I love myslef'
        },
        {
            id:2,
            title: 'joke two',
            content: 'I love studies'
        } ,
        {
            id: 3,
            title:'Jokes three',
            content: 'hahahahaha'
        }
    ];

    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost${port}`)
})
