// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Initial Hero Animation
    const tl = gsap.timeline();

    tl.from('.logo', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    })
        .from('.sub-headline', {
            opacity: 0,
            y: 20,
            duration: 1
        }, '-=0.8')
        .from('.hero-p', {
            opacity: 0,
            y: 20,
            duration: 1
        }, '-=0.8')
        .from('.hero-actions', {
            opacity: 0,
            y: 20,
            duration: 1
        }, '-=0.8')
        .from('.hero-image', {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=1.2');

    // Scroll Animations
    gsap.utils.toArray('.skill-card, .project-card, .timeline-item, .cert-card, .achievement-item').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Parallax effect for image
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to('.profile-img', {
            x: mouseX,
            y: mouseY,
            duration: 1,
            ease: 'power2.out'
        });

        gsap.to('.frame', {
            x: -mouseX * 0.5,
            y: -mouseY * 0.5,
            duration: 1.5,
            ease: 'power2.out'
        });
    });
});
