import skillIcons from "../../utils/skillIcons";
import SetIntersectionObserver from "../../utils/IntersectionObserver"

function SkillSets({ forwardRef }) {
  return (
    <>
      <div className="portfolioSkillSetsWrapper" ref={forwardRef} data-test="component-SkillSets">
        <div className="portfolioSkillSetsDiv">
          <h1 className="portfolioTitles">Skill Sets</h1>
          <div className="portfolioSkillSetsIconsDiv">
            {skillIcons.map((item, idx) => (
              <div className="portfolioSkillSetsSingleIconDiv" key={idx}>
                 <SetIntersectionObserver type={1} direction="down">
                  <div className="portfolioSkillSetsSingleIcon">{item.icon}</div>
                </SetIntersectionObserver>
                <SetIntersectionObserver type={1} direction="up">
                  <h3 className="portfolioSkillSetsSingleText">{item.name}</h3>
                  </SetIntersectionObserver>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSets;
