import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import ClinicHeader from 'containers/ClinicHeader';
import Content from 'components/Content';
import ClinicFooter from 'containers/ClinicFooter';

import 'normalize.css/normalize.css';
import 'materialize-css/dist/css/materialize.css';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <div>
            <ClinicHeader />
            <Content />
            <ClinicFooter />
        </div>
    </Provider>,
    document.getElementById('root')
);
