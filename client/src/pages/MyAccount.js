import MyAccountInfoContent from "../components/MyAccount/myAccountInfo.jsx";
import MyAccountPurchasesContent from "../components/MyAccount/myAccountPurchases.jsx";
import MyAccountSalesContent from "../components/MyAccount/myAccountSales.jsx";

function MyAccount(){
  return(
      <div>
        <MyAccountInfoContent/>
        <MyAccountPurchasesContent/>
        <MyAccountSalesContent/>
      </div>
  )
}
export default MyAccount;