import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../../styles/Header.module.css';
import styled from '@emotion/styled';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Component=styled(AppBar)`
background-color: white;
width='100%'


`
const Container=styled(Toolbar)`
    justify-content:center;
    & > a {
        padding:10px 50px ;
        color:black;
        text-decoration:none;
    }
`




const Header = () => {
  return (
  <Component >
        <Container >
            <Link href='/home'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <TextField sx={{mb:3}} label="serach" variant="standard" />
            <Link href='/contact'><u>+977980566504</u></Link>
            
            <Link href=''><ShoppingCartOutlinedIcon/></Link>


        </Container>
    </Component> 



   
   
  
 
   
  )
}

export default Header