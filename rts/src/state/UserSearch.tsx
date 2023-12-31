import { useState, useRef, useEffect } from "react";

const users = [{name:'Sarah', age: 20},{name:'Michael', age: 20},{name:'Alex', age: 20}]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name:string, age: number} | undefined>()
    useEffect(() => {
      
        inputRef.current?.focus()
    }, [])
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        console.log(foundUser)
        setUser(foundUser)
    }
    return <div>User Search
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Submit</button>
        <div>
            {user?.name}
        </div>
    </div>
}

export default UserSearch