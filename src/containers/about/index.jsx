import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt } from 'react-icons/fa';

const PersonalDetails = [
    {
        label: "Name:",
        value: "Nishan Nilanga",
    },
    {
        label: "Age:",
        value: "21",
    },
    {
        label: "Address:",
        value: "181/6,Kadambawa,Karambe,Maho",
    },
    {
        label: "Email:",
        value: "nilanganishan4444@gmail.com",
    },
    {
        label: "Contact No:",
        value: "+94 785444939",
    },
];


const summary = 'Motivated and detail-oriented 2nd-year student with a strong foundation in software development and a keen interest in web and mobile application design. Experienced in using modern development tools and frameworks such as MERN stack for web applications and Kotlin for Android development. Skilled in creating intuitive and visually appealing user interfaces using tools like Material-UI and Figma, with a focus on professional design aesthetics and user experience. Proficient in building data-driven applications, including dashboards, reporting tools, and integration with backend systems. Adept at collaborating on projects involving real-time functions, cost management, and distribution coordination. Passionate about delivering efficient and scalable solutions that address complex challenges in industries such as manufacturing and e-commerce.'

const About = () => {
    return (
        <section id="about" className="about">

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)"
                        }}

                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h2>Web and Software Developer</h2>
                        <p>{summary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)"
                        }}

                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h3 className="personalInfomationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                PersonalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__professionalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateY(500px)"
                        }}
                        end={{
                            transform: "translateY(0px)"
                        }}
                    >
                        
                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)"
                        }}

                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaReact size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaGithub size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaCss3Alt size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaFigma size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaGitAlt size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>
                </div>

            </div>

        </section>
    )
}

export default About;
