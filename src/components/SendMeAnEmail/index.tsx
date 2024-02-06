import { sendEmail } from '@/utils';
import { EnvelopeSimple } from '@phosphor-icons/react';

export const draftEmail = {
  subject: 'Olá, Alberto! Acabo de ver seu portfólio, vamos conversar?',
  body: 'Seu email...',
  recipient: 'albertovinicius3@gmail.com',
};

export const SendMeAnEmail: React.FC = () => {
  return (
    <button
      title="Contato"
      className="originRightReveal"
      onClick={() => sendEmail(draftEmail)}
    >
      <EnvelopeSimple
        weight="fill"
        className="-mt-1 mr-2 inline-block text-xl text-white"
      />
      Me mande um e-mail
    </button>
  );
};
