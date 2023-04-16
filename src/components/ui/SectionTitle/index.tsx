import { classNames } from '@utils/index';
import { FunctionComponent } from 'react';
import { ISectionTitleProps } from './types';

const SectionTitle: FunctionComponent<ISectionTitleProps> = ({
    text,
    ...props
}) => {
    return (
        <h2
            {...props}
            className={classNames(
                props.className || '',
                'relative w-fit',
                'text-white font-bold',
                'after:block after:relative after:h-[2px] after:w-2/5 after:bottom-2 after:bg-red-500',
            )}
        >
            {text}
        </h2>
    );
};

export default SectionTitle;
