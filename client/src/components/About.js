import React from "react";
import Navbar from "./ForHeader/Navbar";
import Footer from "./ForFooter/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
        <div className="row about-contact">
          <div className="col-8">
            <div className="about">
              <h1>About Us</h1>
              <br />
              <p>
                Shine.com is the most innovative and second largest online job
                portal in India. Founded in 2008, over the past decade,
                Shine.com has become a prominent name in the recruitment
                industry. The popularity of the portal is evident from the fact
                that it has crossed the 3.4 crore candidate landmark and has
                more than 3 lakh latest job vacancies from leading companies on
                the site.
              </p>
              <br />
              <p>
                Shine works closely to bridge the gap between talent &
                opportunities and offers end-to-end recruitment solutions. Shine
                Job Fair brings candidates and top employers under one roof.
                While Shine HR Conclave brings top HR leaders to share insights
                on latest trends, innovations & best practices in the HR
                industry. Shine also has a large reach through its print
                product, Shine Jobs – the Tuesday Job supplement of Hindustan
                Times– making it the only job portal with an integrated print
                and online offering
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="contact">
              <h3>Contact</h3>
              <p>email : jobportal@gmail.com</p>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}
