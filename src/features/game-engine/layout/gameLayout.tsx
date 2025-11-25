import logoUrl from '../../../assets/logo.svg';

export function GameLayout(props: React.PropsWithChildren) {
  return <div className="flex min-h-[90vh] flex-1 flex-col items-center justify-center p-8 lg:flex-row">{props.children}</div>;
}

export function GameBackground(props: React.PropsWithChildren) {
  return (
    <div className="game-background min-h-screen">
      <img src={logoUrl} style={{ viewTransitionName: 'logo' }} className="fixed left-10 size-30" />
      <div className="overflow-x-hidden pt-15">{props.children}</div>
    </div>
  );
}
