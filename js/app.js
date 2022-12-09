const UILabels = {
    nav_bar: "#nav-bar",
    hamburger: "#nav-bar ul .hamburger-wrapper"
}

const UIEventClasses = {
    nav_bar_expanded: "expanded"
}

const hamburger = document.querySelector(UILabels.hamburger);
const nav_bar = document.querySelector(UILabels.nav_bar);

hamburger.addEventListener('click', (event) => {
    event.preventDefault();
    if(nav_bar.classList.contains(UIEventClasses.nav_bar_expanded)){
        nav_bar.classList.remove(UIEventClasses.nav_bar_expanded);
    }else{
        nav_bar.classList.add(UIEventClasses.nav_bar_expanded);
    }
});

