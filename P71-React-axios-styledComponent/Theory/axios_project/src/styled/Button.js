import styled, {css} from 'styled-components'

export const Button = styled.button`
background:#ccc;
text-transform:uppercase;
font-size:1rem;
border: 1px solid black;
border-radius: 5px;
padding:5px 15px;
&:hover{
    background:black;
    cursor:pointer;
    color:#fff
}
${props => props.primary && css`
    background:blue;
    color:#fff
`}
`

export const SuccessButton = styled(Button)`
background: green;
color:#fff
`