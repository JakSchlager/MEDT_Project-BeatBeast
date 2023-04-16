import * as React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid'
import { GridColDef } from '@mui/x-data-grid';
import { songData } from '../data/songData';
import { useTheme } from "@mui/material";
import { tokens } from '../../theme';


export default function Bibliothek() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
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
            width: 545,
            editable: false,
            headerClassName: 'listHeaderItem',
        },  
        {
            field: 'artistName',
            headerName: 'Artist',
            sortable: false,
            width: 300,
            headerClassName: 'listHeaderItem',
        },
        {
            field: 'songLength',
            headerName: <AiOutlineFieldTime size={"20"} color='white'/>,
            type: 'number',
            width: 320,
            editable: false,
            headerClassName: 'listHeaderItem'
        },
        {
            field: 'liked',
            headerName: <AiFillHeart size={"20"} />,
            type: 'icon',
            width: 50,
            editable: false,
            headerClassName: 'listHeaderItem'
        }
      ];

    return (
        <div className="relative bg-neutral-900 w-full text-white h-screen overflow-hidden">
            <div className="w-full bg-red-600 p-10 mt-14">
                <div className="flex justify-between items-center w-105 ml-20">
                    <div className="p-14 shadow-2xl bg-gradient-to-l from-red-500 to-red-600">
                        <AiFillHeart color="white" size={80}/>
                    </div>
                    <h1 className="text-white text-8xl">Bibliothek</h1>
                </div>
            </div>

            <Box m="20px" alignItems="cenrer" marginLeft="11.5vw" marginTop="1vh">
                <Box
                    height="61vh"
                    width="75vw"
                    bgcolor="#2E2E2E"
                    color="#fff"
                    border={"solid"}
                    borderColor={"transparent"}
                    borderRadius={"7px"}
                    boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}
                    sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "solid",
                        borderBottomColor: '#2E2E2E',
                        backgroundColor: colors.grey[200],
                        color: `${colors.grey[900]} !important`,
                    },
                    "& .name-column--cell": {
                        color: 'white',
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        color: 'white',
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[900]} !important`,
                        backgroundColor: colors.grey[200],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text:hover": {
                        color: `${colors.redAccent[600]} !important`,
                    },
                    "& .MuiDataGRid-rows": {
                        display: 'flex',
                    },
                    }}
                >
                    <DataGrid
                        columns={columns}
                        rows={songData}
                        components={{ Toolbar: GridToolbar }}
                        hideFooter
                    />
                </Box>
            </Box>

        </div>
    )
}

