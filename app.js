
const AllLinks = document.querySelectorAll('.All-Links')


function removeActive() {
    AllLinks.forEach(element => {
        element.classList.remove('active')
    });
}



AllLinks.forEach(element => {

    element.addEventListener('click', (e) => {
        removeActive()
        element.classList.add('active')

    })

});

// footer

const alldiv = document.querySelectorAll('.container-Footer>div')
console.log(alldiv)

let i = 1
for (i; i < alldiv.length; i++) {
    const loopsDiv = alldiv[i].classList.add('after');
    console.log(loopsDiv)
}

// NavBar
// const video = document.getElementById('video')
const ApothicaireBtn = document.querySelector('body > div > nav > b')
const NavBar = document.querySelector('.container-NavBar')
const Btnmenu = document.querySelector('body > div > nav > div.contianer-Icons > i')
const closeMenu = document.querySelector('body > div > nav > div.container-Listes > ul > li.close-absolue')
const menu = document.querySelector('.container-Listes')
const ul = document.querySelector('.ul')
function vissibleMenu() {
    setTimeout(() => {

        menu.style.display = `block`
    }, 100);
    setTimeout(() => {
        ul.style.transition = `all 1s`
        ul.style.right = `0px`
    }, 200);
}


function invissibleMenu() {
    ul.style.right = `-370px`
    setTimeout(() => {
        menu.style.display = `none`;
    }, 300);
}




Btnmenu.addEventListener('click', vissibleMenu)
closeMenu.addEventListener('click', invissibleMenu)


window.addEventListener('scroll', (eo) => {
    // console.log(window.scrollY)

    // else{
    //     video.pause()
    // }
    if (window.scrollY >= 50) {
        NavBar.classList.add('hidden')
    } else {
        NavBar.classList.remove('hidden')
    }
    if (window.scrollY >= 140) {
        console.log(true)


        NavBar.classList.remove('hidden')
        NavBar.classList.add('Fixed')


    } else {
        NavBar.classList.remove('Fixed')

    }
})

function top0() {
    window.scrollTo({
        behovior: "smooth",
        top: 0,
    })
}

ApothicaireBtn.addEventListener('click', top0)



// stor
// stor
// stor
// stor



// const article33 = document.getElementById('article33')
// const tbody = document.getElementsByClassName('.tbody2')[0]
// const BTNaddToCart = document.querySelector('.btns-Add')

// BTNaddToCart.addEventListener('click',(eo)=>{
//   const parent= BTNaddToCart.parentElement.parentElement.parentElement
//   console.log(parent)
//   const image=parent.querySelector('.parent-images').querySelector('.imagePrinc').src
//   console.log(image)
  

//   const tr = ` <tr class="container-Articles-cart">
// <td><a href=""><i class="fa-solid fa-trash-can"></i></a></td>
// <td class="cotnainer-image-cart"><img ${image}></td>
// <td>Tshirt-blue noir carre</td>
// <td>$114.80</td>
// <td class="container-input"><input type="Number" value="1" min="1"></td>
// <td>$114.80</td>
// </tr>`

// article33.style.display=`block`
// article22.style.display=`none`
// setTimeout(() => {
// //   tbody.innerText+=tr  
// console.log(tbody)
// }, 1000);


// })

























