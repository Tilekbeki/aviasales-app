import Logo from "../Logo";
import Options from "../Options";
import TicketList from "../TicketList/TicketList";
import Tabs from "../Tabs";
import Pagination from "../Pagination";
import "./App.scss";
import { useSelector } from "react-redux";

const App = () => {
  const { loading, error } = useSelector((state) => state.tickets);
  return (
    <>
      <header className="header">
        <Logo />
      </header>
      <div className="app-container">
        <Options />
        <main className="main">
          <Tabs />
          <TicketList />
          {!loading && !error && <Pagination />}
        </main>
      </div>
    </>
  );
};

export default App;
