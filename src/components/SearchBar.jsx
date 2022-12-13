import React, { useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, Paper, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';

import rs from './data.json'
import Filter from './Filter';
import { changeDataStudent, changeDisplayTableDetail, changeMaSoSv, changeStatusProgress } from '../reducer_action/BaseReducerAction';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();

    const ma_so_sv = useSelector(state => state.base.ma_so_sv)
    const data_student = useSelector(state => state.base.data_student)
    const is_display_table_detail = useSelector(state => state.base.is_display_table_detail)


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



    const handleSubmit = (e) => {
        e.preventDefault();
        let checkMaSoSv1;
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        if (ma_so_sv) {
            dispatch(changeStatusProgress(true))
            fetch(`http://localhost:8088/sinh-vien/is-compare?mssv=${ma_so_sv}&type=0`, options)
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(rs => {
                    if (rs.code === 200) {
                        let data = rs.result;
                        checkMaSoSv1 = rs.result.mssv
                        if (ma_so_sv === checkMaSoSv1) {
                            dispatch(changeDataStudent({ ...data }))
                            dispatch(changeDisplayTableDetail(true))
                        } else {
                            toast.error("Mã số sinh viên nhập không chính xác")
                        }
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
        } else {
            toast.warning("Vui lòng nhập mã sinh viên trước khi tìm kiếm")
        }
    }

    // useEffect(() => {
    //     dispatch(changeDisplayTableDetail(false))
    // }, [ma_so_sv])
    return (
        <Stack direction="row" alignItems="center">
            <Filter />
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
                        value={ma_so_sv}
                        onChange={e => dispatch(changeMaSoSv(e.target.value.trim()))}
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

export default SearchBar