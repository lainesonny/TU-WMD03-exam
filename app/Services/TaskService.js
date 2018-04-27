class TaskService {
    constructor(taskModel) {
        this._taskModel = taskModel
    }

    tasks() {
        return this._taskModel.get()
    }

    create(name) { }

    update(newName, id) { }

    delete(id) { }
}

module.exports = TaskService