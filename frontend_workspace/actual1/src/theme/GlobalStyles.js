import { createGlobalStyle } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        font-size: 10px;
    }
    body{
        font-family: 'Nunito','Pretendard', sans-serif;
        margin: 0;
        font-size: 12px;
    }
    h2{
        font-size: 18px;
    }
    button{
        cursor: pointer;
        border: none;
    }
    div{
        font-size: 12px;
    }
`;

export default GlobalStyle;