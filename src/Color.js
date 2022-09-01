import React, { useEffect } from 'react'
import { useState } from 'react'

function Color() {
    const [estado, setEstado] = useState("RED")

    useEffect(() => {
        const time = setTimeout (() => {
            setEstado("GREEN")
        }, 5000)
    }, [])

  return (
    <div className='contenedor'>
        <p className={estado}>{estado}</p>
    </div>
  )
}

export default Color
