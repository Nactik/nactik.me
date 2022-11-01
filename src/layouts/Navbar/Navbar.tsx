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
];

export const Navbar = ({ setTheme = (string: string) => {} }) => {
    return (
        <nav className="flex flex-row justify-between min-h-[52px] ">
            <div className="p-3 min-w-max text-ctp-text font-medium text-xl">Nathan Capiaux</div>
            <ul className="flex flex-row">
                {navItems.map((element: NavItem) => {
                    return (
                        <a href={element.url}>
                            <li className="min-h-full min-w-max font-medium p-3 mr-2 text-ctp-text hover:border-b-2 hover:border-b-ctp-flamingo hover:text-ctp-flamingo">
                                {element.label}
                            </li>
                        </a>
                    );
                })}
                <li className="p-3 mr-2 min-h-full">
                    <ThemeSwitcher setTheme={setTheme}></ThemeSwitcher>
                </li>
            </ul>
        </nav>
    );
};
