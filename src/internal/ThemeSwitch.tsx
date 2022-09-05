import React from 'react';
import { AtelierSwitch } from '../components/Switch';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
  // const [theme, setTheme] = React.useState('theme-default');
  const { theme, setTheme } = useTheme();
  /*
      React.useEffect(() => {
          document.body.classList.remove('theme-default', darkTheme);
          document.body.classList.add(theme);
      }, [theme]);

   */

  return (
    <>
      {/* <!-- THEME SWITCH --> */}

      <AtelierSwitch
        onCheckedChange={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
        css={{ marginTop: '7px', lineHeight: '32px' }}
      />
    </>
  );
}
