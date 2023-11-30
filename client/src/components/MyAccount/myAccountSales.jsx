import React, {useCallback, useEffect, useState} from 'react';
import {FaRegMoneyBillAlt} from "react-icons/fa";
import './myAccount.css';
import '../../App.css';
import fetch from 'node-fetch';
import {useSelector} from 'react-redux';

const PORT = process.env.PORT || 3001;

export const SalesCard = ({sale}) => {
  return (
      <a href={`/saleDetails/${sale._id}`} className="SaleCard">
        <img src={sale.image} alt={sale.eventName} className="SaleImage"/>
        <div className="SaleDetails">
          <h2 className="saleTitle">{sale.eventName}</h2>
          <p>Sold By: {sale.seller}</p>
          <p>Price: £{sale.price}</p>
          <p>Bought by: {sale.buyer}</p>
        </div>
      </a>
  );
};

const MyAccountSalesContent = () => {
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
  };
  const [toggle, setToggle] = useToggle();
  const [salesData, setSalesData] = useState([]);
  const currentUser = useSelector(state => state.user.currentUser)

  useEffect(() => {
    const fetchSalesData = async (currentUser) => {
      try {
        const response = await fetch(
            `http://localhost:${PORT}/api/completedAuctions?seller=${currentUser.username}`
        );
        if (response.ok) {
          const data = await response.json();
          const filteredData = data.filter((sale) => sale.seller === currentUser.username && sale.buyer !== currentUser.username);
          setSalesData(filteredData);
        } else {
          console.error('Failed to fetch sales data');
        }
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    if (toggle) {
      fetchSalesData(currentUser);
    }
  }, [toggle, currentUser.username]);

  return (
      <div>
        <button className="button1" onClick={setToggle}>
          <FaRegMoneyBillAlt className="icon" size={50}/>
          <br/>
          <div className="accountPageButtonText">My sales</div>
        </button>

        {toggle && (
            <div className="SalesContainer">
              {salesData.map((sale) => (
                  <SalesCard key={sale.id} sale={sale}/>
              ))}
            </div>
        )}
      </div>
  );
};

export default MyAccountSalesContent;
