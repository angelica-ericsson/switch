import logoUrl from '../../../assets/logo.svg';
import { StatusBar } from './statusBar';

export function GameLayout(props: React.PropsWithChildren) {
  return <div className="flex min-h-[90vh] flex-1 flex-col items-center justify-center p-8 lg:flex-row">{props.children}</div>;
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
