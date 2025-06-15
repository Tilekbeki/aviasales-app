import Logo from '../Logo';
import Options from '../Options'
import TicketList from '../TicketList/TicketList';
import Tabs from '../Tabs';
import Pagination from '../Pagination';
import './App.scss'
const App = () => {
    return (
        <>
        <header className="header">
                <Logo />
            </header>
        <div className="app-container">
            
            <Options/>
            <main className="main">
                {/* Other components will go here */}
                <Tabs/>
                <TicketList/>
                <Pagination/>
            </main>
        </div>
        </>
    );
}

export default App;