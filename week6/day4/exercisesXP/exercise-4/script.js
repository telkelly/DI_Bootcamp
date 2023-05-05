const userdNameA = document.getElementById("usersName");

(function (name) {
    let newUl = document.createElement('ul');
    
    userdNameA.innerText = name;
})('Mark')