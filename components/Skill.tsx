"use client";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

// Skill 객체 타입 지정
type SkillObj = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const gridFrontSkillArray: SkillObj[] = [
  { src: "/Skills/html.png", alt: "HTML", width: 90, height: 90 },
  { src: "/Skills/css.png", alt: "CSS", width: 65, height: 90 },
  { src: "/Skills/js.png", alt: "Javascript", width: 65, height: 90 },
  { src: "/Skills/ts.svg", alt: "Typescript", width: 90, height: 90 },
  {
    src: "/Skills/sc.png",
    alt: "Styled-Component",
    width: 90,
    height: 90,
  },
  { src: "/Skills/recoil.svg", alt: "Recoil", width: 90, height: 90 },
];

const FrontSkillArray: SkillObj[] = [
  { src: "/next.svg", alt: "NextJS", width: 150 },
  { src: "/Skills/react.png", alt: "React", width: 200 },
];

const BackSkillArray: SkillObj[] = [
  { src: "/Skills/node.png", alt: "Node", width: 180 },
  { src: "/Skills/express_cover.png", alt: "Express", width: 150 },
  { src: "/Skills/mysq.webp", alt: "MySQL", width: 150 },
];

const DeploySkillArray: SkillObj[] = [
  // { src: "/Skills/aws.png", alt: "AWS", width: 130 },
  { src: "/Skills/docker.png", alt: "Docker", width: 100 },
  { src: "/Skills/kube.png", alt: "Kubernetes", width: 150 },
  { src: "/Skills/vercel.png", alt: "Vercel", width: 150 },
];

const ExtraSkillArray: SkillObj[] = [
  // { src: "/Skills/git.png", alt: "Git", width: 130 },
  // { src: "/Skills/vscode.png", alt: "VScode", width: 150 },
  { src: "/Skills/postman.jpg", alt: "Postman", width: 150 },
  { src: "/Skills/slack.png", alt: "Slack", width: 150 },
  { src: "/Skills/figma.408d0f4e.png", alt: "Figma", width: 180 },
];

const Skill = () => {
  return (
    <SkillContainer>
      <Title>
        <Image
          src={"/clip.svg"}
          alt={"clip"}
          width={40}
          height={40}
          style={{
            maxWidth: "100%",
            height: "auto",
            cursor: "pointer",
            opacity: "0.5",
          }}
        />
        {`SKILLS`}
      </Title>
      <JobContainer>
        {/* Front Job Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <JobCard>
            <Jobtitle>{`Front-End`}</Jobtitle>
            {/* Grid Container */}
            <GridContainer>
              {gridFrontSkillArray.map((skill: SkillObj) => {
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

            {FrontSkillArray.map((skill: SkillObj) => {
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
        </motion.div>
        {/* Back Job Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ColumnContainer>
            <JobCard>
              <Jobtitle>{`Back-End`}</Jobtitle>
              {BackSkillArray.map((skill: SkillObj) => {
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
              <Jobtitle>{`Deployment`}</Jobtitle>
              {/* Grid Container */}
              {DeploySkillArray.map((skill: SkillObj) => {
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
        </motion.div>
        {/* Other Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <JobCard>
            <Jobtitle>{`Extra`}</Jobtitle>
            {ExtraSkillArray.map((skill: SkillObj) => {
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
        </motion.div>
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

  @media (max-width: 1080px) {
    display: none;
  }
`;

const JobContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 4rem;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 0.5rem;

  @media (max-width: 1080px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.2rem;
  }
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

  @media (max-width: 1080px) {
    min-width: 350px;
    padding: 0.7rem;
  }
`;

const Title = styled.span`
  padding: 0.5rem 0;

  font-size: 3rem;
  font-weight: bold;
  font-family: sans-serif;
  color: black;

  border-bottom: 1px solid gray;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.4rem;

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
