var toggle = document.querySelector("#toggle")
var options = document.querySelector(".hidden")
var options1 = document.querySelector(".list")
var b = document.querySelector("body")
var check = 1;
toggle.addEventListener("click",function(){
    if(check == 1){   
        gsap.to(options,{       
            x :"-101%",
            y: "5px",
        })
        gsap.to(options1,{
            x :"-100%",    
        })
        check = 0;
        
    }   
})
options1.addEventListener("click",function(){
    if(check == 0){   
        gsap.to(options,{       
            x :"101%",
            y: "5px",
        })
        gsap.to(options1,{
            x :"100%",    
        })
        check =1;
    }   
})


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    },
   
    
})

tl.to(".nav",{
    backgroundColor : "rgb(243,244,250)",
   
    // textColor: "black",
    height:"90px",
    duration:5,
    // stager: 1,
    
})
gsap.to(".nav h1",{
   
    innerHTML:'PORTFOLIO',
    x:50,
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -50%",
        end:"top -51%",
        scrub:2,
        ease:"in-out",
    },
})
gsap.to("#in1",{
    display: "block",
    x:"125px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -60%",
        end:"top -61%",
        scrub:2,
        ease: "back.out(1.7)"
    },

})
gsap.to("#ln",{
    
    display: "block",
    innerHTML:"My mission is to help you build your projects with my versatility and my ability to adapt to different situations. Together, let's turn your ideas into great projects!",
    duration:1,
    scrollTrigger:{
        trigger:"#ln",
        scroller:"body",
        //markers:true,
        start:"top -60%",
        end:"top -61%",
        scrub:2,
        ease: "back.out(1.7)"
    },

})
gsap.to(".me",{
    // display: "block",
    x:"-980px",
    duration:1,
    scrollTrigger:{
        trigger:".me",
        scroller:"body",
       // markers:true,
        start:"top 160%",
        end:"top 110%",
        scrub:2,
        ease: "back.out(1.7)",
    },

})
gsap.to("#in2",{
    // display: "block",
    x:"-780px",
    duration:1,
    scrollTrigger:{
       
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -60%",
        end:"top -61%",
        scrub:2,
        ease: "back.out(1.7)",
    },

})
gsap.to("#in3",{
    backgroundColor:"#ff0095",
    borderRadius: "7px",
    opacity:1,
    duration:"5",
    visibility:"visible",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        ease: "back.out(1.7)",
        //markers:true,
        start:"top -80%",
        end:"top -81%",
        scrub:2,
    },

})
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -170%",
        end:"top -171%",
        scrub:2,
    },
   
    
})

tl2.to(".nav",{
    backgroundColor : "black",
    // textColor: "white",
    height:"90px",
    duration:5,    
})
gsap.to(".nav h1, .list1",{
    y: "-8px",
    duration:5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -110%",
        scrub:2,
    }
    
})
gsap.to(".move-left",{
    x: "-180vw",
    duration:0.3,
    scrollTrigger:{
        trigger:".move-left",
        scroller:"body",
        // markers:true,
        start:"-130%",
        end:"-50%",
        scrub:2,
    }
})
gsap.to(".move-right",{
    x: "180vw",
    duration:0.3,
    scrollTrigger:{
        trigger:".move-left",
        scroller:"body",
        // markers:true,
        start:"-130%",
        end:"-50%",
        scrub:2,
    }
})
gsap.to(".page2 .content2",{
    backgroundColor : "rgb(243,244,250)",
    duration: 2,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // marker:true,
        
        start:"center",
        end:"bottem",
        scrub:2,
    }
}),
gsap.to(".page1",{
    
    backgroundColor:"rgb(243,244,250)",
//    opacity:0.8,
    blur:"3px",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // marker:true,
        
        start:"center",
        end:"bottem",
        scrub:2,
    }

})
