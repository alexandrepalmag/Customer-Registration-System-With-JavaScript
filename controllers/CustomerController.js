class CustomerController {

    constructor(formId, tableId) {

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        this.getClickShowHide()
        this.onSubmit()
        this.addLineTable()

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

        let crud = new CrudCustomer(objectCustomer)

        crud.addItem()

        Utils.onOff()

        this.formEl.reset()

    }//close getValues method

    /* =========================== getValues() ==> get values of form's fields ===========================*/

    addLineTable() {
        let datas = new CrudCustomer
        let dataCustomer = datas.getCustomers()

        console.log(dataCustomer)

        dataCustomer.forEach(element => {

            let tr = document.createElement("tr")

            tr.innerHTML = `
        
            <td>/* ${new Date(dataCustomer.register)} */</td>
            <td>${element.name}</td>
            <td>${element.birth}</td>
            <td>${element.gender}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td>${element.country}</td>
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

        })

    }//close addLineTable method

}
/* https://medium.com/@lameckanao/armazenando-e-manipulando-dados-no-localstorage-7bcc901ba12b */
/* https://embed.plnkr.co/plunk/R0utj9 */