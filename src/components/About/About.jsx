import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about, setting } = useContext(PortfolioContext);
  const { img, skills, paragraphOne, paragraphTwo, paragraphThree, resume } = about;
  const { fadeDuration } = setting;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={500} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              right={isDesktop}
              bottom={isMobile}
              duration={fadeDuration}
              delay={500}
              distance="30px"
            >
              <div className="about-wrapper__info ">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                {paragraphTwo ? <p className="about-wrapper__info-text">{paragraphTwo}</p> : ''}
                {paragraphThree ? <p className="about-wrapper__info-text">{paragraphThree}</p> : ''}

                <div className="d-flex justify-content-between flex-wrap">
                  {skills
                    ? skills.map((skill) => {
                        const { skillName, skillIcon } = skill;
                        return (
                          <div className="about-wrapper__info-tag">
                            <i className={`fa fa-${skillIcon}`} /> {skillName}
                          </div>
                        );
                      })
                    : ''}
                </div>
                {resume && (
                  <span className="d-flex">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
