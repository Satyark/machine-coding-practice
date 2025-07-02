'use client';
import React, { useState } from 'react'
import { ExplorerItem } from '@/data/folderData';
import { Folder,File, ChevronDown, FolderPlus } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

interface TreeProps {
    dataProp: ExplorerItem;
    onAddItem: (folderId: string, name: string, isFolder: boolean) => void;
  }
const Tree = ({ dataProp, onAddItem }: TreeProps) => {
    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder:false
    });
    const [inputText, setInputText] = useState("");


    const chevronType = (index: string)=>{
        return openFolders[index]? <ChevronUp/> : <ChevronDown/>
    }

    const handleToggle = (index: string) => {
        setOpenFolders((prev)=>({
            ...prev,
            [index]: !prev[index],
        }))
    }
//@ts-ignore
    const handleNewFolder = (e, isFolder) => {
        setShowInput({
          visible: !showInput.visible,
          isFolder
        });
      };
    
  return (
    <div>
        <div key={dataProp.id} className='flex flex-col items-start gap-5 text-left ml-[20px]'>
            <div className='flex gap-[60px] justify-between border p-2 cursor-pointer' >
                <div className='flex gap-3' onClick={()=>{
                return dataProp.isFolder && handleToggle(dataProp.id)
            }}>
                    {dataProp.isFolder ? <Folder width={20} height={20}/> : <File width={20} height={20}/>}
                    {dataProp.isFolder ? chevronType(dataProp.id) : null }
                    <p>{dataProp.name}</p>
                </div>
                {dataProp.isFolder && (<span className='flex gap-5 justify-between'>
                    <button onClick={(e) => handleNewFolder(e, true)}>
                        <FolderPlus width={16} height={16}/>
                    </button> 
                    <button onClick={(e) => handleNewFolder(e, false)}>
                        <File width={16} height={16}/>
                    </button>
                </span>) }
            </div>
            {showInput.visible && (
                <div className='flex gap-2 border p-2 ml-[20px]'>
                    {showInput.isFolder ? <Folder width={20} height={20}/> : <File width={20} height={20}/>}
                    <input type='text' 
                    value={inputText} 
                    onChange={(e)=>setInputText(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key=='Enter' && inputText.trim() !=''){
                            onAddItem(dataProp.id, inputText, showInput.isFolder);
                            setShowInput({
                                visible: false,
                                isFolder: false
                            })
                            setInputText("");
                        }
                    }}
                    />
                </div>
            )}
            {dataProp.items.map((foldData) => {return (
                
                dataProp.isFolder && openFolders[dataProp.id] && (
                    <Tree key={foldData.id} dataProp={foldData} onAddItem={onAddItem} />
                )
            )})}
        </div>
    </div>
  )
}

export default Tree;

// return (
//     <div>
//         {/* {dataProp.items.map((foldData)=>{ */}
//             return (      
//                 <div key={foldData.id} className='flex flex-col items-start gap-3 p-4 text-left ml-[20px]'>
//                     <div className='flex gap-[60px] justify-between' onClick={()=>{
//                         return foldData.isFolder && handleToggle(foldData.id)
//                     }}>
//                         <div className='flex gap-3'>
//                             {foldData.isFolder ? <Folder width={20} height={20}/> : <File width={20} height={20}/>}
//                             {foldData.isFolder ? chevronType(foldData.id) : null }
//                             <p>{foldData.name}</p>
//                         </div>
//                         {foldData.isFolder && (<span className='flex gap-5 justify-between'>
//                             <button>
//                                 <FolderPlus width={16} height={16}/>
//                             </button> 
//                             <button>
//                                 <File width={16} height={16}/>
//                             </button>
//                         </span>) }
//                     </div>
//                     {dataProp.items.map((foldData)=>{ return(
//                     {foldData.isFolder && openFolders[foldData.id] && (<Tree dataProp={foldData}/>)}
//                 )})}
//                 </div>
//             )
//         {/* })} */}
//     </div>
//   )