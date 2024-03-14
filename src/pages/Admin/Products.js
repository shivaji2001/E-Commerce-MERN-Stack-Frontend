// import React from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "../../components/Layout/Layout";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
// import "../../styles/HomePage.css";
// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/product/get-product");
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   return (
//     <Layout>
//       <div className="row dashboard">
//         <div className="col-md-3">
//           <AdminMenu />
//         </div>
//         <div className="col-md-9">
//           <h1 className="text-center">All Products List</h1>
//           <div className="d-flex flex-wrap">
//             {products?.map((p) => (
//               <Link
//                 className="product-link"
//                 key={p._id}
//                 to={`/dashboard/admin/product/${p.slug}`}
//               >
//                 <div className="card m-2" style={{ width: "18rem" }}>
//                   <img
//                     src={`/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top"
//                     alt={p.name}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{p.name}</h5>
//                     <p className="card-text">{p.description}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Products;

import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../../styles/HomePage.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const REACT_APP_API = process.env.REACT_APP_API;
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_API}/api/v1/product/get-all-products`
      );
      setProducts(data.allProducts);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                className="product-link"
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`${REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
