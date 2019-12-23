import React from "react"
import ProjectDisplay from "../components/projectDisplay"
import ProjectCarousel from "../components/ProjectCarousel"
import WorkoutHelper from "../components/Projects/workoutHelper"

const Projects = () => (
  <div id="projects">
    <h2>Project Portfolio</h2>
    <h4>Web App development</h4>
    {/* Cube solver, workout helper, portfolio, Open source */}
    <WorkoutHelper />
    <h4>Mobile and Desktop App development</h4>
    {/* ProForm, CodeCar, Shooting star */}
    <ProjectDisplay />
    <h4>Academic Projects</h4>
    {/* Solitaire AutoStart, Recycle App? */}
    <ProjectDisplay />
  </div>
)

export default Projects
