import { TableContainer,TableHead,TableBody,TableRow,TableCell,Table, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [user, setuser] = useState([])
    var navigate=useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3005/view')
            .then((response) => {
                console.log(response.data)
                setuser(response.data)
            })
    },[])
        const delvalue = (id) => {
            console.log(id)
            axios.delete("http://localhost:3005/remove/"+id)
                .then((res) => {
                    alert(res.data.message)
                    window.location.reload()
                })
    
        }
    const edit = (val) => {
        navigate("/add",{state:{val}})
        
    }
    
        return (
            <div>
          
                <TableContainer>
                    <Table border='2'>
                        <TableHead>
                            <TableRow>
                                <TableCell>name</TableCell>
                                <TableCell>age</TableCell>
                                <TableCell>department</TableCell>
                                <TableCell>salary</TableCell>
                                
                            </TableRow>
                      
                        </TableHead>
                        <TableBody>
                            {user.map((val) => {
                                return (
                                    <TableRow>
                                        <TableCell>{val.name}</TableCell>
                                        <TableCell>{val.age}</TableCell>
                                        <TableCell>{val.department}</TableCell>
                                        <TableCell>{val.salary}</TableCell>
                                        <TableCell>
                                            <Button variant='contained' onClick={() => { delvalue(val._id) }}>Delete</Button>&nbsp;
                                            <Button variant='contained' onClick={() => { edit(val) }}>edit</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    
    }


export default View