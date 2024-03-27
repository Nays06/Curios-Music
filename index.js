


document.querySelectorAll("#maill").forEach(inputElement => {
    inputElement.addEventListener("input", function () {
        if (this.value) {
            let udaliElements = document.querySelectorAll("#udali");
            udaliElements.forEach(udaliElement => {
                udaliElement.classList.add("none");
                console.log("udalil");
            });
        }

        if (!this.value) {
            let udaliElements = document.querySelectorAll("#udali");
            udaliElements.forEach(udaliElement => {
                udaliElement.classList.remove("none");
                console.log(454645);
            });
        }
    });
});

  function discover() {
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
    document.querySelector(".discover").classList.add("none");
    document.querySelector(".marketplace").classList.add("none");
    document.querySelector(".home").classList.remove("none");
    animOnScroll();
    for (let i = 0; i < document.querySelectorAll("#maill").length; i++) {
        document.querySelectorAll("#maill")[i].value = ""
    }
  }
  function marketplace() {
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