import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

export const ThemeSwitcher = ({ setTheme = (string: string) => {} }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const checkHandler = () => {
        setIsChecked(!isChecked);
        const selectedTheme: string = isChecked ? 'ctp-latte' : 'ctp-frappe';
        setTheme(selectedTheme);
    };

    return (
        <label htmlFor="themeToggle" className="flex flex-row flew-nowrap relative justify-evenly  cursor-pointer">
            <input
                type="checkbox"
                value=""
                id="themeToggle"
                className="sr-only peer"
                checked={isChecked}
                onChange={checkHandler}
            />
            {isChecked ? (
                <SunIcon className="h-6 w-6 text-ctp-text hover:text-ctp-flamingo"></SunIcon>
            ) : (
                <MoonIcon className="h-6 w-6 text-ctp-text hover:text-ctp-flamingo"></MoonIcon>
            )}
        </label>
    );
};
