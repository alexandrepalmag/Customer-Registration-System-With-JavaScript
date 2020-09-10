function onlynumber(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //let regex = /^[0-9.,]+$/;
    let regex = /^[0-9-]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
} 

document.getElementById('btn-new').addEventListener('click', () => {
    onOff ()
})

document.getElementById('btn-cancel').addEventListener('click', () => {
    onOff ()
})
function onOff () {
    document.getElementById('content-form').toggleAttribute('hidden')
    document.getElementById('content-table').toggleAttribute('hidden')
    document.getElementById('btn-new').toggleAttribute('hidden')
}