import undrawMoonlightImg from '@/assets/icons/undraw_moonlight.svg';
import aboutMe from '@/data/aboutMe.json';
import profession from '@/data/profession.json';
import {
  BookBookmark,
  Briefcase as BriefcaseIcon,
  ClockCountdown,
  Cpu,
  GlobeHemisphereWest,
  Heart,
  Heart as HeartIcon,
  UserList as UserListIcon,
  Wrench,
} from '@phosphor-icons/react';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';
import { ExternalLink } from '../ExternalLink';

export const AboutMeSection = () => {
  const { education } = aboutMe;

  const currentYear = new Date().getFullYear();
  const myCurrentAge = currentYear - 2003;
  const techLinks = {
    react: 'https://react.dev/',
    javascript: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    typescript: 'https://www.typescriptlang.org/',
  };

  return (
    <section
      id="about-me"
      className="bg-secondary overflow-hidden relative pb-16 pt-24"
    >
      <div className="container mx-auto px-4 max-w-[64rem]">
        <img
          src={undrawMoonlightImg}
          className="w-full sm:w-3/4 mx-auto pb-6 delaySmallReveal"
          alt="Ilustração de uma pessoa sentada em frente a uma fogueira em um lugar com árvores e a luz da lua ao fundo"
        />

        <h2 className="section__title text-primary mb-4 originLeftReveal intervalReveal">
          Sobre mim
        </h2>

        <div role={'group'} className="mt-2 delayMediumReveal text-black/90">
          <article role="listitem" className="intervalReveal">
            <div className="flex gap-2 items-center text-accent mb-2">
              <BriefcaseIcon className="text-2xl" weight="fill" />
              <h4 className="leading-none">Minha profissão</h4>
            </div>

            <p>
              Sou Desenvolvedor de Sistemas, com{' '}
              <ClockCountdown
                className="text-accent -mt-1 inline-block"
                weight="fill"
              />{' '}
              {formatDistanceToNow(profession.startDate, {
                locale: ptBR,
              })}{' '}
              de experiência em{' '}
              <abbr title="Responsável por criar interfaces de sistemas que sejam agradáveis, úteis e fáceis de usar.">
                <em>Front-End</em>
              </abbr>
              , capaz de resolver problemas simplificando-os de forma muito
              prática e eficiente usando habilidades técnicas avançadas que
              ajudaram as empresas que passei a ter resultados desde performance
              de aplicações à aperfeiçoamento de requisitos de sistema, e tenho
              profundo conhecimento em{' '}
              <ExternalLink href={techLinks.javascript}>
                <em>React</em>
              </ExternalLink>{' '}
              ,{' '}
              <ExternalLink href={techLinks.typescript}>
                <em>TypeScript</em>
              </ExternalLink>{' '}
              ,{' '}
              <ExternalLink href={techLinks.javascript}>
                <em>JavaScript</em>
              </ExternalLink>
              , <em>HTML</em> e <em>CSS</em>.
            </p>
          </article>

          <div className="separator my-8 intervalReveal" />

          <article role="listitem" className="intervalReveal">
            <div className="flex gap-2 items-center text-accent mb-2">
              <UserListIcon className="text-3xl" weight="fill" />
              <h4 className="leading-none">Quem sou eu</h4>
            </div>

            <p>
              Nascido em Pernambuco, já morei em alguns lugares pelo Brasil. Com
              16 anos escolhi por afinidade e amor à natureza útil e lógica da
              tecnologia, embarcar na programação de software.
            </p>

            <p>
              Posso me descrever como reservado, autodisciplinado, detalhista e
              curioso.
            </p>

            <p>
              Atualmente tenho {myCurrentAge} anos, e estou cursando{' '}
              <strong>{education.course}</strong>{' '}
              <Cpu className="text-accent inline-block" weight="fill" /> na{' '}
              {education.institution}.
            </p>
          </article>

          <div className="separator my-8 intervalReveal" />

          <article role="listitem" className="intervalReveal">
            <div className="flex gap-2 items-center text-accent mb-2">
              <Heart className="text-3xl" weight="fill" />
              <h4 className="leading-none">Meus interesses</h4>
            </div>

            <p>
              Quero poder trabalhar remoto, viajando pelo mundo{' '}
              <GlobeHemisphereWest
                className="text-accent inline-block"
                weight="fill"
              />{' '}
              e vivendo novas experiências.{' '}
              <strong>A tecnologia me possibilita esse sonho</strong>.
            </p>

            <p>
              <HeartIcon className="text-accent inline-block" weight="fill" />{' '}
              Me interesso principalmente por <em>web design</em>, construção de
              interfaces centradas no usuário (<em>UI/UX Design</em>), e{' '}
              <em>
                <abbr title="Leia 'Código limpo', de Robert C. Martin">
                  clean code
                </abbr>
              </em>
              . Gosto e tenho aptidão em criar soluções, resolver problemas
              reais decompondo-os{' '}
              <Wrench className="text-accent inline-block" weight="fill" /> em
              partes menores e mais simples, pouco importa a tecnologia usada
              para isso.
            </p>

            <p>
              Amo ler livros{' '}
              <BookBookmark
                className="text-accent inline-block"
                weight="fill"
              />{' '}
              e aproveitar uma ótima história. Gosto de entender o ser humano,
              então sempre estou pesquisando sobre psicologia, filosofia e temas
              relacionados.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
