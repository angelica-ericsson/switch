import { forwardRef, type HTMLAttributes } from 'react';
import { type HandleProps } from '@xyflow/react';

import { cn } from '@/lib/utils';
import { BaseHandle } from '@/components/base-handle';

const flexDirections = {
  top: 'flex-col',
  right: 'flex-row-reverse justify-end',
  bottom: 'flex-col-reverse justify-end',
  left: 'flex-row',
};

const handlePositionCorrections = {
  top: '',
  right: '-right-3!',
  bottom: '',
  left: '',
};

const labelPositionCorrections = {
  top: '',
  right: 'text-right',
  bottom: '',
  left: '',
};

export const LabeledHandle = forwardRef<
  HTMLDivElement,
  HandleProps &
    HTMLAttributes<HTMLDivElement> & {
      title: string;
      handleClassName?: string;
      labelClassName?: string;
    }
>(
  (
    { className, labelClassName, handleClassName, title, position, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      title={title}
      className={cn(
        'relative flex items-center',
        flexDirections[position],
        className,
      )}
    >
      <label
        className={cn(
          'px-3 text-foreground grow',
          labelClassName,
          labelPositionCorrections[position],
        )}
      >
        {title}
      </label>
      <BaseHandle
        position={position}
        className={cn(handleClassName, handlePositionCorrections[position])}
        {...props}
      />
    </div>
  ),
);

LabeledHandle.displayName = 'LabeledHandle';
