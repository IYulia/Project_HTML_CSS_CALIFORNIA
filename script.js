let a = document.getElementById("burger")
const b = document.getElementById("ul_menu")


a.addEventListener('touchend', ()=>{
    b.style.display = 'flex'
    b.style.margin = '100px'
    console.log( b.style.display) 
})