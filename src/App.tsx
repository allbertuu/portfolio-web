import { ArrowDown, GithubLogo } from 'phosphor-react';
import creatorImg from '@assets/imgs/me.svg';
import { initScrollReveal } from '@scripts/scrollReveal';
import { useEffect } from 'react';
import { scrollToSectionId } from './utils';
import { Card, Header, MySocials } from '@components/index';
import { Container } from '@components/layout';
import { ArrowUp, Link, SectionTitle } from '@components/ui';
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

                    <ArrowDown
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
                            className="w-full sm:w-3/4 mx-auto pb-6"
                        />

                        <SectionTitle text="Sobre mim" />

                        <div className="mt-2">
                            <p>
                                Bom, eu tenho 10 meses de experiência como{' '}
                                <abbr title="Desenvolvedor Frontend: mestre das interfaces">
                                    Frontend Developer
                                </abbr>
                                , desenvolvendo interfaces como: portais de
                                vagas, sistemas web, landing pages e painéis de
                                controle administrativo. Possuo experiência em
                                entregas de software para empresas do ramo de
                                varejo, e área contábil.
                            </p>
                            <hr className="my-4 border-red-500" />
                            <p>
                                Me interesso principalmente por web design,
                                construção de interfaces centradas no usuário
                                (UI/UX Design), e{' '}
                                <abbr title="Leia 'Código limpo', de Robert C. Martin">
                                    clean code
                                </abbr>
                                . Também possuo extrema facilidade em aprender
                                novas tecnologias. Me considero um desenvolvedor
                                flexível e competente.
                            </p>
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

                            <GithubLogo size="1.125rem" />
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
