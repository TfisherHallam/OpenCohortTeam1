import MyAccountInfoContent from "../components/MyAccount/myAccountInfo.jsx";
import MyAccountPurchasesContent from "../components/MyAccount/myAccountPurchases.jsx";
import MyAccountSalesContent from "../components/MyAccount/myAccountSales.jsx";
import MyAccountLogOut from "../components/MyAccount/myAccountLogout.jsx"; 

function MyAccount(){
  return(
      <div>
        <h1>My Account</h1>
        <MyAccountInfoContent/>
        <MyAccountPurchasesContent/>
        <MyAccountSalesContent/>
        <MyAccountLogOut/>
      </div>
  )
}
export default MyAccount;