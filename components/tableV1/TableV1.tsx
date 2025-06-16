"use client"
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react'
import { columns } from './columns';

export interface StreamData {
    id: number;
    songName: string;
    artist: string;
    dateStreamed: string;
    streamCount: number;
    userId: string;
    duration: number;
    location: string;
  }

const TableV1 = ({data}: {data: StreamData[]}) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 5,
            },
        },
    })
  return (
    <div>
    <div className='rounded-md border p-3 space-y-4'>
        <table>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th key={header.id} className='text-left text-xl font-bold text-gray-500 p-4 border-b border-gray-200'
                        onClick={header.column.getToggleSortingHandler()}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
                        
                    ))}
                </tr>
            ))}
            <tbody>
                {table.getRowModel().rows.map((row)=>(
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell)=>(
                            <td key={cell.id} className='text-left text-sm text-gray-500 p-4'>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    <div className='flex justify-between items-center mt-4'>
        <button className='bg-blue-500 text-sm text-white px-4 py-2 rounded-md' onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
        </button>
        <span className='text-sm text-gray-500'>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button className='bg-blue-500 text-sm text-white px-4 py-2 rounded-md' onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
        </button>
    </div>
    </div>
  )
}

export default TableV1