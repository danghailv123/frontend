import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const DetailSummary = () => {
    const data_student = useSelector(state => state.base.data_student)
    const dataOverview = data_student.overview;
    return (
        <Box sx={{ padding: '16px 8px', border: '1px solid #ccc', width: 'auto', margin: '0 8px' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', padding: '0px 8px 8px 8px', borderBottom: '1px solid #ccc' }}>
                TÓM TẮT
            </Typography>
            <Stack sx={{ padding: '8px 0' }} direction='row' >
                <Box sx={{ padding: '8px 16px' }}>
                    <Typography sx={{ paddingTop: '8px' }}>Môn học: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.total_subjects}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Học kỳ: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.total_hk}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Khác môn học: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.difference_subjects}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Khác học kỳ: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.difference_hk}</span></Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default DetailSummary