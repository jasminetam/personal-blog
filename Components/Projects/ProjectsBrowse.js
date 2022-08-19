import React from 'react';
import ProjectLayout from './ProjectLayout';

import {
  animeGo,
  spotifake,
  personalBlog,
  insfakegram,
  dailyExpenses,
  projectManagement,
} from '../../utils/projectList';

export default function ProjectsBrowse() {
  return (
    <div className="projectWrapper" data-test="component-ProjectsBrowse">
      <div className="projectflex">
        {[
          insfakegram,
          personalBlog,
          animeGo,
          spotifake,
          projectManagement,
          dailyExpenses,
        ].map((item, idx) => (
          <ProjectLayout key={idx} project={item} />
        ))}
      </div>
    </div>
  );
}
