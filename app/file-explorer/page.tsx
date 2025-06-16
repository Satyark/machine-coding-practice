import FileExplorer from '@/components/FileExplorer'
import explorer from '@/data/folderData'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen gap-10 items-start justify-top p-5">
        <FileExplorer data={explorer}/>
    </div>
  )
}

export default page