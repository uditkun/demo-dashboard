import React from 'react'

const PeopleHighlightCard = () => {
  return (
    <div className='flex flex-col gap-2'>
    <div className='w-[522px] h-[150px] flex basis-full gap-2 justify-between items-center border border-shadow1 bg-white rounded-[20px] p-4'>
            <div><img className='h-full' src="icons/Logo.svg" alt="logo" /></div>
            <div>
                <h4 className='text-2xl font-semibold'>Rahul Yadav</h4>
                <p>Electrical Maintenance</p>
            </div>
            <div><img src="icons/big-arrow-right.svg" alt="right-arrow" /></div>
        </div>
        <span>Max LOTO done last month</span>
    </div>
  )
}

export default PeopleHighlightCard