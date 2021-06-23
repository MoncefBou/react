import { useState, useEffect } from 'react'
import axios from 'axios'

const Admin = () => {

    const [authorised, setauthorised] = useState(false)

    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:8000/admin', {
                headers: {
                    authorization : 'bareal ' + localStorage.getItem('token')
                }
            })

            if (response.status === 200) {
                setauthorised(true)
            }

        } catch (error) {
            console.log(error);
        }
    }, [])

    if (authorised) {
        return (
            <div>
                C'est bon !!!
            </div>
        )
    } else {
        return (
            <div>
                Bouge de là
            </div>
        )
    }
}

export default Admin
