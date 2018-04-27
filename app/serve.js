const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

const TaskService = require('./Services/TaskService')
const IndexController = require('./Controllers/IndexController')

// D'instancier notre service
const taskService = new TaskService()

// D'instancier notre classe de contrôler
const indexController = new IndexController(taskService)

// Définir les différents routes de mon application
app.get('/', indexController.indexAction.bind(indexController))
app.post('/tasks/create', indexController.createAction.bind(indexController))
app.post('/tasks/update', indexController.updateAction.bind(indexController))
app.get('/tasks/delete/:id', indexController.deleteAction.bind(indexController))

// Démarre le serveur
app.listen(3000, () => console.log('Example app listening on port 3000!'))