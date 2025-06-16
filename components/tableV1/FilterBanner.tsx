import React from 'react'

const FilterBanner = ({locations}:{locations: string[]}) => {
  return (
    <div className='flex flex-col gap-2 rounded-md border p-4 my-3'>
            <h3 className='text-sm font-medium text-muted-foreground'>Locations</h3>
    <div className='flex  p-3 mb-2 text-white gap-3'>
        {locations.map((location)=>(
            <span className='flex gap-2 items-center justify-start'>
            <input key={location} type="checkbox" />
            <p>{location}</p>
            </span>
        ))}
    </div>
    </div>
  )
}

export default FilterBanner