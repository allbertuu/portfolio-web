import { FunctionComponent } from 'react';

interface CardProps {}

const Card: FunctionComponent<CardProps> = () => {
    return (
        <article className="relative rounded max-w-xs border-2 border-red-500 p-4 bg-slate-700 transition-all duration-300 ease-out hover:transform hover:-translate-y-3">
            <h4 className="text-red-500 text-lg lg:text-xl -mb-2 font-semibold">
                Nome do projeto
            </h4>
            <span className="text-white/70 text-[85%] italic">Frontend</span>
            <p className="mt-1 leading-snug">Descrição sobre o projeto</p>
            <div>techs usadas / estilo carrossel de techs da rocketseat </div>
            <a href="#">Repositório no GitHub</a>
        </article>
    );
};

export default Card;
