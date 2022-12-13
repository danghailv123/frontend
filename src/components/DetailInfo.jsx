import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector } from 'react-redux';

const DetailInfo = () => {
    const data_student = useSelector(state => state.base.data_student)
    const dataInfo = data_student.info;
    return (
        <Box sx={{ padding: '16px 8px', border: '1px solid #ccc', width: 'auto' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', padding: '0px 8px 8px 8px', borderBottom: '1px solid #ccc' }}>
                THÔNG TIN SINH VIÊN
            </Typography>
            <Stack sx={{ padding: '8px 0' }} direction='row' >
                <Box sx={{ padding: '8px 16px', borderRight: '1px solid #ccc' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', borderBottom: '1px solid #ccc', padding: '8px 0' }}>OLD</Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Họ tên: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.old.name}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Giới tính: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.old.gender}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Lớp: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.old.class}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Ngày sinh: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.old.birthday}</span></Typography>
                </Box>
                <Box sx={{ padding: '8px 16px', borderRight: '1px solid #ccc' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', borderBottom: '1px solid #ccc', padding: '8px 0' }}>NEW</Typography>
                    <Typography sx={{ paddingTop: '8px ' }}>Họ tên: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.new.name}</span></Typography>
                    <Typography sx={{ paddingTop: '8px ' }}>Giới tính: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.new.gender}</span></Typography>
                    <Typography sx={{ paddingTop: '8px ' }}>Lớp: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.new.class}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Ngày sinh:  <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataInfo.new.birthday}</span></Typography>
                </Box>
                <Box sx={{ padding: '8px 16px' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px', borderBottom: '1px solid #ccc', padding: '8px 0' }}>STATUS</Typography>
                    {dataInfo.is_compare === true ? <CheckCircleIcon color='success' sx={{ display: 'block', padding: '16px 0 0 8px' }} /> : < CancelIcon color='error' sx={{ display: 'block', padding: '16px 0 0 8px' }} /> }
                </Box>
            </Stack>
        </Box>
    )
}

export default DetailInfo