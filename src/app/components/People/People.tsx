'use client'

import { useEffect, useState } from "react"

const People = () => {

    const [people, setPeople] = useState([]);

    const fetchPeople = async () => {

        const url = `https://reqres.in/api/users?page=1`;

        try {
            const req = await fetch(url);
            const data = await req.json();
            setPeople(data.data)
            console.log(data.data)
        } catch (error) {
            console.error(error)
        }
    }


    /**
     * el useEffect el array de dependencias []
     * si esta vacio solo se ejecuta una sola vez
     * si es tiene dependecias ya sea una funcion o una variable
     * se ejucuta cuando estas son llamadas o mutadas
     */
    useEffect(() => {
        fetchPeople()
    }, []);// <====== array de dependecias

    return (
        <>
            {
                people.map((item: any) => (
                    <div className="flex flex-c" key={item.id}>
                        <h1 > {item.first_name} {item.last_name}</h1>
                    </div>
                ))
            }
        </>
    )
}
export default People;