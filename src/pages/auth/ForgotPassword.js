import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/AuthStyles.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
  return (
    <Layout title="Forgot Password E-Commerce App">
      <div className="form-container mt-0" style={{ minHeight: "80vh" }}>
        <h1>Forgot Password Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Favourite sports name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your New Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
