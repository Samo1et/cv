import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import reducer from './redux/reducer';

function configureInfoPanelStore (isDev = false, extraArgs) {
    const middlewares = [thunk.withExtraArgument(extraArgs)];
    return createStore(
        reducer,
        compose(
            applyMiddleware(...middlewares),
            (isDev && window.devToolsExtension) ? window.devToolsExtension() : f => f
        )
    );
}

export default configureInfoPanelStore;
