import { TextField, Typography ,Button} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, setinput] = useState({ name: "", age: "", department: "", salary: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log("a",location.state)

  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.put('http://localhost:3005/update/' + location.state.val._id, input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        })
    }
    else {
      axios.post("http://localhost:3005/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
      })
    }
  }
  
  useEffect(() => {
    if (location.state !== null)
      setinput({
        ...input,
        name:location.state.val.name,
        age:location.state.val.age,
        department:location.state.val.department,
        salary:location.state.val.salary
})
  },[])
return (
      <div>
          <Typography variant="h4" color="error">DETAILS</Typography><br /><br /><br />
  <TextField label= "name" variant="outlined" name='name' value={input.name} onChange={inputHandler} /><br/><br />
      <TextField label="age" variant="outlined" name="age" value={input.age} onChange={(inputHandler)}/><br/><br/>
      <TextField label="department" variant="outlined" name="department" value={input.department} onChange={ inputHandler} /><br/><br/>
      <TextField label="salary" variant="outlined" name="salary" value={input.salary} onChange={inputHandler} /><br/><br/>
      <Button variant="contained" onClick={addHandler}>submit</Button>
    </div>
  )
}

export default Add