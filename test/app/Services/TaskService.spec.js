const assert = require('assert')

const TaskService = require('../../../app/Services/TaskService')

describe('TaskService', () => {
    describe('#tasks', () => {
        it('Doit retourner une liste de 2 tâches', () => {
            // Arrange
            const modelMocked = {
                get() {
                    return [
                        {},
                        {}
                    ]
                }
            }

            const taskService = new TaskService(modelMocked)

            // Act
            const list = taskService.tasks()

            // Assert
            assert.equal(list.length, 2)
        })

        it('Doit retourner une liste de 0 tâches', () => {
            // Arrange
            const modelMocked = {
                get() {
                    return []
                }
            }

            const taskService = new TaskService(modelMocked)

            // Act
            const list = taskService.tasks()

            // Assert
            assert.equal(list.length, 0)
        })
    })
})