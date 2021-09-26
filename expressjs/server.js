import express from 'express'

const app = express()
const port = 3000

// database
const todos = [
  {id: 1, todo: "learn express", done: false},
  {id: 2, todo: "learn js", done: true},
  {id: 3, todo: "learn react", done: false}
]

app.get('/hello', (req, res) => {
  res.send('Ola Mundo!')
})

app.get('/api/v1/todos', (req, res) => {
  res.json(todos)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
