import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import axios from "axios";
import { Radio } from "antd";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [role, setRole] = useState(0);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/login");
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
        role,
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
    <Layout title="Register E-Commerce App">
      <div className="form-container mt-0" style={{ minHeight: "80vh" }}>
        <h1 style={{ color: "white" }}>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Name"
              required
            />
          </div>
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
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Address"
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
              placeholder="What is your favourite sports? "
              required
            />
          </div>
          <div className="mb-3">
            Select your Role:
            <Radio.Group onChange={(e) => setRole(e.target.value)}>
              <Radio value={0}>User</Radio>
              <Radio value={1}>Admin</Radio>
            </Radio.Group>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Register Now
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
