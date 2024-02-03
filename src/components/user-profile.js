import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/user/1");
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.name}</p>
          <img
            src={`http://localhost:3001${userProfile.profilePicture}`}
            alt="Profile"
          />
          {/* Display other user profile information */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
