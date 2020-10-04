class Customer {

    constructor(name, birth, gender, email, phone, country) {

        this._id
        this._name = name
        this._birth = birth
        this._gender = gender
        this._email = email
        this._phone = phone
        this._country = country
        this._register = new Date()

    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get birth() {
        return this._birth
    }

    get gender() {
        return this._gender
    }

    get email() {
        return this._email
    }

    get phone() {
        return this._phone
    }

    get country() {
        return this._country
    }

    get register() {
        return this._register
    }

    loadJSON(json) {

        for (let name in json) {
            switch (name) {
                case '_register':
                    this[name] = new Date(json[name])
                    break
                default: this[name] = json[name]
            }

        }

    }

    static getCustomersStorage() {

        let customers = []

        if (localStorage.getItem("customers")) {
            customers = JSON.parse(localStorage.getItem("customers"))
        }
        return customers
    }

//Creation new id
    getNewId() {

        let ids = Customer.getCustomersStorage()

        let idsarr = []

                for (let i in ids) {
    
                    idsarr.push(ids[i]._id)
                    
                }

        if (idsarr.length < 1) {

            window.id=1

        } else {

            let max = idsarr.reduce(function(a, b) {
                return Math.max(a, b);
              });

            window.id = max+1

        }

        return window.id

    }

    save() {
        let customers = Customer.getCustomersStorage()

        if (this.id > 0) {

            customers.map(c => {

                if (c._id == this.id)

                    Object.assign(c, this)

                return c

            })

        } else {

            this._id = this.getNewId()

            customers.push(this)

            console.log('else', this._id)

        }

        localStorage.setItem("customers", JSON.stringify(customers))

    }

    onRemove() {

        let customers = Customer.getCustomersStorage()

        console.log()

    }

}