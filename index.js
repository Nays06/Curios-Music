let = isLogined = false

// var indexedDB = window.indexedDB || window.mozIndexDB || window.webkitIndexedDB || window.msIndexedDB;

// if(indexedDB){
//     var bdname = "fds"
//     var bd = indexedDB.open(bdname)
// }


document.querySelectorAll("#maill").forEach(inputElement => {
    inputElement.addEventListener("input", function () {
        if (this.value) {
            let udaliElements = document.querySelectorAll("#udali");
            udaliElements.forEach(udaliElement => {
                udaliElement.classList.add("none");
                // console.log("udalil");
            });
        }

        if (!this.value) {
            let udaliElements = document.querySelectorAll("#udali");
            udaliElements.forEach(udaliElement => {
                udaliElement.classList.remove("none");
                // console.log(454645);
            });
        }
    });
});

  function discover() {
    document.title = "Discover"
    document.querySelector(".home").classList.add("none");
    document.querySelector(".marketplace").classList.add("none");
    document.querySelector(".discover").classList.remove("none");
    animOnScroll();
    for (let i = 0; i < document.querySelectorAll("#maill").length; i++) {
        document.querySelectorAll("#maill")[i].value = ""
    }
    for (let i = 0; i < document.querySelectorAll("#udali").length; i++) {
        document.querySelectorAll("#udali")[i].classList.remove("none")
    }
  }
  function home() {
    document.title = "Home"
    document.querySelector(".discover").classList.add("none");
    document.querySelector(".marketplace").classList.add("none");
    document.querySelector(".home").classList.remove("none");
    animOnScroll();
    for (let i = 0; i < document.querySelectorAll("#maill").length; i++) {
        document.querySelectorAll("#maill")[i].value = ""
    }
  }
  function marketplace() {
    document.title = "Marketplace"
    document.querySelector(".discover").classList.add("none");
    document.querySelector(".home").classList.add("none");
    document.querySelector(".marketplace").classList.remove("none");
    animOnScroll();
    for (let i = 0; i < document.querySelectorAll("#maill").length; i++) {
        document.querySelectorAll("#maill")[i].value = ""
    }
  }
  document.body.addEventListener("keydown", function (e) {
    // console.log(e.key);
    switch (e.key) {
      case "2":
        discover();
        break;
      case "1":
        home();
        break;
      case "3":
        marketplace();
        break;
    }
  });


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
            } 
            // else{
            //     animItem.classList.remove("_active");
            // }
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



bd = [
    {
        id: 1,
        login: "Login",
        password: "Password"
    },
    {
        id: 2,
        login: "Login2",
        password: "Password2"
    },
    {
        id: 3,
        login: "a",
        password: "b"
    }
]

function provLog() {
    let login = document.getElementById("login-login").value;
    let password = document.getElementById("login-password").value;

    for (let element of bd) {
        if ((login == element.login && password == element.password) || (login == localStorage.getItem("userLog") && password == localStorage.getItem("userPas"))) {
            localStorage.setItem("isLogined", true)

            setTimeout(() => {
                window.location = "../../index.html"
                console.log(isLogined);
            }, 1900);
            return true;
        }
    }
    return false;
}


function login(){
    let login = document.getElementById("login-login").value
    let password = document.getElementById("login-password").value

    bd.forEach(element => {
        if(provLog()){

            document.querySelector(".vseok").classList.add("_active")

            setTimeout(() => {
                document.querySelector(".vseok").classList.remove("_active")
            }, 1500);

        } else if(login == "" || password == ""){
            document.querySelector(".gdedatalog").classList.add("_active")

            setTimeout(() => {
                document.querySelector(".gdedatalog").classList.remove("_active")
            }, 1500);

        } else if(!provLog()){
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
            localStorage.setItem("user_name", fName)
            localStorage.setItem("user_surname", lName)
            localStorage.setItem("userLog", email)
            localStorage.setItem("userPas", password)
            
            // window.location.href = '../../index.html';

            const date = new Date();
            function getMonthName(monthNumber) {
                date.setMonth(monthNumber);
                const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
                return month;
            }
            localStorage.setItem("user_join_date", `Joined ${date.getDate()} ${getMonthName(date.getMonth())}, ${date.getFullYear()}`)


            document.querySelector(".vsevseok").classList.add("_active")

            setTimeout(() => {
                document.querySelector(".vsevseok").classList.remove("_active")
                location.reload ()
            }, 1500);

        } else{
            document.querySelector(".gdedatareg").classList.add("_active")

            setTimeout(() => {
                document.querySelector(".gdedatareg").classList.remove("_active")
            }, 1500);
        }
    });
}

// document.getElementsByClassName("reg-icon").addEventListener("click", function(){
//     console.log(99999999999);
//     if(localStorage.getItem("isLogined") == "true"){
//         // window.location = "logined/index.html"
//     } else{
//         // window.location = "reg/log/index.html"
//         // console.log(1111111111);
//     }
// })

let reg_icons = document.querySelectorAll(".reg-icon")

for(reg_icon of reg_icons){
    reg_icon.addEventListener("click", function(){
        if(localStorage.getItem("isLogined") == "true"){
            window.location = "logined/index.html"
        } else{
            window.location = "reg/log/index.html"
        }
    })
}