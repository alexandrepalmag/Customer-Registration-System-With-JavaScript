class Customer {

    constructor(name, birth, gender, email, phone, country) {

        this._name = name
        this._birth = birth
        this._gender = gender
        this._email = email
        this._phone = phone
        this._country = country
        this._register = new Date()

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
 
}