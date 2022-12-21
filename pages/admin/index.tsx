import React, { useState } from "react";
import Login from "../../components/admin_components/Login";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

type Props = {};

function index({}: Props) {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div className={isDark ? "dark" : ""}>
      <Header {...{ setIsDark, isDark }} />
      <Login />
      <Footer />
    </div>
  );
}

export default index;
