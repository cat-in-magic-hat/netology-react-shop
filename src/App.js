import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Contacts, PaymentMethods, Copyright, FooterMenu } from './components/footer';
import { Header } from './components/header';
import { ContentWrapper } from './components';
import { storeContacts, paymentMethods } from './data';
import { headerMenuItems, footerMenuItems, routes } from './navigation';

function App() {
  return (
    <Router>
      <Header menuItems={headerMenuItems}/>
      <ContentWrapper>
        <Switch>
          {routes.map(({ path, component }) =>
            <Route key={path} path={path} exact component={component} />
          )}
        </Switch>
      </ContentWrapper>
      <Footer>
        <FooterMenu items={footerMenuItems}/>
        <>
          <PaymentMethods methods={paymentMethods}/>
          <Copyright/>
        </>
        <Contacts { ...storeContacts }/>
      </Footer>
    </Router>
  );
}

export default App;
