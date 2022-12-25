import { classNames } from '@utils/index';
import { FunctionComponent } from 'react';
import { ICardProps } from './types';

const Card: FunctionComponent<ICardProps> = () => {
    return (
        <article
            className={classNames(
                'relative rounded max-w-xs border-2 border-slate-50/10 p-4 bg-slate-700 cursor-pointer',
                'transition-all duration-300 ease-out',
                'hover:border-red-500 hover:shadow-xl hover:shadow-red-500/30 hover:transform hover:-translate-y-3',
            )}
        >
            <h4 className="text-red-500 text-lg lg:text-xl -mb-2 font-semibold">
                Nome do projeto
            </h4>
            <span className="text-muted text-[85%] italic">Frontend</span>
            <p className="mt-1 leading-snug">Descrição sobre o projeto</p>
            <div>techs usadas / estilo carrossel de techs da rocketseat </div>
            <a href="#">Repositório no GitHub</a>
        </article>
    );
};

export default Card;
