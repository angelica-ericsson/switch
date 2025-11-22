import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function GameNativeSelect({ className, ...props }: React.ComponentProps<'select'>) {
  return (
    <div className="group/native-select relative w-fit has-[select:disabled]:opacity-50" data-slot="native-select-wrapper">
      <select
        data-slot="native-select"
        className={cn(
          'ring-2 ring-thistle-800 bg-thistle-50',
          'placeholder:text-muted-foreground selection:text-primary-foreground h-9 w-full min-w-0 appearance-none rounded-md px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed',
          'focus-visible:border-thistle-700 focus-visible:ring-thistle-700/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive aria-invalid:bg-destructive/10 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className,
        )}
        {...props}
      />
      <ChevronDownIcon
        className="text-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
}

export { GameNativeSelect };
