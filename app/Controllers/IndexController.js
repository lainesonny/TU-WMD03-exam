class IndexController {
    constructor(taskService) {
        this._taskService = taskService
    }

    indexAction(req, res) {
        const list = this._taskService.tasks()

        res.render('index', { list })
    }

    createAction(req, res) { }

    updateAction(req, res) { }

    deleteAction(req, res) { }
}

module.exports = IndexController