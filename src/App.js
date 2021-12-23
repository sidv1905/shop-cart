import UserTable from "./components/UserTable";
import CartTable from "./components/CartTable";
import Header from "./components/Header";
import SummaryModal from "./components/SummaryModal";
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  return (
    <div className="App">
      <Header />
      <SummaryModal />
      <div className="grid">
        <UserTable />
        <CartTable />
      </div>
    </div>
  );
}

export default App;
