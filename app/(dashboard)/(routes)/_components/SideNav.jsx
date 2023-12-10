import React from 'react';
import { Upload, File,Shield } from 'lucide-react';
import Image from 'next/image';

const SideNav = () => {
    const menuList=[{
        id:1,
        name:'Upload',
        icon:Upload,
        path:'/upload'
    },{
        id:2,
        name:'Files',
        icon:File,
        path:'/files'
    },
    {
        id:3,
        name:'Upgrade',
        icon:Shield,
        path:'/upgrade'
    }]
    return(
        <div>
            <div className='p-5 border-b'>
                <Image src='/logoipsum-297.svg' width={150} height={100}/>
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item,index)=>{
                    <button className='flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-gray-500'>
                        <item.icon/>
                        <h2>{item.name}</h2>
                    </button>
                })}
            </div>
        </div>
    )
}

export default SideNav;