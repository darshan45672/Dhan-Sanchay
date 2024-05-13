import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transactions</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Cagetory</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction: Transaction) => {
          const status = getTransactionStatus(new Date(transaction.date));
          const amount = formatAmount(transaction.amount);
          const isDebit = transaction.type === "debit";
          const isCredit = transaction.type === "credit";

          return (
            <TableRow key={transaction.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT `}>
              <TableCell>
                <div>
                  <h1>{removeSpecialCharacters(transaction.name)}</h1>
                </div>
              </TableCell>
              <TableCell>
                {isDebit ? `- ${amount}` : isCredit ? `+ ${amount}` : amount}
              </TableCell>
              <TableCell>{status}</TableCell>
              <TableCell>
                {formatDateTime(new Date(transaction.date)).dateTime}
              </TableCell>
              <TableCell className="max-md:hidden">
                {transaction.paymentChannel}
              </TableCell>
              <TableCell>
                {transaction.category}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
