import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

export const ThemeSwitcher = ({ setTheme = (string: string) => {} }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const checkHandler = () => {
        setIsChecked(!isChecked);
        const selectedTheme: string = isChecked ? 'ctp-latte' : 'ctp-frappe';
        setTheme(selectedTheme);
    };

    const icon: string = isChecked ? 'ri-moon-fill' : 'ri-sun-fill';

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
            <i className={`h-6 w-6 text-ctp-text hover:text-ctp-flamingo ${icon}`}></i>
        </label>
    );
};
