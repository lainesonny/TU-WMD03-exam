class FormService {
    constructor(validator) {
        this._validator = validator
    }

    /**
     * Retourner vrai si toutes les données sont corrects
     *
     * @param name Un chaîne de caractère non vide, non undefined, sans espace
     * @param email
     * @param phoneNumber
     */
    createUser(name, email, phoneNumber) {
        if(name === undefined || name.trim() === '') {
            return false
        }

        if(!this._validator.mail(email)) {
            return false
        }

        if(!this._validator.phone(phoneNumber)) {
            return false
        }

        return true
    }
}

module.exports = FormService