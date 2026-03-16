'use client'
import { useEffect } from "react"

const error = ({error, reset}) => {
    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <button 
        className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 mt-3 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}

export default error