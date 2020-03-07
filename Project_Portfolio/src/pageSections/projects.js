import React from "react"
import WorkoutHelper from "../components/Projects/workoutHelper"
import CubeSolver from "../components/Projects/cubeSolver"
import Portfolio from "../components/Projects/portfolio"
import ShootingStar from "../components/Projects/shootingStar"
import ProForm from "../components/Projects/proForm"
import CodeCar from "../components/Projects/codeCar"
import OpenSource from "../components/Projects/openSource"
import Databases from "../components/Projects/databases"
import Solitaire from "../components/Projects/solitaire"
import FiscalFresh from "../components/Projects/fiscalFresh"
import Robto from "../components/Projects/robot"

import styled from "styled-components"

const ProjectList = styled.div`
  margin: 20px 0px 50px 10px;
`
const ClearFix = styled.div`
  clear: both;
`

const Projects = () => (
  <div id="projects" style={{ width: "100%" }}>
    <ClearFix />
    <h2>Project Portfolio</h2>
    <h4>Web App Development</h4>
    {/* Cube solver, workout helper, portfolio, Open source */}
    <ProjectList>
      <CubeSolver />
    </ProjectList>
    <ProjectList>
      <FiscalFresh />
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
    <h4>Mobile and Desktop App Development</h4>
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
    {/* Solitaire AutoStart, Recycle App?, Databases */}
    <h4>Academic Projects</h4>
    <ProjectList>
      <Databases />
    </ProjectList>
    <ProjectList>
      <Robot />
    </ProjectList>
    <ProjectList>
      <Solitaire />
    </ProjectList>
  </div>
)

export default Projects
