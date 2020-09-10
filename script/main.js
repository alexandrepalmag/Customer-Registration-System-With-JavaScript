let costumer = {}

document.getElementById('form-costumer').addEventListener('submit', (e) => {

    e.preventDefault()

    let fields = document.querySelectorAll('#form-costumer [name]')

    fields.forEach((field, index) => {

        costumer[field.name] = field.value

    })

    addLineTable(costumer)
    console.log(costumer)

})

function addLineTable(dataCostumer) {

    console.log(dataCostumer)

    let tr = document.createElement("tr")

    tr.innerHTML = `
    
        <td>Register Date</td>
        <td>${dataCostumer.name}</td>
        <td>${dataCostumer.birth}</td>
        <td>${dataCostumer.gender}</td>
        <td>${dataCostumer.email}</td>
        <td>${dataCostumer.phone}</td>
        <td>${dataCostumer.country}</td>
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
   document.getElementById('costumer-tbody').appendChild(tr)
}

