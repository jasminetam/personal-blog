import React from "react";
import ProjectLayout from "./ProjectLayout";
import {
  spotifake,
  personalBlog,
  eCommerceSite,
  dailyExpenses,
  AdvancedECommerce,
} from "./ProjectList";

export default function ProjectsBrowse() {
  return (
    <div>
      <div className="projectWrapper">
        <div className="projectflex">
          {[
            spotifake,
            personalBlog,
            eCommerceSite,
            dailyExpenses,
            AdvancedECommerce,
          ].map((item, idx) => (
            <ProjectLayout key={idx} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
