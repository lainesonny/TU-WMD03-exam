// require module assert
const assert = require('assert')

// require classe MailService pour la tester
const MailService = require('../../../app/Services/MailService')

describe('Mail', () => {
    let mailService

    // avant chaque test, instancie une nouvelle classe
    beforeEach(() => {
        mailService = new MailService()
    })

    it('Cas nominal (john.doe@domain.tld)', () => {
        // Arrange
        // Act
        const result = mailService.validateEmail('john.doe@domain.tld')

        // Assert
        assert.equal(result, true)
    })

    it("Vérifier un jeu de donnée d'adresse email invalide", () => {
        // Arrange
        const invalidMail = [
            'john.doedomain.tld',
            'john.doedomain.tld',
            '@domain.tld'
        ]

        // Act
        invalidMail.forEach(email => {
            const result = mailService.validateEmail(email)

            // Assert
            assert.equal(result, false)
        })
    })
})