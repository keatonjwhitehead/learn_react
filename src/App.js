import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div><h1>Something went wrong.</h1><Home /></div>;
    }

    return this.props.children; 
  }
}
function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <ErrorBoundary>
      <MainHeader></MainHeader>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
