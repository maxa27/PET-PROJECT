import express from 'express';
import path from 'path';

const app = express()
const port = 3000;

app.use(express.static('Frontend'));

app.get('/Frontend/html/pageWithFilms.html', (req, res) => {
    // res.sendFile(path.join(process.cwd(), 'Frontend/html/pageWithFilms.html'));
    app.use(express.static('Frontend/films'))
})


app.listen(port, () => {
    console.log('Server started at', port)
})