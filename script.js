const btn = document.getElementsByClassName('btn')
const heart = document.getElementsByClassName('heart')
const score = document.querySelector('.sum-item')
const total = document.querySelector('.total')
const numBurger = document.querySelector('.burger')
const price1 = document.querySelector('.price1')
const moins = document.getElementsByClassName('moins')
const numBurger2 = document.querySelector('.burger-v2')
const price2 = document.querySelector('.price2')
const numBurger3 = document.querySelector('.burger-v3')
const price3 = document.querySelector('.price3')
const numBurger4 = document.querySelector('.burger-v4')
const price4 = document.querySelector('.price4')
const numBoisson = document.querySelector('.boisson')
const price5 = document.querySelector('.price5')
const numBoisson2 = document.querySelector('.boisson-2')
const price6 = document.querySelector('.price6')
const numDessert = document.querySelector('.dessert')
const price7 = document.querySelector('.price7')
const numDessert2 = document.querySelector('.dessert-v2')
const price8 = document.querySelector('.price8')


let num = 0
let burger = 0
let burger2 = 0
let burger3 = 0
let burger4 = 0
let boisson = 0
let boisson2 = 0
let dessert = 0
let dessert2 = 0
let priBur = 0
let priBur2 = 0
let priBur3 = 0
let priBur4 = 0
let priBois = 0
let priBois2 = 0
let priDess = 0
let priDess2 = 0

const bur = (num) => {
    switch (num) {
        case 0:
            numBurger.innerHTML = burger
            priBur = burger * 200
            price1.innerHTML = priBur
            break
        case 1:
            numBurger2.innerHTML = burger2
            priBur2 = burger2 * 350
            price2.innerHTML = priBur2
            break
        case 2:
            numBurger3.innerHTML = burger3
            priBur3 = burger3 * 250
            price3.innerHTML = priBur3
            break
        case 3:
            numBurger4.innerHTML = burger4
            priBur4 = burger4 * 300
            price4.innerHTML = priBur4
            break
        case 4:
            numBoisson.innerHTML = boisson
            priBois = boisson * 100
            price5.innerHTML = priBois
            break
        case 5:
            numBoisson2.innerHTML = boisson2
            priBois2 = boisson2 * 100
            price6.innerHTML = priBois2
            break
        case 6:
            numDessert.innerHTML = dessert
            priDess = dessert * 150
            price7.innerHTML = priDess
            break
        case 7:
            numDessert2.innerHTML = dessert2
            priDess2 = dessert2 * 150
            price8.innerHTML = priDess2
            break
    }
}
const count = () => {
    score.innerHTML = num
    total.innerHTML = priBur + priBur2 + priBur3 + priBur4 + priBois + priBois2 + priDess + priDess2
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        num += 1;
        switch (btn[i]) {
            case btn[0]:
                burger++
                bur(0)
                count()
                break
            case btn[1]:
                burger2++
                bur(1)
                count()
                break
            case btn[2]:
                burger3++
                bur(2)
                count()
                break
            case btn[3]:
                burger4++
                bur(3)
                count()
                break
            case btn[4]:
                boisson++
                bur(4)
                count()
                break
            case btn[5]:
                boisson2++
                bur(5)
                count()
                break
            case btn[6]:
                dessert++
                bur(6)
                count()
                break
            case btn[7]:
                dessert2++
                bur(7)
                count()
                break
        }
    });
}

for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener('click', () => {
        num -= 1;
        switch (moins[i]) {
            case moins[0]:
                burger--
                bur(0)
                count()
                break
            case moins[1]:
                burger2--
                bur(1)
                count()
                break
            case moins[2]:
                burger3--
                bur(2)
                count()
            case moins[3]:
                burger4--
                bur(3)
                count()
                break
            case moins[4]:
                boisson--;
                bur(4)
                count()
                break
            case moins[5]:
                boisson2--
                bur(5)
                count()
                break
            case moins[6]:
                dessert--
                bur(6)
                count()
                break
            case moins[7]:
                dessert2--
                bur(7)
                count()
                break
        }
    });
}

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", () => {
        if (heart[i].style.color == 'tomato') {
            heart[i].style.color = ''
        } else {
            heart[i].style.color = 'tomato'
        }
    })
}