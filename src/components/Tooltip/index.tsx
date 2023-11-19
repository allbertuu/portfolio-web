import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TTooltipProps> = ({ children, content }) => {
  return (
    <RadixTooltip.Provider delayDuration={350}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="rounded-md text-white bg-accent px-3 py-2 text-sm leading-none shadow-lg"
            sideOffset={5}
            side="top"
            align="center"
          >
            {content}
            <RadixTooltip.Arrow className="fill-primary" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
