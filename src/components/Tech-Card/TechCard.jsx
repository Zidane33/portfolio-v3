import React from 'react';
import '../../style/components/_techCard.scss';

const TechCard = (techList) => {
    const { techList } = tech;
    return (
        <>
            {techList.map(tech => (
                <div className='tech-card'>
                    <span>
                        {tech}
                    </span>
                </div>
            ))}
        </>
    )
}

export default TechCard;
