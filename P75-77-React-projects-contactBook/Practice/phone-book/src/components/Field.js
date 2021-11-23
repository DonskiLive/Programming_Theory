import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 6px;
    margin-top:20px;
    padding-left:15px;

`
const Error = styled.p`
    color: red;
    font-size:12px;
`

const Field = ({error, ...rest})=>(
    <>
    <Input {...rest}/>
    {error && <Error>{error}</Error>}
    </>
);

export default Field