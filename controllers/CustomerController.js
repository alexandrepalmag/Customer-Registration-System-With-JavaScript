class CustomerController {

    constructor(formId, tableId) {

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        this.getClickShowHide()
        this.onSubmit()
        this.selectAll()

    }

    getClickShowHide() {
        document.getElementById('btn-new').addEventListener('click', () => {
            Utils.onOff()
        })

        document.getElementById('btn-cancel').addEventListener('click', () => {

            this.formEl.reset()

            Utils.onOff()

        })
    }

    /* =========================== onSubmit() ==> treatment of submit event ===========================*/
    onSubmit() {

        this.formEl.addEventListener('submit', (e) => {

            e.preventDefault()

            this.getValues()

        })

    }//close onSubmit method

    /* =========================== getValues() ==> get values of form's fields ===========================*/

    getCustomersStorage() {

        let customers = []

        if (localStorage.getItem("customers")) {
            customers = JSON.parse(localStorage.getItem("customers"))
        }
        return customers
    }

    addItem(data) {

        let customers = this.getCustomersStorage()

        customers.push(data)

        localStorage.setItem("customers", JSON.stringify(customers))

    }

    selectAll() {

        let customers = this.getCustomersStorage()

        customers.forEach(dataCustomer => {

            let customer = new Customer()

            customer.loadJSON(dataCustomer)

            this.addLineTable(customer)

        })

    }

    getValues() {

        let customer = {}
        let fields = [...this.formEl.elements]

        fields.forEach((field, index) => {

            customer[field.name] = field.value

        })

        let objectCustomer = new Customer(
            customer.name,
            customer.birth,
            customer.gender,
            customer.email,
            customer.phone,
            customer.country
        )

        this.addItem(objectCustomer)

        this.addLineTable(objectCustomer)

        Utils.onOff()

    }//close getValues method

    /* =========================== getValues() ==> get values of form's fields ===========================*/

    addLineTable(dataCustomer) {

        let tr = document.createElement("tr")

        tr.innerHTML = `

            <td>empty</td>
            <td>${dataCustomer.name}</td>
            <td>${dataCustomer.birth}</td>
            <td>${dataCustomer.gender}</td>
            <td>${dataCustomer.email}</td>
            <td>${dataCustomer.phone}</td>
            <td>${dataCustomer.country}</td>
            <td>
                <div style="display: inline;">
                    <button class="btn btn-info">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        
        `
        this.tableEl.appendChild(tr)

    }//close addLineTable method

}
