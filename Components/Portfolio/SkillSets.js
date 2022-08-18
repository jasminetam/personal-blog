import skillIcons from "../../utils/skillIcons";

function SkillSets({ forwardRef }) {
  return (
    <>
      <div className="portfolioSkillSetsWrapper" ref={forwardRef}>
        <div className="portfolioSkillSetsFirstDiv">
          <h1 className="portfolioTitles">Skill Sets</h1>
          <div className="portfolioSkillSetsIconsDiv">
            {skillIcons.map((item, idx) => (
            <div className="portfolioSkillSetsSingleIconDiv" key={idx}>
             <div className="portfolioSkillSetsSingleIcon">{item.icon}</div>
              <h3 className="portfolioSkillSetsSingleText">{item.name}</h3>
            </div>
            ))}
            {/* <div className="portfolioSkillSetsSingleIconDiv">
              <SiNextdotjs className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">Next.js</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiTypescript className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">Typescript</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiExpress className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">Express.js</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiMongodb className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">MongoDB</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiTailwindcss className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">
                Tailwind <br /> CSS
              </h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiNodedotjs className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">Node.js</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiGraphql className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">GraphQL</h3>
            </div>
            <div className="portfolioSkillSetsSingleIconDiv">
              <SiApollographql className="portfolioSkillSetsSingleIcon" />
              <h3 className="portfolioSkillSetsSingleText">Apollo</h3>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSets;
