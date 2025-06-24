import { Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type GithubButtonProps = {
  url: string;
  className?: string;
  size?: 'default' | 'sm';
};

export default function GithubButton({ url, className, size = 'default' }: GithubButtonProps) {
  const sizeClasses = {
    default: {
        container: 'h-10 w-10 hover:w-32',
        iconContainer: 'h-10 w-10',
        text: 'text-sm'
    },
    sm: {
        container: 'h-9 w-9 hover:w-28',
        iconContainer: 'h-9 w-9',
        text: 'text-sm'
    }
  }
  
  const s = sizeClasses[size];
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center overflow-hidden bg-card border border-input rounded-full shadow-sm transition-all duration-300 ease-out',
        s.container,
        className
      )}
    >
      <div className={cn(
          "flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-gray-800",
          s.iconContainer
      )}>
        <Github className="h-5 w-5 text-foreground transition-colors duration-300 group-hover:text-white" />
      </div>
      <span className={cn(
          "ml-2 font-medium text-gray-800 whitespace-nowrap",
          s.text
      )}>
        View Code
      </span>
    </a>
  );
}
