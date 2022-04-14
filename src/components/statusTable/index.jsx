import './index.css'

const StatusTable = ({columns, dataSource}) => {
    return (
        <div className='status-table'>
            {
                columns.map((i) => {
                    return (
                        <div key={i.key} className='status-table-item'>
                            <div className='status-table-item-title'>{i.title}</div>
                            <div className='status-table-item-content'>
                                {dataSource.hasOwnProperty(i.dataIndex) ? dataSource[i.dataIndex] : ''}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StatusTable