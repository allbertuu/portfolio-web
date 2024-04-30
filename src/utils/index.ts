/**
 * Utilitário para criação de classNames condicionais, usando frameworks como TailwindCSS.
 *
 * Exemplo: secondary ? 'bg-red-500' : 'bg-blue-500'
 * @returns Um array de string concatenadas.
 */
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const scrollWindowToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const regexWebsiteURL =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;

const isWebsiteURLValid = (urlHref: string) => {
  return regexWebsiteURL.test(urlHref);
};

const getWeekdayString = (weekdayNumber: number): string => {
  const weekdays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const isWeekdayValid = weekdayNumber >= 0 && weekdayNumber <= 6;

  if (isWeekdayValid) {
    return weekdays[weekdayNumber];
  }

  throw new Error('Número de dia da semana inválido. Deve estar entre 0 e 6.');
};

const sendEmail = ({
  subject,
  recipient,
  body,
}: {
  subject: string;
  body: string;
  recipient: string;
}) => {
  const link = `mailto:${recipient}?subject=${subject}&body=${body}`;
  window.location.href = link;
};

export {
  scrollWindowToTop,
  classNames,
  getWeekdayString,
  sendEmail,
  isWebsiteURLValid,
};
