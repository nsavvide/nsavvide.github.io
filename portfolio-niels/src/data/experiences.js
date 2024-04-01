import thesis from "../assets/images/thesis.png";
import jan from "../assets/images/jan.png";
import sirus from "../assets/images/sirus.png";
import alternatief from "../assets/images/alternatiefbv_logo.png";
import depthsense from "../assets/images/depthsense.png";

import { blue, orange, pink, red, yellow } from "../utils";

export const experiences = [
  {
    logo: alternatief,
    name: "Alternatief BV",
    joined: "Sept'23",
    end: "-",
    title: "Full Stack Developer",
    bio: "Working on a financial management system aimed at other companies/people. We allow users to manage their invoices using custom flows and templates. We use C# and Angular.",
    color: blue,
  },
  {
    logo: sirus,
    name: "Sirus NV",
    joined: "June'23",
    end: "August'23",
    title: "Summer Intern",
    bio: "Build a technological Lego City using IoT sensors. We used Microsoft technologies like 3D Scenes, on top of that we used  C++ for providing the microcontrollers with logic and Python for our Rasberry Pi.",
    color: orange,
  },
  {
    logo: thesis,
    name: "Federated Learning for Intrusion Detection",
    joined: "Sep'23",
    end: "July'24",
    title: "Data Engineer",
    bio: "I worked on my Thesis: Heterogeneous Data Generalization in Distributed Intrusion Detection Systems: A Federated Learning Approach.",
    color: red,
  },
  {
    logo: jan,
    name: "NulVision",
    joined: "Jan'23",
    end: "July'23",
    title: "Software Developer",
    bio: "For our Bachelor Work, we had to develop an Object Detection application for large drone images.",
    color: pink,
  },
  {
    logo: depthsense,
    name: "Sony DepthSensing Solutions",
    joined: "Sep'23",
    end: "January'24",
    title: "Machine Learning Engineer",
    bio: "We helped Sony develop on an interesting project, this information however is disclosed.",
    color: yellow,
  },
];
