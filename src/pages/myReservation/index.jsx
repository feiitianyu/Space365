import { useContext } from 'react'
import { Breadcrumb, Input, DatePicker, Button, Table, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import CustomDivider from '../../components/customDivider';
import { BookingsContext } from '../../App';

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: '会议时间',
        dataIndex: 'times',
        key: 'times',
    },
    {
        title: '会议地点',
        dataIndex: 'room',
        key: 'room',
    },
    {
        title: '会议主题',
        dataIndex: 'theme',
        key: 'theme'
    },
    {
        title: 'action',
        dataIndex: 'action',
        render: () => <Button type='link'>编辑</Button>,
    },
];

const MyReservation = () => {
    const {bookings} = useContext(BookingsContext)

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
                        style={{ width: 240, marginRight: 30 }}
                        placeholder='搜索会议主题'
                        suffix={
                            <Tooltip>
                                <SearchOutlined />
                            </Tooltip>
                        }
                    />
                    <DatePicker.RangePicker />
                </div>
                <Table
                    columns={columns}
                    dataSource={bookings}
                />
            </div>
        </div>
    )
}

export default MyReservation
