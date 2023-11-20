import MyAccountInfoContent from "./myAccountInfo.jsx";
import MyAccountLogOut from "./myAccountLogout.jsx";
import MyAccountPurchasesContent from "./myAccountPurchases.jsx";
import MyAccountSalesContent from "./myAccountSales.jsx";
//import MyAccountListings from "./myAccountListings.jsx"
import './myAccount.css';

function MyAccountMainContent() {
    return (
        <div class="flex-container">
            <div class="mainContentDiv"><MyAccountInfoContent /></div>
            {/* <div class="mainContentDiv"><MyAccountListings /></div> */}
            <div class="mainContentDiv"><MyAccountSalesContent /></div>
            <div class="mainContentDiv"><MyAccountPurchasesContent /></div>
            <div class="mainContentDiv"><MyAccountLogOut /></div>
        </div>
    )
}

export default MyAccountMainContent;