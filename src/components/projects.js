import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
// import { StaticImage } from 'gatsby-plugin-image';

const AllProjectStyles = styled.div`
  margin: 20px;
  h2 {
    /* margin-left: 20px; */
  }
`;

const ProjectStyles = styled.div`
  display: flex;
  gap: 20px;
  box-shadow: 3px 3px 10px hsla(0, 0%, 0%, 0.2), -3px -3px 10px hsla(0, 0%, 0%, 0.2);
  margin-bottom: 30px;
  padding: 20px;
  .imgContainer {
    width: 50%;
  }
  .projectInfo {
    width: 50%;
    padding: 10px;
    .links {
      display: flex;
      flex-direction: column;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

export default function Projects() {
  return (
    <StaticQuery
      query={graphql`
        query projectDataQuery {
          allProjectDataJson {
            edges {
              node {
                title
                goal
                tech
                link
                code
                id
                image {
                  src {
                    id
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                  imgAlt
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <AllProjectStyles>
          <h2>Projects</h2>
          {/* Map over the .src/data/projectData.json file to pull info about the projects created */}
          {data.allProjectDataJson.edges.map((project) => (
            <ProjectStyles key={project.node.id}>
              <div className="imgContainer">
                <a href={project.node.link} target="_blank" rel="noreferrer" aria-hidden="true">
                  <img src={project.node.image.src.childImageSharp.fluid.src} alt={project.node.image.imgAlt} />
                </a>
              </div>
              <div className="projectInfo">
                <h3>{project.node.title}</h3>
                <p>{project.node.goal}</p>
                <p>{project.node.tech}</p>
                <div className="links">
                  <p>
                    <a href={project.node.link} target="_blank" rel="noreferrer">
                      Check out the site
                    </a>
                  </p>
                  <p>
                    <a href={project.node.code} target="_blank" rel="noreferrer">
                      See the code
                    </a>
                  </p>
                </div>
              </div>
            </ProjectStyles>
          ))}
        </AllProjectStyles>
      )}
    />
  );
}
