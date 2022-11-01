import { useState } from 'react';
import './App.scss';
import { Navbar } from './layouts/Navbar';

function App() {
    const [theme, setTheme] = useState<string>('ctp-latte');

    return (
        <div className={`App min-h-screen ${theme} bg-ctp-base`}>
            <Navbar setTheme={setTheme}></Navbar>
        </div>
    );
}

export default App;
