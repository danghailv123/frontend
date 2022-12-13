import React from 'react'
import { Link } from 'react-router-dom'
import { Box, LinearProgress, Stack, Typography } from '@mui/material'
import SearchBar from './SearchBar'
import { useMediaQuery } from 'react-responsive'
import MenuNavBar from './MenuNavBar'
import { useDispatch, useSelector } from 'react-redux'
import { changeDataListStudent } from '../reducer_action/BaseReducerAction'
import rs2 from './dataList.json'

const Navbar = () => {
    const is_progress = useSelector(state => state.base.is_progress)
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    
    return (
        <Box>
            < Stack
                direction='row'
                alignItems="center"
                p={2}
                sx={{ position: 'fixed', backgroundColor: '#002a5c', top: 0, left: 0, right: 0, justifyContent: 'space-between', zIndex: 2 }}
            >
                <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                    <Link to='/'>
                        <img src='https://huce.edu.vn/theme1/images/logo/logo_trans.png' style={{ height: '70px' }} />
                    </Link>
                    <div className='logo-text' style={{ display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center', marginLeft: 16, color: '#fff' }}>
                        {isDesktopOrLaptop && <Typography sx={{ fontWeight: 'bold' }}>TRƯỜNG ĐẠI HỌC XÂY DỰNG HÀ NỘI</Typography>}
                        {isDesktopOrLaptop && <Typography sx={{ fontWeight: 'bold' }}>Hanoi University of Civil Engineering</Typography>}
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '1.1em', color: 'yellow' }}>HỆ THỐNG KIỂM TRA DATABASE</Typography>
                    <MenuNavBar />
                </div>
            </Stack >
            {is_progress && <LinearProgress sx={{ position: 'fixed', top: '105px', left: '0', right: 0, zIndex: '9999' }} />}
        </Box>
    )
}


export default Navbar