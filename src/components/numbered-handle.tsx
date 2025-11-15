import { forwardRef } from 'react';
import { Handle, type HandleProps } from '@xyflow/react';

import { cn } from '@/lib/utils';

export type NumberedHandleProps = HandleProps & {
  number: string;
};

export const NumberedHandle = forwardRef<HTMLDivElement, NumberedHandleProps>(({ className, number, ...props }, ref) => {
  return (
    <Handle
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-md font-medium w-fit whitespace-nowrap shrink-0 border border-gray-600! bg-white! transition dark:border-secondary dark:bg-secondary',
        className,
      )}
      {...props}
    >
      {number}
    </Handle>
  );
});

NumberedHandle.displayName = 'NumberedHandle';
