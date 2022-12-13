import React from 'react'
import TablePageList from './TablePageList'
import rs from './dataList.json'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { changeDataListStudent } from '../reducer_action/BaseReducerAction'
import rs2 from './dataList.json'

const PageList = () => {
  const dispatch = useDispatch()

  const getListStudent = () => {
    const options = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
    }

    fetch(`http://localhost:8088/sinh-vien/get-all?page=0`, options)
      .then(response => {
        console.log(response)
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
  }

  React.useEffect(() => {
    getListStudent()
  }, [])
  return (
    <div style={{ margin: '50px auto 100px', width: '1200px', padding: '64px 32px', height: '80%' }}>
      <TablePageList />
    </div>
  )
}

export default PageList