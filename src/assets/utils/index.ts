export const scrollToSectionId = (id: string) => {
    if (!id) {
        throw new Error('Informe o ID da seção.');
    }

    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
        });
    } else {
        throw new Error('ID de seção informado não existe na árvore DOM.');
    }
};

export const scrollWindowToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

export const convertWeekdayNumberToString = (numberWeekday: number) => {
    switch (numberWeekday) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            break;
    }
};
