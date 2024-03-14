// import { useState, useEffect } from "react";
// import axios from "axios";
// export default function useCategory() {
//   const [categories, setCategories] = useState([]);
//   const getCategories = async () => {
//     try {
//       const { data } = await axios.get(`/api/v1/category/get-category`);
//       setCategories(data?.category);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getCategories();
//   }, []);
//   return categories;
// }

import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  const REACT_APP_API = process.env.REACT_APP_API;
  //get cat
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `https://e-commerce-mern-stack-backend.onrender.com/api/v1/category/get-category`
      );
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
