import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/cripto-cheto.svg'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  margin:0 auto;
  max-width: 120rem;
  width:90%;
  @media ( min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    align-items:center;
    
  }
`
const Imagen = styled.img`
  margin: 10rem auto 0 auto;
`
const Heading = styled.h1`
  font-family : lato 'sans-serif';
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 8rem 0 5rem 0; 
  font-size: 3.4rem;
  &::after{
    content:'';
    width: 20rem;
    height: .6rem;
    background-color: #00BFA6;
    display: block;
    margin: 0 auto;
  }
`
function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);


  useEffect(() => { // cuando sufre algun cambio el objeto monedas empieza a actuar el useEffect
    if (Object.keys(monedas).length > 0) { // osea si el objeto monedas tiene algo 
      setCargando(true);
      setResultado({});
      const cotizarCripto = async () => {
        const {moneda , criptoMoneda} = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        setResultado(resultado.DISPLAY[criptoMoneda][moneda]);
        setCargando(false);
      }
      cotizarCripto();
    }
  }, [monedas]);
  

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="Imagen Cripto"
      />
      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {cargando && <Spinner /> }
        {resultado.PRICE && <Resultado resultado={resultado} /> }
        
      </div>
      
    </Contenedor>
    
  )

}

export default App
