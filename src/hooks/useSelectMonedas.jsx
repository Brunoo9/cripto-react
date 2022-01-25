import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
`
const Select = styled.select`
    width:100%;
    padding: 1.5rem;
    font-size: 2rem;
    border-radius: 1rem;
    outline: none;
    margin-top: 1rem;
`

const useSelectMonedas = (label, monedas) => {

    const [state , setState] = useState(''); // esto es para agregarle un stado al hook

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select 
                value={state} // el state que tiene el componente, es para reutilizarlo en diferentes pags
                onChange={ e => setState(e.target.value) } 

            >
                <option value=""> - Seleccione - </option>
                {monedas.map( moneda =>( // con los parentesis dejamos el return implicito
                    <option
                        key={moneda.id} 
                        value={moneda.id}
                    >{moneda.nombre}</option>
                ))}
            </Select>
        </>
    )
        
    

    return [state, SelectMonedas]; // el state va tener el valor del select cuando va cambiando
};

export default useSelectMonedas;
