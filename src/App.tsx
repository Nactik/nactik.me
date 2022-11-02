import { useState } from 'react';
import './App.scss';
import { Navbar } from './layouts/Navbar';
import { AboutMe } from './layouts/AboutMe';

function App() {
    const [theme, setTheme] = useState<string>('ctp-latte');

    return (
        <div className={`App min-h-screen max-h-fit ${theme} bg-ctp-base font-mono`}>
            <Navbar setTheme={setTheme}></Navbar>
            <AboutMe></AboutMe>
        </div>
    );
}

export default App;
