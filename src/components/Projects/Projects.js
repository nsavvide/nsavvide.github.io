import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// React Icons
import { FaFirefoxBrowser, FaDiscord, FaMusic, FaGithub } from "react-icons/fa";
import { SiLua, SiRust, SiGooglecalendar, SiOpencv, SiFedora, SiNeovim } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { BsKeyboard } from "react-icons/bs";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={FaFirefoxBrowser}
              title="CubedPotatoBrowser"
              description="A custom browser built using Rust and CEF (Chromium Embedded Framework), designed for window tiling managers (WTMs). Optimized for low memory overhead, developer workflows, and native IPC-based multi-window control."
              ghLink="https://github.com/nsavvide/CubedPotatoBrowser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={FaDiscord}
              title="RustyDiscord"
              description="A terminal user interface (TUI) Discord client built with Rust. Supports authentication, channels, direct messages, and message sending, with performance and minimalism in mind."
              ghLink="https://github.com/nsavvide/RustyDiscord"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={FaMusic}
              title="RustySongs"
              description="A TUI music management application written in Rust. Features YouTube integration, mp3 download and organization, playback controls, queue management, and dynamic playlist loading."
              ghLink="https://github.com/nsavvide/RustySongs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={SiLua}
              title="NotifyMe"
              description="A Lua plugin for Neovim that fetches GitHub notifications and displays them directly in the editor. Designed for GitHub-native workflows without leaving the terminal."
              ghLink="https://github.com/nsavvide/NotifyMe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={SiGooglecalendar}
              title="rustyCalendar"
              description="A CLI tool for interacting with Google Calendar from the terminal. Supports event creation, deletion, and querying. Built with Rust and OAuth integration."
              ghLink="https://github.com/nsavvide/rustyCalendar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={SiOpencv}
              title="SkyScope"
              description="A private web application for local object detection. Capable of processing uploaded or streamed images using an embedded AI model pipeline. Useful for privacy-preserving CV tasks."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={SiFedora}
              title="FederatedLearning"
              description="Research project on improving generalization and robustness of intrusion detection systems using Federated Learning on heterogeneous datasets. Involves simulation of distributed training and client variability."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={SiNeovim}
              title="PotatoDotFiles"
              description="Private repository containing a curated set of dotfiles for Linux development, optimized for Neovim, i3, tmux, and CLI productivity."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={BsKeyboard}
              title="corne_"
              description="Private firmware and configuration for the Corne split keyboard, including custom keymaps, layers, and RGB behavior using QMK."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
