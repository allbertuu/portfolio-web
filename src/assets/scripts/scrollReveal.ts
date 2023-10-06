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
  sr.reveal('.intervalReveal', { interval: 500 });
  sr.reveal('.intervalRevealSmall', { interval: 300 });

  // customized
  sr.reveal('.originLeftReveal', { delay: 200, origin: 'left' });
  sr.reveal('.originRightReveal', { delay: 200, origin: 'right' });
  sr.reveal('.originBottomReveal', { delay: 200, origin: 'bottom' });
  sr.reveal('.mySocialsReveal', {
    delay: 200,
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
  });
};
