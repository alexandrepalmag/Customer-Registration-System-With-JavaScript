class CustomerController {

    constructor(formId, tableId) {

        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        this.onSubmit()

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

        this.createCrud(objectCustomer)

        this.addLineTable(objectCustomer)

    }//close getValues method

    /* =========================== getValues() ==> get values of form's fields ===========================*/
    addLineTable(dataCustomer) {
    
        let tr = document.createElement("tr")
    
        tr.innerHTML = `
        
            <td>${Utils.dateFormat(dataCustomer.register)}</td>
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

    createCrud(allDatasCostumer) {
        let crud = new CrudCustomer(allDatasCostumer)
    }

}