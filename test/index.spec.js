const assert = require('assert');

describe('IndexController', () => {
    describe('#indexAction', () => {
        before(() => console.log("Before"))

        after(() => console.log("After"))

        beforeEach(() => console.log("BeforeEach"))

        afterEach(() => console.log('AfterEach'))

        it('Vérifier que la variable a == 1', () => { })

        it('Vérifier que la variable b == 2', () => { })
    })
})