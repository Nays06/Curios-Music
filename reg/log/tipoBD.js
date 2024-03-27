let user1 = {
    login: "Login",
    password: "Password"
}

let user2 = {
    login: "Login2",
    password: "Password2"
}

let user3 = {
    login: "a",
    password: "b"
}


bd = [
    user1,
    user2,
    user3
]

function login(){
    let login = document.getElementById("login-login").value
    let password = document.getElementById("login-password").value
    let go = true

    bd.forEach(element => {
        if(login == element.login && password == element.password){
            
            window.location.href = '../../index.html';

        } else if(login == "" || password == ""){
            document.querySelector(".gdedatalog").classList.add("_active")
            go = false

            setTimeout(() => {
                document.querySelector(".gdedatalog").classList.remove("_active")
            }, 1500);

        } else if(go){
            document.querySelector(".dataerrlog").classList.add("_active")

            setTimeout(() => {
                document.querySelector(".dataerrlog").classList.remove("_active")
            }, 1500);
        }
    });
}

function register(){
    let fName = document.getElementById("reg-FName").value
    let lName = document.getElementById("reg-LName").value
    let email = document.getElementById("reg-Email").value
    let tel = document.getElementById("reg-tel").value
    let dName = document.getElementById("reg-DName").value
    let password = document.getElementById("reg-password").value

    bd.forEach(element => {
        if(fName != "" && lName != "" && email != "" && tel != "" && dName != "" && password != ""){
            
            window.location.href = '../../index.html';

        } else{
            document.querySelector(".gdedatareg").classList.add("_active")

            setTimeout(() => {
                document.querySelector(".gdedatareg").classList.remove("_active")
            }, 1500);
        }
    });
}



const animItems = document.querySelectorAll("._anim-items");

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset -  animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add("_active");
            } else{
                animItem.classList.remove("_active");
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}