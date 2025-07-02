'use client';
import explorer, { ExplorerItem } from '@/data/folderData'
import React, { useState } from 'react'
import Tree from './Tree';
export interface FileExplorerProps {
    data: ExplorerItem;
  }
const FileExplorer = ({ data }: FileExplorerProps) => {
    const [explorerData, setExplorerData] = useState(data);

    const handleAddItem = (folderId: string, name: string, isFolder: boolean) => {
      const newData = addItemToTree(explorerData, folderId, name, isFolder);
      setExplorerData(newData);
    };

    const addItemToTree = (node: ExplorerItem, folderId: string, name: string, isFolder: boolean): ExplorerItem =>{
      if (node.id === folderId && node.isFolder) {
        const newItem: ExplorerItem = {
          id: Date.now().toString(), // Unique id
          name,
          isFolder,
          items: [],
        };
        return { ...node, items: [...node.items, newItem] };
      }
    
      return {
        ...node,
        items: node.items.map((child) => addItemToTree(child, folderId, name, isFolder)),
      };
    };
    
  return (
    <div className='w-full'>
        <Tree dataProp={explorerData} onAddItem={handleAddItem} />
    </div>
  )
}

export default FileExplorer