import {
    ArrowDown as ArrowDownIcon,
    GithubLogo as GithubLogoIcon,
    Briefcase as BriefcaseIcon,
    Heart as HeartIcon,
    UserList as UserListIcon,
} from 'phosphor-react';
import creatorImg from '@assets/imgs/me.svg';
import { initScrollReveal } from '@scripts/scrollReveal';
import { useEffect } from 'react';
import { scrollToSectionId } from './utils';
import { Card, Header, MySocials } from '@components/index';
import { Container } from '@components/layout';
import { ArrowUp, Link, SectionTitle, Separator } from '@components/ui';
import UndrawMoonlightImg from '@assets/icons/undraw_moonlight.svg';

function App() {
    useEffect(() => {
        initScrollReveal();
    }, []);

    return (
        <>
            <Header />

            <main className="mt-[4.375rem] overflow-hidden">
                {/* Introduction Section */}
                <section className="pb-10 shadow-xl border-b border-b-slate-50/10">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-[85vh] gap-8 items-center justify-items-center">
                            {/* Container Presentation */}
                            <div className="relative px-4 text-center lg:text-left ">
                                <h3 className="originLeftReveal intervalReveal text-muted/80 lg:text-xl">
                                    Olá! Eu me chamo,
                                </h3>
                                <h1 className="originLeftReveal intervalReveal text-3xl lg:text-6xl font-bold mb-1">
                                    Alberto Santos.
                                </h1>

                                <h2 className="originLeftReveal intervalReveal text-xl lg:text-3xl italic text-muted">
                                    Desenvolvedor <strong>Frontend Web</strong>{' '}
                                    e <strong>Mobile</strong>
                                </h2>
                                {/* Container My Socials */}
                                <MySocials className="mt-4" />
                            </div>
                            {/* Container My Logo */}
                            <div className="px-4 hidden lg:block">
                                <img
                                    src={creatorImg}
                                    alt="Criador do website"
                                    className="delaySmallReveal md:originRightReveal h-[25rem] drop-shadow-xl shadow-red-500/30 border-2 border-red-600/20 rounded-[5.25rem]"
                                />
                            </div>
                        </div>
                    </Container>

                    <ArrowDownIcon
                        size="1.8rem"
                        role={'button'}
                        className="mx-auto animate-bounce text-white/70 cursor-pointer"
                        onClick={() => scrollToSectionId('s-about-me')}
                    />
                </section>
                {/* About Me Section */}
                <section
                    id="s-about-me"
                    className="relative py-16 after:block after:absolute after:bottom-0 after:h-[2px] after:shadow-sm after:w-full after:rotate-1 after:bg-red-500"
                >
                    <Container className="max-w-[64rem]">
                        <img
                            src={UndrawMoonlightImg}
                            className="w-full sm:w-3/4 mx-auto pb-6 delaySmallReveal"
                        />

                        <SectionTitle
                            text="Sobre mim"
                            className="mb-4 originLeftReveal intervalReveal"
                        />

                        <div role={'list'} className="mt-2 delayMediumReveal">
                            <article
                                role={'listitem'}
                                className="intervalReveal"
                            >
                                <div className="flex gap-1 lg:gap-2 items-center text-red-800 mb-2">
                                    <BriefcaseIcon
                                        className="text-xl lg:text-2xl"
                                        weight="fill"
                                    />
                                    <h3 className="font-light text-lg lg:text-2xl leading-none">
                                        Profissão
                                    </h3>
                                </div>

                                <p>
                                    Bom, eu tenho 10 meses de experiência como{' '}
                                    <abbr title="Desenvolvedor Frontend: mestre das interfaces">
                                        Frontend Developer
                                    </abbr>
                                    , desenvolvendo interfaces como: portais de
                                    vagas, sistemas web, landing pages e painéis
                                    de controle administrativo. Possuo
                                    experiência em entregas de software para
                                    empresas do ramo de varejo, e área contábil.
                                    <br />
                                    Tenho muita afinidade com{' '}
                                    <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                                        JavaScript
                                    </Link>{' '}
                                    e{' '}
                                    <Link href="https://pt-br.reactjs.org/">
                                        ReactJS
                                    </Link>
                                    .
                                </p>
                            </article>

                            <Separator />

                            <article
                                role={'listitem'}
                                className="intervalReveal"
                            >
                                <div className="flex gap-1 lg:gap-2 items-center text-red-800 mb-2">
                                    <HeartIcon
                                        className="text-xl lg:text-2xl"
                                        weight="fill"
                                    />
                                    <h3 className="font-light text-lg lg:text-2xl leading-none">
                                        Interesses
                                    </h3>
                                </div>

                                <p>
                                    Me interesso principalmente por web design,
                                    construção de interfaces centradas no
                                    usuário (UI/UX Design), e{' '}
                                    <abbr title="Leia 'Código limpo', de Robert C. Martin">
                                        clean code
                                    </abbr>
                                    . Também possuo extrema facilidade em
                                    aprender novas tecnologias. Me considero um
                                    desenvolvedor flexível e competente.
                                </p>
                            </article>

                            <Separator />

                            <article
                                role={'listitem'}
                                className="intervalReveal"
                            >
                                <div className="flex gap-1 lg:gap-2 items-center text-red-800 mb-2">
                                    <UserListIcon
                                        className="text-2xl lg:text-3xl"
                                        weight="fill"
                                    />
                                    <h3 className="font-light text-lg lg:text-2xl leading-none">
                                        Quem sou eu
                                    </h3>
                                </div>

                                <p>
                                    Nascido em Pernambuco, já morei em muitos
                                    lugares pelo Brasil. Meu espirito inquieto,
                                    curioso e inovador, me fizeram desde muito
                                    novo - 16 anos - escolher, por amor, a área
                                    de programação. Hoje crio soluções para a
                                    web e para dispositivos móveis, sempre com
                                    um olhar diferenciado no design e na
                                    usabilidade.
                                    <br /> Atualmente tenho 19 anos, e estou
                                    cursando Ciência da Computação.
                                </p>
                            </article>
                        </div>
                    </Container>
                </section>
                {/* My Projects Section */}
                <section id="s-projects" className="py-10 mt-8">
                    <Container>
                        <SectionTitle text="Projetos" className="mx-auto" />

                        <div className="flex flex-wrap justify-center gap-12 mt-12 mb-6 originBottomReveal">
                            <Card />
                            <Card />
                            <Card />
                        </div>

                        <p className="text-center text-lg flex gap-1 items-center justify-center">
                            <Link href="https://github.com/allbertuu?tab=repositories">
                                Clique aqui para ver mais projetos
                            </Link>

                            <GithubLogoIcon size="1.125rem" />
                        </p>
                    </Container>
                </section>
            </main>

            {/* <Footer /> */}

            <ArrowUp />
        </>
    );
}

export default App;
