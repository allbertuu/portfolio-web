import { ArrowUp, Container, SectionTitle } from '@atoms/index';
import { Card } from '@molecules/index';
import { Header } from '@organisms/index';
import OngoingPage from './components/pages/Ongoing/index';
import { GithubLogo, Link } from 'phosphor-react';

function App() {
    const i = true;

    if (i) return <OngoingPage />;

    return (
        <>
            <Header />

            <main className="mt-[4.375rem]">
                <section className="pb-10">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-[85vh] gap-8 items-center justify-items-center">
                            <div className="relative px-4 text-center lg:text-left">
                                <h1 className="text-3xl lg:text-6xl font-bold mb-1">
                                    Alberto Santos
                                </h1>

                                <h2 className="text-xl lg:text-3xl font-light italic">
                                    Desenvolvedor Frontend Web e Mobile
                                </h2>
                                {/* <p>Será um prazer te acompanhar por aqui</p> */}
                            </div>

                            <div className="px-4">Meu banner</div>
                        </div>
                    </Container>
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
