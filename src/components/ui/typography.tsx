import React from 'react';
import clsx from 'clsx';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ variant, className, children }) => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return (
    <Tag className={clsx('text-gray-800', className)}>
      {children}
    </Tag>
  );
};

export default Typography;
