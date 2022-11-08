import ScrollReveal from 'scrollreveal';

export const sr = ScrollReveal();

export const initScrollReveal = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
    });

    sr.reveal('.delaySmallReveal', { delay: 200 });
    sr.reveal('.delayMediumReveal', { delay: 400 });
    sr.reveal('.delayLargeReveal', { delay: 600 });
    sr.reveal('.delayExtraBigReveal', { delay: 800 });
    sr.reveal('.intervalCardReveal', { interval: 500 });
    sr.reveal('.intervalCardRevealSmall', { interval: 300 });
};
