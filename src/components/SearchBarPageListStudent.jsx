import React, { useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, Paper, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';

import rs from './data.json'
import Filter from './Filter';
import { changeDataListStudent, changeDataStudent, changeDisplayTableDetail, changeMaSoSv, changeStatusProgress } from '../reducer_action/BaseReducerAction';
import { useDispatch, useSelector } from 'react-redux';

const SearchBarPageListStudent = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('')
    const id_history = useSelector(state => state.base.id_history)

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
            fetch(`http://localhost:8088/sinh-vien/get-all?id=${id_history}&keyword=${keyword}`, options)
                .then(response => {
                    return response.json();
                })
                .then(rs => {
                    console.log(rs)
                    if (rs.code === 200) {
                        let data = rs.result;
                        dispatch(changeDataListStudent({ ...data }))

                    } else {
                        toast.info("Mã số sinh viên không tồn tại")
                    }

                })
                .catch(err => {
                    toast.info("Mã số sinh viên không tồn tại")
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
                        placeholder='Mã số sinh viên *'
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

export default SearchBarPageListStudent