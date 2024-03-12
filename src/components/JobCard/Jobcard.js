import React from 'react';
import { NavLink } from 'react-router-dom';

const JobCard = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
            <div className="position-relative d-flex align-items-center">
                <img src="..." className="position-absolute top-0 end-0 rounded-circle border border-dark" alt="..." style={{ width: '40px', height: '40px', backgroundColor: 'black', marginRight: '10px' }} />
                
            </div>
            
            <div className="card-body">
            <div>
                <h5 className="position-absolute top-0 end-1 card-title mb-0 border rounded p-2 fs-3" style={{ borderRadius: '4px' }}>Card title</h5>
            </div>
                <p className="card-text mb-3 fs-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" className="btn btn-primary fs-3">Go somewhere</NavLink>
            </div>
        </div>
  );
};

export default JobCard;
