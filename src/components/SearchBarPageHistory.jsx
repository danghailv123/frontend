import React, { useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, Paper, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';

import rs from './data.json'
import Filter from './Filter';
import { changeDataListHistory, changeDataStudent, changeDisplayTableDetail, changeMaSoSv, changeStatusProgress } from '../reducer_action/BaseReducerAction';
import { useDispatch, useSelector } from 'react-redux';

const SearchBarPageHistory = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
            console.log(keyword)
            dispatch(changeStatusProgress(true))
            fetch(`http://localhost:8088/sinh-vien/get-history?keyword=${keyword}`, options)
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(rs => {
                    console.log(rs);
                    if (rs.code === 200) {
                        let data = rs.result;
                        dispatch(changeDataListHistory({ ...data }))
                        toast.success("thành công")
                    } else {
                        toast.info("không tồn tại")
                    }
                })
                .catch(err => {
                    toast.info(" không tồn tại")
                })
                .finally(() => {
                    dispatch(changeStatusProgress(false))
                })
    
    }


    return (
        <Stack direction="row" alignItems="center">
            <Paper
                component="form"
                onSubmit={(e) => { handleSubmit(e) }}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 42,
                    border: '1px solid #e3e3e3',
                    pl: 2,
                    boxShadow: 'none',
                    mr: { sm: 5 },
                    maxWidth: { sm: 'auto', lg: '350px' }
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PersonIcon sx={{ p: '10px' }} />
                    <input
                        className='search-bar'
                        placeholder='Search  *'
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                        style={{ border: 'none', outline: 'none', padding: '4px 8px', fontWeight: 'bold', color: '#696969' }}
                    />
                </div>
                <IconButton type="submit" sx={{ p: '10px', color: 'red', fontWeight: 'bold' }}>
                    <Search />
                </IconButton>
            </Paper>
        </Stack>
    )
}

export default SearchBarPageHistory