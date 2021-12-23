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
  { field: "col1", headerName: "Product ID", width: 150 },
  { field: "col2", headerName: "Date", width: 150 },
  { field: "col3", headerName: "Amount of Items", width: 150 },
  { field: "col4", headerName: "Total Price", width: 150 },
];
export default function CartTable() {
  const idofUser = useSelector((state) => state.cartReducer.selectedId);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(idofUser, "idofUser");

  useEffect(async () => {
    setLoading(true);
    console.log(idofUser);
    let allProductData = [];
    const resCart = await axios.get(
      `https://fakestoreapi.com/carts/user/${idofUser}`
    );
    console.log(resCart.data);
    for (let j = 0; j < resCart.data.length; j++) {
      console.log(resCart.data[j]);
      for (let i = 0; i < resCart.data[j].products.length; i++) {
        console.log(resCart.data[j].products[i]);
        const getProductDetail = await axios.get(
          `https://fakestoreapi.com/products/${resCart.data[j].products[i].productId}`
        );

        console.log(getProductDetail.data, "PRODUCT INFO");
        allProductData.push({
          id: resCart.data[j].id,
          col1: resCart.data[j].products[i].productId,
          col2: resCart.data[j].date,
          col3: resCart.data[j].products[i].quantity,
          col4: getProductDetail.data.price,
        });
      }
    }

    console.log(allProductData, "allproduct data");
    setLoading(false);
    setCartData(allProductData);
  }, [idofUser]);
  return (
    <div className={styles.cartable}>
      {!loading && <DataGrid rows={cartData} columns={columns} />}
    </div>
  );
}
/*
console.log(resCart.data[j].products, "every product");


}*/
