import skillIcons from "../../utils/skillIcons";

function SkillSets({ forwardRef }) {
  return (
    <>
      <div className="portfolioSkillSetsWrapper" ref={forwardRef} data-test="component-SkillSets">
        <div className="portfolioSkillSetsDiv">
          <h1 className="portfolioTitles">Skill Sets</h1>
          <div className="portfolioSkillSetsIconsDiv">
            {skillIcons.map((item, idx) => (
            <div className="portfolioSkillSetsSingleIconDiv" key={idx}>
             <div className="portfolioSkillSetsSingleIcon">{item.icon}</div>
              <h3 className="portfolioSkillSetsSingleText">{item.name}</h3>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSets;
