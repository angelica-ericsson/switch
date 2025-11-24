import { forwardRef } from 'react';
import { Handle, useNodeConnections, type HandleProps } from '@xyflow/react';

import { cn } from '@/lib/utils';

export type NumberedHandleProps = HandleProps & {
  number: string;
};

export const NumberedHandle = forwardRef<HTMLDivElement, NumberedHandleProps>(({ className, number, ...props }, ref) => {
  const connections = useNodeConnections({
    handleType: props.type,
    handleId: props.id ?? undefined,
  });

  return (
    <Handle
      ref={ref}
      className={cn(
        'text-md dark:border-secondary dark:bg-secondary inline-flex w-fit shrink-0 items-center justify-center rounded-md border border-gray-600! bg-white! px-2.5 py-0.5 font-medium whitespace-nowrap transition',
        className,
      )}
      // limit the connection to only 1 outgoing connection
      isConnectable={props.type === 'target' || (props.type === 'source' && connections.length === 0)}
      {...props}
    >
      {number}
    </Handle>
  );
});

NumberedHandle.displayName = 'NumberedHandle';
