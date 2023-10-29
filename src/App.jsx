import './App.css'

import Button from '@mui/material/Button';


function App() {

  return (
    <>
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      width:"100%",
      height:"100vh",
      backgroundColor:"#bcbcbc"
    }
    }>

    <h1>hello vite + Material UI</h1>

  <Button variant="contained">Hello world</Button>
    </div>
    </>
  )
}

export default App
