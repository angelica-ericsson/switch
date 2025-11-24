import { cn } from '@/lib/utils';
import { BadgeCheck, Bird } from 'lucide-react';

interface FakeTweetProps {
  text: string;
  displayName: string;
  userName: string;
  picture: string;
  className?: string;
}

export const FakeTweet = ({ text, displayName, userName, picture, className, ...props }: FakeTweetProps) => {
  return (
    <div
      className={cn('relative flex h-fit w-full max-w-lg flex-col gap-2 overflow-hidden rounded-lg border bg-white p-4', className)}
      {...props}
    >
      <div className="flex flex-row justify-between tracking-tight">
        <div className="flex items-center space-x-2">
          <img height={48} width={48} src={picture} className="overflow-hidden rounded-full border border-transparent" />

          <div>
            <p className="flex items-center font-semibold whitespace-nowrap">
              {displayName}
              <BadgeCheck className="ml-1 inline size-4 text-blue-500" />
            </p>
            <div className="flex items-center space-x-1">
              <p className="text-sm text-gray-500 transition-all duration-75">@{userName}</p>
            </div>
          </div>
        </div>

        <Bird className="size-5 items-start text-blue-500" />
      </div>
      <div className="leading-normal tracking-tighter wrap-break-word">{text}</div>
    </div>
  );
};
