const menuAnimation = () => {
    const menuCircle = document.querySelector(".nav-circle");
    let flag = false;

    const tl = gsap.timeline({ paused: true });

    tl.to(".nav-circle .svg-1", {
        rotate: "50deg",
        y: 6
    }, "a")
    .to(".nav-circle .svg-2", {
        rotate: "-50deg",
        y: -2.5
    }, "a")
    .to(".menu-bar", {
        height: "100vh",
        top: "0%",
        ease: "power2.out",
        duration: 0.7
    })
    .from(".menu-bar .menu-link a", {
        y: -200,
        stagger: 0.05,
        delay: -0.3
    })

    menuCircle.addEventListener("click", () => {
        if (!flag) {
            tl.play(); 
        } else {
            tl.reverse(); 
        }
        flag = !flag; 
    });
};

menuAnimation();