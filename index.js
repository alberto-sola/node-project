import express      from 'express'
import mongoose     from 'mongoose'
import bodyParser   from 'body-parser'

import createStudentController  from './controllers/create.student.js'
import deleteStudentController  from './controllers/delete.student.js'
import getStudentController     from './controllers/get.student.js'
import indexController          from './controllers/index.controller.js'
import newStudentPageController from './controllers/new.student.page.js'
import updateStudentController  from './controllers/update.student.js'

/* Starting the server */
const app = express()
app.set('view engine', 'ejs')
    .listen(55987, () => {
        console.log('Web-server listening on port 55987')
    })

/* Middlewares */
app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/* Database */
mongoose.connect('mongodb://localhost/data', { useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
    if (err != null) console.log(err)
})

app.get('/', indexController)
app.get('/student/new', newStudentPageController)
app.get('/student/details/:id', getStudentController)
app.post('/student/creating', createStudentController)
app.post('/student/updating/:id', updateStudentController)
app.post('/student/removing/:id', deleteStudentController)