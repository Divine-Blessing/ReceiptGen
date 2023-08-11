// MENU BAR
const menuBar = document.querySelector(".menu");
const sideBar = document.querySelector(".links");
menuBar.addEventListener('click', () => {
    const visibility = links.getAttribute('data-visible')
    if (visibility === "false"){
        sideBar.setAttribute("data-visible", true)
        menuBar.setAttribute("aria-expanded", true)
        console.log('It is true o')
    }else if (visibility === "true"){
        sideBar.setAttribute("data-visible", false)
        menuBar.setAttribute("aria-expanded", false)

    }
})




// const menuBar = document.querySelector('.menu');
// const sideBar = document.querySelector('.links');
// menuBar.addEventListener('click', () => {
//     const visibility = links.getAttribute('data-visible')
//     if (visibility === "false"){
//         sideBar.setAttribute('data-visible', true)
//         menuBar.setAttribute('aria-expanded', true)
//         console.log('It is true o')
//     }else if (visibility === "true"){
//         sideBar.setAttribute('data-visible', false)
//         menuBar.setAttribute('aria-expanded', false)
//         console.log('It is false o')
//     }
// })