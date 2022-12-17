import React from 'react'
import TablePageListDetail from './TablePageListDetail'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { changeDataListStudent } from '../reducer_action/BaseReducerAction'
import rs2 from './dataList.json'
import TablePageList from './TablePageHistory'
import SearchBarPageHistory from './SearchBarPageHistory'
import DetailSummaryListStudent from './DetailSummaryListStudent'
import SearchBarPageListStudent from './SearchBarPageListStudent'

const PageList = () => {
  const dispatch = useDispatch()

  // const getListStudent = () => {
  //   const options = {
  //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   }

  //   fetch(`http://localhost:8088/sinh-vien/get-all?page=0`, options)
  //     .then(response => {
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(rs2 => {
  //       if (Boolean(rs2) === true) {
  //         let data = rs2.result;
  //         dispatch(changeDataListStudent({ ...data }))
  //       }
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }

  // React.useEffect(() => {
  //   getListStudent()
  // }, [])
  return (
    <div style={{ margin: '150px auto 100px', width: '1200px', padding: '64px 32px', height: '80%' }}>
      <SearchBarPageListStudent />
      <DetailSummaryListStudent />
      <TablePageListDetail />
    </div>
  )
}

export default PageList