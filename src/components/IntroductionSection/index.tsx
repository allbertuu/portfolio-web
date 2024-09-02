import creatorImg from '@/assets/imgs/me.svg';
import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react';
import { MySocials } from '../MySocials';

export const IntroductionSection = () => {
  return (
    <section className="shadow-xl border-b-2 border-b-accent bg-secondary text-primary/85">
      <div className="container mx-auto px-4 min-h-screen h-[calc(100vh_-_1rem)]">
        <div className="grid grid-cols-1 content-center lg:grid-cols-2 h-full gap-8 md:gap-0 items-center justify-items-center">
          {/* Container Presentation */}
          <div className="order-2 relative px-4 lg:order-1 text-center lg:text-left">
            <h3 className="originLeftReveal load-hidden intervalReveal text-xl lg:text-2xl">
              Olá 👋🏼! Eu me chamo,
            </h3>

            <h1 className="originLeftReveal load-hidden intervalReveal text-[2.5rem] lg:text-6xl font-bold mb-1">
              Alberto Santos
            </h1>

            <h2 className="originLeftReveal load-hidden intervalReveal text-2xl lg:text-3xl leading-7 mt-6">
              Sou <strong>Desenvolvedor de Software Front-end</strong>
              <br className="block sm:hidden" />
            </h2>
            {/* Container My Socials */}
            <MySocials />
          </div>
          {/* Container The Creator */}
          <div className="px-4 order-1 mt-4 lg:mt-0 lg:order-2">
            <img
              src={creatorImg}
              alt="Criador do website"
              className="delaySmallReveal md:originRightReveal load-hidden h-[10rem] lg:h-[25rem] drop-shadow border-2 border-primary/70 rounded-[33%_67%_37%_63%_/_66%_37%_63%_34%]"
            />
          </div>
        </div>

        <a
          href="#about-me"
          className="delayMediumReveal intervalReveal load-hidden"
        >
          <ArrowDownIcon
            size="1.8rem"
            role={'button'}
            className="mx-auto -mt-10 animate-bounce text-white/70 cursor-pointer"
          />
        </a>
      </div>
    </section>
  );
};
