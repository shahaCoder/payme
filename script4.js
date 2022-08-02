import {cards} from './db.js'

let block_cards = document.querySelector('.block_cards')
let btn = document.querySelector('.btn')
let form = document.forms.add
let modalBg = document.querySelector('.modalBg')
let modal = document.querySelector('.modal')
const close = document.querySelector('.close')

function reload(arr) {
    block_cards.innerHTML = ""

    for(let item of arr) {
        block_cards.innerHTML += `
         <div class="card">
         <p class="visa">${item.company}</p>
         <div class="totl">
         <p> ${item.total}</p>
         <p>${item.currency}</p>
         </div>
         </div>
        `

    }
    btn.onclick = () => {
        openModal()
    }
}


form.onsubmit = (event) => {
    event.preventDefault()

    cards.push(submit(form))

    closeModal()
    
    reload(cards)

//    console.log(submit(form));
    
}

reload(cards)    
 
function submit(param) {

    let card = {
       id: Math.random(),
       tranzactions: []
    }
    let fm = new FormData(param)

    fm.forEach((value, key) => {
        card[key] = value
    })

    return card
}

function openModal() {
    modalBg.style.display = 'block'
    modal.style.display = 'block'

    setTimeout(() => {
        modalBg.style.opacity = '1'
        modal.style.opacity = '1'
        modal.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 400);
}
function closeModal() {
    modalBg.style.opacity = '0'
    modal.style.opacity = '0'
    modal.style.transform = 'translate(-50%, -50%) scale(.2)'
    
    setTimeout(() => {
        modalBg.style.display = 'none'
        modal.style.display = 'none'
    }, 400);
}

close.onclick = () => {
    closeModal()
}


const mainPage = document.querySelector('.main-page')

mainPage.onclick = () => {
    window.location.href = '../htmlpage2/index2.html'
    // alert('clicked')
}


// ТРАНЗАКЦИИ
const modal__bg = document.querySelector('.modal__bg')
const modal_2 = document.querySelector('.modal__trz')
let cls = document.querySelector('.cls')
let frm = document.forms.adding
let btnn = document.querySelector('.add_trnz')
let opt = document.querySelector('.selected')
let place = document.querySelector('.tp2')

btnn.onclick = () => {
    openModal2()
    
}

frm.onsubmit = (e) => {
    e.preventDefault()
    
    sbmt()
}

let s = []
function sbmt() {
    let trnaz ={
        id2: Math.random()
    }
    
    let fm = new FormData(frm)
    
    fm.forEach((value, key) => {
        trnaz[key] = value
    })
    closeModal2()
    s.push(trnaz)
    reload2(s)
}

// opt.onchange = () => {
    
//     if(opt.value === 'Humo'){
//         alert('himo')
//     } else{
//         alert('not Humo')
//     }
// }

function reload2(array) {
    place.innerHTML = ''
    for(let item of array){
        place.innerHTML += `
        <div class="cont-top tp2">
                        <div class="cont-left2">
                           <p>${item.id2}</p>
                           <p>${item.wallet}</p>
                        </div>
                        <div class="cont-right2">
                           <p>${item.category}</p>
                           <p>${item.cash}</p>
                           <p>вчера</p>
                        </div>
                     </div>
        `
    }
}

cls.onclick = () => {
    closeModal2()   
}

function openModal2() {
    modal_2.style.display = 'block'
    modal__bg.style.display = 'block'

    setTimeout(() => {
        modal_2.style.opacity = '1'
        modal_2.style.transform = 'translate(-50%, -50%) scale(1)'
        modal__bg.style.opacity = '1'
    }, 400);
}
function closeModal2() {
    modal_2.style.opacity = '0'
    modal_2.style.transform = 'translate(-50%, -50%) scale(0)'
    modal__bg.style.opacity = '0'
    
    setTimeout(() => {
        modal_2.style.display = 'none'
        modal__bg.style.display = 'none'
    }, 400);
}
