import { ThemeSwitcher } from '../../components/ThemeSwitcher';

interface NavItem {
    url: string;
    label: string;
    icon?: string;
}

const navItems: NavItem[] = [
    {
        url: '#about',
        label: 'About Me',
    },
    {
        url: '#projects',
        label: 'Projects',
    },
    {
        url: 'https://github.com/Nactik',
        label: 'GitHub',
    },
    {
        url: 'https://github.com/Nactik',
        label: 'GitHub',
    },
    {
        url: 'https://github.com/Nactik',
        label: 'GitHub',
    },
];

export const Navbar = ({ setTheme = (string: string) => {} }) => {
    return (
        <nav className="flex flex-row justify-between">
            <div className="p-3 text-ctp-text">Nathan Capiaux</div>
            <ul className="flex flex-row">
                {navItems.map((element: NavItem) => {
                    return (
                        <a href={element.url} target="blank">
                            <li className="p-3 mr-2 text-ctp-text">{element.label}</li>
                        </a>
                    );
                })}
                <li className="p-3 mr-2">
                    <ThemeSwitcher setTheme={setTheme}></ThemeSwitcher>
                </li>
            </ul>
        </nav>
    );
};
