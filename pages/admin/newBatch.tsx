import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewBatchPage from "../../components/admin_components/NewBatchPage";

type Props = {};

function newBatch({}: Props) {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div className={isDark ? "dark" : ""}>
      <Header {...{ setIsDark, isDark }} />
      <NewBatchPage />
      <Footer />
    </div>
  );
}

export default newBatch;
