import React from 'react'
import TablePageListDetail from './TablePageListDetail'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { changeDataListHistory, changeDataListStudent } from '../reducer_action/BaseReducerAction'
import rs2 from './dataHistory.json'
import TablePageList from './TablePageHistory'
import TablePageHistory from './TablePageHistory'
import SearchBarPageHistory from './SearchBarPageHistory'
import DetailSummaryListStudent from './DetailSummaryListStudent'

const PageHistory = () => {
    const dispatch = useDispatch()

    const getListHistory = () => {
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }

        fetch(`http://localhost:8088/sinh-vien/get-history`, options)
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(rs2 => {
                if (Boolean(rs2) === true) {
                    let data = rs2.result;
                    dispatch(changeDataListHistory({ ...data }))
                }
            }).catch(err => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        getListHistory()
    }, [])
    return (
        <div style={{ margin: '150px auto 100px', width: '1200px', padding: '64px 32px', height: '80%' }}>
            <SearchBarPageHistory />
            <TablePageHistory />
        </div>
    )
}

export default PageHistory