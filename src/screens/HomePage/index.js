import React from "react";
import CareerChart1 from "./components/CareerChart1";
import CareerChart2 from "./components/CareerChart2";
import CareerChart3 from "./components/CareerChart3";
import SkillTree1 from "./components/SkillTree1";
import './index.css';

const HomePage = () => {

  return (

    <div className="site-content p-5">
      <section className="career-trajectory has-text-centered">
        <h1 className="title is-3">Career Trajectory 1</h1>
        <CareerChart1 />
      </section>
      <section className="career-trajectory has-text-centered">
        <h1 className="title is-3">Career Trajectory 2</h1>
        <CareerChart2 />
      </section>
      <section className="career-trajectory has-text-centered mt-6">
        <h1 className="title is-3">Career Trajectory 2: Simultanuous Work</h1>
        <CareerChart3 />
      </section>
      <section className="career-trajectory has-text-centered mt-6">
        <h1 className="title is-3">Educational Information</h1>
        <SkillTree1 />
      </section>

    </div>
  );
}

export default HomePage;
