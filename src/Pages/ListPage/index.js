import React from 'react';
import { useSelector } from 'react-redux';
import LinkButton from '../../Components/LinkButton';
import './index.css';

function ListPage() {
  const userDetails = useSelector((state) => state.user.users);
  console.log('User Details', userDetails);
  return (
    <div className="container__wrapper">
      <h1 className="header1">List Page</h1>

      {Object.keys(userDetails).length ? (
        <div>
          <p className="user__details">
            Name:
            {' '}
            <span>
              {userDetails.fName}
              {userDetails.lName}
            </span>
          </p>
          <p className="user__details">
            Email:
            {' '}
            <span>
              {userDetails.email}
            </span>
          </p>
          <p className="user__details">
            Contact Number:
            {' '}
            <span>
              {userDetails.phone}
            </span>
          </p>
          <p className="user__details">
            Gender:
            {' '}
            <span>
              {userDetails.gender}
            </span>
          </p>
          <p className="user__details">
            Nationality:
            {' '}
            <span>
              {userDetails.nationality}
            </span>
          </p>
          <p className="user__details">
            Date of Birth:
            {' '}
            <span>
              {userDetails.dob.toISOString().slice(0, 10)}
            </span>
          </p>
          <p className="user__details">
            Education Background:
            {' '}
            <span>
              {userDetails.eduBackground}
            </span>
          </p>

        </div>
      ) : (
        <div>
          <div className="msc-blank">
            <div className="msc-blank-icon">⚠</div>
            <div className="msc-blank-title">
              No records have been added yet
            </div>
            <div className="msc-blank-desc">
              This information needs to be added by your manager
            </div>
          </div>

          <LinkButton linkTo="/form" title="Add Data" />
        </div>
      )}

    </div>
  );
}

export default ListPage;
