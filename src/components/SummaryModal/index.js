import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SummaryModal() {
  const [open, setOpen] = useState(false);
  const [allDetails, setAllDetails] = useState({});
  const proData = useSelector((state) => state).ProductsReducer.data;
  useEffect(() => {
    if (proData.length > 0) {
      setAllDetails(proData);

      console.log(proData, " prodata");
      const totalPrice = proData.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);

      // get product with maximum price from proData

      const maxPriceProduct = proData.reduce((acc, cur) => {
        return acc.price > cur.price ? acc : cur;
      });

      // get product which was bought reccently from proData

      const recentProduct = proData.reduce((acc, cur) => {
        return acc.date > cur.date ? acc : cur;
      });
      setAllDetails({
        totalPrice,
        maxPriceProduct,
        recentProduct,
      });
      console.log("TOTAL PRICE", totalPrice, maxPriceProduct, recentProduct);
    } else {
      console.log("NO PRODUCTS");
    }
  }, [proData]);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Summary
      </Button>
      {Object.keys(allDetails).length > 0 && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              TOTAL PRICE OF CART: {allDetails.totalPrice}
            </Typography>
            <Typography sx={{ mt: 2 }} variant="h6">
              1. Product with Max Price :
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {allDetails.maxPriceProduct.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Price is : {allDetails.maxPriceProduct.price}
            </Typography>
            <Typography sx={{ mt: 2 }} variant="h6">
              2. Product Bought Recently :
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Price is : {allDetails.recentProduct.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Price is : {allDetails.recentProduct.price}
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}
