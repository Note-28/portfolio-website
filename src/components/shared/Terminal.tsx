
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalLineProps {
  children: React.ReactNode;
  command?: boolean;
  delay?: number;
  className?: string;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({
  children,
  command = false,
  delay = 0,
  className
}) => {
  return (
    <div 
      className={cn(
        'terminal-line opacity-0', 
        className
      )}
      style={{
        animation: `fade-in-up 0.5s ease-out forwards`,
        animationDelay: `${delay}s`
      }}
    >
      {command && <span className="terminal-prompt">$</span>}
      <div>{children}</div>
    </div>
  );
};

interface TerminalProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({
  title = "terminal@manan:~",
  className,
  children
}) => {
  return (
    <div className={cn('terminal-window', className)}>
      <div className="terminal-header">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-cyber-red"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-yellow"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
        </div>
        <div className="text-xs text-gray-400">{title}</div>
        <div className="w-4"></div>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
};
