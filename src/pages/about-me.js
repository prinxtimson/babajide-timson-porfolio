import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMePage = () => (
  <Layout>
    <Seo title="About me" />
    <div className="row align-items-center mt-5">
      <div className="col-lg-6">
        <StaticImage
          src="../images/jide_timson.jpg"
          layout="fullWidth"
          placeholder="tracedSVG"
          alt="Babajide Timson"
          style={{ marginBottom: `1.4rem` }}
        />
      </div>
      <div className="col-lg-6">
        <h1 style={{ color: "#08fdd8" }}>About me</h1>
        <p className="lh-lg">
          Hi, my name is Babajide Timson, and I am a FullStack Developer and
          Mobile App Developer with over 4 years of commercial experiences
          working on a range of versatile projects.
        </p>
        <p className="lh-lg">
          I am a hard working, problem solver and self motivated person who
          loves taking on new challenges and opened to the experiences and
          skills I can develop even from projects I have never worked on before.
          I also enjoy learning and building interesting new things.
        </p>
      </div>
    </div>
    <div className="mb-2">
      <p className="lh-lg">
        I have worked with different frameworks such as React, Angular, React
        Native, NodeJs and Laravel. In addition, I have critical experience
        using different CMS platforms like Wordpress, Big Commerce and Shopify
        depending on the project specifications.{" "}
      </p>
      <p>
        Currently, I work remotely as a Senior Software Developer with{" "}
        <a
          href="https://tritekconslting.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tritek Consulting Ltd
        </a>
        , a UK base company.
      </p>
    </div>
    <div className="my-4">
      <h2 className="mb">Skills</h2>
      <div className="row">
        {SKILLS.map((arr, index) => (
          <div className="col-12 col-md-6" key={index}>
            {arr.map(skill => (
              <div className="mb-4" key={skill.id}>
                <h6 className="mb-2">{skill.value}</h6>
                <div className="progress" style={{ height: 2 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: "#fd2155",
                    }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="progress"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default AboutMePage

const SKILLS = [
  [
    {
      id: "1",
      value: "Javascript",
      level: 98,
    },
    {
      id: "2",
      value: "NodeJS",
      level: 99,
    },
    {
      id: "3",
      value: "ReactJS",
      level: 95,
    },
    {
      id: "4",
      value: "Redux",
      level: 95,
    },
    {
      id: "11",
      value: "Firebase",
      level: 90,
    },
    {
      id: "12",
      value: "MongoDB",
      level: 96,
    },
  ],
  [
    {
      id: "8",
      value: "React Native",
      level: 90,
    },
    {
      id: "5",
      value: "GatsbyJS",
      level: 75,
    },
    {
      id: "6",
      value: "Laravel",
      level: 90,
    },
    {
      id: "7",
      value: "PHP",
      level: 93,
    },
    {
      id: "9",
      value: "AngularJS",
      level: 65,
    },
    {
      id: "10",
      value: "WordPress",
      level: 90,
    },
  ],
]
