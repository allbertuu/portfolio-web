import GitHubIcon from '@/assets/icons/GitHub';

export const SideProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-10 pb-14 mt-6 border-b-2 border-b-accent"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="section__title mx-auto originLeftReveal">
          Meus projetos
        </h2>

        <p className="mt-4 text-center text-lg originBottomReveal">
          Abaixo você encontra facilmente os{' '}
          <strong>meus melhores projetos de software</strong> aberto (
          <i>open-source</i>).
        </p>

        <p className="mb-4 text-center text-lg originBottomReveal">
          Todos com ótima apresentação 🎀, documentação 📘 e tudo que você
          precisa saber para entender o projeto <strong>rápido</strong>!
        </p>

        <a
          className="mx-auto no-underline mt-6 flex w-fit items-center gap-2 rounded-md bg-white px-4 py-2 text-lg font-bold text-black  originBottomReveal"
          href="http://github.com/allbertuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fill="#000" />
          Perfil no GitHub
        </a>
      </div>
    </section>
  );
};
