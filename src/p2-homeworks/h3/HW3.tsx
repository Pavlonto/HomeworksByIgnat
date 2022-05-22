import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<any>>([])

    const addUserCallback = (name: string) => {
        let newUsers = {_id: v1(), name: name}
        setUsers([newUsers, ...users])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
