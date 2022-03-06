import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./ToggleSwitch/ToggleSwitch'), {
  ssr: false,
});

function Header() {
  return (
    <div>
      <h1>Todo</h1>
      <ThemeToggle />
    </div>
  );
}

export default Header;
