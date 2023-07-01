import { useEffect, useState } from "react";
import Card from "../card";
import { Grid } from "@mui/material";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setBlogDetails } from "@/redux/blogSlice";
import { addToCart } from "@/redux/cartSlice";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const AllCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const[page,setPage]=useState(1)
  const dispatch = useDispatch();

  const CardButton = styled(Button)`
  color: black;
  background-color: red;
  margin: 3vh 10vh;
`;

const handleAddtoCart=(item)=>{
    dispatch(addToCart(item))
}

const handleChange=(value)=>{
  console.log(value)
}

  const fetchCategoreis = async (page) => {
    const res = await fetch(`http://localhost:4000/blogs?page=${page}}`);
    const data = await res.json();

    // console.log(data.allCategoryData);

    dispatch(setBlogDetails(data.allCategoryData));

    setCategoriesData(data.allCategoryData);
  };

  useEffect(() => {
    fetchCategoreis();
  }, []);

  return (
    <>
      <Link href="/createBlog">
        <Button
          style={{ float: "right", top: "10px", color: "black", backgroundColor:'red' }}
          variant="outlined"
        >
          create post
        </Button>
      </Link>

      <Grid
        container
        rowSpacing={3}
        columnSpacing={2}
        justifyContent="flex-start"
        alignItems="center"
        my={5}
      >
        {categoriesData && categoriesData.length > 0 ? (
          categoriesData.map((item, id) => (  
      
          <Grid item lg={4} xs={3} sm={4} key={id}>
              <Link
                href={`/viewDetails/${[item._id]}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <Card fetchData={item} />
    

              </Link>
            <CardButton variant="outlined" onClick={()=>{handleAddtoCart(item)}}>Add to cart</CardButton>

              
            </Grid>
          ))
        ) : (
          <h1>no data to dispaly</h1>
        )}
      </Grid>
      
      <Stack spacing={2} mx={40} my={2}>
      <Pagination  count={30} page={page} onChange={(e)=>(handleChange(e.target.value))} variant="outlined" shape="rounded" />
    </Stack>
    </>
  );
};

export default AllCategories;
