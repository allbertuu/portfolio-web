export const classNames = (...classes: string[]) =>
    classes.filter(Boolean).join(' ');

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

export const getWeekdayString = (weekdayNumber: number): string => {
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const isWeekdayValid = weekdayNumber >= 0 && weekdayNumber <= 6;

  if (isWeekdayValid) {
    return weekdays[weekdayNumber];
  }

  throw new Error('Número de dia da semana inválido. Deve estar entre 0 e 6.');
};
