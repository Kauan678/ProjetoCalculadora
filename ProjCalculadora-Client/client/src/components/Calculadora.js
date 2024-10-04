import React from 'react'

const Calculadora = () => {
    const numero = 42

    return (
        <div>
            <h1>O número eh: {numero}</h1>
            <h1>O numero + 1 é: {numero+1} </h1>
            <h1>O numero + 2 é: {numero+2}</h1>
            <h1>O numero + 3 é: {numero+3}</h1>
            <h1>O numero + 1.000 é: {numero+1000}</h1>
        </div>
    )
}

export default Calculadora
