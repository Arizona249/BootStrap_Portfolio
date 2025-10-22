const projects = document.querySelectorAll(".project")
const workHeading = document.querySelector(".work-heading")
// console.log(project)
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        console.log(entry.target)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{entry.target.classList.remove("show")}
    })
},)
projects.forEach((project)=>{
    observer.observe(project)
})