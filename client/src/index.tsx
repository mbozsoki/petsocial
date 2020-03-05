import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize'

import { App } from './App/components/App';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
    <>
        <Normalize />
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('root')
);
