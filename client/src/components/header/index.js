import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';

const Component=styled(AppBar)`
background-color: white;
width='100%'


`
const Container=styled(Toolbar)`
    // justify-content:center;
    & > ul,path,input,a {
        padding:6px 20px ;
        color:black;
        text-decoration:none;
    } 
    @media only screen and (max-width: 600px) {
       ul,input{
        display:none;
       }
       a{
        position:static;
       }
       path,a{
        margin-left:200px;

       }
      }



`




const Header = () => {
  const {cartItems}=useSelector((state)=>state.cart)
  console.log(cartItems)
  return (
  <Component >
        <Container >
         <Link href="/home">
           <img
        style={{float:'left'}}
      src="/uploads/ecommerce_logo.png"
      width="150vh"
      height={80}

      alt="Picture of the author"
    
    />      
    </Link>  
           
            <ul href='/about'>ABOUT</ul>
            <ul href='/product'>PRODUCT</ul>
            <ul href='/contact'><u>+977980566504</u></ul>
            <TextField sx={{mb:3}}   size="smaall" label="serach" variant="standard" />
            {/* <div style={{position:'relative',width:'10px'}}> */}
            <p style={{position:'absolute',color:'black'}}>{cartItems.length}</p>

            <Link href="/addedCarts"><ShoppingCartOutlinedIcon/></Link>
            {/* </div> */}


           
           
            <MenuIcon/>
           


        </Container>
    </Component> 


 
  )
}

export default Header