import React from "react"
import ProjectDisplay from "../components/projectDisplay"
import ProjectCarousel from "../components/ProjectCarousel"
import WorkoutHelper from "../components/Projects/workoutHelper"
import CubeSolver from "../components/Projects/cubeSolver"
import Portfolio from "../components/Projects/portfolio"
import styled from "styled-components"

const ProjectList = styled.div`
  margin: 20px 0px 50px 10px;
`

const Projects = () => (
  <div id="projects">
    <h2>Project Portfolio</h2>
    <h4>Web App development</h4>
    {/* Cube solver, workout helper, portfolio, Open source */}
    <ProjectList>
      <CubeSolver />
    </ProjectList>
    <ProjectList>
      <WorkoutHelper />
    </ProjectList>
    <ProjectList>
      <Portfolio />
    </ProjectList>

    <h4>Mobile and Desktop App development</h4>
    {/* ProForm, CodeCar, Shooting star */}
    <ProjectDisplay />
    <h4>Academic Projects</h4>
    {/* Solitaire AutoStart, Recycle App? */}
    <ProjectDisplay />
  </div>
)

export default Projects
