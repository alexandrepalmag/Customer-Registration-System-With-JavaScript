class CustomerController {

    constructor(formId, tableId) {

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        this.getClickShowHide()
        this.onSubmit()
        this.addEventsTr()
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

            /*  console.log(values)
 
             values.save() */

        })

    }//close onSubmit method

    /* =========================== getCustomersStorage() ==> get localStorage items; ================*/

    getCustomersStorage() {

        let customers = []

        if (localStorage.getItem("customers")) {
            customers = JSON.parse(localStorage.getItem("customers"))
        }
        return customers
    }

    /* addItem(data) {

        let customers = this.getCustomersStorage()

        customers.push(data)

        localStorage.setItem("customers", JSON.stringify(customers))

    } */


    selectAll() {

        let customers = this.getCustomersStorage()

        customers.forEach(dataCustomer => {

            let customer = new Customer()

            customer.loadJSON(dataCustomer)

            this.addLineTable(customer)

        })

    }

    /* =========================== getValues() ==> get values of form's fields ===========================*/

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

        /* this.addItem(objectCustomer)
 */

        Utils.onOff()

        objectCustomer.save()

        this.addLineTable(objectCustomer)

        this.formEl.reset()

    }//close getValues method

    /* =========================== getValues() ==> get values of form's fields ===========================*/

    addLineTable(dataCustomer) {

        let tr = document.createElement("tr")
        tr.classList.add('classtr')

        tr.innerHTML = `

            <td>${dataCustomer.id}</td>
            <td>${dataCustomer.name}</td>
            <td>${dataCustomer.birth}</td>
            <td>${dataCustomer.gender}</td>
            <td>${dataCustomer.email}</td>
            <td>${dataCustomer.phone}</td>
            <td>${dataCustomer.country}</td>
            <td>
                <div class="getid" id="${dataCustomer.id}">
                    <button type="button" class="btn btn-danger" id="btn-delete">
                        Delete
                    </button>
                </div>
            </td>
        
        `

        this.tableEl.appendChild(tr)

        return tr

    }//close addLineTable method

    addEventsTr() {

        document.querySelector("#customer-tbody").onclick = (event) => {

            let idValue = event.target.closest('.getid').id
            
            let father = document.getElementById(`${idValue}`).parentElement.parentElement.remove()

           let customer = new Customer()
           
        }

    }


}
