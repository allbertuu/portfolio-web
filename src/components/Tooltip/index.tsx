import * as RadixTooltip from '@radix-ui/react-tooltip';
import styles from './styles.module.css';

interface TTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TTooltipProps> = ({ children, content }) => {
  return (
    <RadixTooltip.Provider delayDuration={350} skipDelayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={`${styles.TooltipContent} rounded-md text-white bg-accent px-3 py-2 text-sm leading-none shadow-lg TooltipContent`}
            sideOffset={1}
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
