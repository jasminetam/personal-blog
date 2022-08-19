import otherSkillList from '../../utils/otherskillList';

function OtherSkills({ forwardRef }) {
  return (
    <>
      <div
        className="portfolioOtherSkillsWrapper"
        data-test="component-OtherSkills"
        ref={forwardRef}
      >
        <div className="portfolioOtherSkillsDiv">
          <h1 className="portfolioOtherSkillsTitles">Other Skills</h1>
        </div>
        <div className="portfolioSkillsComponentsDiv">
          <div className="portfolioSkillsComponentsSecondDiv">
            {otherSkillList.map((item, idx) => (
              <div className="portfolioSkillsBlockDiv" key={idx}>
                <div className="portfolioSkillsSubtitlesDiv">
                  <div className="portfolioSkillsIcon">{item.icon}</div>
                  <h2 className="portfolioSkillsSubtitles">{item.title}</h2>
                </div>
                <div className="portfolioSkillsTextDiv">
                  <h5 className="portfolioSkillsText">{item.desc}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherSkills;
