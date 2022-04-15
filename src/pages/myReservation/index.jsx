import { useContext, useState } from 'react'
import { Breadcrumb, Input, DatePicker, Button, Table, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import CustomDivider from '../../components/customDivider';
import { BookingsContext } from '../../App';

const { Column } = Table

const MyReservation = () => {
    const { bookings } = useContext(BookingsContext)
    const [tableData, setTableData] = useState(bookings)
    const filterTableData = (e) => {
        if(e.target.value === '') {
            setTableData(bookings)
        } else {
            let newTableData = []
            for(let item of bookings) {
                if(item.theme.indexOf(e.target.value) !== -1) {
                    newTableData = [...newTableData, item]
                }
            }
            setTableData(newTableData)
        }
    }

    return (
        <div>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>我的预订</Breadcrumb.Item>
                    <Breadcrumb.Item>我的空间预订</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0 0' }}>
                    <div style={{ fontWeight: 'bold', fontSize: 17 }}>我的空间预订</div>
                </div>
            </div>
            <CustomDivider />
            <div>
                <div>
                    <Input
                        onChange={filterTableData}
                        style={{ width: 240, marginRight: 30 }}
                        placeholder='搜索会议主题'
                        suffix={
                            <Tooltip>
                                <SearchOutlined />
                            </Tooltip>
                        }
                    />
                </div>
                <Table
                    dataSource={tableData}
                >
                    <Column
                        render={(text, record, index) => {
                            return (
                                <span>{index+1}</span>
                            )
                        }}
                        title='序号'
                    />
                    <Column
                        title='状态'
                        key='status'
                        render={
                            (text) => <Button size='small' style={{backgroundColor: text.status === '已结束' ? 'red' : 'black', color: 'white'}}>{text.status}</Button>
                        }
                    />
                    <Column
                        title='会议时间'
                        key='time'
                        render={
                            (text) => {
                                const { time } = text
                                let res = ''
                                for(let key in time) {
                                    if(time[key].beginValue) {
                                        res = `${time[key].beginValue}->${res}`
                                    } else {
                                        res = `${res}${time[key].endValue}`
                                    }
                                }
                                return (
                                    <span>{res}</span>
                                )
                            }
                        }
                    />
                    <Column
                        title='会议地点'
                        dataIndex='room'
                    />
                    <Column
                        title='会议主题'
                        key='theme'
                        render={(text) => <Button type='link'>{text.theme}</Button>}
                    />
                    <Column
                        title='操作'
                        render={() => <Button type='link'>编辑</Button>}
                    />
                </Table>
            </div>
        </div >
    )
}

export default MyReservation
