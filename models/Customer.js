class Customer {

    constructor(name, birth, gender, email, phone, country) {

        this.name = name
        this.birth = birth
        this.gender = gender
        this.email = email
        this.phone = phone
        this.country = country
        this._register = new Date()

    }

    get register() {
        return this._register
    }

    /* loadFromJSON(json) {

        for (let name in json) {
            switch (name) {
                case '_register':
                    this[name] = new Date(json[name])
                    break
                default: this[name] = json[name]
            }

        }

    }
 */
}