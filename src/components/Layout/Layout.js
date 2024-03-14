import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <div>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </div>
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Toaster />
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "E-Commerce App",
  description: "Mern stack app",
  keywords: "MERN, REACT,NODE, MONGODB",
  author: "Shivanshu Singh",
};
export default Layout;
