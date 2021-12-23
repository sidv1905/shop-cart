import styles from "./CartTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "col1", headerName: "ID", width: 150 },
  { field: "col2", headerName: "Date", width: 150 },
  { field: "col3", headerName: "Amount of Items", width: 150 },
  { field: "col4", headerName: "Total Price", width: 150 },
];
export default function CartTable() {
  const idofUser = useSelector((state) => state.cartReducer.selectedId);
  const [cartData, setCartData] = useState([]);

  useEffect(async () => {
    console.log(idofUser);
    const res = await axios.get(
      `https://fakestoreapi.com/carts/user/${idofUser}`
    );

    console.log(res.data);
    setCartData(res.data);
  }, []);
  return (
    <div className={styles.cartable}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
