import { forwardRef } from 'react';
import { Handle, type HandleProps } from '@xyflow/react';

import { cn } from '@/lib/utils';

export type BaseHandleProps = HandleProps;

export const BaseHandle = forwardRef<HTMLDivElement, BaseHandleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Handle
        ref={ref}
        className={cn(
          'min-h-4! min-w-4! rounded-full border border-gray-600! bg-white! transition dark:border-secondary dark:bg-secondary',
          className,
        )}
        {...props}
      >
        {children}
      </Handle>
    );
  },
);

BaseHandle.displayName = 'BaseHandle';
