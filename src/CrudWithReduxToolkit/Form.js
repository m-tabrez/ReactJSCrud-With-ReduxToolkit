import React from 'react'
import { useRef } from 'react'
import { addUser, updateUser } from './features/crudSlice'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Container from '../UI/Container'
import Input from '../UI/Input'
import { useEffect } from 'react'

const Form = () => {

    const user = useSelector(state => state.crud.users)
    const selectedUser = useSelector(state => state.crud.selectedUser)

    const dispatch = useDispatch()

    const userName = useRef()
    const userCity = useRef()
    const userMail = useRef()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const newUser = {
            name : userName.current.value,
            city : userCity.current.value,
            email : userMail.current.value,
            id : selectedUser !== null ? selectedUser.id : Math.random()
        }

        if(selectedUser !== null){
            dispatch(updateUser(newUser)) 
        }else{
            dispatch(addUser(newUser))
        }
        

        userName.current.value = '';
        userCity.current.value = '';
        userMail.current.value = '';
    }

    const updateUserFun = () => {
        userName.current.value = selectedUser.name;
        userCity.current.value = selectedUser.city;
        userMail.current.value = selectedUser.email;

    }

   useEffect( () => {
    if(selectedUser !== null){
        updateUserFun()
    }
   }, [selectedUser])

  return (
    <Container>
        <Card>
            <form onSubmit={onSubmitHandler}>
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter Name',
                    label : 'User Name',
                    ref : userName
                }}/>
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter City',
                    label : 'User City',
                    ref : userCity
                }}/>
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter Mail',
                    label : 'User Email',
                    ref : userMail
                }}/>
                <Button button={{
                    type : 'submit',
                    className : 'btn btn-primary',
                    value : 'Submit'
                }}
                    />
            </form>
        </Card>
    </Container>
  )
}

export default Form