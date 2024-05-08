import React from "react";
import Navbar from "../ForHeader/Navbar";
import Footer from "../ForFooter/Footer";

export default function ApplicationConfirm() {
  return (
    <div>
      <Navbar />
      <div className="apply-for-job">
        <p>
          Congratulations. You have Successfully Applied for the job. Our team
          will contact you if your profile matches our requirements
        </p>
      </div>
      <Footer />
    </div>
  );
}
