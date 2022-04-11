import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { navlist } from './constant'
import CreateReservation from './pages/createReservation';
import MyReservation from './pages/myReservation';
import NewReservation from './pages/newReservation';
import './App.css';

function App(props) {
  const history = useHistory()
  
  return (
    <div className="App">
        <div className='app-nav'>
          {
            navlist.map((nav) =>
              <div
                key={nav.id}
                onClick={() => history.push(nav.to)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  fontSize: 12,
                  cursor: 'pointer',
                  color: 'white',
                  padding: '20px 0'
                }}
                className='nav-item'
              >
                <MenuUnfoldOutlined />
                <div>{nav.name}</div>
              </div>
            )
          }
        </div>
        <div className='app-content'  style={{ padding: '15px 25px 0' }}>
          <Switch>
            <Route path='/' component={CreateReservation} exact />
            <Route path='/myReservation' component={MyReservation} exact />
            <Route path='/newReservation' component={NewReservation} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
  );
}

export default App;
