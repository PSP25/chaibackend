require('dotenv').config()//this is to load the environment variables from the .env file


const express = require('express')
//acquire the dependencies and package you installed about express in a variable called express
const app = express()
//create an instance of express and store it in a variable called app, this is like using MATH in js
//we get all the powers of the math functon.
const port = 3000
//store the port number in a variable called port to help listen from that port

app.get('/', (req, res) => {
  res.send('Hello World!')
})//app makes a get request and listens at '/' server and sends a response 'Hello World!' on any request heard.

//creating more such get requests to get handy with the flow of get request
app .get('/login',(req,res)=>{
     res.send('login request');    
})

//************************************************************************ */
//when you add a new thing here
//don't forget to re-run the server else you will not see the changes
//************************************************************************ */

app.get('/twitter',(req,res)=>{
     res.send("twitter is now X")
})

app.get('/facebook',(req,res)=>{
     res.send('<h1>facebook is now meta</h1>')
})



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
//app listens on the port number and logs a message on the console(before using dot env, general method non prodn grade)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})