import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Footer } from './components/footer';
import { ContentWrapper, Popup, Header } from './components';
import { routes } from './navigation';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header/>
          <ContentWrapper>
            <Switch>
              {routes.map(({ path, component }) =>
                <Route key={path} path={path} exact component={component} />
              )}
            </Switch>
          </ContentWrapper>
          <Footer/>
        </Router>
        <Popup/>
      </Provider>
    </>
  );
}

export default App;
