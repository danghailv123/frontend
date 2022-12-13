import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button, Stack, Typography } from '@mui/material';

import rs from './data.json'
import { useDispatch, useSelector } from 'react-redux';
import { changeDataListStudent, changeDataStudent, changeDisplayTableDetail, changeMaSoSv, changeStatusProgress } from '../reducer_action/BaseReducerAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const TablePageList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const data_list_student = useSelector(state => state.base.data_list_student)
    const ma_so_sv = useSelector(state => state.base.ma_so_sv)
    const data_student = useSelector(state => state.base.data_student)
    const is_display_table_detail = useSelector(state => state.base.is_display_table_detail)
    
    const [page, setPage] = React.useState(0);
    const pageRef = React.useRef(0)

    const compare_list_student = data_list_student?.compare;
    // Avoid a layout jump when reaching the last page with empty rows.

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const handleFindStudentByMssv = (mssv) => {
        let checkMaSoSv1;
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        dispatch(changeStatusProgress(true))
        if (mssv) {
            fetch(`http://localhost:8088/sinh-vien/is-compare?mssv=${mssv}&type=0`, options)
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(rs => {
                    if (Boolean(rs) === true) {
                        let data = rs.result;
                        checkMaSoSv1 = rs.result.mssv
                        console.log(checkMaSoSv1)
                        dispatch(changeMaSoSv(mssv.trim()))
                        if (mssv === checkMaSoSv1) {
                            navigate('/')
                            dispatch(changeDataStudent({ ...data }));
                            dispatch(changeDisplayTableDetail(true));
                        } else {
                            toast.error("Mã số sinh viên nhập không chính xác")
                        }
                    } else {
                        toast.info("Mã số sinh viên không tồn tại")
                    }

                })
                .catch(er => {
                    toast.error("Lỗiiiiii")
                })
                .finally(() => {
                    dispatch(changeStatusProgress(false))
                })
        } else {
            toast.warning("Vui lòng nhập mã sinh viên trước khi tìm kiếm")
        }
    }
    // }
    const getListStudent = (page) => {
        console.log(page)
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        dispatch(changeStatusProgress(true))
        fetch(`http://localhost:8088/sinh-vien/get-all?page=${page}`, options)
            .then(response => {
                return response.json();
            })
            .then(rs2 => {
                if (Boolean(rs2) === true) {
                    let data = rs2.result;
                    dispatch(changeDataListStudent({...data}))
                }
            }).catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch(changeStatusProgress(false))
            })
    }
    const handlePrevPage = () => {
        // pageRef.current = pageRef.current - 1;
        // getListStudent(pageRef.current)
        setPage(page -1)
        getListStudent(page - 1)
    }

    const handleNextPage = () => {
        setPage(page + 1)
        getListStudent(page + 1)
        // pageRef.current = pageRef.current + 1;
        // getListStudent(pageRef.current)
    }

    return (
        <Box sx={{ margin: '0 auto' }}>
            <Box sx={{ marginTop: '32px' }}><Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>DANH SÁCH SO SÁNH</Typography>
            </Box>
            <TableContainer component={Paper} sx={{ marginTop: '16px', width: '1200px' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table pagination ">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ minWidth: '50px' }} align="left">MSSV</StyledTableCell>
                            <StyledTableCell sx={{ minWidth: '200px' }} align="left">Nội dung</StyledTableCell>
                            <StyledTableCell sx={{ minWidth: '100px' }} align="left">Trạng thái</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !compare_list_student ? < StyledTableRow  >
                                None
                            </StyledTableRow> : compare_list_student
                                .map((item, index) => {
                                    return (
                                        < StyledTableRow key={index} sx={{ cursor: 'pointer' }} onClick={() => handleFindStudentByMssv(item.mssv)} >
                                            <StyledTableCell component="th" scope="row">
                                                {item.mssv}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{item.name}</StyledTableCell>
                                            <StyledTableCell align="left">{item.is_compare ? <CheckCircleIcon color='success' /> : <CancelIcon color='error' />}</StyledTableCell>
                                        </StyledTableRow>
                                    )
                                })

                        }
                    </TableBody>
                </Table>
            </TableContainer >
            <Stack sx={{ width: '100%', padding: '32px' }} direction='row' alignItems='center' justifyContent='flex-end'>
                <Box sx={{ padding: '0 8px' }}>
                    <Typography sx={{ fontSize: "14px" }}>{data_list_student.page} of {data_list_student.end_page}</Typography>
                </Box>
                <Box sx={{ padding: '0 8px' }}>
                    <Button onClick={() => handlePrevPage()} disabled={data_list_student.page === data_list_student.start_page ? true : false}><ArrowBackIosNewIcon   sx={{ fontSize: "13px" }} /></Button>
                    <Typography sx={{ display: 'inline-block' }}>|</Typography>
                    <Button onClick={() => handleNextPage()} disabled={data_list_student.page === data_list_student.end_page ? true : false}><ArrowForwardIosIcon sx={{ fontSize: "13px" }} /></Button>
                </Box>
                <Box sx={{ padding: '0 8px' }}>
                    <Typography sx={{ fontSize: "14px" }}>Total: {data_list_student.total}</Typography>
                </Box>
            </Stack>

        </Box>
    )
}

export default TablePageList
