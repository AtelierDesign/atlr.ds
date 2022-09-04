import React from 'react';
import { Button } from '../components/Button';
import { darkTheme } from '../../stitches.config';

export function DarkThemeButton() {
  const [theme, setTheme] = React.useState('theme-default');

  React.useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Button
      size="1"
      variant="atelier"
      style={{ position: 'relative', margin: '0' }}
      onClick={() => setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')}
    >
      Toggle theme
    </Button>
  );
}
