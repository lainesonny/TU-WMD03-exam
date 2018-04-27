const assert = require('assert')

const SampleService = require('../../../app/Services/SampleService')

describe('SampleService', () => {
    describe('#add', () => {
        it('Vérfier que la méthode retourne 2 avec en paramètres 1 et 1', () => {
            // Arrange (Je defini mon context)
            const a = 1
            const b = 1

            const sampleService = new SampleService()

            // Act (J'execute la méthode de l'application)
            const result = sampleService.add(a, b)

            // Assert (Je teste que c'est vrai)
            assert.equal(result, 2)
        })

        it('Vérfier que la méthode retourne 3 avec en paramètres 2 et 1', () => {
            // Arrange
            const a = 2
            const b = 1

            const sampleService = new SampleService()

            // Act
            const result = sampleService.add(a, b)

            // Assert
            assert.equal(result, 3)
        })
    })

    describe('#isMajor', () => {
        let sampleService

        beforeEach(() => {
            sampleService = new SampleService()
        })

        it('Vérifer que ça retourne true si le paramètre est 18', () => {
            // Arrange
            const age = 18

            // const sampleService = new SampleService()

            // Act
            const result = sampleService.isMajor(age)

            // Assert
            assert.equal(result, true)
        })

        it('Vérifer que ça retourne false si le paramètre est 17', () => {
            // Arrange
            const age = 17

            // const sampleService = new SampleService()

            // Act
            const result = sampleService.isMajor(age)

            // Assert
            assert.equal(result, false)
        })
    })

    describe('#displayName', () => {
        let sampleService

        beforeEach(() => {
            sampleService = new SampleService()
        })

        it("Vérifier le cas nominal de l'utilisation de la méthode", () => {
            // Arrange
            const firstname = 'john'
            const lastname = 'doe'

            // Act
            const result = sampleService.displayName(firstname, lastname)

            // Assert
            assert.equal(result, 'john doe')
            // assert.ok(result.indexOf(' ') > -1)
        })

        it("Vérifier le cas où il y a un firstname vide", () => {
            // Arrange
            const firstname = ''
            const lastname = 'doe'

            // Act
            const result = sampleService.displayName(firstname, lastname)

            // Assert
            assert.equal(result, null)
        })

        it("Vérifier le cas où il y a un lastname vide", () => {
            // Arrange
            const firstname = 'john'
            const lastname = ''

            // Act
            const result = sampleService.displayName(firstname, lastname)

            // Assert
            assert.equal(result, null)
        })

        // it("Vérifier le cas où il n'y a pas de firstname et lastname", () => {
        //     // Arrange
        //     const firstname = ''
        //     const lastname = ''
        //
        //     // Act
        //     const result = sampleService.displayName(firstname, lastname)
        //
        //     // Assert
        //     assert.equal(result, null)
        // })
    })

    describe('#getTask', () => {
        it("Verifier que l'id est bien passé en paramètre la méthode _getTask et que la valeur de retour est 'Custom task'", () => {
            // Arrange
            const id = 0

            const sampleService = new SampleService();

            sampleService._getTasks = param => {
                assert.equal(param, id)

                return 'Custom task'
            }

            // Act
            const result = sampleService.getTask(id)

            // Assert
            assert.equal(result, 'Custom task')
        })
    })
})