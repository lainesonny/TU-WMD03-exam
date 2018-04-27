const assert = require('assert')

const FormService = require('../../../app/Services/FormService')

// Rédiger les tests en mockant les différentes méthodes de la classe Validator
describe('FormService', () => {
    describe('#createUser', () => {
        it('Vérifier que le nom soit exacte', () => {
            // Arrange
            const nameErrorList = [
                '',
                ' ',
                undefined
            ]

            const formService = new FormService()

            // Act
            nameErrorList.forEach(name => {
                const result = formService.createUser(name, '', '')

                // Assert
                assert.equal(result, false)
            })

        })

        it('Vérifier que le validateur de mail retourne faux', done => {
            // Arrange
            const validator = {
                mail(data) {
                    assert.equal(data, 'john@domain.tld')

                    done()
                }
            }

            const formService = new FormService(validator)

            // Act
            const result = formService.createUser('john', 'john@domain.tld', '')

            // Assert
            assert.equal(result, false)
        })
    })

    it('Vérifier que le validateur de téléphone retourne faux', done => {
        // Arrange
        const validator = {
            mail() {
                return true
            },
            phone(data) {
                assert.equal(data, '0202020202')

                done()
            }
        }

        const formService = new FormService(validator)

        // Act
        const result = formService.createUser('john', 'john@domain.tld', '0202020202')

        // Assert
        assert.equal(result, false)
    })
})