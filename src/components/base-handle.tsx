import { forwardRef } from 'react';
import { Handle, useNodeConnections, type HandleProps } from '@xyflow/react';

import { cn } from '@/lib/utils';

export type BaseHandleProps = HandleProps;

export const BaseHandle = forwardRef<HTMLDivElement, BaseHandleProps>(({ className, children, ...props }, ref) => {
  const connections = useNodeConnections({
    handleType: props.type,
    handleId: props.id ?? undefined,
  });

  return (
    <Handle
      ref={ref}
      className={cn(
        'min-h-5! min-w-5! rounded-md border border-gray-600! bg-white! transition dark:border-secondary dark:bg-secondary',
        className,
      )}
      // limit the connection to only 1 outgoing connection
      isConnectable={props.type === 'target' || (props.type === 'source' && connections.length === 0)}
      {...props}
    >
      {children}
    </Handle>
  );
});

BaseHandle.displayName = 'BaseHandle';
