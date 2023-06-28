import { useEffect, useState } from "react";
import Card from "../card";
import { Grid } from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import { setblogDetails } from "@/redux/blogSlice";
import { useDispatch } from "react-redux";
import { setBlogDetails } from "@/redux/blogSlice";

const AllCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const dispatch = useDispatch();

  const fetchCategoreis = async () => {
    const res = await fetch(`http://localhost:4000/blogs`);
    const data = await res.json();

    console.log(data.allCategoryData);
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
            </Grid>
          ))
        ) : (
          <h1>no data to dispaly</h1>
        )}
      </Grid>
    </>
  );
};

export default AllCategories;
