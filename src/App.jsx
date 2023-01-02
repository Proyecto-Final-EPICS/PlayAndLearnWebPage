import { Routes, Route } from "react-router-dom"
import { Alert, Collapse } from "@mui/material"
import { AlertContext } from "./contexts/AlertContext"
import { useContext } from "react"
import Home from "./routes/Home"
import Login from "./routes/Login"

function App() {

  const { alertText, alertSeverity, alertOpen } = useContext(AlertContext)

  return (
    <div className="min-h-screen font-Poppins overflow-x-hidden flex flex-col justify-between">
      {
        <Collapse in={alertOpen} className='fixed left-1/2 -translate-x-1/2 mt-5 shadow-lg'>
          <Alert severity={alertSeverity}>{alertText}</Alert>
        </Collapse>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin/*" element={<Admin />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="crud/*" element={<AdminCRUD />} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
