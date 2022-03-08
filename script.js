gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate-inicial-txt",{
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.6,
})

gsap.from(".animate-inicial-img",{
    duration: 0.8,
    opacity: 0,
    x: 200,
})     


gsap.from(".animate-artigos",{
    duration: 0.8,
    opacity: 0,
    x: -200,
    stagger: 0.2,
    delay: 2
})     

gsap.from(".animate-final",{
    scrollTrigger: ".animate-final",
    duration: 0.8,
    opacity: 0,
    x: -200,
    stagger: 0.2,
    delay:0.4
}) 
