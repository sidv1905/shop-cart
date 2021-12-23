import UserTable from "./components/UserTable";
import CartTable from "./components/CartTable";
import Header from "./components/Header";
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const appTheme = useSelector((state) => state.userReducer);
  console.log(appTheme);
  return (
    <div className="App">
      <Header />
      <div className="grid">
        <UserTable />
        <CartTable />
      </div>
    </div>
  );
}

export default App;
