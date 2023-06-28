import { useEffect, useState } from "react";
import Card from "../card";
import { Grid} from "@mui/material"
import Link from "next/link";
import Button from '@mui/material/Button';

// import { useRouter } from "next/router";
// import { useSearchParams } from 'next/navigation'


const AllCategories=()=>{
    const[categoriesData,setCategoriesData]=useState([]);


    const fetcCategoreis=async()=>{
      const res=await fetch(`http://localhost:4000/blogs`)
        const data=await res.json();
        // console.log(data)
        setCategoriesData(data.allCategoryData)
      }
        
    
   
        useEffect(()=>{
            fetcCategoreis();
        },[])
    
  

  return (
    <>
    <Link  href='/createBlog'><Button style={{float:'right',top:'10px',color:'black'}} variant="outlined">create post</Button></Link>  

  <Grid container rowSpacing={3} columnSpacing={2} justifyContent="flex-start" alignItems="center"  my={5}>
    
    {
      categoriesData&&categoriesData.length>0 ?
        categoriesData.map(item=>(
          <Grid item lg={4} xs={3} sm={4} >
      <Link href={`/viewDetails/${[item._id]}`} style={{textDecoration:'none',color:"inherit" }}> <Card fetchData={item}/></Link>   
          </Grid>
        )
  ):<h1>no data to dispaly</h1>
  
    }
    </Grid>
    </>
    
  )
}

export default AllCategories