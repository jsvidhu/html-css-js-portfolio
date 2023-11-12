function toggleMenu(){
    /*use in-built sys in javasc to targrt an element on the webpage and use it */
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    /*open class from styling*/ 
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}