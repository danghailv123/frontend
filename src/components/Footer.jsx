import React from 'react'
import { Typography } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <div style={{ height: 'auto', backgroundColor: '#002a5c', color: '#fff', display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <div style={{ padding: '32px 64px' }}>
                <Typography sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 0.5, sm: { fontSize: '0.9rem' } }}><CopyrightIcon /> Bản quyền thuộc về trường đại học xây dựng</Typography>
                <Typography sx={{ textAlign: 'center', sm: { fontSize: '0.9rem' } }}>Quản lý phòng Đào tạo. Số ĐT: 024.38691300. EMail: phongdaotao@nuce.edu.vn</Typography>
            </div>
        </div>
    )
}

export default Footer