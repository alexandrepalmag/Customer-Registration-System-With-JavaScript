class CustomerController {

    constructor(formId) {

        this.formEl = document.getElementById(formId)

    }

    /* =========================== getValues() ==> get values of form's fields ===========================*/
    getValues() {

        let customer = {}

        this.formEl.elements.forEach((element, index) => {

            customer[element.name] = element.value

        })

        let objectCustomer = new Customer(
            customer.name,
            customer.birth,
            customer.gender,
            customer.email,
            customer.phone,
            customer.country
        )

            return objectCustomer

    }

}