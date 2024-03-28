// ProfilesList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilesList = ({ page, current }) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch profiles based on the page number
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}/getProfiles/${page}`)
      .then((response) => {
        setProfiles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="m-8">
      <h2 className="text-white text-2xl font-semibold m-2 p-2">Related Profiles:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : profiles.length > 0 ? (
        <ul className="flex flex-wrap justify-evenly">
          {profiles.map((profile) => (
            profile._id.$oid !== current && (
              <a href={`/profile/${profile._id.$oid}`} key={profile._id.$oid} className="flex-shrink-0">
                <li className="mb-2 p-4 border border-gray-300 rounded-lg bg-white flex items-center w-[275px]">
                  {/* Move the image container to the left */}
                  <img
                    src={profile.picture}
                    alt={profile.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    {/* Display profile information as needed */}
                    <p className="text-lg font-semibold mb-2">{profile.name}</p>
                    <p className="text-gray-600">
                      {profile.localizedHeadline && profile.localizedHeadline.length > 30
                        ? `${profile.localizedHeadline.slice(0, 30)}...`
                        : profile.localizedHeadline}
                    </p>
                  </div>
                </li>
              </a>
            )
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No profiles found.</p>
      )}
    </div>
  );
};

export default ProfilesList;
