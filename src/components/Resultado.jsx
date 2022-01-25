import styled from "@emotion/styled";

const Contenedor = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`
const Precio = styled.p`
    font-size: 2.4rem;
    span{
        font-weight: 700;
    }

`
const Parrafo = styled.p`
    font-size: 1.8rem;
    span{
        font-weight: 700;
    }

`

const Img = styled.img`
    width: 12rem;
    height: 14rem;
  
`

const Resultado = ( { resultado } ) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    return (

        <Contenedor>
            <Img src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="" />
            <div>
                <Precio>El precio es de: <span> {PRICE}</span></Precio>
                <Parrafo>Precio más alto del día: <span> {HIGHDAY}</span></Parrafo>
                <Parrafo>Precio más bajo del dia: <span> {LOWDAY}</span></Parrafo>
                <Parrafo>Variación últimas 24 horas: <span> {CHANGEPCT24HOUR}</span></Parrafo>
                <Parrafo>Última actualización:<span> {LASTUPDATE}</span></Parrafo>
            </div>
        </Contenedor>

    )
};

export default Resultado;
