import React from 'react';
import '../../style/components/_techCard.scss';

const TechCard = (tech) => {
    const techList = tech.tech;
    return (
        <div className='tech-list'>
            {techList.map((technology, index) => (
                <div key={index} className='tech-card'>
                    <span>
                        {technology}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default TechCard;
