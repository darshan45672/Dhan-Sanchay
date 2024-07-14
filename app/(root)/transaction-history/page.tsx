import HeaderBox from '@/components/HeaderBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const TransactionHistory = async ({ searchParams: {id, page}}:SearchParamProps) => {
  const current =  Number(page as string) || 1 ;

  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);

  const accounts = await getAccounts({ userId: loggedIn.$id });

  if(!accounts) return;

  const appwriteItemId = ( id as string) || accounts?.data[0]?.appwriteItemId;

  const account = await getAccount({appwriteItemId});

  console.log(accounts?.data);

  return (
    <div className='transactions'>
      <div className='transactions-header'>
        <HeaderBox title='Transaction History' subtext='See your bank detials' />
      </div>

      <div className='space-y-6'>
        <div className='transactions-account'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-18 font-bold text-white'>{account?.data.name}</h2>
            <p className='text-14 text-blue-25'> {account?.data.officialName} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory