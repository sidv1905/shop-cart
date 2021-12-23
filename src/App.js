import UserTable from "./components/UserTable";
import CartTable from "./components/CartTable";
import Header from "./components/Header";
import "./App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function App() {
  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UserTable />
        </Grid>
        <Grid item xs={6}>
          <CartTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
