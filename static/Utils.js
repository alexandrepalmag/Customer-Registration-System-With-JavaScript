class Utils {

    static dateFormat(date) {
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} -${date.getHours()}:${date.getMinutes()}`
    }

    static onOff() {
        document.getElementById('content-form').toggleAttribute('hidden')
        document.getElementById('content-table').toggleAttribute('hidden')
        document.getElementById('btn-new').toggleAttribute('hidden')
    }

    static onlynumber(evt) {

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

}
