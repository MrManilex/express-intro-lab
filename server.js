// import modules

import express from 'express'
import * as studentsDb from './data/students-db.js' 
import path from 'path'
import { fileURLToPath } from 'url'

// Create Express app

const app = express()


// Configure the app (app.set)

app.set('view engine', 'ejs')

app.set(
	'views', 
	path.join(path.dirname(fileURLToPath(import.meta.url)),'views')
)

// Mount Middleware (app.use)



// Mount routes

app.get('/', (req, res) => {
  res.redirect('/home')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.get('/students', (req, res) => {
  studentsDb.find({}, (err, students) => {
    res.render('students/index', {
      students,
      err
    })
  })
})
// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})