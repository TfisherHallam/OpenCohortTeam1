import React, { useEffect, useState, useCallback } from 'react';
import { ImCross } from "react-icons/im";
import './myAccount.css';
import '../../App.css';
import fetch from 'node-fetch';
import { SalesCard } from './myAccountSales';
import {useSelector} from "react-redux";
const PORT = process.env.PORT || 3001;

const MyAccountUnsuccessfulContent = () => {
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
      console.log('current User: ', currentUser);
      console.log('current User username: ', currentUser.username);
      try {
        const response = await fetch(
            `http://localhost:${PORT}/api/completedAuctions?buyer=${currentUser.username}`
        );
        if (response.ok) {
          const data = await response.json();
          const filteredData = data.filter((sale) => sale.buyer === currentUser.username && sale.seller === currentUser.username);
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
          <ImCross className="icon" size={50} />
          <br />
          <div className="accountPageButtonText">My Unsuccessful Sales</div>
        </button>

        {toggle && (
            <div className="SalesContainer">
              {salesData.map((sale) => (
                  <SalesCard key={sale.id} sale={sale} />
              ))}
            </div>
        )}
      </div>
  );
};

export default MyAccountUnsuccessfulContent;
