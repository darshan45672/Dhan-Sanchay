import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSideBar from "@/components/RightSideBar";
import TotalBalance from "@/components/TotalBalance";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async ( {searchParams : {id, page}}:SearchParamProps) => {
  const current =  Number(page as string) || 1 ;

  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);

  const accounts = await getAccounts({ userId: loggedIn.$id });

  if(!accounts) return;

  const appwriteItemId = ( id as string) || accounts?.data[0]?.appwriteItemId;

  const account = await getAccount({appwriteItemId});

  console.log(account, accounts?.data);
  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={`${loggedIn?.firstName} ${loggedIn?.lastName}` || "Guest"}
            subtext="Acess and manage your account, view your balance and more."
          />
          <TotalBalance
            accounts={accounts?.data}
            totalBank={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        {/* RECENT TRANSCATION */}
        <RecentTransactions accounts={accounts?.data} transactions={account?.transactions} appwriteItemId = {appwriteItemId} page={current} />
      </div>
      <RightSideBar user={loggedIn} transactions={accounts?.transactions} banks={accounts?.data.slice(0,2)} />
    </section>
  );
};

export default Home;
