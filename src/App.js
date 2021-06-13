import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Footer, Contacts, PaymentMethods, Copyright, FooterMenu } from './components/footer';
import { Header } from './components/header';
import { ContentWrapper } from './components';
import { storeContacts, paymentMethods } from './data';
import { headerMenuItems, footerMenuItems, routes } from './navigation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header menuItems={headerMenuItems} />
        <ContentWrapper>
          <Switch>
            {routes.map(({ path, component }) =>
              <Route key={path} path={path} exact component={component} />
            )}
          </Switch>
        </ContentWrapper>
        <Footer>
          <FooterMenu items={footerMenuItems} />
          <>
            <PaymentMethods methods={paymentMethods} />
            <Copyright />
          </>
          <Contacts {...storeContacts} />
        </Footer>
      </Router>
    </Provider>
  );
}

export default App;
