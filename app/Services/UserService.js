// const ProductService = require('./ProductService')

class UserService {
    constructor(productService) {
        this._productService = productService // = new ProductService()
    }

    /**
     * Doit retourner un tableau de produits
     * @param user_id
     * @returns {*}
     */
    getProducts(user_id) {
        return this._productService.getProducts(user_id)
    }
}

module.exports = UserService