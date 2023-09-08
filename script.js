var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 220 +"px"
    blur.style.top = dets.y - 220 +"px"
})

gsap.to("#nav",{
    backgroundColor :"#000",
    height:"100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start: "top -20%",
        end: "top -30%",
        scrub: 1,
    },
}); 
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -80%",
        scrub: 3,
    },
});
