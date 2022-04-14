import { useState, useEffect } from 'react'
import moment from 'moment'
import './index.css'

const CustomTable = ({ columns, dataSource }) => {
    const [left, setLeft] = useState(`${moment().minute() / 60 * 100}%`)

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
                                dataSource.map((i) => {
                                    return (
                                        <div key={i.key} className='custom-table-item-content'>
                                            {i.hasOwnProperty(item.dataIndex) ? i[item.dataIndex]
                                                : i.time[item.dataIndex] ?
                                                    <div
                                                        className='process'
                                                        style={{
                                                            left: i.time[item.dataIndex].position === 'begin' ? `${i.time[item.dataIndex].value.slice(i.time[item.dataIndex].value.indexOf(':') + 1) / 60 * 100}%` : 0,
                                                            width: i.time[item.dataIndex].position === 'begin' ? `${100 - i.time[item.dataIndex].value.slice(i.time[item.dataIndex].value.indexOf(':') + 1) / 60 * 100}%` : `${i.time[item.dataIndex].value.slice(i.time[item.dataIndex].value.indexOf(':') + 1) / 60 * 100}%`,
                                                            borderTopLeftRadius: i.time[item.dataIndex].position === 'begin' ? 13 : 0,
                                                            borderBottomLeftRadius: i.time[item.dataIndex].position === 'begin' ? 13 : 0,
                                                            borderTopRightRadius: i.time[item.dataIndex].position === 'begin' ? 0 : 13,
                                                            borderBottomRightRadius: i.time[item.dataIndex].position === 'begin' ? 0 : 13
                                                        }}
                                                    />
                                                    : ''}
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
