const bodyClosebtn = document.querySelectorAll(".shildMonitor,.btnClose,.monitor");
const btnOpenMenu = document.querySelectorAll(".btn,.dotsMenu,.searchbtn,.btnLogoMenu,.bottomdotsMenu,.infoTgr,.weatherLocation");
const btnOpenSubMenu = document.querySelectorAll('.Sub');
const header = document.querySelector('.header');
console.log(document.body);
let subMenu = 0;
function chSCR() {
                
    document.querySelector(".header").style.transform = "translateY(80px)";
    document.querySelector('.topMenu').classList.add("onActive");
    bodyClosebtn[0].classList.add("onActive");
    
}
function restarHeader() {
    setTimeout(() => {
        chSCR();
        checkScroll();
        
    }, 700);
 }
 window.addEventListener('scroll', function(e) {
    
    console.log(e);
    
});
window.addEventListener('resize', function() {
    if(window.innerWidth < 1296){
        document.querySelector('.M').children[4].style.display = "none";
        document.querySelector('.bottomMenu_list').children[6].style.display="none";
        
    }else{
        document.querySelector('.M').children[4].style.display = "block";
        document.querySelector('.bottomMenu_list').children[6].style.display="block";
    }
    if(window.innerWidth < 940){
        document.querySelector('.M').children[3].style.display = "none";
        document.querySelector('.bottomMenu_list').children[5].style.display="none";
    }else{
        document.querySelector('.M').children[3].style.display = "block";
        document.querySelector('.bottomMenu_list').children[5].style.display="block";
    }
    if(window.innerWidth < 860){
        document.querySelector('.M').children[2].style.display = "none";
        document.querySelector('.bottomMenu_list').children[4].style.display="none";
    }else{
        document.querySelector('.M').children[2].style.display = "block";
        document.querySelector('.bottomMenu_list').children[4].style.display="block";
    }
    if(window.innerWidth < 790){
        document.querySelector('.M').children[1].style.display = "none";
        document.querySelector('.bottomMenu_list').children[3].style.display="none";
    }else{
        document.querySelector('.M').children[1].style.display = "block";
        document.querySelector('.bottomMenu_list').children[3].style.display="block";
    }
    console.log(window.innerWidth);
    
});



for (let i = 0; i < bodyClosebtn.length; i++) {
    const btnClose = bodyClosebtn[i];
    btnClose.addEventListener("click",()=>{
        const onActive = document.querySelectorAll(".onActive");
      
        if(onActive.length > 0){
            onActive.forEach(element => {
                element.classList.remove("onActive"); /* закриваю усі вікна які відкниті */
            });
        }/*else{
            в функції return
        } */
           
            
            document.querySelector(".header").style.transform = "translateY(0px)";  
            checkScroll();
            window.removeEventListener("scroll",restarHeader) 
    })
}

for (let k = 0; k < btnOpenMenu.length; k++) {
    const menuOpenbtn = btnOpenMenu[k];
menuOpenbtn.addEventListener("click",(e)=>{
    bodyClosebtn[0].style.backgroundColor = "";
    if(k === 0 || k === 1){
        document.querySelector('.mobileMenu').classList.add("onActive");
        document.querySelector('.socialLink-mobile').classList.add('onActive');
      if(document.querySelector('.mobileMenu').classList.contains("onActive")){
        
            document.querySelector('.mobileSideMenu_List').children[2].onclick = () =>{
                btnOpenSubMenu[0].classList.toggle("onActive");
                btnOpenSubMenu[1].classList.remove("onActive");
                btnOpenSubMenu[2].classList.remove("onActive");
            }
            document.querySelector('.mobileSideMenu_List').children[4].onclick = () =>{
                btnOpenSubMenu[1].classList.toggle("onActive");
                btnOpenSubMenu[0].classList.remove("onActive");
                btnOpenSubMenu[2].classList.remove("onActive");
            }
            document.querySelector('.mobileSideMenu_List').children[5].onclick = () =>{
                btnOpenSubMenu[2].classList.toggle("onActive");
                btnOpenSubMenu[0].classList.remove("onActive");
                btnOpenSubMenu[1].classList.remove("onActive");
            }
      }
        bodyClosebtn[0].classList.add("onActive");
        checkScroll();
    }
    if(k === 3){
        document.querySelector('.SearchonSite').classList.add("onActive");
        document.querySelector('.monitor').classList.add("onActive");
       
        bodyClosebtn[0].style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        bodyClosebtn[0].classList.add("onActive");
        checkScroll();
    }
    if(k === 5){
        if(window.scrollY > 0){
            document.querySelector(".header").style.transform = "translateY(0px)";
            e.preventDefault();
            document.querySelector('.topMenu').scrollIntoView({
            behavior: 'smooth',
        });
            window.addEventListener("scroll",restarHeader)
    }
        if(window.scrollY === 0)  chSCR();
        checkScroll(); 
    }
    if (k === 6){
        document.querySelector('.mobileMenu').classList.add("onActive");
        document.querySelector('.socialLink-mobile').classList.add('onActive');
      if(document.querySelector('.mobileMenu').classList.contains("onActive")){
        bodyClosebtn[0].classList.add("onActive");
        btnOpenSubMenu[0].classList.add("onActive");
                btnOpenSubMenu[1].classList.remove("onActive");
                btnOpenSubMenu[2].classList.remove("onActive");
        
            document.querySelector('.mobileSideMenu_List').children[2].addEventListener("mouseover",() =>{
                btnOpenSubMenu[0].classList.add("onActive");
                btnOpenSubMenu[1].classList.remove("onActive");
                btnOpenSubMenu[2].classList.remove("onActive");
            })
            document.querySelector('.mobileSideMenu_List').children[4].addEventListener("mouseover",() =>{
                btnOpenSubMenu[0].classList.remove("onActive");
                btnOpenSubMenu[2].classList.remove("onActive");
            })
            document.querySelector('.mobileSideMenu_List').children[5].addEventListener("mouseover",() =>{
                btnOpenSubMenu[2].classList.add("onActive");
                btnOpenSubMenu[0].classList.remove("onActive");
                btnOpenSubMenu[1].classList.remove("onActive");
            })
            checkScroll();
      }
    
    }
    if(k === 2){
        document.querySelector('.infoText').classList.add("onActive");
        bodyClosebtn[0].style.backgroundColor = "transparent";
        bodyClosebtn[0].classList.add("onActive");
        checkScroll();
    }
    if(k === 4){
        document.querySelector('.weatherCity').classList.add("onActive");
        bodyClosebtn[0].style.backgroundColor = "transparent";
        bodyClosebtn[0].classList.add("onActive");
        checkScroll();
    }

})
}

function checkScroll() {
    
if(bodyClosebtn[0].classList.contains("onActive")){
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
} else{
    document.body.style.overflow = "scroll";
    document.body.style.paddingRight = "0px";

}
}
