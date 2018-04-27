const assert = require('assert')

const IndexController = require('../../../app/Controllers/IndexController')

describe('IndexController', () => {
    describe('#indexAction', () => {
        it("Doit retourner une vue et s'assurer que nous avons un tableau de donnée envoyé à la vue", done => {
            // Arrange
            const taskServiceMocked = {
                tasks() {
                    return [
                        {}, {}
                    ]
                }
            }

            const indexController = new IndexController(taskServiceMocked)

            const req = { }

            const res = { 
                render(view, data) {
                    // Assert
                    assert.equal(view, 'index')
                    assert.equal(data.list.length, 2)

                    done()
                }
            }

            // Act
            indexController.indexAction(req, res)
        })
    })
})