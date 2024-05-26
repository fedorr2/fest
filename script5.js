`use strict`

let col1 = document.getElementById('col1')
    // col2 = document.getElementById('col2'),
    // col3 = document.getElementById('col3'),
    // col4 = document.getElementById('col4')

let bm1 = document.getElementById('bm1')
    // bm2 = document.getElementById('bm2'),
    // bm3 = document.getElementById('bm3'),
    // bm4 = document.getElementById('bm4')

let bp1 = document.getElementById('bp1')
    // bp2 = document.getElementById('bp2'),
    // bp3 = document.getElementById('bp3'),
    // bp4 = document.getElementById('bp4')
let ingr = document.getElementById('in')
// let acol 
nums()

bm1.onclick = () => minus(col1.textContent)
bp1.onclick = () => plus(col1.textContent)

function plus(coll) {   
    coll++
    col1.textContent = coll
    console.log(coll)
    nums()
}

function minus(coll) {
    if (coll > 1) { 
    coll--
    col1.textContent = coll
    console.log(coll)
    nums()
    }
}



 function nums(){    
        let num1 = 2,
        num2 = 500,
        num3 = 2,
        num4 = 2,
        num5 = 50,
        num6 = 1
    
        num1 = num1 * col1.textContent
        num2 = num2 * col1.textContent
        num3 = num3 * col1.textContent
        num4 = num4 * col1.textContent
        num5 = num5 * col1.textContent
        num6 = num6 * col1.textContent

        ingr.textContent = `Ингредиенты: Морковь - ${num1} шт. , 
        Свинина - ${num2} г, 
        Репчятый лук - ${num3} шт., 
        Рис - ${num4} стакана, 
        Растительное масло - ${num5} мл, 
        Соль - по вкусу., 
        Специи для плова - по вкусу, 
        Чеснок - ${num6} головка`
     }