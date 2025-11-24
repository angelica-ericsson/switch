import { useGameState } from '../state';
import logoUrl from '../../../assets/logo.svg';
import { StatusBar } from './statusBar';

export function GameLayout(props: React.PropsWithChildren) {
  const state = useGameState((state) => state);

  return (
    <>
      {/* Main Content */}
      <div className="flex min-h-[90vh] flex-1 flex-col items-center justify-center p-8 lg:flex-row">{props.children}</div>

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
    </>
  );
}

export function GameBackground(props: React.PropsWithChildren) {
  return (
    <div className="game-background min-h-screen">
      <StatusBar />
      <img src={logoUrl} style={{ viewTransitionName: 'logo' }} className="fixed left-10 size-30" />
      <div className="pt-15">{props.children}</div>
    </div>
  );
}
