require('dotenv').config();
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const path = require('path');

const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(fileUpload({}))
app.use('/api', router)

// app.get('/*', function(req, res) {
//   if (req.url === '/api') return next()
//   res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

// Обработка ошибок, последний Middleware
app.use(errorHandler)


const start = async () => {
  try {
    app.listen(process.env.APP_PORT, process.env.APP_IP, () => console.log(`Server started on port ${process.env.APP_PORT}...`))
  } catch (e) {
    console.log(e)
  }
}

start()