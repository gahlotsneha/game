
// let a = 1;
// let b=8;
// const ab=a<=b;
// a.style.color="green"
// console.log(ab)

let num;
    document.getElementById("submit1").addEventListener("click", ()=>{
        num =  parseInt(document.getElementById("ip").value);
        console.log(num)
        guess()
    })
    function guess() { 
    if (num == Math.floor(Math.random()*10)) {
    document.querySelector(".body").style.backgroundColor = 'green';
    }
    else{
    document.querySelector(".body").style.backgroundColor = 'red';
    }  
 }