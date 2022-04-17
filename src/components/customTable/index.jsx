import { useState, useEffect } from 'react'
import moment from 'moment'
import { calcLeftAndWidth } from '../statusTable'
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
                                                : i.time.hasOwnProperty(item.dataIndex) && i.time[item.dataIndex].position === 'begin' &&
                                                    <div
                                                        className='process'
                                                        style={{
                                                            left: calcLeftAndWidth(i.time[item.dataIndex].value, i.time[item.dataIndex].endValue).left,
                                                            width: calcLeftAndWidth(i.time[item.dataIndex].value, i.time[item.dataIndex].endValue).width
                                                        }}
                                                    />}
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
