import budgetEmail from '@/data/budgetEmail.json';
import { EnvelopeSimple } from '@phosphor-icons/react';

export const BudgetContact: React.FC = () => {
  const emailLink = `mailto:${budgetEmail.recipient}?subject=${budgetEmail.subject}&body=${budgetEmail.body}`;

  return (
    <a
      title="Contato"
      className="originRightReveal btn btn-accent gap-2"
      href={emailLink}
    >
      <EnvelopeSimple weight="fill" className="text-xl text-white" />
      Obtenha um Orçamento Agora
    </a>
  );
};
