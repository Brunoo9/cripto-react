import styled from '@emotion/styled';

const Texto = styled.div`
    background-color: #e74c3c;
    color: #fff;
    padding: 1.5rem;
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;

`


const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  );
};

export default Error;
