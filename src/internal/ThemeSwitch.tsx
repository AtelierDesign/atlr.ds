import React from 'react';
import { AtelierSwitch } from '../components/Switch';
import { darkTheme } from '../../stitches.config';

export function ThemeSwitch() {
    const [theme, setTheme] = React.useState('theme-default');

    React.useEffect(() => {
        document.body.classList.remove('theme-default', darkTheme);
        document.body.classList.add(theme);
    }, [theme]);

    return (
        <>
            {/* <!-- THEME SWITCH --> */}

            <AtelierSwitch
                onCheckedChange={() => setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')}
                css={{ marginTop: '7px', lineHeight: '32px' }}
            />
        </>
    );
}
