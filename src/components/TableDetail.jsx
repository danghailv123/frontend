import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import data from './data.json'
import DetailInfo from './DetailInfo';
import DetailSummary from './DetailSummary';
import { useDispatch, useSelector } from 'react-redux';

const TableDetail = () => {
    const dispatch = useDispatch()

    const ma_so_sv = useSelector(state => state.base.ma_so_sv)
    const data_student = useSelector(state => state.base.data_student)
    const is_display_table_detail = useSelector(state => state.base.is_display_table_detail)


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    console.log(ma_so_sv)
    console.log(data_student)
    console.log(is_display_table_detail)

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    const rows = data_student?.compare;
    return (
        <div style={{ margin: '32px 0' }}>
            <Stack direction='row' justifyContent='flex-start' sx={{ width: '1000px' }}>
                <DetailInfo />
                <DetailSummary />
            </Stack>
            {
                !rows ? < StyledTableRow  >
                    None
                </StyledTableRow> :
                    rows.map((row, index1) => {
                        return (
                            < div key={index1} >
                                <Box sx={{ marginTop: '32px' }}><Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580' }}>HỌC KỲ {row.hk} NĂM {row.year} - {Number(row.year) + 1}</Typography></Box>
                                <TableContainer component={Paper} sx={{ marginTop: '16px' }}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">STT</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Mã MH</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '200px' }} align="left">Tên MH</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Lớp HP</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Số TC</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐQT</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐKT</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐHP&nbsp;(10)</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(4)</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(Chữ)</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Status</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Mã MH</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '200px' }} align="left">Tên MH</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Lớp HP</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Số TC</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐQT</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐKT</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(10)</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(4)</StyledTableCell>
                                                <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(Chữ)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {row.semester?.map((item, index2) => {
                                                return (
                                                    < StyledTableRow key={item?.info_old?.name_subject} >
                                                        <StyledTableCell component="th" scope="row">
                                                            {index2 + 1}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.mmh}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.name_subject}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.group_code}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.tc}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.qt}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.kt}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.summary}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.score_4}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_old?.score_string}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.is_compare ? <CheckCircleIcon color='success' /> : < CancelIcon color='error' />}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.mmh}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.name_subject}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.group_code}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.tc}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.qt}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.kt}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.summary}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.score_4}</StyledTableCell>
                                                        <StyledTableCell align="left">{item?.info_new?.score_string}</StyledTableCell>
                                                    </StyledTableRow>
                                                )
                                            })}

                                        </TableBody>

                                    </Table>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #ccc' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #ccc' }}>
                                            <Stack sx={{ padding: '8px 16px' }}>
                                                {/* <Stack sx={{ padding: '8px 16px', borderRight: '1px solid #ccc' }}> */}
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình học kỳ hệ 10/100: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580' }}>{row.semester_summary?.info_old?.summary}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình học kỳ hệ 4: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580' }}>{row.semester_summary?.info_old?.score_4}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình tích lũy: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580' }}>{row.semester_summary?.info_old?.summary_all}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình tích lũy(hệ 4): </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580' }}>{row.semester_summary?.info_old?.score_4_all}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Số tín chỉ đạt: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580' }}>{row.semester_summary?.info_old?.tcck}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Số tín chỉ tích lũy: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580' }}>{row.semester_summary?.info_old?.tcc}</Typography>
                                                    </div>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Box sx={{borderRight: '1px solid #ccc', borderLeft: '1px solid #ccc', display: 'flex', alignItems: 'center', marginLeft: '102px'}}>
                                            {row.semester_summary?.is_compare === true ? <CheckCircleIcon color='success' sx={{ padding: '8px 16px' }} /> : < CancelIcon color='error' sx={{ padding: '8px 16px' }} />}
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #ccc' }}>
                                            <Stack sx={{ padding: '8px 16px' }}>
                                                {/* <Stack sx={{ padding: '8px 16px', borderRight: '1px solid #ccc' }}> */}
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình học kỳ hệ 10/100: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580', marginLeft: '32px' }}>{row.semester_summary?.info_new?.summary}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình học kỳ hệ 4: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580', marginLeft: '32px' }}>{row.semester_summary?.info_new?.score_4}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình tích lũy: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580', marginLeft: '32px' }}>{row.semester_summary?.info_new?.summary_all}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Điểm trung bình tích lũy(hệ 4): </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580', marginLeft: '32px' }}>{row.semester_summary?.info_new?.score_4_all}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Số tín chỉ đạt: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580', marginLeft: '32px' }}>{row.semester_summary?.info_new?.tcck}</Typography>
                                                    </div>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '350px', padding: '4px 0' }}>
                                                    <Typography sx={{ fontWeight: '400', fontSize: '0.85rem', color: '#667580;' }}>Số tín chỉ tích lũy: </Typography>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#667580', marginLeft: '32px' }}>{row.semester_summary?.info_new?.tcc}</Typography>
                                                    </div>
                                                </Box>
                                            </Stack>
                                            {/* <Box>
                                                {row.semester_summary?.is_compare === true ? <CheckCircleIcon color='success' sx={{ padding: '8px 16px' }} /> : < CancelIcon color='error' sx={{ padding: '8px 16px' }} />}
                                            </Box> */}
                                        </Box>
                                    </div>
                                </TableContainer >
                            </div>
                        )
                    })
            }
        </div >

    );
}

export default TableDetail