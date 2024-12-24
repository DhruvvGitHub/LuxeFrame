function lenis() {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}
lenis();


const servicesRenderAndAnimation = () => {
    const services = [
        {
            id: "01/",
            name: "Commercial & Advertising",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "02/",
            name: "Architecural",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "03/",
            name: "Travel & Landscape",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "04/",
            name: "Events & Weddings",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "05/",
            name: "Foods & Beverages",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "06/",
            name: "Underwater",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "07/",
            name: "Portrait",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "08/",
            name: "Fashion",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "09/",
            name: "Product",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "10/",
            name: "Sports",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "11/",
            name: "Real Estate",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
        {
            id: "12/",
            name: "Editorial",
            arrow: `<svg fill="#FFFFFF" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 330 330" xml:space="preserve">
    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
        s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
        c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
    </svg>`,
        },
    ];
    
    const servicesDiv = document.querySelector(".services-div");
    
    services.forEach((service) => {
        const serviceDiv = `
            <div class="service">
                <div class="service-left">
                    <h5 class="tiny-heading">${service.id}</h5>
                    <h3 class="sub-title">${service.name}</h3>
                </div>
                ${service.arrow}
            </div>
        `;
        servicesDiv.innerHTML += serviceDiv;
    });
    
    const serviceElements = document.querySelectorAll(".services-div .service");
    
    serviceElements.forEach((service) => {
        service.addEventListener("mouseenter", () => {
            service.style.color = "#000000";
    
            const svgElement = service.querySelector("svg path");
            if (svgElement) {
                svgElement.setAttribute("fill", "#000000");
            }
    
            const id = service.querySelector(".service-left h5");
            if (id) {
                id.style.color = "gray";
            }
    
            gsap.to(service.querySelector(".service-left"), {
                transform: "translateX(12%)",
            });
    
            gsap.to(service.querySelector(".service svg"), {
                rotate: "-40deg",
                transform: "translateX(-200%)",
            });
        });
    
        service.addEventListener("mouseleave", () => {
            service.style.color = "#FFFFFF";
    
            const svgElement = service.querySelector("svg path");
            if (svgElement) {
                svgElement.setAttribute("fill", "#FFFFFF");
            }
    
            const id = service.querySelector(".service-left h5");
            if (id) {
                id.style.color = "white";
            }
    
            gsap.to(service.querySelector(".service-left"), {
                transform: "translateX(0%)",
            });
    
            gsap.to(service.querySelector(".service svg"), {
                rotate: "0deg",
                transform: "translateX(0%)",
            });
        });
    });
}
servicesRenderAndAnimation()


const aboutUsAnimation = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-us",
            scroller: "body",
            start: "0% 70%",
            end: "0% 10%",
            markers: true,
            scrub: 2,
        },
    });

    tl.from(
        ".lower-container",
        {
            opacity: 0,
            transform: "translateY(10%)",
        },
        "a"
    )
        .to(
            [".img-1", ".img-3"],
            {
                rotate: "-10deg",
                x: "-400",
            },
            "a"
        )
        .to(
            [".img-2", ".img-4"],
            {
                rotate: "10deg",
                x: "400",
            },
            "a"
        );
};
aboutUsAnimation();

