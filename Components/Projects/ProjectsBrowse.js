import React from "react";
import ProjectLayout from "./ProjectLayout";
import {
  spotifake,
  personalBlog,
  eCommerceSite,
  dailyExpenses,
  projectManagement,
} from "./ProjectList";

export default function ProjectsBrowse() {
  return (
    <div className="projectWrapper">
              <div className="projectflex">
          {[
            spotifake,
            personalBlog,
            eCommerceSite,
            dailyExpenses,
            projectManagement,
          ].map((item, idx) => (
            <ProjectLayout key={idx} project={item} />
          ))}
        </div>
        </div>
  );
}
