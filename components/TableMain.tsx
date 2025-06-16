"use client"

import React, { useEffect, useState } from 'react'
import tableData from '@/data/tableData.json';
import TableV1, { StreamData } from './tableV1/TableV1';

const filterData = (data: StreamData[], locations: string[], searchTerm: string) => {
  let filtered = data;

  if (locations.length > 0) {
    filtered = filtered.filter((item) => locations.includes(item.location));
  }

  if (searchTerm.trim() !== '') {
    filtered = filtered.filter((item) =>
      item.songName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
};


// const searchData = (data: StreamData[], searchTerm: string)=>{
//   let filtered = data;
//   if (searchTerm.trim() !== '') {
//     filtered = filtered.filter((item) =>
//       item.songName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }
//   return filterData
// }

const TableMain = () => {
    const data = tableData.recentStreams;
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
    const [search,setSearch] = useState<string>('');
    const [debounceSearch, setDebounceSearch] = useState<string>('');
    const locations = [...new Set(data.map(x=>x.location))];

    useEffect(()=>{
      const handler = setTimeout(()=>{
        setDebounceSearch(search)
      },500)

      return ()=>{
        clearTimeout(handler);
      }
    },[search])
    const filteredData = filterData(data, selectedLocation, debounceSearch);

  return (
    <div className='p-5'>
        <div className='flex flex-col justify-between items-start'>
      <div>
      <button className='bg-blue-500 text-sm text-white px-4 py-2 rounded-md my-5' onClick={()=>setIsFilterOpen(!isFilterOpen)}>Filter</button>
        {/* {isFilterOpen && <FilterBanner locations={locations} />} */}
      {isFilterOpen && <div className='flex flex-col gap-2 rounded-md border p-4 my-3'>
                  <h3 className='text-sm font-medium text-muted-foreground'>Locations</h3>
          <div className='flex  p-3 mb-2 text-white gap-3'>
        {locations.map((location)=>(
            <span key={location} className='flex gap-2 items-center justify-start'>
            <input key={location} type="checkbox" checked={selectedLocation.includes(location)} onChange={(e) => {
              const checked = e.target.checked;
              if (checked) {
                setSelectedLocation([...selectedLocation, location]);
              } else {
                setSelectedLocation(selectedLocation.filter(loc => loc !== location));
              }
            }}
            />
            <p>{location}</p>
            </span>
        ))}
    </div>
    </div>}
    </div>
    <span>
      <input type='text' placeholder='Search song ....'  className='border p-4 rounded-md my-3'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
    </span>
        
    <TableV1 data={filteredData} />

        </div>
    </div>
  )
}

export default TableMain