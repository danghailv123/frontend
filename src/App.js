import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import { Home, Navbar } from './components'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageList from './components/PageList';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Box>
        {/* Same as */}
        <Navbar />
        
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/list' exact element={<PageList />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  )
}


export default App;
