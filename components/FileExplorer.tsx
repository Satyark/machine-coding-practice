import explorer, { ExplorerItem } from '@/data/folderData'
import React, { useState } from 'react'
import Tree from './Tree';
export interface FileExplorerProps {
    data: ExplorerItem;
  }
const FileExplorer = ({ data }: FileExplorerProps) => {
    // const [explorerData, setExplorerData] = useState(explorer)
  return (
    <div className='w-full'>
        <Tree dataProp={data}/>
    </div>
  )
}

export default FileExplorer