import MyAccountInfoContent from "./myAccountInfo.jsx";
import MyAccountLogOut from "./myAccountLogout.jsx";
import MyAccountPurchasesContent from "./myAccountPurchases.jsx";
import MyAccountSalesContent from "./myAccountSales.jsx";
//import MyAccountListings from "./myAccountListings.jsx"
import './myAccount.css';

function MyAccountMainContent() {
    return (
        <div className="flex-container">
            <div className="mainContentDiv"><MyAccountInfoContent /></div>
            {/* <div className="mainContentDiv"><MyAccountListings /></div> */}
            <div className="mainContentDiv"><MyAccountSalesContent /></div>
            <div className="mainContentDiv"><MyAccountPurchasesContent /></div>
            <div className="mainContentDiv"><MyAccountLogOut /></div>
        </div>
    )
}

export default MyAccountMainContent;