const swiperElementsRender = () => {
    const testimonials = [
        {
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_7_212)"/>
                    <defs>
                    <pattern id="pattern0_7_212" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_7_212" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_7_212" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2Xy2sUQRCHGzz4Bj15UQTxiaI3vXn3IIKwKCHZqtmEHMT8L7mIeBBRclGE5CDoH+BBUER8xddO92wMKkh0NxqRrbakyS7u9kzUqZ0RJP1B35bvV1XdzfYoFQgEAoFA4D8laeNJQ9DQhG9jrh4f2EdY0QTzhjCJOTqmyqTO1cOacMlYZLc0wbMBfUcN4fce331VFh/43CZDONsN6wTWpT7NsEUTxv0+fFps1b2BFq/1hnUaODuA76ZX/I+4jaeKrbobRlGUKt7iJanPEJ5P+2BSlUHC1YOa4Ks3+SfzPL6hiHtklqf/4BVPrC28eM2wzhA88sK+aB45IL9H8KJv+gStOo/sVWVgLFz2tzomBKlPW5xK3yMcUmUQE57xw4zFK1JfQjCe9sEFVQYNHt1tCJv9W40vZ7m2WearHcq4R48bXFlf0rnHh17x32KOjkh873h4oyF87hW/qBn2qzIwFi+mtppwTOrTFq+mfdFwsVV3w9rVExnn3l20hewFc67AmGs7s314OstnVloELWNxOubaPlkDhHdzBf4Kfl/n0W2+zxDck/g04cJrxh2CBvovWq5Qi1MZA1kawHcjdwPSsM49+VSwr/lvG7DIZfv+SGjAI+xAXsIR8ghHaNUdIU2wKP/jgVaqgeW3jdT3OX8DFm/JJwYzGTswLfVpi9eFH9yCXSBoJRzt8n3uVekeZrmLJ/w4x2PblYQ3jHuMhTuakP4iyP3mtvuCW8nnXpXuYZb6wrNZg8Cmm7y4+F6YK2sSHtr6u+V+M3BQIBAIBAKrjZ+loyBx8fcD7QAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>
                    `,
            text: "Recently, we teamed up with Kristijan and his family for content creation with a family-focused approach. Their communication was efficient and clear, and the quality of the photos and videos they produced perfectly captured the essence of our resort. They delivered their work promptly, making them an excellent choice for businesses looking for high-quality, family-oriented content.",
            name: "Mike Green",
            position: "CEO at DIOR"
        },
        {
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_7_212)"/>
                    <defs>
                    <pattern id="pattern0_7_212" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_7_212" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_7_212" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2Xy2sUQRCHGzz4Bj15UQTxiaI3vXn3IIKwKCHZqtmEHMT8L7mIeBBRclGE5CDoH+BBUER8xddO92wMKkh0NxqRrbakyS7u9kzUqZ0RJP1B35bvV1XdzfYoFQgEAoFA4D8laeNJQ9DQhG9jrh4f2EdY0QTzhjCJOTqmyqTO1cOacMlYZLc0wbMBfUcN4fce331VFh/43CZDONsN6wTWpT7NsEUTxv0+fFps1b2BFq/1hnUaODuA76ZX/I+4jaeKrbobRlGUKt7iJanPEJ5P+2BSlUHC1YOa4Ks3+SfzPL6hiHtklqf/4BVPrC28eM2wzhA88sK+aB45IL9H8KJv+gStOo/sVWVgLFz2tzomBKlPW5xK3yMcUmUQE57xw4zFK1JfQjCe9sEFVQYNHt1tCJv9W40vZ7m2WearHcq4R48bXFlf0rnHh17x32KOjkh873h4oyF87hW/qBn2qzIwFi+mtppwTOrTFq+mfdFwsVV3w9rVExnn3l20hewFc67AmGs7s314OstnVloELWNxOubaPlkDhHdzBf4Kfl/n0W2+zxDck/g04cJrxh2CBvovWq5Qi1MZA1kawHcjdwPSsM49+VSwr/lvG7DIZfv+SGjAI+xAXsIR8ghHaNUdIU2wKP/jgVaqgeW3jdT3OX8DFm/JJwYzGTswLfVpi9eFH9yCXSBoJRzt8n3uVekeZrmLJ/w4x2PblYQ3jHuMhTuakP4iyP3mtvuCW8nnXpXuYZb6wrNZg8Cmm7y4+F6YK2sSHtr6u+V+M3BQIBAIBAKrjZ+loyBx8fcD7QAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>
                    `,
            text: "The LuxeFrame team has brought their exceptional talent and charm to our properties. Their remarkable work resonated wonderfully with our audience and enhanced our marketing efforts. We eagerly anticipate their return.",
            name: "Michael George",
            position: "Manager at Cosmic"
        },
        {
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_7_212)"/>
                    <defs>
                    <pattern id="pattern0_7_212" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_7_212" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_7_212" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2Xy2sUQRCHGzz4Bj15UQTxiaI3vXn3IIKwKCHZqtmEHMT8L7mIeBBRclGE5CDoH+BBUER8xddO92wMKkh0NxqRrbakyS7u9kzUqZ0RJP1B35bvV1XdzfYoFQgEAoFA4D8laeNJQ9DQhG9jrh4f2EdY0QTzhjCJOTqmyqTO1cOacMlYZLc0wbMBfUcN4fce331VFh/43CZDONsN6wTWpT7NsEUTxv0+fFps1b2BFq/1hnUaODuA76ZX/I+4jaeKrbobRlGUKt7iJanPEJ5P+2BSlUHC1YOa4Ks3+SfzPL6hiHtklqf/4BVPrC28eM2wzhA88sK+aB45IL9H8KJv+gStOo/sVWVgLFz2tzomBKlPW5xK3yMcUmUQE57xw4zFK1JfQjCe9sEFVQYNHt1tCJv9W40vZ7m2WearHcq4R48bXFlf0rnHh17x32KOjkh873h4oyF87hW/qBn2qzIwFi+mtppwTOrTFq+mfdFwsVV3w9rVExnn3l20hewFc67AmGs7s314OstnVloELWNxOubaPlkDhHdzBf4Kfl/n0W2+zxDck/g04cJrxh2CBvovWq5Qi1MZA1kawHcjdwPSsM49+VSwr/lvG7DIZfv+SGjAI+xAXsIR8ghHaNUdIU2wKP/jgVaqgeW3jdT3OX8DFm/JJwYzGTswLfVpi9eFH9yCXSBoJRzt8n3uVekeZrmLJ/w4x2PblYQ3jHuMhTuakP4iyP3mtvuCW8nnXpXuYZb6wrNZg8Cmm7y4+F6YK2sSHtr6u+V+M3BQIBAIBAKrjZ+loyBx8fcD7QAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>
                    `,
            text: "The visuals created have not only enriched our promoional materials but also evoke the emotions and eperiences we aim to provide our discerning clienele. It's been a seamless and rewarding partnrship, and we're already planning our next projet!",
            name: "Elsa Alex",
            position: "Director at Pinterest"
        },
        {
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_7_212)"/>
                    <defs>
                    <pattern id="pattern0_7_212" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_7_212" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_7_212" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2Xy2sUQRCHGzz4Bj15UQTxiaI3vXn3IIKwKCHZqtmEHMT8L7mIeBBRclGE5CDoH+BBUER8xddO92wMKkh0NxqRrbakyS7u9kzUqZ0RJP1B35bvV1XdzfYoFQgEAoFA4D8laeNJQ9DQhG9jrh4f2EdY0QTzhjCJOTqmyqTO1cOacMlYZLc0wbMBfUcN4fce331VFh/43CZDONsN6wTWpT7NsEUTxv0+fFps1b2BFq/1hnUaODuA76ZX/I+4jaeKrbobRlGUKt7iJanPEJ5P+2BSlUHC1YOa4Ks3+SfzPL6hiHtklqf/4BVPrC28eM2wzhA88sK+aB45IL9H8KJv+gStOo/sVWVgLFz2tzomBKlPW5xK3yMcUmUQE57xw4zFK1JfQjCe9sEFVQYNHt1tCJv9W40vZ7m2WearHcq4R48bXFlf0rnHh17x32KOjkh873h4oyF87hW/qBn2qzIwFi+mtppwTOrTFq+mfdFwsVV3w9rVExnn3l20hewFc67AmGs7s314OstnVloELWNxOubaPlkDhHdzBf4Kfl/n0W2+zxDck/g04cJrxh2CBvovWq5Qi1MZA1kawHcjdwPSsM49+VSwr/lvG7DIZfv+SGjAI+xAXsIR8ghHaNUdIU2wKP/jgVaqgeW3jdT3OX8DFm/JJwYzGTswLfVpi9eFH9yCXSBoJRzt8n3uVekeZrmLJ/w4x2PblYQ3jHuMhTuakP4iyP3mtvuCW8nnXpXuYZb6wrNZg8Cmm7y4+F6YK2sSHtr6u+V+M3BQIBAIBAKrjZ+loyBx8fcD7QAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>
                    `,
            text: "Recently, we teamed up with Kristijan and his family for content creation with a family-focused approach. Their communication was efficient and clear, and the quality of the photos and videos they produced perfectly captured the essence of our resort. They delivered their work promptly, making them an excellent choice for businesses looking for high-quality, family-oriented content.",
            name: "Mike Green",
            position: "CEO at DIOR"
        },
        {
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_7_212)"/>
                    <defs>
                    <pattern id="pattern0_7_212" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_7_212" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_7_212" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2Xy2sUQRCHGzz4Bj15UQTxiaI3vXn3IIKwKCHZqtmEHMT8L7mIeBBRclGE5CDoH+BBUER8xddO92wMKkh0NxqRrbakyS7u9kzUqZ0RJP1B35bvV1XdzfYoFQgEAoFA4D8laeNJQ9DQhG9jrh4f2EdY0QTzhjCJOTqmyqTO1cOacMlYZLc0wbMBfUcN4fce331VFh/43CZDONsN6wTWpT7NsEUTxv0+fFps1b2BFq/1hnUaODuA76ZX/I+4jaeKrbobRlGUKt7iJanPEJ5P+2BSlUHC1YOa4Ks3+SfzPL6hiHtklqf/4BVPrC28eM2wzhA88sK+aB45IL9H8KJv+gStOo/sVWVgLFz2tzomBKlPW5xK3yMcUmUQE57xw4zFK1JfQjCe9sEFVQYNHt1tCJv9W40vZ7m2WearHcq4R48bXFlf0rnHh17x32KOjkh873h4oyF87hW/qBn2qzIwFi+mtppwTOrTFq+mfdFwsVV3w9rVExnn3l20hewFc67AmGs7s314OstnVloELWNxOubaPlkDhHdzBf4Kfl/n0W2+zxDck/g04cJrxh2CBvovWq5Qi1MZA1kawHcjdwPSsM49+VSwr/lvG7DIZfv+SGjAI+xAXsIR8ghHaNUdIU2wKP/jgVaqgeW3jdT3OX8DFm/JJwYzGTswLfVpi9eFH9yCXSBoJRzt8n3uVekeZrmLJ/w4x2PblYQ3jHuMhTuakP4iyP3mtvuCW8nnXpXuYZb6wrNZg8Cmm7y4+F6YK2sSHtr6u+V+M3BQIBAIBAKrjZ+loyBx8fcD7QAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>
                    `,
            text: "The LuxeFrame team has brought their exceptional talent and charm to our properties. Their remarkable work resonated wonderfully with our audience and enhanced our marketing efforts. We eagerly anticipate their return.",
            name: "Michael George",
            position: "Manager at Cosmic"
        },
        {
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="32" height="32" fill="url(#pattern0_7_212)"/>
                    <defs>
                    <pattern id="pattern0_7_212" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_7_212" transform="scale(0.0208333)"/>
                    </pattern>
                    <image id="image0_7_212" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2Xy2sUQRCHGzz4Bj15UQTxiaI3vXn3IIKwKCHZqtmEHMT8L7mIeBBRclGE5CDoH+BBUER8xddO92wMKkh0NxqRrbakyS7u9kzUqZ0RJP1B35bvV1XdzfYoFQgEAoFA4D8laeNJQ9DQhG9jrh4f2EdY0QTzhjCJOTqmyqTO1cOacMlYZLc0wbMBfUcN4fce331VFh/43CZDONsN6wTWpT7NsEUTxv0+fFps1b2BFq/1hnUaODuA76ZX/I+4jaeKrbobRlGUKt7iJanPEJ5P+2BSlUHC1YOa4Ks3+SfzPL6hiHtklqf/4BVPrC28eM2wzhA88sK+aB45IL9H8KJv+gStOo/sVWVgLFz2tzomBKlPW5xK3yMcUmUQE57xw4zFK1JfQjCe9sEFVQYNHt1tCJv9W40vZ7m2WearHcq4R48bXFlf0rnHh17x32KOjkh873h4oyF87hW/qBn2qzIwFi+mtppwTOrTFq+mfdFwsVV3w9rVExnn3l20hewFc67AmGs7s314OstnVloELWNxOubaPlkDhHdzBf4Kfl/n0W2+zxDck/g04cJrxh2CBvovWq5Qi1MZA1kawHcjdwPSsM49+VSwr/lvG7DIZfv+SGjAI+xAXsIR8ghHaNUdIU2wKP/jgVaqgeW3jdT3OX8DFm/JJwYzGTswLfVpi9eFH9yCXSBoJRzt8n3uVekeZrmLJ/w4x2PblYQ3jHuMhTuakP4iyP3mtvuCW8nnXpXuYZb6wrNZg8Cmm7y4+F6YK2sSHtr6u+V+M3BQIBAIBAKrjZ+loyBx8fcD7QAAAABJRU5ErkJggg=="/>
                    </defs>
                    </svg>
                    `,
            text: "The visuals created have not only enriched our promoional materials but also evoke the emotions and eperiences we aim to provide our discerning clienele. It's been a seamless and rewarding partnrship, and we're already planning our next projet!",
            name: "Elsa Alex",
            position: "Director at Pinterest"
        },
    ];

    const swiperWrapper = document.querySelector(".swiper-wrapper")

    testimonials.forEach(test => {
        const elem =  `<div class="swiper-slide">
                           <div class="test-upper"
                                <i>${test.icon}</i>
                                <h5 class="small-heading">${test.text}</h5>
                           </div>
                            <div class="test-lower"
                                <h3 class="heading">${test.name}</h3>
                                <h5 class="tiny-heading">${test.position}</h5>
                           </div>
                       </div>`

    swiperWrapper.innerHTML += elem
    })
};
swiperElementsRender()

const swiperAnimation = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
    });
};
swiperAnimation();