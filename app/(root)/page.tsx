import HeaderBox from '@/components/HeaderBox'
import TotalBalance from '@/components/TotalBalance';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'John', lastName: 'Doe'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title='Welcome'
          user = {loggedIn?.firstName + ' ' + loggedIn?.lastName || 'Guest'}
          subtext = "Acess and manage your account, view your balance and more."
          />
        </header>
        <TotalBalance 
        accounts ={[]}
        totalBank = {1}
        totalCurrentBalance = {1500.01}
        />
      </div>
    </section>
  )
}

export default Home