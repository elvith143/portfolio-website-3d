import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>SecureMetasys Infotech Pvt. Ltd.</h5>
              </div>
              <h3>2024 (Present)</h3>
            </div>
            <p>
              Working as a Full Stack Software Developer, building web applications with JavaScript, Reactjs, Nodejs, Laravel, and other modern technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>SecureMetasys Infotech Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Participated as a Software Engineer Intern from January to June 2024.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Application</h4>
                <h5>GTU</h5>
              </div>
              <h3>2022-2024</h3>
            </div>
            <p>
              Completed Master of Computer Application. Achieved 8.5 CPI. Participated in research and published 3 papers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
