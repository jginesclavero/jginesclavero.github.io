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
            <a itemprop="sameAs" content="https://orcid.org/0000-0002-7319-098X" 
              href="https://orcid.org/0000-0002-7319-098X" target="orcid.widget" 
              rel="me noopener noreferrer" style="vertical-align:top;">
                <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" 
                  style="width:1em;margin-right:.5em;" alt="ORCID iD icon"/>
              https://orcid.org/0000-0002-7319-098X
            </a>
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
          <h2 className="mb-5">Publications</h2>
          <h3 className="mb-0">2019</h3>
          <p>
            [Journal Q2] <b>"A Social Navigation in a Cognitive Architecture Using Dynamic Proxemic Zones" </b> Jonatan Ginés, Francisco Martín Rico, David Vargas, Francisco J. Rodriguez Lera and Vicente Matellán Olivera. Sensors. 19, 5189. 2019. <link>https://doi.org/10.3390/s19235189</link>
          </p>
          <p>
            [Journal Q1] <b>"Octree-based localization using RGB-D data for indoor robots" </b> Francisco Martín Rico, Vicente Matellán Olivera, Francisco J. Rodriguez Lera and Jonatan Ginés. Engineering Applications of Artificial Intelligence. Volume 77, January 2019, Pages 177-185. 2019. <link>https://doi.org/10.1016/j.engappai.2018.10.002</link>
          </p>
          <p>
            [Journal Q2] <b>"COMBAHO: A Deep Learning System for Integrating Brain Injury Patients in Society" </b> Jose Garcia-Rodriguez, Francisco Gomez-Donoso, Sergiu Oprea, Alberto Garcia-Garcia, Miguel Cazorla, Sergio Orts-Escolano, Zuria Bauer, John Castro-Vargas, Felix Escalona, David Ivorra-Piqueres, Pablo Martinez-Gonzalez, Eugenio Aguirre, Miguel Garcia-Silviente, Marcelo Garcia-Perez, Jose M. Cañas, Francisco Martin-Rico, Jonatan Gines, Francisco Rivas-Montero Pattern Recognition Letters, 2019. <link>https://doi.org/10.1016/j.patrec.2019.02.013</link>
          </p>
          <p>
            [Journal] <b>"People detection and tracking using LIDAR sensors" </b> Claudia Álvarez Aparicio, Ángel Manuel Guerrero Higueras, Francisco Javier Rodríguez Lera, Jonatan Ginés Clavero, Francisco Martín Rico, Vicente Matellán. Journal Robotics. Special Issue "Robotics in Spain 2019". 2019 <link>https://doi.org/10.3390/robotics8030075</link>
          </p>
          <p>
            <b>"Adapting ROS Logs to Facilitate Transparency and Accountability in Service Robotics" </b> Francisco J Rodríguez Lera, Angel Manuel Guerrero Higueras, Vicente Matellan Olivera, Francisco Martín Rico, Jonatan Gines and Juan Felipe García Sierra. ROBOT2019, published in Springer - Advances in Intelligent Systems and Computing series. November 2019. <link>https://doi.org/10.1007/978-3-030-36150-1_48</link>
          </p>
          <p>
            <b>"Using Probabilistic Context Awareness in a Deliberative Planner System" </b> Jonatan Ginés Clavero, Francisco J. Rodriguez Lera, Francisco Martín Rico, Angel Manuel Guerrero, Vicente Matellán. International Work-Conference on the Interplay Between Natural and Artificial Computation, IWINAC 2019. <link>https://doi.org/10.1007/978-3-030-19651-6_16</link>
          </p>
          <p>
            <b>"LIDAR-based people detection and tracking for@ home Competitions" </b> Claudia Álvarez-Aparicio, Ángel M Guerrero-Higueras, Francisco J Rodríguez-Lera, M Carmen Calvo Olivera, Vicente Matellán Olivera, Jonatan Ginés Clavero, Francisco Martín Rico. 2019 IEEE International Conference on Autonomous Robot Systems and Competitions (ICARSC). 2019. <link>https://doi.org/10.1109/ICARSC.2019.8733624</link>
          </p>

          <h3 className="mb-0">2018</h3>
          <p>
            <b>"Planning-centered Architecture for RoboCup SSPL @Home" </b> Francisco Martín, Jonatan Ginés, David Vargas, Francisco J. Rodríguez-Lera, Vicente Matellán. WAF2018, publisehd in Advances in Intelligent Systems and Computing series. November 2018. <link>https://doi.org/10.1007/978-3-319-99885-5_20</link>
          </p>
          <p>
            [CLASS 1] <b>"Planning Topological Navigation for complex Indoor Environments" </b> Francisco Martín, Jonatan Ginés, David Vargas, Francisco J. Rodríguez-Lera, Vicente Matellán. 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2018), October 2018. <link>https://doi.org/10.1109/IROS.2018.8594038</link>
          </p>

          <h3 className="mb-0">2017</h3>
          <p>
            <b>"3D mapping for a reliable long-term navigation" </b> Jonatan Ginés Clavero, Francisco Martin Rico, Vicente Matellan Olivera, Francisco J. Lera and Jesus Balsa. Robot'2017: 3rd Iberian Robotics Conference, published in Springer - Advances in Intelligent Systems and Computing. 22-24 November 2017, Sevilla (Spain). <link>https://doi.org/10.1007/978-3-319-70836-2_24</link>
          </p>
          <p>
            <b>"Practical aspects of deploying Robotherapy" </b> Francisco Martin Rico and Jonatan Ginés Clavero. Robot'2017: 3rd Iberian Robotics Conference, published in Springer - Advances in Intelligent Systems and Computing. 22-24 November 2017, Sevilla (Spain). <link>https://doi.org/10.1007/978-3-319-70833-1_30</link>
          </p>
          <p>
            <b>"Dynamics maps for long-term autonomy" </b> Jonatan Ginés Clavero, Francisco Martin Rico, Vicente Matellan Olivera, Francisco J. Lera and Jesus Balsa. 17th International Conference on Autonomous Robot Systems and Competitions (ICARSC 2017). Coimbra (Portugal). May 2017. <link>https://doi.org/10.1109/ICARSC.2017.7964057</link>
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
          {/*
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
           */}
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
          {/*
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
          */}
        </div>
        
      </section>

      <hr className="m-0" />
      {/*
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
      */}
    </div>
  </Layout>
);

export default IndexPage;
