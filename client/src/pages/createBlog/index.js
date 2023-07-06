import { useState } from "react";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Styles from "../../styles/formik_blog.module.css";
import { message } from "antd";
import { useRouter } from "next/router";
import Header from "@/components/header";
import { useDispatch } from "react-redux";
import { setBlogDetails } from "@/redux/blogSlice";

const CreateBlog = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const router = useRouter();

  const [file, setFile] = useState(null);
  const img = styled(Image)`
    box-shadows: 10px 10px 10px 10px #ccc;
    width: 100%;
  `;
  const TextArea = styled(TextareaAutosize)`
    width: 100%;
    padding: 5px;
    border: none;
  `;

  const blogValidation = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    categories: Yup.string()
      .oneOf(
        ["fruits", "vegetables", "appliances", "clothes"],
        "select a categories"
      )
      .required("Required"),
    description: Yup.string().required("Required"),
    totalCart: Yup.number().required("total cart must be in number"),
    price: Yup.number().required("price must be in number"),
  });

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0])
  };

  const submitBlog = async (formFields) => {
    const formData = new FormData();

    formData.append("avatar", file);
    formData.append("title", formFields.title);
    formData.append("categories", formFields.categories);
    formData.append("description", formFields.description);
    formData.append("totalCart", formFields.totalCart);
    formData.append("price", formFields.price);
    const res = await fetch(`http://localhost:4000/blogs`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    // setCategoriesData(data.categoryData)
    // console.log(data);
    if (data.success) {
      messageApi.success(data.message);
      dispatch(setBlogDetails(data.blogData));
      router.push("/home");
    } else {
      messageApi.error(data.message);
    }
  };

  return (
    <div>
      <Header />

      <Box>
        <img
          src={`/uploads/home_pic.jpg` || `/uploads/${url}`}
          sizes="(max-width: 768px) 100vw"
          width="100%"
          height={300}
          alt="user cover image"
        />
      </Box>

      <div className={Styles.formikContainer}>
        <Formik
          initialValues={{
            title: "",
            categories: "",
            description: "",
            price: "",
            totalCart: "",
          }}
          validationSchema={blogValidation}
          onSubmit={(values) => {
            submitBlog(values);
          }}
        >
          {({
            errors,
            touched,
            handleBlur,
            values,
            handleChange,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <button
                style={{
                  float: "right",
                  width: "15vh",
                  padding: "8px",
                  backgroundColor: "red",
                  color: "black",
                  borderRadius: "5px",
                }}
                type="submit"
              >
                Submit
              </button>
              <div className={Styles.fileInput}>
                <input type="file" onChange={saveFile} />
              </div>
              <Field
                name="title"
                placeholder="title..."
                className={Styles.inputFiled}
              />
              {errors.title && touched.title ? (
                <div className={Styles.error}>{errors.title}</div>
              ) : null}{" "}
              <br />
              <br />
              <Field
                as="select"
                name="categories"
                placeholder="Select a categories"
                className={Styles.dropDwon}
              >
                <option value="" disabled>
                  select a categories
                </option>
                <option value="clothes">clothes</option>
                <option value="vegetables">vegetables</option>
                <option value="fruits">fruits</option>
                <option value="appliances">home appliances</option>
              </Field>
              {errors.categories && touched.categories ? (
                <div className={Styles.error}>{errors.categories}</div>
              ) : null}{" "}
              <br />
              <br />
              <Field
                name="totalCart"
                placeholder="totalCart..."
                className={Styles.inputFiled}
              />
              {errors.totalCart && touched.totalCart ? (
                <div className={Styles.error}>{errors.totalCart}</div>
              ) : null}{" "}
              <br />
              <br />
              <Field
                name="price"
                placeholder="Enter price..."
                className={Styles.inputFiled}
              />
              {errors.price && touched.price ? (
                <div className={Styles.error}>{errors.price}</div>
              ) : null}{" "}
              <br />
              <br />
              <TextArea
                id="descriptionInput "
                name="description"
                placeholder="Write Something..."
                minRows={8}
                value={values.description}
                onChange={handleChange}
              />
              {errors.description && touched.description ? (
                <div className={Styles.error}>{errors.description}</div>
              ) : null}{" "}
              <br />
              <br />
            </Form>
          )}
        </Formik>
        {contextHolder}
      </div>
    </div>
  );
};

export default CreateBlog;
