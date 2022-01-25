import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas.js'

const Submit = styled.input`
    padding: 1.5rem;
    width: 100%;
    margin-top: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 2rem;
    background-color: #00BFA6;
    color: #fff;
    border: none;
    border-radius: 1rem;
    transition: background-color .3s ease;
    &:hover{
        cursor:pointer;
        background-color: #00A48F;
    }
`
const Form = styled.form`
    padding: 5rem;
`
const InputContainer = styled.div`
    margin-bottom: 2rem;
`

const Formulario = ( { setMonedas }) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
    const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);
    // moneda va a tener el id osea las iniciales de cada moneda USD, ARS, etc
    // criptomoneda va a tener el id de las criptos, BTC, ETH etc

    useEffect(() => {
        const consultarAPI = async () =>{
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCriptos = resultado.Data.map( cripto =>{
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })

            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if ([moneda, criptoMoneda].includes('')) {
            setError(true);
            
            return;
        }
        setError(false);
        
        setMonedas({moneda, criptoMoneda})
    }

  return (
      <>
        {error && <Error>TODOS LOS CAMPOS SON OBLIGATORIOS</Error>}
        <Form onSubmit={handleSubmit}>
            <InputContainer>  
                <SelectMonedas />
            </InputContainer>
            <InputContainer>
                <SelectCriptoMoneda />
            </InputContainer>

            <Submit type="submit" value="Cotizar"/>
        </Form>
      </>
    


  );
};

export default Formulario;
