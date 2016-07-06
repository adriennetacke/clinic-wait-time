import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import Content from 'components/Content';
import ClinicHeader from 'containers/ClinicHeader';

import 'normalize.css/normalize.css';
import 'materialize-css/dist/css/materialize.css';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <div>
            <ClinicHeader />
            <Content />
        </div>
    </Provider>,
    document.getElementById('root')
);
