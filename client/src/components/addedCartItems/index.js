import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector,useDispatch } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useRouter } from 'next/router'
import { increaseCartPrice,decreaseCartPrice } from "@/redux/cartSlice";


const Image = styled("img")`
  width: 2rem;
  height: 2rem;
`;

const Container = styled(Box)`
  margin: 0px 10vh;
  position: static;
`;
const ArrowBox = styled(Box)`
  padding: 10px;
  // margin:10px;
`;

const ScrollBox = styled(Box)`
  overflow: auto;
  height: 20rem;
`;

const AddedCartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const countCart=useSelector((state)=>state.cart.countCart)
  console.log(countCart)
  const router = useRouter()
  const dispatch=useDispatch()
  // console.log(cartItems)
  return (
    <>
      <Container>
        <ArrowBox>
          <ArrowBackIcon onClick={()=>router.back()} />
          <h4 style={{ display: "inline-block" }}>continue Shopping</h4>
        </ArrowBox>
        <Divider variant="middle" />

        <Box sx={{ margin: "3vh 0" }}>
          <h1>Shopping Cart</h1>
          <p style={{ margin: "2vh 0" }}>
            you have {cartItems.length} items in Shopping Cart
          </p>
        </Box>

        <ScrollBox>
          {cartItems.map((item) => {
            return (
              <>
                <div
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto",
                  }}
                >
                  <Image src={`/uploads/${item?.pic}`} />

                  <Box>
                    <Typography>{item.title}</Typography>
                    <Typography style={{ fontSize: "0.5rem" }}>
                      {item.categories}
                    </Typography>
                  </Box>  
                  <Box>
                    <button onClick={()=>dispatch(increaseCartPrice(item._id))}>+</button>{countCart}
{/* {{countCart>0?countCart*item.price:item.price} } */}
                    <button onClick={()=>dispatch(decreaseCartPrice(item._id))}>-</button>
                  </Box>
                  <DeleteOutlinedIcon />
                  <Box />
                  <Box>
                    <Typography></Typography>
                  </Box>
                </div>
                <Divider variant="fullwidth" />
              </>
            );
          })}
        </ScrollBox>
      </Container>
    </>
  );
};
export default AddedCartItems;
