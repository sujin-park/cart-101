import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fff;
    font-size: 14px;
    font-family: 'NanumSquareRound';
  }
;`
