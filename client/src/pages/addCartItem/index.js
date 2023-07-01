import { useSelector } from "react-redux"
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Styles from "../../styles/Categories.module.css";
import Link from "next/link";


const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  position: relative;
  text-align: center;
  & > a:hover {
    background-color: yellow;
  }
`;

const Image = styled("img")`
  width: 100%;
  height: 200px;
`;
const EditButton = styled(ModeEditOutlinedIcon)`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #333333;
  color: white;
`;


const addedCartItem = () => {
    const cartItem=useSelector((state)=>state.cart)
    console.log('>>',cartItem)
  return (
    <>
     <Container>
        <div
          className={Styles.EidtDelItem}
          style={{ position: "absolute", top: 0, right: 0, padding: "10px" }}
        >
        </div>

        <Image src={`/uploads/${cartItem?.pic}`} />
        <Typography>{cartItem.categories}</Typography>
        <Typography>{cartItem.title}</Typography>

        {/* <Typography>{fetchData.description}</Typography> */}
      </Container>
    </>
  )
}

export default addedCartItem