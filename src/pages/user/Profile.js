// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import UserMenu from "../../components/Layout/UserMenu";
// import { useAuth } from "../../context/auth";
// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// const Profile = () => {
//   const [auth, setAuth] = useAuth();
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       navigate("/login");
//       const res = await axios.post(`/api/v1/auth/register`, {
//         name,
//         email,
//         password,
//         phone,
//         address,
//       });

//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went Wrong");
//     }
//   };
//   return (
//     <Layout title={"Your Profile"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div>
//             <div className="form-container mt-0" style={{ minHeight: "80vh" }}>
//               <h1>User Profile</h1>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => {
//                       setName(e.target.value);
//                     }}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter your Name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                     }}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter your Email"
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                     }}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter your Password"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={phone}
//                     onChange={(e) => {
//                       setPhone(e.target.value);
//                     }}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter your Phone Number"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={address}
//                     onChange={(e) => {
//                       setAddress(e.target.value);
//                     }}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter your Address"
//                     required
//                   />
//                 </div>
//                 {/* <div className="mb-3">
//                   <input
//                     type="text"
//                     value={answer}
//                     onChange={(e) => {
//                       setAnswer(e.target.value);
//                     }}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="What is your favourite sports? "
//                     required
//                   />
//                 </div> */}

//                 <button type="submit" className="btn btn-primary">
//                   Update
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import { message } from "antd";
const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        message.success("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-8">
            <div className="form-container" style={{ marginTop: "-40px" }}>
              <form onSubmit={handleSubmit}>
                <h4 className="title">USER PROFILE</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email "
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
