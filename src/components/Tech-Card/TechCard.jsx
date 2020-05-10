import React from 'react';
import '../../style/components/_techCard.scss';

const TechCard = tech => {
  const techList = tech.tech;
  return (
    <>
      {techList.map(technology => (
        <div className="tech-card">
          <span>{technology}</span>
        </div>
      ))}
    </>
  );
};

export default TechCard;
