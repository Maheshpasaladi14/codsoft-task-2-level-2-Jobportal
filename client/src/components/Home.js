import React from "react";
import Main from "./ForMain/RecentJobs";
import Footer from "./ForFooter/Footer";
import Navbar from "./ForHeader/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
