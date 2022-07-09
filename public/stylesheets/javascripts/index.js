const btn = document.querySelector(".submit")
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    if(!form.checkValidity()){
    e.stopPropagation()
    e.preventDefault()
    }
        form.classList.add('was-validated')

})

/*btn.addEventListener("click",(e)=> {
    form.classList.add('was-validated')
})*/