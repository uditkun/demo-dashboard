import React from 'react'
import WalletCard from "../components/WalletCard";

const WalletCardList = () => {
  return (
    <div className='flex gap-6 mt-2 ml-8 w-full'>
        <WalletCard/>
        <WalletCard/>
        <WalletCard/>
        <WalletCard/>
    </div>
  )
}

export default WalletCardList