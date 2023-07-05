import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Styles from "../../styles/Categories.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Scrollbar } from "react-scrollbars-custom";
import AddedCartItems from "@/components/addedCartItems";


const CardBox = styled(Box)`
  width: 8rem;
  border: 1px solid #d3cede;
  border-radius: 10px;
  position: relative;
  text-align: center;
  // margin:auto;

  & > a:hover {
    background-color: yellow;
  }
`;

const Image = styled("img")`
  width: 2rem;
  height: 2rem;
`;

const Container = styled(Box)`
  margin: 0px 10vh;
  position:static;
`;
const ArrowBox = styled(Box)`
  padding: 10px;
  // margin:10px;
`;

const ScrollBox = styled(Box)`
 overflow:auto;
 height:20rem;
  
`



const AddedCarts = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems)
  return (
    <>
<AddedCartItems/>
    </>
  );
};
export default AddedCarts;
