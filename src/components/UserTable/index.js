import styles from "./UserTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "col1", headerName: "Name", width: 150 },
  { field: "col2", headerName: "Email ID", width: 150 },
  { field: "col3", headerName: "Address", width: 150 },
  { field: "col4", headerName: "Phone", width: 150 },
];

export default function UserTable() {
  const [userData, setuserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [selectionModel, setSelectionModel] = useState({});
  console.log(selectionModel);
  useEffect(async () => {
    setLoading(true);
    const res = await axios.get("https://fakestoreapi.com/users");
    let finalRes = res.data.map((item, index) => {
      return {
        id: index + 1,
        col1: `${item.name.firstname} ${item.name.lastname}`,
        col2: item.email,
        col3: `${item.address.street},${item.address.city}`,
        col4: item.phone,
      };
    });

    setuserData(finalRes);
    setLoading(false);
  }, []);

  function changeUser(userId) {
    dispatch({
      type: "CHANGE_ID",
      selectedId: userId,
    });
  }
  return (
    <div className={styles.UserTable}>
      {loading && <CircularProgress color="secondary" />}

      {!loading && (
        <DataGrid
          rows={userData}
          columns={columns}
          onSelectionModelChange={(newSelectionModel) => {
            changeUser(newSelectionModel[0]);
          }}
        />
      )}
    </div>
  );
}
