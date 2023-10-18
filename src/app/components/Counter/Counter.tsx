'use client'

import { useState } from "react";


const Counter = () => {


    const [value, setValue] = useState(0);

    const handleAdd = (value: any) => {
        setValue(value + 1)
    }

    const handleMinus = (value: any) => {
        setValue(value - 1)
    }

    const handleReset = () => {
        setValue(0)
    }

    return (
        <div>
            <p className="text-4xl text-center">{value}</p>
            <div className="flex justify-center">
                <button onClick={() => handleAdd(value)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+</button>
                <button onClick={() => handleMinus(value)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">-</button>
                <button onClick={handleReset} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset</button>

            </div>
        </div>
    )
}

export default Counter;