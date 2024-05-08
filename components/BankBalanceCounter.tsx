"use client"
import React from 'react'
import CountUp from 'react-countup'

const BankBalanceCounter = ({count} : {count : number}) => {
  return (
    <p className='w-full'>
    <CountUp end={count}
    prefix='₹'
    decimal='.'
    duration={1}
    decimals={2} />
    </p>
  )
}

export default BankBalanceCounter