import React from 'react';
import './App.less';
import { BrowserRouter, Switch,Route} from 'react-router-dom'
import Login from './page/login/login'
import Home from './page/home/home'
import NotFound from './page/notFound/notFound'
import Detail from './page/detail/detail'
import DetailClass from './page/detailClass/detailClass'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/detailClass" component={DetailClass} />
        <Route exact={true} path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
