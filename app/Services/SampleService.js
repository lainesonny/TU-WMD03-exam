class SampleService {
    /**
     * Doit retouner l'addition des variables a et b
     * @param a
     * @param b
     */
    add(a, b) {
        return a + b
    }

    /**
     * Doit retourner vrai si l'age passé en paramètre
     * est strictement suppérieur à 18 ans
     * @param age
     * @returns {boolean}
     */
    isMajor(age) {
        if(age > 17) {
            return true
        }

        return false
    }
    // isMajor(age) {
    //     return age > 17
    // }

    /**
     * Doit retourner la concaténation du nom et prénom avec un espace au milieu
     * Doit contrôler que les données sont non vide
     * Doit retourner NULL s'il y a une erreur dans la saisie des paramètres
     *
     * @param firstname
     * @param lastname
     * @returns {string}
     */
    displayName(firstname, lastname) {
        if(firstname === '' || lastname === '') {
            return null
        }

        return `${firstname} ${lastname}`
    }

    /**
     * Doit pouvoir chercher une tâche pas son ID
     * Doit retourner le nom de la tâche
     * Doit contrôler que le paramètre est de type integer
     *
     * Si le paramètres est non integer on retourne null
     *
     * @param id
     * @returns {string}
     */
    getTask(id) {
        return this._getTasks(id)
    }

    _getTasks(id) {
        const tasks = [
            'Task 1',
            'Task 2',
            'Task 3'
        ]

        return tasks[id]
    }
}

module.exports = SampleService