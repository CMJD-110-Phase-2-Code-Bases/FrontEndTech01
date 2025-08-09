const registerBtnClick = () =>{
    window.location.href = "form.html"
}
// Get form data 
document.addEventListener("DOMContentLoaded", function(){
// all other tasks
const form = document.getElementById("formData");
form.addEventListener("submit",function (e){
   // tasks that handle when trigger submit event
   e.preventDefault();
   const formData = new FormData(form)
   const data = Object.fromEntries(formData.entries())
   console.log(data);
   const jsonTypeDetails = JSON.stringify(data);
   console.log(jsonTypeDetails)
   form.reset();
});

});

const formReset = ()=>{
    document.getElementById("formData").reset();
}
const btnBack= ()=>{
    window.location.href = "index.html"
}
