class MailService {
    /**
     * Permet la validation d'une adresse email
     *
     * @param email
     * @returns {boolean}
     */
    validateEmail(email) {
        // constante regex pour accepter uniquement les adresse mail
        const regex = /[a-z.]+@[a-z]+\.[a-z]{2,}/
        // retourne true si valeur tester est un email
        return regex.test(email)
    }

}

// exporte la classe MailService
module.exports = MailService