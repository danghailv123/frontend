import React, { useState } from 'react'
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { OutTable, ExcelRenderer } from 'react-excel-renderer'
import { toast } from 'react-toastify';
import { changeStatusProgress } from '../reducer_action/BaseReducerAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const UploadFile = () => {
    const dispatch = useDispatch();
    const [isUploading, setUploading] = useState(false);
    const [file, setFile] = useState();

    const fileHandler = async event => {
        setUploading(true)
        const formData = new FormData();

        const fileObj = event.target.files[0]
        setFile(fileObj)
        formData.append('file', fileObj);

        dispatch(changeStatusProgress(true))
        const options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'multipart/form-data'    
            },
            body: formData
        }

        axios({
            method: "post",
            url: "http://localhost:8088/sinh-vien/compare-file",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
                console.log("Upload file: ", response.data.message);
              //handle success
                toast.success(`Notification: ${response.data.message}`)
            })
            .catch(function (response) {
                console.log("Upload failse file: ", response);
              //handle error
                toast.error(`Notification: ${response.data.message}`)
            })
            .finally(() => {
                setUploading(false)
                dispatch(changeStatusProgress(false))
            })

        
    }

    return (
        <label htmlFor='uploadFile' style={{ marginRight: '10px' }}>
            <span style={{ borderRadius: '5px', background: 'green', padding: '9px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>
                Upload file
            </span>
            {/* <span className='btn btn-primary fw-bolder' style={{ fontSize: '14px', background: 'blue', border: '1px solid blue' }}>Upload file</span> */}
            <input
                id='uploadFile'
                key={isUploading}
                type='file'
                onChange={e => fileHandler(e)}
                style={{ display: 'none' }}
            />
            {/* <Button onClick={(e) => handleSubmit(e)}>Submit</Button> */}
        </label>

    )
}

export default UploadFile