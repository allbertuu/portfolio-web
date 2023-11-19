type TExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

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
