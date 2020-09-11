class CrudCustomer {

    constructor(dataCustomer) {

        this.dataCustomer = dataCustomer
        this.addItem()
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

        customers.forEach(dataCustomer => {

            let customer = new Customer()

            addLineTable()
            console.log(customer)
            
        });

    }



}