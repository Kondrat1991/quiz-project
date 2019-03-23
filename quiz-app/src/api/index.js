import express from 'express'

const app = express();
const port = 3000;

let questions = [
    'Test',
    'Test1',
    'Test2',
];

app.use('/get-questions', (req, res) => {
    res.send({questions: questions})
})

app.listen(port, () => console.log(`app on ${port}`));