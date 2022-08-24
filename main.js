
      TweenMax.from(".logo", 1.6, {
        delay: 6.4,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
  });

  TweenMax.from(".menu", 1.6, {
        delay: 6.5,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
  });

  TweenMax.from(".heading", 1.6, {
        delay: 6.6,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
  });

  TweenMax.from(".desc", 1.6, {
        delay: 6.7,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
  });

  TweenMax.from(".button", 1.6, {
        delay: 6.8,
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut
  });

  TweenMax.from(".watch", 1.6, {
        delay: 6.9,
        opacity: 0,
        y: 30,
        rotation: 90,
        ease: Expo.easeInOut
  });

  TweenMax.staggerFrom(".media ul li", 2, {
        delay: 7,
        opacity: 0,
        y: 40,
        ease: Expo.easeInOut
  }, 0.2);

  /* -- barba js animations ---*/ 
  
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});
