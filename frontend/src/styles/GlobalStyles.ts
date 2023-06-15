import { createGlobalStyle } from 'styled-components';

import GeneralSansRegularWoff2 from '../assets/fonts/GeneralSans-Regular.woff2';
import GeneralSansRegularWoff from '../assets/fonts/GeneralSans-Regular.woff';
import GeneralSansRegularTtf from '../assets/fonts/GeneralSans-Regular.ttf';
import GeneralSansMediumWoff2 from '../assets/fonts/GeneralSans-Medium.woff2';
import GeneralSansMediumWoff from '../assets/fonts/GeneralSans-Medium.woff';
import GeneralSansMediumTtf from '../assets/fonts/GeneralSans-Medium.ttf';
import GeneralSansSemiboldWoff2 from '../assets/fonts/GeneralSans-Semibold.woff2';
import GeneralSansSemiboldWoff from '../assets/fonts/GeneralSans-Semibold.woff';
import GeneralSansSemiboldTtf from '../assets/fonts/GeneralSans-Semibold.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansRegularWoff2}') format('woff2'),
          url('${GeneralSansRegularWoff}') format('woff'),
          url('${GeneralSansRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansMediumWoff2}') format('woff2'),
          url('${GeneralSansMediumWoff}') format('woff'),
          url('${GeneralSansMediumTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansSemiboldWoff2}') format('woff2'),
          url('${GeneralSansSemiboldWoff}') format('woff'),
          url('${GeneralSansSemiboldTtf}') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
    --my-blue: ##1475FF,

  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    min-width: 124px;
    max-height: 44px;

    margin-right: 16px;
    margin-top: 16px;

    border-radius: 8px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid transparent;

    text-align: center;
    justify-content: center;
    align-items: center;

    display: flex;
    cursor: pointer;
    white-space: nowrap;
  }
`;

