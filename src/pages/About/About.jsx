import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import ugent from "../../assets/images/thesis.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
          As a budding Computer Science Engineer with a profound passion for technology and innovation, my journey so far has been both enriching and enlightening. My experiences span across various facets of software development, from Full Stack Development to Machine Learning, IoT, and beyond. I've had the privilege of contributing to impactful projects with organizations such as Alternatief BV, Sirus NV, Sony DepthSensing Solutions, and through ambitious academic endeavors like my thesis on Federated Learning for Intrusion Detection.

At Alternatief BV, I delved into the intricacies of financial management systems, harnessing the power of C# and Angular to enhance invoice management processes for companies and individuals. My summer internship at Sirus NV was an adventurous foray into IoT, where I built a technological Lego City, integrating Microsoft technologies, C++, and Python to breathe life into our creations.

My thesis work stands as a testament to my dedication to advancing the field of distributed intrusion detection systems through Federated Learning, showcasing my capabilities as a Data Engineer. Furthermore, my role as a Software Developer for NulVision allowed me to explore the realm of Object Detection in drone imagery, while my tenure at Sony DepthSensing Solutions as a Machine Learning Engineer opened doors to secretive yet groundbreaking projects.

Beyond these experiences, my enthusiasm for exploring new horizons in technology has led me to develop a keen interest in Rust—a language that promises efficiency, safety, and concurrency. This interest not only signifies my eagerness to stay ahead of the technological curve but also underscores my commitment to embracing challenges and pushing the boundaries of what's possible.

As I stand on the brink of becoming a Computer Science Engineer, my journey is far from over. I am driven by a relentless pursuit of knowledge, a passion for solving complex problems, and a desire to contribute meaningfully to the technological landscape. With each experience, project, and line of code, I am inching closer to my goal of making a significant impact in the world of technology.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "University of Ghent",
                p: "Bachelors of Information Technology (2019-2022)",
                image: ugent,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "University of Ghent",
                p: "Masters of Information Technology (2023-2024)",
                image: ugent,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "University of Ghent",
                p: "Masters of Computer Engineering (2024-2026)",
                image: ugent,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
