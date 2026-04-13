import React, { useEffect, useState } from "react";

const useProfilesData = () => {
  const [profilesData, setProfilesData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const profiles = async () => {
      setLoader(true);
      const promise = await fetch("/profileData.json");
      const response = await promise.json();
      setProfilesData(response);
      setLoader(false);
    };
    profiles();
  }, []);
  return { profilesData, loader };
};

export default useProfilesData;
