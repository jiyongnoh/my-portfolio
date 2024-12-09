"use client";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const gridFrontSkillArray = [
  { src: "/Skills/html.png", alt: "HTML", width: 90, height: 90 },
  { src: "/Skills/css.png", alt: "CSS", width: 65, height: 90 },
  { src: "/Skills/js.png", alt: "Javascript", width: 65, height: 90 },
  { src: "/Skills/ts.svg", alt: "Typescript", width: 90, height: 90 },
  { src: "/Skills/sc.png", alt: "Styled-Component", width: 90, height: 90 },
  { src: "/Skills/recoil.svg", alt: "Recoil", width: 90, height: 90 },
];

const FrontSkillArray = [
  { src: "/next.svg", alt: "NextJS", width: 150 },
  { src: "/Skills/react.png", alt: "React", width: 200 },
];

const BackSkillArray = [
  { src: "/Skills/node.png", alt: "Node", width: 180 },
  { src: "/Skills/express_cover.png", alt: "Express", width: 150 },
  { src: "/Skills/mysq.webp", alt: "MySQL", width: 200 },
];

const DeploySkillArray = [
  { src: "/Skills/aws.png", alt: "AWS", width: 130 },
  { src: "/Skills/docker.png", alt: "Docker", width: 100 },
  { src: "/Skills/kube.png", alt: "Kubernetes", width: 150 },
  { src: "/Skills/vercel.png", alt: "Vercel", width: 150 },
];

const ExtraSkillArray = [
  { src: "/Skills/git.png", alt: "Git", width: 130 },
  { src: "/Skills/vscode.png", alt: "VScode", width: 150 },
  { src: "/Skills/postman.jpg", alt: "Postman", width: 150 },
  { src: "/Skills/slack.png", alt: "Slack", width: 150 },
  { src: "/Skills/figma.408d0f4e.png", alt: "Figma", width: 150 },
];

const Skill = () => {
  return (
    <SkillContainer>
      <Title>{`SKILLS`}</Title>
      <JobContainer>
        {/* Front Job Card */}
        <JobCard>
          <Jobtitle>Front-End</Jobtitle>
          {/* Grid Container */}
          <GridContainer>
            {gridFrontSkillArray.map((skill) => {
              const { src, alt, width, height } = skill;
              return (
                <motion.div
                  key={alt}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "2px solid #eeeeee",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={src} alt={alt} width={width} height={height} />
                </motion.div>
              );
            })}
          </GridContainer>

          {FrontSkillArray.map((skill) => {
            const { src, alt, width } = skill;
            return (
              <motion.div
                key={alt}
                whileHover={{ scale: 1.1 }}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "2px solid #eeeeee",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width ? width : 150}
                  height={90}
                />
              </motion.div>
            );
          })}
        </JobCard>
        <ColumnContainer>
          {/* Back Job Card */}
          <JobCard>
            <Jobtitle>Back-End</Jobtitle>
            {BackSkillArray.map((skill) => {
              const { src, alt, width } = skill;
              return (
                <motion.div
                  key={alt}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "2px solid #eeeeee",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={width ? width : 150}
                    height={90}
                  />
                </motion.div>
              );
            })}
          </JobCard>
          {/* Deploy Job Card */}
          <JobCard>
            <Jobtitle>Deployment</Jobtitle>
            {/* Grid Container */}
            {DeploySkillArray.map((skill) => {
              const { src, alt, width } = skill;
              return (
                <motion.div
                  key={alt}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "2px solid #eeeeee",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={width ? width : 150}
                    height={80}
                  />
                </motion.div>
              );
            })}
          </JobCard>
        </ColumnContainer>
        {/* Other Card */}
        <JobCard>
          <Jobtitle>Extra</Jobtitle>
          {ExtraSkillArray.map((skill) => {
            const { src, alt, width } = skill;
            return (
              <motion.div
                key={alt}
                whileHover={{ scale: 1.1 }}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "2px solid #eeeeee",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width ? width : 150}
                  height={80}
                />
              </motion.div>
            );
          })}
        </JobCard>
      </JobContainer>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  width: 100vw;
  background-color: #ffc107;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 3rem;
`;

const JobContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 4rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 0.5rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4rem;
`;

const JobCard = styled.div`
  min-width: 400px;
  padding: 1.5rem;
  background-color: white;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);

  gap: 1rem;

  user-select: none;
`;

const Title = styled.span`
  padding-bottom: 0.5rem;

  font-size: 3rem;
  font-weight: bold;
  font-family: sans-serif;
  color: black;

  border-bottom: 1px solid gray;

  user-select: none;
`;

const Jobtitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #f4623a;

  user-select: none;

  margin-bottom: 1rem;
`;

export default Skill;
