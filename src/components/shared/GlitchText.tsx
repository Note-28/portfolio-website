
import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  inline?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className, inline = false }) => {
  return (
    <span className={cn('glitch-container', inline ? 'inline-block' : '', className)}>
      <span className="glitch-text" data-text={text}>
        {text}
      </span>
    </span>
  );
};

export default GlitchText;
