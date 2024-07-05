import React from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'p';
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const styles = {
    h1: 'text-3xl font-bold text-primary',
    h2: 'text-2xl font-semibold text-secondary',
    p: 'text-base text-text',
  };

  const Tag = variant;
  return <Tag className={styles[variant]}>{children}</Tag>;
};

export default Typography;
