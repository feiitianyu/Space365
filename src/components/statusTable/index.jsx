import './index.css'

// 计算宽度和左偏移量
export const calcLeftAndWidth = (beginTime, endTime) => {
    const beginSliceIndex = beginTime.indexOf(':')
    const endSliceIndex = endTime.indexOf(':')
    const beginHour = Number(beginTime.slice(0, beginSliceIndex))
    const beginMinute = Number(beginTime.slice(beginSliceIndex+1))
    const endHour = Number(endTime.slice(0, endSliceIndex))
    const endMinute = Number(endTime.slice(endSliceIndex+1))
    const left = `${beginMinute/60*100}%`
    let width
    if(endHour - beginHour === 0) {
        width = `${(endMinute-beginMinute)/60*100}%`
    } else if(endHour - beginHour === 1) {
        width = `${(60-beginMinute+endMinute)/60*100}%`
    } else {
        width = `${((60-beginMinute)+(endHour-beginHour-1)*60+endMinute)/60*100}%`
    }
    return {
        left,
        width
    }
}

const StatusTable = ({columns, dataSource}) => {
    return (
        <div className='status-table'>
            {
                columns.map((i) => {
                    return (
                        <div key={i.key} className='status-table-item'>
                            <div className='status-table-item-title'>{i.title}</div>
                            <div className='status-table-item-content'>
                                {
                                    dataSource.hasOwnProperty(i.dataIndex) && dataSource[i.dataIndex].position === 'begin'
                                        &&
                                    <div
                                        className='status-table-item-content-process'
                                        style={{
                                            width: calcLeftAndWidth(dataSource[i.dataIndex].value, dataSource[i.dataIndex].endValue).width,
                                            left: calcLeftAndWidth(dataSource[i.dataIndex].value, dataSource[i.dataIndex].endValue).left,
                                        }}
                                    />
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StatusTable