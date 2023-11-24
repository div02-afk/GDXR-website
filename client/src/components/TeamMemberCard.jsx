// import React from 'react';
import './TeamMemberCard.css';  // Make sure to import your CSS file

const TeamMemberCard = ({key , name, role, imageSrc, facebookLink, instagramLink, twitterLink }) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imageSrc} alt={`${name}'s profile`} />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
          <a href={facebookLink}><i className="fab fa-facebook"></i></a>
          <a href={instagramLink}><i className="fab fa-instagram"></i></a>
          <a href={twitterLink}><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
