import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a> ·
          </div>
          <p className="lead mb-5">
            I am experienced in robotic software development with ROS and ROS2. 
            The navigation is my strong point.
            I am working on my PhD now, trying to improve the human perception 
            of the robots in a domestic environment thought the integration of 
            proxemic areas in the navigation stack. 
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="publications"
      >
        <div className="w-100">
          <div className="resume-date text-md-right">
            <span className="text-primary">Last Update: May 2020</span>
          </div>

          <h2 className="mb-5">Publications</h2>
          <h3 className="mb-0">2020</h3>
          <p>
            [Journal Q1] <b>"An Acceptance Test for Assistive Robots" </b> Martin Rico, F.; Rodríguez-Lera, F.J.; Ginés Clavero, J.; Guerrero-Higueras, Á.M.; Matellán Olivera, V. Sensors 2020, 20, 3912. <a href="https://doi.org/10.3390/s20143912">https://doi.org/10.3390/s20143912</a>
          </p> 
          <h3 className="mb-0">2019</h3>
          <p>
            [Journal Q1] <b>"A Social Navigation in a Cognitive Architecture Using Dynamic Proxemic Zones" </b> Jonatan Ginés, Francisco Martín Rico, David Vargas, Francisco J. Rodriguez Lera and Vicente Matellán Olivera. Sensors. 19, 5189. 2019. <a href="https://doi.org/10.3390/s19235189">https://doi.org/10.3390/s19235189</a>
          </p>
          <p>
            [Journal Q1] <b>"Octree-based localization using RGB-D data for indoor robots" </b> Francisco Martín Rico, Vicente Matellán Olivera, Francisco J. Rodriguez Lera and Jonatan Ginés. Engineering Applications of Artificial Intelligence. Volume 77, January 2019, Pages 177-185. 2019. <a href="https://doi.org/10.1016/j.engappai.2018.10.002">https://doi.org/10.1016/j.engappai.2018.10.002</a>
          </p>
          <p>
            [Journal Q2] <b>"COMBAHO: A Deep Learning System for Integrating Brain Injury Patients in Society" </b> Jose Garcia-Rodriguez, Francisco Gomez-Donoso, Sergiu Oprea, Alberto Garcia-Garcia, Miguel Cazorla, Sergio Orts-Escolano, Zuria Bauer, John Castro-Vargas, Felix Escalona, David Ivorra-Piqueres, Pablo Martinez-Gonzalez, Eugenio Aguirre, Miguel Garcia-Silviente, Marcelo Garcia-Perez, Jose M. Cañas, Francisco Martin-Rico, Jonatan Gines, Francisco Rivas-Montero Pattern Recognition Letters, 2019. <a href="https://doi.org/10.1016/j.patrec.2019.02.013">https://doi.org/10.1016/j.patrec.2019.02.013</a>
          </p>
          <p>
            [Journal] <b>"People detection and tracking using LIDAR sensors" </b> Claudia Álvarez Aparicio, Ángel Manuel Guerrero Higueras, Francisco Javier Rodríguez Lera, Jonatan Ginés Clavero, Francisco Martín Rico, Vicente Matellán. Journal Robotics. Special Issue "Robotics in Spain 2019". 2019 <a href="https://doi.org/10.3390/robotics8030075">https://doi.org/10.3390/robotics8030075</a>
          </p>
          <p>
            <b>"Adapting ROS Logs to Facilitate Transparency and Accountability in Service Robotics" </b> Francisco J Rodríguez Lera, Angel Manuel Guerrero Higueras, Vicente Matellan Olivera, Francisco Martín Rico, Jonatan Gines and Juan Felipe García Sierra. ROBOT2019, published in Springer - Advances in Intelligent Systems and Computing series. November 2019. <a href="https://doi.org/10.1007/978-3-030-36150-1_48">https://doi.org/10.1007/978-3-030-36150-1_48</a>
          </p>
          <p>
            <b>"Using Probabilistic Context Awareness in a Deliberative Planner System" </b> Jonatan Ginés Clavero, Francisco J. Rodriguez Lera, Francisco Martín Rico, Angel Manuel Guerrero, Vicente Matellán. International Work-Conference on the Interplay Between Natural and Artificial Computation, IWINAC 2019. <a href="https://doi.org/10.1007/978-3-030-19651-6_16">https://doi.org/10.1007/978-3-030-19651-6_16</a>
          </p>
          <p>
            <b>"LIDAR-based people detection and tracking for@ home Competitions" </b> Claudia Álvarez-Aparicio, Ángel M Guerrero-Higueras, Francisco J Rodríguez-Lera, M Carmen Calvo Olivera, Vicente Matellán Olivera, Jonatan Ginés Clavero, Francisco Martín Rico. 2019 IEEE International Conference on Autonomous Robot Systems and Competitions (ICARSC). 2019. <a href="https://doi.org/10.1109/ICARSC.2019.8733624">https://doi.org/10.1109/ICARSC.2019.8733624</a>
          </p>

          <h3 className="mb-0">2018</h3>
          <p>
            <b>"Planning-centered Architecture for RoboCup SSPL @Home" </b> Francisco Martín, Jonatan Ginés, David Vargas, Francisco J. Rodríguez-Lera, Vicente Matellán. WAF2018, publisehd in Advances in Intelligent Systems and Computing series. November 2018. <a href="https://doi.org/10.1007/978-3-319-99885-5_20">https://doi.org/10.1007/978-3-319-99885-5_20</a>
          </p>
          <p>
            [CLASS 1] <b>"Planning Topological Navigation for complex Indoor Environments" </b> Francisco Martín, Jonatan Ginés, David Vargas, Francisco J. Rodríguez-Lera, Vicente Matellán. 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2018), October 2018. <a href="https://doi.org/10.1109/IROS.2018.8594038">https://doi.org/10.1109/IROS.2018.8594038</a>
          </p>

          <h3 className="mb-0">2017</h3>
          <p>
            <b>"3D mapping for a reliable long-term navigation" </b> Jonatan Ginés Clavero, Francisco Martin Rico, Vicente Matellan Olivera, Francisco J. Lera and Jesus Balsa. Robot'2017: 3rd Iberian Robotics Conference, published in Springer - Advances in Intelligent Systems and Computing. 22-24 November 2017, Sevilla (Spain). <a href="https://doi.org/10.1007/978-3-319-70836-2_24">https://doi.org/10.1007/978-3-319-70836-2_24</a>
          </p>
          <p>
            <b>"Practical aspects of deploying Robotherapy" </b> Francisco Martin Rico and Jonatan Ginés Clavero. Robot'2017: 3rd Iberian Robotics Conference, published in Springer - Advances in Intelligent Systems and Computing. 22-24 November 2017, Sevilla (Spain). <a href="https://doi.org/10.1007/978-3-319-70833-1_30">https://doi.org/10.1007/978-3-319-70833-1_30</a>
          </p>
          <p>
            <b>"Dynamics maps for long-term autonomy" </b> Jonatan Ginés Clavero, Francisco Martin Rico, Vicente Matellan Olivera, Francisco J. Lera and Jesus Balsa. 17th International Conference on Autonomous Robot Systems and Competitions (ICARSC 2017). Coimbra (Portugal). May 2017. <a href="https://doi.org/10.1109/ICARSC.2017.7964057">https://doi.org/10.1109/ICARSC.2017.7964057</a>
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Robotics Researcher</h3>
              <div className="subheading mb-3">Intelligent Robotics Lab - Rey Juan Carlos University</div>
              <p>
                Develop of a Topological navigation and mapping system.
              </p>
              <p>
                Develop and integration of a HRI system based on DialogFlow.
              </p>
              <p>
                R&D Robot Receptionist with Pepper robot for Acciona S.A.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Network & Infrastructures Security Engineer</h3>
              <div className="subheading mb-3">ATOS</div>
              <p>
                Configuration, deploy and maintenance of firewalls like PaloAlto, Fortinet, Forcepoint and F5 Load Balancers.
              </p>
              <p>
                F5 iRules development to create the VPN-SSL workflow.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2016 - October 2017</span>
            </div>
          </div>      
        </div>
      </section>

      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="challenges"
      >
        <div className="w-100">
          <h2 className="mb-5">Challenges</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  <p className="subheading mb-3">SCIROC Challenge 2019 - Winners of Episode 4 - Take the elevator</p>
                </li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  <p className="subheading mb-3">European RoboCup@Home Education 2019 Trieste Ed. - Winners</p>
                </li>
                <li>
                  <p className="subheading mb-3">European Robotics League IROS2018 Ed.</p>
                </li>
                <li>
                  <p className="subheading mb-3">RoboCup@Home Canada 2018 Ed.</p>
                </li>
                <li>
                  <p className="subheading mb-3">RoboCup@Home Leizpig 2016 Ed.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Carlos III University</h3>
              <div className="subheading mb-3">Master in Robotics and Automation</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 - September 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
              <h3 className="mb-0">Rey Juan Carlos University</h3>
              <div className="subheading mb-3">Bachelor of Telematic Engineering</div>
              <div>Robotics - Computer Networks Security</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2011 - December 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i class="icon-cplusplus"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
          </ul>
          
          {/* <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>*/}
        </div> 
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a software developer, I enjoy most of my time with
            my different passions. I am an aspiring chef and I enjoy with the Batch Cooking.
            I have a 3D printer and I like to do awesome printed life hacks.
            I love dive with my wife enjoying the life and the peace of the deeps.

            When I meet with my friends, We usually play board games and take
            some craft beers. 
          </p>
        </div>    
      </section>

      <i>
        Gatsby template developed by <a href="https://github.com/anubhavsrivastava/gatsby-starter-resume">anubhavsrivastava</a>. CI Github Action developed by <a href="https://github.com/enriikke/gatsby-gh-pages-action">enriikke</a>.
      </i>
    </div>
  </Layout>
);

export default IndexPage;
