import * as React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, useGridApiRef } from '@mui/x-data-grid';;
import { songData } from '../data/songData';
import { colors } from '@mui/material';
import { green } from '@mui/material/colors';



export default function Bibliothek() {

    const columns: GridColDef[] = [
        { 
            field: 'id', 
            headerName: '#', 
            width: 70, 
            headerClassName: 'listHeaderItem',
        },
        {
            field: 'songCover',
            headerName: 'Cover',
            width: 100,
            editable: false,
            headerClassName: 'listHeaderItem',
        },
        {
            field: 'songTitle',
            headerName: 'Titel',
            width: 200,
            editable: false,
            headerClassName: 'listHeaderItem',
        },  
        {
            field: 'artistName',
            headerName: 'Artist',
            sortable: false,
            width: 150,
            headerClassName: 'listHeaderItem',
            
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.songCover || ''} ${params.row.songTitle || ''}`,
        },
        {
            field: 'songLength',
            headerName: <AiOutlineFieldTime size={"16"} color='white'/>,
            type: 'number',
            width: 320,
            editable: false,
            headerClassName: 'listHeaderItem'
        },
        {
            field: 'liked',
            headerName: 'Like',
            type: 'icon',
            width: 100,

            editable: false,
            headerClassName: 'listHeaderItem'
        }
      ];

    return (
        <div className="relative bg-neutral-900 w-full">
            <div className="w-full bg-red-600 p-10 mt-16">
                <div className="flex justify-between items-center w-105 ml-20">
                    <div className="p-14 shadow-2xl bg-gradient-to-l from-red-500 to-red-600">
                        <AiFillHeart color="white" size={80}/>
                    </div>
                    <h2 className="text-white text-8xl">Bibliothek</h2>
                </div>
            </div>
        
            <div className='mt-8 bg-neutral-900 text-white flex justify-center w-full'>
                <Box sx={{height: '56.65vh', width: '80vw', backgroundColor: '#202020'}}>
                    <DataGrid className='w-80vw'
                        rows={songData}
                        columns={columns}
                        hideFooter
                    />
                </Box>
                
            </div>
        </div>
    )
}

