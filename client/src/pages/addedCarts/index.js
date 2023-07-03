import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Styles from "../../styles/Categories.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";


const CardBox = styled(Box)`
width:20%;
  border: 1px solid #d3cede;
  border-radius: 10px;
  position: relative;
  text-align: center;
  margin:auto;
  
  & > a:hover {
    background-color: yellow;
  }
`;

const Image = styled("img")`
  width: 20%;
  height: 100px;
`;


const AddedCarts=()=>{
    const {cartItems}=useSelector((state)=>state.cart)
    // console.log(cartItems)    
    return(
        <>
           {
            cartItems.map((item)=>{
                return(
                    <div style={{width:'100%',margin:'10px 0'}}>
                        <CardBox  >
                        <div
                      className={Styles.EidtDelItem}
                      style={{ position: "absolute", top: 0, right: 0, padding: "10px" }}
                    >
                      <Link href={`/updateDetails/${item._id}`}>
                        {/* <EditButton /> */}
                      </Link>
                    </div>
            
                    <Image src={`/uploads/${item?.pic}`} />
                    <Typography>{item.categories}</Typography>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.username}</Typography>
            
                    {/* <Typography>{fetchData.description}</Typography> */}

                        </CardBox>
                        </div>
                )
            })
           }
        </>
     
    )
    
}
export default AddedCarts