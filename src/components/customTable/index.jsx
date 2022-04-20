import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import moment from 'moment'
import { calcLeftAndWidth } from '../statusTable'
import './index.css'

const CustomTable = ({ columns, dataSource }) => {
    const history = useHistory()
    const [left, setLeft] = useState(`${moment().minute() / 60 * 100}%`)
    const [beginTime, setBeginTime] = useState('')

    const handleDown = (title) => {
        console.log('down', title)
        setBeginTime(title)
    }

    const handleUp = (title, room) => {
        console.log('up', title)
        history.push(
            '/newReservation',
            {
                booking: {
                    time: {
                        [`${beginTime}`]: { position: 'begin', value: beginTime, endValue: title },
                        [`${title}`]: { position: 'end', value: title, beginValue: beginTime }
                    },
                    key: room,
                    name: room,
                    room, 
                    status: '未开始'
                },
                isNew: true
            }
        )
    }

    useEffect(() => {
        const t = setInterval(() => {
            setLeft(`${moment().minute() / 60 * 100}%`)
        }, 1000 * 60);
        return () => {
            clearInterval(t)
        }
    }, [])
    return (
        <div className='custom-table'>
            {
                columns.map((item) => {
                    return (
                        <div className='custom-table-item' key={item.key}>
                            <div className='custom-table-item-title'>{item.title}</div>
                            {
                                dataSource.map((i, index) => {
                                    return (
                                        <div key={i.key} className='custom-table-item-content' onMouseDown={() => handleDown(item.title)} onMouseUp={() => handleUp(item.title, i.key)}>
                                            {i.hasOwnProperty(item.dataIndex) ? i[item.dataIndex]
                                                : i.time.hasOwnProperty(item.dataIndex) && i.time[item.dataIndex].position === 'begin' &&
                                                <Link to={{
                                                    pathname: '/newReservation',
                                                    state: { booking: { ...i } }
                                                }}>
                                                    <div
                                                        className='process'
                                                        style={{
                                                            left: calcLeftAndWidth(i.time[item.dataIndex].value, i.time[item.dataIndex].endValue).left,
                                                            width: calcLeftAndWidth(i.time[item.dataIndex].value, i.time[item.dataIndex].endValue).width
                                                        }}
                                                    />
                                                </Link>}
                                            {i.title !== 'name' &&
                                                <div
                                                    className='timeline'
                                                    style={{
                                                        display: `${item.title.replace(/:00/, '') === `${moment().hour()}` ? 'block' : 'none'}`,
                                                        left
                                                    }}
                                                />
                                            }
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CustomTable
