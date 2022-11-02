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
        url: 'https://www.linkedin.com/in/nathan-capiaux-a08888158/',
        label: 'LinkedIn',
        icon: 'ri-linkedin-fill',
    },
    {
        url: 'https://github.com/Nactik',
        label: 'GitHub',
        icon: 'ri-github-fill',
    },
];

export const Navbar = ({ setTheme = (string: string) => {} }) => {
    const getIcons = (className?: string) => {
        if (className != null) {
            return <i className={`h-6 w-6 ${className}`}></i>;
        }

        return;
    };

    return (
        <nav className="flex flex-row justify-between items-center h-14 fixed w-full z-20 top-0 left-0 bg-ctp-base">
            <div className="p-3 min-w-max text-ctp-text font-medium text-xl h-full">
                Nathan Capiaux<span className="text-ctp-flamingo">.</span>
            </div>
            <ul className="flex flex-row m-0 h-full items-center">
                {navItems.map((element: NavItem) => {
                    return (
                        <a href={element.url}>
                            <li className="flex flex-row justify-evenly h-full min-w-max font-medium p-3 mr-2 text-ctp-text border-b-2 border-b-ctp-base hover:border-b-ctp-flamingo hover:text-ctp-flamingo">
                                {getIcons(element.icon)}
                                {element.label}
                            </li>
                        </a>
                    );
                })}
                <li className="p-3 mr-2 h-full ">
                    <ThemeSwitcher setTheme={setTheme}></ThemeSwitcher>
                </li>
            </ul>
        </nav>
    );
};
