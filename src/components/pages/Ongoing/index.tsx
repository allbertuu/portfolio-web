import {
    Coffee,
    Eye,
    GithubLogo,
    LinkedinLogo,
    Question,
    Stack,
} from 'phosphor-react';
import { FunctionComponent } from 'react';
import Link from '@atoms/Link';

interface OngoingPageProps {}

const OngoingPage: FunctionComponent<OngoingPageProps> = () => {
    return (
        <main className="container text-white/90 max-w-[1000px] mx-auto px-6 min-h-screen flex flex-col justify-center">
            <div className="text-center">
                <h1 className="text-2xl mb-4 px-2 py-0 bg-red-500 w-fit mx-auto">
                    Calma aí! Pega um café primeiro{' '}
                    <Coffee className="inline-block" />
                </h1>

                <p className="text-lg text-justify">
                    Estou atualmente reformulando este projeto, que contará com
                    diversas melhorias estéticas, de código e usabilidade.
                </p>

                <hr className="border-t-2 mb-1 mt-8 border-t-red-500 w-2/4 mx-auto" />

                <h2
                    className="relative text-xl before:inline-block
                    before:absolute before:right-[105%] before:w-1 before:h-full
                    w-fit mx-auto text-red-500 font-bold flex items-center gap-2"
                >
                    Mas para que isso tudo serve? <Question weight="fill" />
                </h2>

                <hr className="border-t-2 mt-1 mb-4 border-t-red-500 w-2/4 mx-auto" />

                <p className="text-lg text-justify">
                    Este portfolio website serve para me apresentar, contar um
                    pouco da minha trajetória no mundo da programação, mostrar
                    alguns dos meus melhores projetos, e oferecer uma forma de
                    entrar em contato comigo diretamente.
                </p>

                <hr className="border-t-2 mb-1 mt-8 border-t-red-500 w-2/4 mx-auto" />

                <h2
                    className="relative text-xl before:inline-block
                    before:absolute before:right-[105%] before:w-1 before:h-full
                    w-fit mx-auto text-red-500 font-bold flex items-center gap-2"
                >
                    Tô curioso sobre as stacks <Stack weight="fill" />
                </h2>

                <hr className="border-t-2 mt-1 mb-4 border-t-red-500 w-2/4 mx-auto" />

                <p className="text-lg text-justify">
                    Farei isso utilizando de tecnologias como{' '}
                    <Link href="https://www.radix-ui.com/">Radix.ui</Link>,{' '}
                    <Link href="https://tailwindcss.com/">TailwindCSS</Link>,{' '}
                    <Link href="https://atomicdesign.bradfrost.com/chapter-2/">
                        Atomic Design Architecture
                    </Link>
                    ,{' '}
                    <Link href="https://testing-library.com/docs/react-testing-library/intro/">
                        testes unitários com Testing Library
                    </Link>
                    , <Link href="https://pt-br.reactjs.org/">ReactJS</Link> +{' '}
                    <Link href="https://www.typescriptlang.org/">
                        TypeScript
                    </Link>{' '}
                    e <Link href="https://sass-lang.com/">Sass/SCSS</Link>.
                </p>

                <h2
                    className="relative mt-6 text-xl before:inline-block
                    before:absolute before:right-[105%] before:w-1 before:h-full
                    w-fit mx-auto text-red-500 font-bold flex items-center gap-2"
                >
                    Onde me encontrar <Eye />
                </h2>

                <p className="flex justify-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                        <Link href="https://www.linkedin.com/in/albertov-albuquerque/">
                            Meu LinkedIn
                        </Link>
                        <LinkedinLogo
                            size="1.4rem"
                            weight="fill"
                            className="text-red-500"
                        />
                    </div>
                    <div className="flex items-center gap-1">
                        <Link href="https://github.com/allbertuu">
                            Meu GitHub
                        </Link>
                        <GithubLogo
                            size="1.4rem"
                            weight="fill"
                            className="text-red-500"
                        />
                    </div>
                </p>

                <p className="text-lg fixed underline bottom-4 left-0 right-0">
                    Nunca desista dos seus sonhos.
                </p>
            </div>
        </main>
    );
};

export default OngoingPage;
