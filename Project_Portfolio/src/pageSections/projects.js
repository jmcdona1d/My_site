import React from "react"
import ProjectDisplay from "../components/projectDisplay"
import WorkoutHelper from "../components/Projects/workoutHelper"
import CubeSolver from "../components/Projects/cubeSolver"
import Portfolio from "../components/Projects/portfolio"
import ShootingStar from "../components/Projects/shootingStar"
import ProForm from "../components/Projects/proform"
import CodeCar from "../components/Projects/codeCar"
import OpenSource from "../components/Projects/openSource"

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
      <OpenSource />
    </ProjectList>
    <ProjectList>
      <Portfolio />
    </ProjectList>
    <h4>Mobile and Desktop App development</h4>
    <ProjectList>
      <ProForm />
    </ProjectList>
    <ProjectList>
      <CodeCar />
    </ProjectList>
    <ProjectList>
      <ShootingStar />
    </ProjectList>
    {/* ProForm, CodeCar, Shooting star */}
    {/* <h4>Academic Projects</h4>
    {/* Solitaire AutoStart, Recycle App? */}
  </div>
)

export default Projects
