import budgetEmail from '@/data/budgetEmail.json';
import { render, screen } from '@/utils/testUtils';
import { BudgetContact } from '.';

test('button have the budget email link to reach me out', async () => {
  render(<BudgetContact />);

  const button = screen.getByText(/obtenha um orçamento agora/i);
  const emailLink = `mailto:${budgetEmail.recipient}?subject=${budgetEmail.subject}&body=${budgetEmail.body}`;

  expect(button).toHaveAttribute('href', emailLink);
});
