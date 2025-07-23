import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import MainContainer from "./MainContainer";
import "../styles/AboutPage.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const AboutPage = () => {
  return (
    <MainContainer> 
      <div className="about-container">
        <h1 className="visually-hidden">About ChatChit</h1>

        <div className="logo">
          <div className="brand-header">
            <Logo className="logo-svg" />
            <span className="brand-name">ChatChit</span>
          </div>
        </div>

        <section className="section">
          <h2 className="section-title">Project Overview</h2>
          <p>
            Convayto is a real-time chat application built with React.js and
            Supabase. It provides essential features like user authentication,
            profile management, and instant messaging. Designed as a learning
            project, Convayto showcases the core functionalities of modern chat
            applications while emphasizing clean and efficient code practices.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Goals</h2>
          <ul className="goals-list">
            <li>To provide a seamless real-time chatting experience.</li>
            <li>To ensure secure user authentication and data management.</li>
            <li>
              To deliver a responsive and user-friendly interface across various
              devices.
            </li>
            <li>
              To implement optimized performance with features like infinite
              pagination and prefetching.
            </li>
          </ul>
        </section>
      </div>
    </MainContainer>
  );
};

export default AboutPage;
