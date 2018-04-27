const assert = require('assert')

const UserService = require('../../../app/Services/UserService')

describe('UserService', () => {
    describe('#getProducts', () => {
        // it("[First Case] Doit retourner la liste des produits d'un utilisateur", () => {
        //     // Arrange
        //     const user_id = 1
        //
        //     const userService = new UserService()
        //
        //     // Création d'un mock de la classe ProductService
        //     userService._productService = {
        //         getProducts(param) {
        //             assert.equal(param, user_id)
        //
        //             return [
        //                 'iphone'
        //             ]
        //         }
        //     }
        //
        //     // Act
        //     const result = userService.getProducts(user_id)
        //
        //     // Assert
        //     assert.equal(result[0], 'iphone')
        // })

        it("[Second Case] Doit retourner la liste des produits d'un utilisateur", () => {
            // Arrange
            const user_id = 1

            const productService = {
                getProducts(param) {
                    assert.equal(param, user_id)

                    return [
                        'iphone'
                    ]
                }
            }

            const userService = new UserService(productService)

            // Act
            const result = userService.getProducts(user_id)

            // Assert
            assert.equal(result[0], 'iphone')
        })
    })
})