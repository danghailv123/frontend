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
import { changeDataListStudent, changeDataStudent, changeDisplayTableDetail, changeIdHistory, changeMaSoSv, changeStatusProgress } from '../reducer_action/BaseReducerAction';
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


const TablePageHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const data_list_history = useSelector(state => state.base.data_list_history)

  const [page, setPage] = React.useState(0);
  const pageRef = React.useRef(0)

  console.log(data_list_history)
  const arr_list_history = data_list_history?.history;
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

  const handleClickFileToListStudent = (id) => {
    
    const options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
    }
    dispatch(changeStatusProgress(true))
    if (id) {
      fetch(`http://localhost:8088/sinh-vien/get-all?id=${id}`, options)
        .then(response => {
          console.log(response)
          return response.json();
        })
        .then(rs => {
          if (rs.code === 200) {
            let data = rs.result;
            dispatch(changeDataListStudent({ ...data }))
            dispatch(changeIdHistory(id))
            navigate("/list-student")
            toast.success("Thành công :))")
          } else {
            toast.info("Không tìm được !!!")
          }

        })
        .catch(er => {
          toast.error("Lỗiiiiii")
        })
        .finally(() => {
          dispatch(changeStatusProgress(false))
        })
    }
  }
  // }
  const getListStudent = (page) => {
    const options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
    }
    dispatch(changeStatusProgress(true))
    fetch(`http://localhost:8088/sinh-vien/get-all?&page=${page}`, options)
      .then(response => {
        return response.json();
      })
      .then(rs2 => {
        if (Boolean(rs2) === true) {
          let data = rs2.result;
          dispatch(changeDataListStudent({ ...data }))
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
    setPage(page - 1)
    getListStudent(page - 1)
  }

  const handleNextPage = () => {
    setPage(page + 1)
    getListStudent(page + 1)
    // pageRef.current = pageRef.current + 1;
    // getListStudent(pageRef.current)
  }

  console.log(arr_list_history)
  return (
    <Box sx={{ margin: '0 auto' }}>
      <Box sx={{ marginTop: '32px' }}><Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>DANH SÁCH SO SÁNH</Typography>
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: '16px', width: '1200px' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table pagination ">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ minWidth: '50px' }} align="left">Tên</StyledTableCell>
              <StyledTableCell sx={{ minWidth: '200px' }} align="left">Thời gian</StyledTableCell>
              <StyledTableCell sx={{ minWidth: '100px' }} align="left">Số lượng sinh viên</StyledTableCell>
              <StyledTableCell sx={{ minWidth: '100px' }} align="left">Số lượng sinh viên sai</StyledTableCell>
              <StyledTableCell sx={{ minWidth: '100px' }} align="left">Trạng thái</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              !arr_list_history ? < StyledTableRow  >
                None
              </StyledTableRow> : arr_list_history
                .map((item, index) => {
                  return (
                    < StyledTableRow key={index} sx={{ cursor: 'pointer' }} onClick={() => handleClickFileToListStudent(item.id)} >
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">{item.created_time}</StyledTableCell>
                      <StyledTableCell align="left">{item.total} </StyledTableCell>
                      <StyledTableCell align="left">{item.total_error} </StyledTableCell>
                      <StyledTableCell align="left">{item.status} </StyledTableCell>
                    </StyledTableRow>
                  )
                })

            }
          </TableBody>
        </Table>
      </TableContainer >
      <Stack sx={{ width: '100%', padding: '32px' }} direction='row' alignItems='center' justifyContent='flex-end'>
        <Box sx={{ padding: '0 8px' }}>
          <Typography sx={{ fontSize: "14px" }}>{data_list_history.page} of {data_list_history.end_page}</Typography>
        </Box>
        <Box sx={{ padding: '0 8px' }}>
          <Button onClick={() => handlePrevPage()} disabled={data_list_history.page === data_list_history.start_page ? true : false}><ArrowBackIosNewIcon sx={{ fontSize: "13px" }} /></Button>
          <Typography sx={{ display: 'inline-block' }}>|</Typography>
          <Button onClick={() => handleNextPage()} disabled={data_list_history.page === data_list_history.end_page ? true : false}><ArrowForwardIosIcon sx={{ fontSize: "13px" }} /></Button>
        </Box>
        <Box sx={{ padding: '0 8px' }}>
          <Typography sx={{ fontSize: "14px" }}>Total: {data_list_history.total}</Typography>
        </Box>
      </Stack>

    </Box>
  )
}

export default TablePageHistory
