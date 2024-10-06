// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")

// main.addEventListener("mousemove", function(dets){
//     gsap.to(cursor,{
//         x: dets.x,
//         y: dets.y,
//         ease: "back.out",
//     })
// })

function displaySelection() {
    var fruit = document.getElementById("fruits").value;
    document.getElementById("result").innerHTML = "You selected: " + fruit;
}

gsap.from(".stylish-button",{
    opacity:0,
    delay:1,
    duration:1,
})

gsap.to(".stylish-button",{
    opacity:1,
    delay:4,
    duration:1,
})

function loading() {
    var tl = gsap.timeline();
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.8,
        duration: 1,
        ease: "expo.out",
    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.8,
        duration: 1,
        ease: "expo.out",
    }, "anim")
    tl.from("#page1 h1", {
        opacity:0,
        scale:0,
        delay:0.3,
        duration:0.7,
    }, "anim")
    tl.to("#loader", {
        // opacity: 0,
        display: "none",
    })
}
loading();

// const scroll = new LocomotiveScroll({
//     el:document.querySelector("#main"),
//     smooth:true,
// })

window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque",{
            transform: "translateX(-200%)",
            duration:4,
            ease:"none",
            repeat:-1,
        })
        gsap.to(".marque img",{
            rotate:180,
        })
    }
    else{
        gsap.to(".marque",{
            transform: "translateX(0%)",
            duration:4,
            ease:"none",
            repeat:-1,
        })
        gsap.to(".marque img",{
            rotate:0,
        })
    }
})

var page2 = document.querySelector("#page2")

var elem1 = document.querySelector(".elem1")
elem1.addEventListener("mouseenter",()=>{
    page2.style.backgroundImage = `url("https://avaada.com/wp-content/uploads/GreenHouse-Gases.jpg")`;
})

var elem2 = document.querySelector(".elem2")
elem2.addEventListener("mouseenter",()=>{
    page2.style.backgroundImage = `url("https://media.istockphoto.com/id/518628602/photo/air-pollution.jpg?s=612x612&w=0&k=20&c=eavIcpCWB00p1wQ8iHFJW2YT_R6cavEZSD2tj3EdzZ4=")`
})

var elem3 = document.querySelector(".elem3")
elem3.addEventListener("mouseenter",()=>{
    page2.style.backgroundImage = `url("https://media.istockphoto.com/id/513386196/photo/co2-in-the-clouds.jpg?s=612x612&w=0&k=20&c=rpWdl-uCW6x24s8QgNKjdloiB7rGNS-kN0q-QtdmtJ0=")`
})

var elem4 = document.querySelector(".elem4")
elem4.addEventListener("mouseenter",()=>{
    page2.style.backgroundImage = `url("https://media.istockphoto.com/id/906720020/photo/science-concept-methane-or-ammonium-molecules-3d-rendered-illustration.jpg?s=612x612&w=0&k=20&c=f9d0UtqNI96YHxMItbZz4VonfQmjPf922fSLJlX5Ufk=")`
})

var elem5 = document.querySelector(".elem5")
elem5.addEventListener("mouseenter",()=>{
    page2.style.backgroundImage = `url("https://caseagrant.ucsd.edu/sites/default/files/styles/800px/public/importedFiles/ill-barbara-harmon.png")`
})
