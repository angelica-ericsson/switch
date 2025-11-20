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
        'inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-md font-medium w-fit whitespace-nowrap shrink-0 border border-gray-600! bg-white! transition dark:border-secondary dark:bg-secondary',
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
