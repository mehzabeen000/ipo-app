import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ipoData } from '../../data/ipo';
import './Detail.css';

const IPODetails: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();
  const ipo = ipoData.find(item => item.id === parseInt(id));

  if (!ipo) {
    return <div>IPO not found</div>;
  }

  return (
    <div className="detailsWrapper">
      <div className="header">
        <div className="companyInfo">
          <img src={ipo.img} alt={ipo.name} className="logo" />
          <div className="name">{ipo.name}</div>
        </div>
        <div className="actionButtons">
          <button className="button" onClick={() => navigate('/')}>Home</button>
          <button className="button">Download</button>
          <button className="button">Apply</button>
        </div>
      </div>
      <div className="detailsBox">
        <h2>IPO details</h2>
        <div className="detailsBox">
          <p>Price: {ipo.range}</p>
          <p>Date: {ipo.start_date} to {ipo.end_date}</p>
          <p>Number of lots: {ipo.min_invest}</p>
        </div>
      </div>
      <div className="detailsBox">
        <h2>IPO timeline</h2>
        <div className="steps">
          <div className={`step`}>
            <div className="check"></div>
            <div>Biding Starts</div>
            <span>{ipo.start_date}</span>
          </div>
          <div className={`step`}>
            <div className="check"></div>
            <div>Biding Starts</div>
            <span>{ipo.end_date}</span>
          </div>
          <div className="step">
            <div className="check"></div>
            <div>Biding Starts</div>
            <span>{ipo.start_date}</span>
          </div>
          <div className="step">
            <div className="check"></div>
            <div>Biding Starts</div>
            <span>{ipo.start_date}</span>
          </div>
        </div>
      </div>
      <div className="detailsBox">
        <h2>About the company</h2>
        <p>{ipo.details}</p>
      </div>
    </div>
  );
};

export default IPODetails;
