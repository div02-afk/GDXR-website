import React from 'react';
import './ourteam.css';
import TeamMemberCard from './TeamMemberCard';

const Ourteam = ({ numberOfCards }) => {
  return (
    <div className="cardContainer" >
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <TeamMemberCard
          key={index}
          name="Nepal Singh"
          role="Sec"
          imageSrc="/images/71310255.jpg"
          facebookLink="github.com/nepal143"
          instagramLink="github.com/nepal143"
        />
      ))}
    </div>
  );
};

export default Ourteam;
