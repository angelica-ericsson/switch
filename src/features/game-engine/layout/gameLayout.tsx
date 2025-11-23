import { useGameState } from '../state';
import logoUrl from '../../../assets/logo.svg';

export function GameLayout(props: React.PropsWithChildren) {
  const state = useGameState((state) => state);

  return (
    <div className="min-h-screen game-background">
      <img src={logoUrl} style={{ viewTransitionName: 'logo' }} className="size-30 fixed left-10" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center  p-8 min-h-[90vh]">{props.children}</div>

      {/* Debug Bar */}
      <div className="flex gap-4 text-white">
        {Object.entries(state).map((entry) => {
          if (typeof entry[1] === 'function' || typeof entry[1] === 'object') return;
          return (
            <div key={entry[0]}>
              {entry[0]}: {JSON.stringify(entry[1])}
            </div>
          );
        })}
      </div>
    </div>
  );
}
