import { ArrowUp, Container, SectionTitle, Link } from '@atoms/index';
import { Card, MySocials } from '@molecules/index';
import { Header } from '@organisms/index';
import { ArrowDown, GithubLogo } from 'phosphor-react';
import imgLogo from '@imgs/logo.svg';
import { initScrollReveal } from '@scripts/scrollReveal';
import { useEffect } from 'react';
import { scrollToSectionId } from './utils';

function App() {
    useEffect(() => {
        initScrollReveal();
    }, []);

    return (
        <>
            <Header />

            <main className="mt-[4.375rem] overflow-hidden">
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
                                    Desenvolvedor <strong>Frontend Web</strong> e <strong>Mobile</strong>
                                </h2>
                                {/* Container My Socials */}
                                <MySocials className="mt-4" />
                            </div>
                            {/* Container My Logo */}
                            <div className="px-4 hidden lg:block">
                                <img
                                    src={imgLogo}
                                    alt="Logo vermelha"
                                    className="originRightReveal h-[25rem] drop-shadow-xl shadow-red-500/30"
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

                <section className="py-10 bg-red-600">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>Icon</div>

                            <div>
                                <SectionTitle className="text-left">
                                    Sobre mim
                                </SectionTitle>

                                <p>
                                    Minha história na programação. Objetivo
                                    profissional.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="py-10">
                    <Container>
                        <SectionTitle className="text-center">
                            Projetos
                        </SectionTitle>

                        <div className="flex flex-wrap justify-center gap-12 mt-12 mb-6">
                            <Card />
                            <Card />
                            <Card />
                        </div>

                        <p className="text-center text-lg flex gap-1 items-center justify-center">
                            <Link
                                href="https://github.com/allbertuu?tab=repositories"
                                className="[&~svg]:hover:opacity-80"
                            >
                                Clique aqui para ver mais dos meus projetos
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
