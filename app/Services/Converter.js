class Converter {
    /**
     * Permet de convertir une chaine de caractère de type numéro de téléphone
     * dans le format : "00 00 00 00 00"
     *
     * - 00.00.00.00.00
     * - 0000000000
     *
     * @param value
     */
    phone(value) {
        if(value.length == 14) {
            const list = [ / /g, /[\.]/g, /[\/]/g ]

            list.forEach(item => {
                value = value.replace(item, ' ')
            })

            return value
        } else {
            let numbers = []

            for(let i = 0; i < value.length; i+=2) {
                numbers.push(value.substr(i, 2))
            }

            return numbers.join(' ')
        }
    }

    /**
     * Permet de préfixer de +33 et supprimer les espaces
     * 
     * @param value
     * @returns {string}
     */
    addPrefix(value) {
        return this.phone(value)
            .replace(/ /g, '')
            .replace(/0/, '+33')
    }
}

module.exports = Converter