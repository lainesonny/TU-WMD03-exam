const assert = require('assert')

const Validator = require('../../../app/Services/Validator')

describe('Validator', () => {
    describe('#mail', () => {
        let mailValidator

        beforeEach(() => {
            mailValidator = new Validator()
        })

        it('Cas nominal (john.doe@domain.tld)', () => {
            // Arrange
            // Act
            const result = mailValidator.mail('john.doe@domain.tld')

            // Assert
            assert.equal(result, true)
        })

        it("Vérifier un jeu de donnée d'adresse email invalide", () => {
            // Arrange
            const invalidMail = [
                'john.doedomain.tld',
                'john.doe@domain',
                'john.doe@domain.t',
                '@domain.tld',
                'john@.tld',
                '@toto.fr'
            ]

            // Act
            invalidMail.forEach(email => {
                const result = mailValidator.mail(email)

                // Assert
                assert.equal(result, false)
            })
        })

        // it("Verfier qu'un email contient un @ (john.doedomain.tld)", () => {
        //     // Arrange
        //     // Act
        //     const result = mailValidator.mail('john.doedomain.tld')
        //
        //     // Assert
        //     assert.equal(result, false)
        // })
        //
        // it("Vérifier qu'un email contient une extension (john.doe@domain)", () => {
        //     // Arrange
        //     // Act
        //     const result = mailValidator.mail('john.doe@domain')
        //
        //     // Assert
        //     assert.equal(result, false)
        // })
        //
        // it("Vérifier qu'un email contient une extension de 2 caractères minimum (john.doe@domain.t)", () => {
        //     // Arrange
        //     // Act
        //     const result = mailValidator.mail('john.doe@domain.t')
        //
        //     // Assert
        //     assert.equal(result, false)
        // })
        //
        // it("Vérfier qu'un email contient au moins un caractère avant le @ (@domain.tld)", () => {
        //     // Arrange
        //     // Act
        //     const result = mailValidator.mail('@domain.tld')
        //
        //     // Assert
        //     assert.equal(result, false)
        // })
        //
        // it("Vérfier qu'un email contient un domaine après le @ (john@.tld)", () => {
        //     // Arrange
        //     // Act
        //     const result = mailValidator.mail('john@.tld')
        //
        //     // Assert
        //     assert.equal(result, false)
        // })
    })

    describe('#phone', () => {
        let validator

        beforeEach(() => {
            validator = new Validator()
        })

        it('Vérifier que le jeu de numéro soit valide (retourne true)', () => {
            // Arrange
            const validPhones = [
                '01 09 09 09 09',
                '09 09 09 09 09',
                '06 09 09 09 09'
            ]

            // Act
            validPhones.forEach(phoneNumber => {
                const result = validator.phone(phoneNumber)

                // Assert
                assert.ok(result)
            })

        })

        it('Vérifier que le jeu de numéro soit invalide (retourne false)', () => {
            // Arrange
            const invalidPhones = [
                '00 09 09 09 09',
                '00 09 09 09',
                '0909090909',
                '06-09-09-09-09',
                '06/09/09/09/09',
                '06.09.09.09.09'
            ]

            // Act
            invalidPhones.forEach(phoneNumber => {
                const result = validator.phone(phoneNumber)

                // Assert
                assert.equal(result, false)
            })
        })
    })
})