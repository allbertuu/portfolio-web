interface TExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** If it's an external link, you must provide a href attr, right? */
  href: string;
}

export const ExternalLink: React.FC<TExternalLinkProps> = ({
  children,
  ...props
}) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
