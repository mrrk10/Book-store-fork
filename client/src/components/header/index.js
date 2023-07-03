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
       img{
        position:static;
       }
       path,a{
        margin-left:200px;

       }
      }



`




const Header = () => {

  return (
  <Component >
        <Container >
         
           <img
        style={{float:'left'}}
      src="/uploads/ecommerce.jpg"
      width="20%"
      height={80}

      alt="Picture of the author"
    
    />        
           
            <ul href='/about'>ABOUT</ul>
            <ul href='/home'>CAREER</ul>
            <ul href='/contact'><u>+977980566504</u></ul>
            <TextField sx={{mb:3}}   size="smaall" label="serach" variant="standard" />
            <Link href='/addCartItem'><ShoppingCartOutlinedIcon/></Link>


           
            <MenuIcon/>
           


        </Container>
    </Component> 



   
   
  
 
   
  )
}

export default Header