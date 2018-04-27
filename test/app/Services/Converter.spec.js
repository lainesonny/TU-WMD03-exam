const assert = require('assert')

const Converter = require('../../../app/Services/Converter')

describe('Converter', () => {
    describe('#phone', () => {
        it('Permet la convertion de numéros de téléphones', () => {
            // Arrange
            const list = [
                '02 02 02 02 02',
                '0202020202',
                '02.02.02.02.02',
                '02/02/02/02/02'
            ]

            const converter = new Converter()

            // Act
            list.forEach(phone => {
                const result = converter.phone(phone)

                // Assert
                assert.equal(result, '02 02 02 02 02')
            })

        })
    })

    describe('#addPrefix', () => {
        it('Convertir un numéro avec le +33 au debut', () => {
            // Arrange
            const list = [
                '02 02 02 02 02',
                '0202020202',
                '02.02.02.02.02',
                '02/02/02/02/02'
            ]

            const converter = new Converter()

            // Act
            list.forEach(phone => {
                const result = converter.addPrefix(phone)

                // Assert
                assert.equal(result, '+33202020202')
            })
            // Assert
        })
    })
})