import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import ProvidersCarousel from 'containers/ProvidersCarousel';

import 'materialize-css/dist/css/materialize.css';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <ProvidersCarousel />
    </Provider>,
    document.getElementById('root')
);
