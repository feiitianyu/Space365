import { Breadcrumb, Input, DatePicker, Button, Table, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import CustomDivider from '../../components/customDivider';

const dataSource = [
    {
        key: '1',
        index: '1',
        status: '未开始',
        time: '12:00',
        address: '1号会议室',
        theme: '业务洽谈',
    },
    {
        key: '2',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '3',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '4',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '5',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '6',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '7',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '8',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '9',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
    {
        key: '10',
        index: '2',
        status: '已结束',
        time: '14:00',
        address: '5号会议室',
        theme: '临时会议',
    },
];

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: (text) => <Button danger type='primary'>{text}</Button>,
    },
    {
        title: '会议时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '会议地点',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '会议主题',
        dataIndex: 'theme',
        render: (text) => <Button type='link'>{text}</Button>,
    },
    {
        title: 'action',
        dataIndex: 'action',
        render: () => <Button type='link'>编辑</Button>,
    },
];

const MyReservation = () => {
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
                    dataSource={dataSource}
                />
            </div>
        </div>
    )
}

export default MyReservation
