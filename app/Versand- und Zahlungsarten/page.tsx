// App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './page.tsx';
import Checkout from './Checkout.tsx';
import ThankYou from './Thank you.tsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Fügen Sie hier Ihre Navigationslinks hinzu */}
        </nav>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/thank-you" component={ThankYou} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
