/**
 * Toggle Navbar
 */
const navBtns = document.querySelectorAll(".dropdown-button")
const dropMenu = document.querySelector(".dropdown-collapse")
const toggleButton = document.querySelector("#t-button")
function toggleMenu() {
    navBtns.forEach(navBtn => {
        navBtn.addEventListener("click", function () {
            dropMenu.classList.toggle("open")
            toggleButton.classList.toggle("open")
        })
    })

}
toggleMenu();
/**
 * Navbar Active selector and deselector
 */

const navlink = document.querySelectorAll("#nav-link");

function unsetActive(value) {
    for (let i = 0; i < value.length; i++) {
        const valueArray = value[i].classList;
        for (let a = 0; a < valueArray.length; a++) {
            if (valueArray[a] == "active") {
                valueArray.remove("active");
            }
        }
    }
}

function activate() {
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].addEventListener("click", function () {
            const navArray = navlink[i].classList;
            unsetActive(navlink);
            for (let a = 0; a < navArray.length; a++) {
                if (navArray[a] != "active") {
                    navArray.add("active");
                }
            }
        });
    }
}
activate()

/**
 * CSS Scroll Variable
 */
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)
function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
}
setScrollVar()

/**
 * Intersection Observer
 */
const navbar = document.querySelector("#navbar")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky")
        }
    })
})

const sectors = document.querySelectorAll("#sector")
sectors.forEach(sector => {
    observer.observe(sector)
})


/**
 * Scroll reveal Observer For About section
 */
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutImgs.forEach(aboutImg => {
                aboutImg.classList.add("show")
            })
            aboutDetails.forEach(aboutDetail => {
                aboutDetail.classList.add("reveal")
            })   
            observer.unobserve(entry.target);
        }
    })
})
const aboutImgs = document.querySelectorAll(".about-image")
aboutImgs.forEach(aboutImg => {
    observer2.observe(aboutImg)
})

const aboutDetails = document.querySelectorAll(".about-details")
aboutDetails.forEach(aboutDetail => {
    observer2.observe(aboutDetail)
})
/**
 * Scroll reveal Observer for Experience Section
 */
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            expDetails.forEach(expDetail => {
                expDetail.classList.add("reveal")
            })
            observer.unobserve(entry.target);
        }
    })
})
const expDetails = document.querySelectorAll(".exp-details")
expDetails.forEach(expDetail => {
    observer3.observe(expDetail)
})

/**
 * Writing Animation Effect
 */
const textBg = document.querySelector("#text-change-section")

const textLoad = () => {
    setTimeout(() => {
        textBg.textContent = "Hello, I'm Fortune Nwohiri"
    }, 0)
    setTimeout(() => {
        textBg.textContent = "I'm a Frontend"
    }, 4000)
    setTimeout(() => {
        textBg.textContent = "& Backend"
    }, 8000)
    setTimeout(() => {
        textBg.textContent = "Web Developer"
    }, 12000)
}

textLoad()
setInterval(textLoad, 16000)