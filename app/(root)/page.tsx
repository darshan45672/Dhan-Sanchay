import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalance from "@/components/TotalBalance";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Acess and manage your account, view your balance and more."
          />
          <TotalBalance
            accounts={[]}
            totalBank={1}
            totalCurrentBalance={15000.01}
          />
        </header>
        RECENT TRANSCATION
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 5000},{currentBalance:6000}]} />
    </section>
  );
};

export default Home;
