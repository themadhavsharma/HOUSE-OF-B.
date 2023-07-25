gsap.from('.ima',{
    opacity:0,
    delay:2
    
})
gsap.to('.ima',{
    x:50,
    // opacity:0,
    // y:40,
    duration:4,
    ease:"easeOut"
    
})

const t= gsap.timeline()
t
.from("#logo",{
    opacity:0,
    duration:1,
    delay:0.5
})
.from("#quote",{
    delay:1,
    opacity:0,
    duration:1,

})

.from(".quote1",{
    opacity:0,
    duration:1,

})

.from(".quote2",{
    opacity:0,
    duration:1,
})