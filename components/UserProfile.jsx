import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, profilePicture, bio }) => {
  return (
    <div className="user-profile">
      <img 
        src={profilePicture} 
        alt={`${name}'s profile picture`}
        className="profile-image"
      />
      <h2 className="user-name">{name}</h2>
      <p className="user-bio">{bio}</p>
    </div>
  );
};

// PropTypes validation
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default UserProfile;