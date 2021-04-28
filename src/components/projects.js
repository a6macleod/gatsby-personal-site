import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Projects({ projectData }) {
  return (
    <div>
      <div>
        {/* Map over the .src/data/projectData.json file to pull info about the projects created */}
        {projectData.map((project) => (
          <div key={project.node.id}>
            <div className="imgContainer">
              <a href={project.node.link} target="_blank" rel="noreferrer" aria-hidden="true">
                {/* <img src={project.node.img} alt={project.node.imgAlt} /> */}
              </a>
            </div>
            <div className="projectInfo">
              <h2>{project.node.title}</h2>
              <p>{project.node.goal}</p>
              <p>{project.node.tech}</p>
              <div className="links">
                <a href={project.node.link} target="_blank" rel="noreferrer">
                  Check out the site
                  <i className="far fa-share-square" aria-hidden="true" role="presentation" />
                </a>
                <a href={project.node.code} target="_blank" rel="noreferrer">
                  See the code
                  <i className="far fa-share-square" aria-hidden="true" role="presentation" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Projects.propTypes = {
  projectData: PropTypes.array.isRequired,
};
