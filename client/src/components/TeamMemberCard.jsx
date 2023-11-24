import React from 'react';
import './TeamMemberCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const TeamMemberCard = ({ name, role, imageSrc, facebookLink, instagramLink, twitterLink }) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imageSrc} alt={`${name}'s profile`} />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
          <a href={facebookLink}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={instagramLink}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={twitterLink}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
