import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { navlist } from './constant'
import CreateReservation from './pages/createReservation';
import MyReservation from './pages/myReservation';
import NewReservation from './pages/newReservation';
import './App.css';

const initialBookings = [
  {
    key: '田子坊',
    name: '田子坊',
    time: {
      '5:00': { position: 'begin', value: '5:25', endValue: '6:00' },
      '6:00': { position: 'end', value: '6:00', begin: '5:25' },
    },
    status: '已结束',
    theme: '临时会议',
    room: '田子坊',
    user: '张磊',
    department: '应用软件部',
    tel: '13898873321',
    email: 'zhanglei@shgbit.com',
    cycle: '不重复',
    times: '11:00'
  }
]

export const BookingsContext = React.createContext([])

function App(props) {
  const history = useHistory()
  const [bookings, setBookings] = useState(initialBookings)

  return (
    <BookingsContext.Provider value={{ bookings, setBookings }}>
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
        <div className='app-content' style={{ padding: '15px 25px 0' }}>
          <Switch>
            <Route path='/' component={CreateReservation} exact />
            <Route path='/myReservation' component={MyReservation} exact />
            <Route path='/newReservation' component={NewReservation} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </BookingsContext.Provider>
  );
}

export default App;
