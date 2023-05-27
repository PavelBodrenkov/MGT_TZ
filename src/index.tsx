import {render} from 'react-dom';
import App from './app/App';
import {Provider} from "react-redux";
import {store} from "app/providers/StoreProvider";

const rootStore = store()

render(
    <Provider store={rootStore}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);