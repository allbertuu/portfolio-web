import { classNames } from '@utils/index';
import { FunctionComponent } from 'react';
import { ISectionTitleProps } from './types';

const SectionTitle: FunctionComponent<ISectionTitleProps> = ({
    text,
    ...props
}) => {
    return (
        <h1
            {...props}
            className={classNames(
                props.className || '',
                'relative w-fit',
                'text-2xl lg:text-4xl text-white font-bold',
                'after:block after:absolute after:h-[2px] after:w-2/5 after:right-0 after:bg-red-500',
            )}
        >
            {text}
        </h1>
    );
};

export default SectionTitle;
