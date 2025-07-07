import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/vishnu.png";
import Person2 from "../images/team/madhur.jpg";
import Person3 from "../images/team/yaswanth.png";
import Person4 from "../images/team/rohith.png";

import Navbar from "../components/Navbar";
function Team() {
  const teamPpl = [
    { img: Person1, name: "Vishnu Vardhan", job: "Salesman" },
    { img: Person2, name: "Madhur Yadav", job: "Business Owner" },
    { img: Person3, name: "Yaswanth Reddy", job: "Photographer" },
    { img: Person4, name: "Rohith Kumar", job: "Car Detailist" },
  ];
  return (
    <>
      <Navbar/>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 6291566151</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;