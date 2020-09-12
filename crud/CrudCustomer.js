class CrudCustomer {

    constructor(dataCustomer) {

        this.dataCustomer = dataCustomer
        this.getCustomers()

    }

    getCustomersStorage() {

        let customers = []

        if (localStorage.getItem("customers")) {
            customers = JSON.parse(localStorage.getItem("customers"))
        }
        return customers
    }

    addItem() {

        let customers = this.getCustomersStorage()

        customers.push(this.dataCustomer)

        localStorage.setItem("customers", JSON.stringify(customers))

    }

    getCustomers() {

        let customers = this.getCustomersStorage()

        return customers

    }

}