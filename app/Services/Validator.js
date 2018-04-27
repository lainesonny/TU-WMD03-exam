class Validator {
    /**
     * Permet la validation d'une adresse email
     *
     * @param email
     * @returns {boolean}
     */
    mail(email) {
        return this._valid(email, /[a-z.]+@[a-z]+\.[a-z]{2,}/)
    }

    /**
     * Permet la validation d'un numéro de téléphone au format :
     * "00 00 00 00 00"
     * @param number
     * @returns {boolean}
     */
    phone(number) {
        return this._valid(number, /^(0|\+33)[1-9]( [0-9]{2}){4}$/)
    }

    /**
     * Permet la validation d'une valeur par rapport une regex
     *
     * @param value
     * @param regex
     * @returns {*}
     * @private
     */
    _valid(value, regex) {
        return regex.test(value)
    }
}

module.exports = Validator