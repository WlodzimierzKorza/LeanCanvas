import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;1,100;1,500&display=swap');
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
  
}
body{
    font-family: 'Roboto', sans-serif;
}
h2{
    font-size:20px;
    font-weight:300;
}
input,textarea{
    background:none;
    border:none;
    outline:none;
    font-family: 'Roboto', sans-serif;
    color:#000;
}
::placeholder{
    color: ${({ theme }) => theme.grey100};
}

input:enabled,textarea:enabled{
    background: ${({ theme }) => theme.white}
  }
button{
    outline: none;
    background:none;
    border:none;
}
    
`;

export default GlobalStyles;
