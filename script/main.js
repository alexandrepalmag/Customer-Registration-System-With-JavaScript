let customer = {}

document.getElementById('form-customer').addEventListener('submit', (e) => {

    e.preventDefault()

    let fields = document.querySelectorAll('#form-customer [name]')

    fields.forEach((field, index) => {

        customer[field.name] = field.value

    })

    let objectCustomer = new Customer (
        customer.name,
        customer.birth,
        customer.gender,
        customer.email,
        customer.phone,
        customer.country
    )

    addLineTable(objectCustomer)

})

function addLineTable(dataCustomer) {

    console.log(dataCustomer)

    let tr = document.createElement("tr")

    tr.innerHTML = `
    
        <td>Register Date</td>
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
   document.getElementById('customer-tbody').appendChild(tr)
}

