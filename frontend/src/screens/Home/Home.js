import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'

const Home = () => {

    const [home, setHome] = useState() 

    useEffect(() => {
    const getData = async () => {
        try {
            const { data } = await axios.get(`/api`)
            setHome(data)
        } catch (err) {
            console.error(err)
        }
    }
    getData()  
    }, [home])


    return (
        <>
            <header>
                {home}
            </header>
        </>
    )
}

export default Home