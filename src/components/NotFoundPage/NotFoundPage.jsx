import React from 'react';
import './NotFoundPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';



function NotFoundPage() {
  return (
    <div className='nfp-container'>
      <h1 className='error-404'><FontAwesomeIcon icon={faExclamationCircle} /> Error 404 - Page Not Found </h1>
    </div>
  );
}

export default NotFoundPage;
