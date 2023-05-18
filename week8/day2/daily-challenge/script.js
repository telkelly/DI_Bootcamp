function getFullName(e) {
    e.preventDefault();
    const frm = document.forms.nameForm;
    let name = frm.elements.name.value;
    let lastname = frm.elements.lastName.value;
    let obj = { name, lastname };
    let newJSON = JSON.stringify(obj);
    let div = document.getElementsByClassName('new').item(0);
    return div.innerHTML = newJSON;
}