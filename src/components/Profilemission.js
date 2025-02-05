import React from 'react';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

const Profilemission = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMission = missions.filter((mission) => mission.reserved === true);
  return (
    <li className="res-mission">
      {reservedMission.map((mission) => (
        <p key={mission.mission_id}>{mission.mission_name}</p>
      ))}
    </li>
  );
};
export default Profilemission;
