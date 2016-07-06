import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import ProvidersCarousel from 'containers/ProvidersCarousel';
import ClinicHeader from 'containers/ClinicHeader';

import 'normalize.css/normalize.css';
import 'materialize-css/dist/css/materialize.css';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <div>
            <ClinicHeader />
            <ProvidersCarousel />
        </div>
    </Provider>,
    document.getElementById('root')
);
