import React from 'react';
import { Link } from 'react-router-dom';
import { ipoData } from '../../data/ipo';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './List.css';

const IPOList: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeader">Company/Issue Date</TableCell>
            <TableCell className="tableHeader">Issue Size</TableCell>
            <TableCell className="tableHeader">Price Range</TableCell>
            <TableCell className="tableHeader">Min Invest/Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ipoData.map((ipo) => (
            <TableRow key={ipo.id} className="tableRow">
              <TableCell className="tableData">
                <div className="companyInfo">
                  <img src={ipo.img} alt={ipo.name} className="companyLogo" />
                  <div>
                    <Link to={`/details/${ipo.id}`}>{ipo.name}</Link>
                    <div>{ipo.start_date} - {ipo.end_date}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="tableData">₹{ipo.issue_size}</TableCell>
              <TableCell className="tableData">₹{ipo.range}</TableCell>
              <TableCell className="tableData">
                <div>
                  <div>₹{ipo.min_amt}</div>
                  <div>{ipo.min_invest} Shares / {ipo.min_qty} Lots</div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IPOList;
