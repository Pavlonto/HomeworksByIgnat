import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyUpHandler: (event: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, onKeyUpHandler}) => {

    return (
        <div>
            <SuperInputText error={error} onChange={setNameCallback} onKeyUp={onKeyUpHandler} value={name}/>
            <SuperButton onClick={addUser}>Add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
