import { formatAmount } from "@/lib/utils";
import React from "react";
import BankBalanceCounter from "./BankBalanceCounter";

const TotalBalance = ({
  accounts = [],
  totalBank,
  totalCurrentBalance,
}: TotalBalanceProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* donut chart */}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-3">Total Bank Accounts: {totalBank}</h2>
        <div className="flex flex-col gap-2 ">
          <p className="total-balance-label">Total Cuurent Balance:</p>
          {/* <CountUp end={100} /> */}
          <div className="total-balance-amount flex-center gap-2">
            <BankBalanceCounter count={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalance;
