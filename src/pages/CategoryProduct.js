import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import SmallSpinner from "../components/SmallSpinner";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();
  const [showSpinner, setShowSpinner] = useState(false);
  const REACT_APP_API = process.env.REACT_APP_API;
  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      setShowSpinner(true);
      const { data } = await axios.get(
        `https://e-commerce-mern-stack-backend.onrender.com/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
      setShowSpinner(false);
    } catch (error) {
      setShowSpinner(false);
      console.log(error);
    }
  };

  return (
    <Layout>
      {showSpinner && <SmallSpinner />}

      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} results found </h6>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-wrap justify-content-around">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`https://e-commerce-mern-stack-backend.onrender.com/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                    </div>
                    <p className="card-text">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-dark ms-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;

// import React, { useState, useEffect } from "react";
// import Layout from "../components/Layout/Layout";
// import { useParams, useNavigate } from "react-router-dom";
// import "../styles/CategoryProductStyles.css";
// import axios from "axios";
// const CategoryProduct = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     if (params?.slug) getPrductsByCat();
//   }, [params?.slug]);
//   const getPrductsByCat = async () => {
//     try {
//       const { data } = await axios.get(
//         `/api/v1/product/product-category/${params.slug}`
//       );
//       setProducts(data?.products);
//       setCategory(data?.category);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="container mt-3 category">
//         <h4 className="text-center">Category - {category?.name}</h4>
//         <h6 className="text-center">{products?.length} result found </h6>
//         <div className="row">
//           <div className="col-md-9 offset-1">
//             <div className="d-flex flex-wrap">
//               {products?.map((p) => (
//                 <div className="card m-2" key={p._id}>
//                   <img
//                     src={`/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body">
//                     <div className="card-name-price">
//                       <h5 className="card-title">{p.name}</h5>
//                       <h5 className="card-title card-price">
//                         $
//                         {p.price.toLocaleString("en-US", {
//                           style: "currency",
//                           currency: "USD",
//                         })}
//                       </h5>
//                     </div>
//                     <p className="card-text ">
//                       {p.description.substring(0, 60)}...
//                     </p>
//                     <div className="card-name-price">
//                       <button
//                         className="btn btn-info ms-1"
//                         onClick={() => navigate(`/product/${p.slug}`)}
//                       >
//                         More Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CategoryProduct;

// // import React, { useEffect, useState } from "react";
// // import Layout from "../components/Layout/Layout";
// // import axios from "axios";
// // import { useNavigate, useParams } from "react-router-dom";
// // import "../styles/CategoryProductStyles.css";
// // const CategoryProduct = () => {
// //   const params = useParams();
// //   const navigate = useNavigate();
// //   const [products, setProducts] = useState([]);
// //   const [category, setCategory] = useState([]);
// //   useEffect(() => {
// //     if (params?.slug) getProductByCategory();
// //   }, [params?.slug]);
// //   const getProductByCategory = async () => {
// //     try {
// //       const { data } = await axios.get(
// //         `/api/v1/product/product-category/${params.slug}`
// //       );
// //       setProducts(data?.products);
// //       setCategory(data?.category);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// //   return (
// //     <Layout>
// //       <div className="container mt-3">
// //         <h4 className="text-center">Category:- {category?.name}</h4>
// //         <h6 className="text-center">{products?.length} results found</h6>
// //         <div className="row ">
// //           <div className="d-flex flex-wrap ">
// //             {products?.map((p) => (
// //               <div className="card m-2" style={{ width: "18rem" }}>
// //                 <img
// //                   src={`/api/v1/product/product-photo/${p._id}`}
// //                   className="card-img-top"
// //                   alt={p.name}
// //                 />
// //                 <div className="card-body text-center">
// //                   <h5 className="card-title">{p.name}</h5>
// //                   <p className="card-text">{p.description.substring(0, 30)}</p>
// //                   <p className="card-text">Price: ${p.price}</p>
// //                   <button
// //                     className="btn btn-primary ms-1"
// //                     onClick={() => navigate(`/product/${p.slug}`)}
// //                   >
// //                     More Details
// //                   </button>
// //                   <button className="btn btn-secondary ms-1">
// //                     Add to cart
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default CategoryProduct;
