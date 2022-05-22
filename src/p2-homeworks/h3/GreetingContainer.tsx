import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string | ''>('')
    const [error, setError] = useState<string | ''>('')


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setName(e.currentTarget.value)
    }

    const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && name.trim() !== "") {
            addUserCallback(name)
            setName("")
            alert(`Hello ${name}!`)
        }
    }

    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name)
            setName("")
            alert(`Hello ${name}!`)
        } else {
            setError('Title is required')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyUpHandler={onKeyUpHandler}
        />
    )
}

export default GreetingContainer
