import express from 'express'
const app = express()

app.get('/api/users/currentuser', (req, res) => {
  res.send('current user!');
});

app.listen(3000, () => {
  console.log("Listening on port 3000")
})