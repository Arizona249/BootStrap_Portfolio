const progressCircle = document.querySelector(".custom_progress");
const floatingNavBarList=document.querySelector(".floating-nav ul");
const element = document.querySelector(".typeWriter");
const heroName = document.querySelector(".name");
const themeBtn = document.querySelector(".theme-container")

document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
        window.scrollTo({ top: 0, behavior: "smooth" })
})


if (scrollY <= 12) { floatingNavBarList.classList.add("expandNav") }
window.addEventListener("scroll",()=>{
    // console.log("scrolled To : "+ scrollY)
    let progress = window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100;
    // console.log(progress)
    document.body.style.setProperty("--pageScrollProgress", progress+0.1 + "%");
    if(window.scrollY<=12){
        floatingNavBarList.classList.add("expandNav")
        window.setTimeout(()=>{
            floatingNavBarList.classList.remove("expandNav");
        },2000)
    }
    else{floatingNavBarList.classList.remove("expandNav")}
})

const topLines = [
    "Who am I?",
    "Well...",
    "It depends on your definition,",
    "of identity.",
    "If you mean who I am career-wise,",
    // "↓ Then look down ↓",
    "Aspiring Software Engineer",
    "We can stop here...",
    "Or we can go deeper.",
    "If you mean who I am in life,",
    "Well, I’m not sure.",
    "That would have been my answer,",
    "a few months ago.",
    "But now I know.",
    "But i can't tell you about me,",
    "without telling you about someone",
    "And that someone is Jesus",
    "Because in Him,",
    " I have found who I truly am.",
    "This is who He says I am.",
    // "↓ Look down ↓",
    "Light of the world",
    "Salt of the earth",
    "His workmanship",
    "A chosen generation",
    "A royal priesthood",
    "A holy nation",
    "A peculiar person"
];
const bottomLines = [
    "Aspiring Software Engineer",
    "Light of the world",
    "Salt of the earth",
    "His workmanship",
    "A chosen generation",
    "A royal priesthood",
    "A holy nation",
    "A peculiar person"
];
if(document.documentElement.id==="homepage"){
    function typeWriter(element, text, index = 0, callback) {
        if (index === 0) {
            element.textContent = ""
        }
        element.textContent += text[index]
        if (index >= text.length - 1) {
            // console.log(index)
            setTimeout(() => { callback(); }, 1100)

        }
        else if (index < text.length) {
            setTimeout(() => {
                typeWriter(element, text, index + 1, callback)
            }, 100);

        }
    }
    function startTyping(index = 0) {
        if (index >= devPhrases.length) {
            index = 0
        }
        typeWriter(element, devPhrases[index], 0, () => startTyping(index + 1));
    }
    startTyping();
}

else if(document.documentElement.id=="aboutpage"){
    function typeWriter(element, text, index = 0, callback) {
        if(element){
            if (index === 0) {
                element.textContent = ""
            }
            element.textContent += text[index]
            if (index >= text.length - 1) {
                console.log(index)
                setTimeout(() => { callback(); }, 1200)
    
            }
            else if (index < text.length) {
                setTimeout(() => {
                    typeWriter(element, text, index + 1, callback)
                }, 100);
                
            }
        }
    }

    function startTyping(index = 0) {
        if (index >= topLines.length) {
            index = 0
        }
        // console.log("index number: "+ index)
        if(index==topLines.length-1){
            index=0;
            element.textContent="??";
        }
        else if(index==5){
            console.log(topLines[index])
            typeWriter(element, topLines[index], 0, () => startTyping(index + 1))
            return
        }
        else if(index>18 && index < 26){
            typeWriter(element, topLines[index], 0, () => startTyping(index + 1))
            return
        }
        typeWriter(heroName, topLines[index], 0, () => startTyping(index + 1))
    }
    startTyping();
}
themeBtn.addEventListener("click",()=>{

   if(document.documentElement.classList.contains("lightMode")){
        document.documentElement.classList.remove("lightMode");
        localStorage.setItem("theme","dark");
    }
    else{
        document.documentElement.classList.add("lightMode");
        localStorage.setItem("theme","light");
        
   }
    
})

