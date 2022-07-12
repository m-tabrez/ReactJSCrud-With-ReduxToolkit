import React, {useState} from 'react'
import Container from '../UI/Container'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, selectedUserToUpdate } from './features/crudSlice'

const List = () => {

const users = useSelector(state => state.crud.users)

const dispatch = useDispatch()

const onDeleteHandler = (delId) => {
    dispatch(deleteUser(delId))
}

const updateFormHandler = (updInd) => {
    dispatch(selectedUserToUpdate(updInd))
}


  return (
    <Container>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map( (curEle, ind )=> {
                        return(
                            <tr key={ind}>
                                <td>{curEle.name}</td>
                                <td>{curEle.city}</td>
                                <td>{curEle.email}</td>
                                <td>
                                    <div className='d-flex'>
                                        <Button button={{
                                            type : 'button',
                                            className : 'btn btn-sm btn-warning',
                                            value : 'update',
                                            onClick : () => updateFormHandler(curEle.id)
                                        }}></Button> &nbsp;
                                        <Button button={{
                                            type : 'button',
                                            className : 'btn btn-sm btn-danger',
                                            value : 'delete',
                                            onClick : () => onDeleteHandler(curEle.id)
                                        }}></Button>
                                    </div>
                                </td>
                            </tr>
                          
                        )
                    })
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </Container>
  )
}

export default List