// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.
 
// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.
 
// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.





function task1() {
    for (let i = 1; i <= 100; i++) {
      console.log(i)
    }
  }
  
  task1()
  

function task2() {
    for (let i = 1; i <= 100; i+ "*") {
      console.log(i*2)
    }
  }
  
  task2()
  
function task3() {
    for (let i = 1; i <= 100; i +=5) {
        console.log(i*5)
    }
}
task3()


function task4() {
for (let i = 1; i<=100; i++) {
        console.log(i+5)
    }
}
task4()

function task5() {
for (let i = 1; i<=100; i++) {
        console.log(i-2)
    }
}
task5()

function task6() {
for (let i = 1; i<=100; i++) {
        console.log(Math.pow(i, 2))
    }
}
task6()

function task7() {
for (let i = 1; i<=100; i++) {
        console.log(Math.pow(i**3)
    }
}
task7()

function task71 () {
    for (let i = 100; i>=1; i--) {
        console.log (i)
    }
}
task71()

function task72 () {
    for (let i = 100; i>=1; i--) {
        let num = 2
        let result = i*num 
        console.log(`${i}*${num}= ${result}`)
    }
}
task72 ()

function task73 () {
    for (let i=100; i>=1; i--) {
        let num = 5
        let result = i*num 
        console.log(`${i}*${num}= ${result}`)
        console.log(i*5)
    }
}
task73()

function task74() {
    for (let i=100; i>=1; i--) {
        let num = 5
        let result = i+num 
        console.log(`${i}+${num}= ${result}`)
//      
    }
}
task74()

function task75() {
    for (let i =100; i>=1; i--) {
        let num = 2
        let result = i-num 
        console.log(`${i}-${num}= ${result}`)
    }
}
task75()

function task76() {
    for (let i =100; i>=1; i--) {
        let result = i*i
        console.log(`${i}*${i}= ${result}`)
    }
}
task76()

function task77 (){
    for (let i = 100; I>=1; i--){
        let result = i*i*i
        console.log(`${i}*${i}*${i}= ${result}`)
    }
}


