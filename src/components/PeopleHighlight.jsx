import React from 'react'
import PeopleHighlightCard from './PeopleHighlightCard'

const PeopleHighlight = () => {
  return (
    <section className='w-full flex gap-6 overflow-x-hidden py-7 px-8'>
        <PeopleHighlightCard/>
        <PeopleHighlightCard/>
        <PeopleHighlightCard/>
        <PeopleHighlightCard/>
    </section>
  )
}

export default PeopleHighlight