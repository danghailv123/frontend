import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const DetailSummaryListStudent = () => {
    const data_student = useSelector(state => state.base.data_student)
    const dataOverview = data_student.overview;
    const data_list_student = useSelector(state => state.base.data_list_student)

    // "id": 22,
    //         "name": "Kiểm tra toàn bộ sinh viên chưa ra trường",
    //         "created_time": "2022-12-16T07:18:56.723+00:00",
    //         "status": "ERROR",
    //         "total": 19537,
    //         "total_error": 5515
    const summary_list_student = data_list_student?.summary;
    console.log(data_list_student)
    return (
        <Box sx={{ padding: '16px 8px', border: '1px solid #ccc', width: 'auto', margin: '32px 0px' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', padding: '0px 8px 8px 8px', borderBottom: '1px solid #ccc' }}>
                TÓM TẮT
            </Typography>
            <Stack sx={{ padding: '8px 0' }} direction='row' >
                <Box sx={{ padding: '8px 16px' }}>
                    <Typography sx={{ paddingTop: '8px' }}>Tên: <span style={{ fontWeight: 'bold', margin: '0 8px' }}>{summary_list_student?.name}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Thời gian: <span style={{ fontWeight: 'bold', margin: '0 8px' }}>{summary_list_student?.created_time}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Số lượng sinh viên: <span style={{ fontWeight: 'bold', margin: '0 8px' }}>{summary_list_student?.total}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Số lượng sinh viên sai: <span style={{ fontWeight: 'bold', margin: '0 8px' }}>{summary_list_student?.total_error}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Trạng thái: <span style={{ fontWeight: 'bold', margin: '0 8px' }}>{summary_list_student?.status}</span></Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default DetailSummaryListStudent