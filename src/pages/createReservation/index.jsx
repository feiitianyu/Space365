import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumb, Input, Button, Tooltip } from 'antd'
import { PlusOutlined, SearchOutlined, InfoCircleFilled } from '@ant-design/icons';
import CustomDivider from '../../components/customDivider';
import { bookItems, table } from '../../mock'
import CustomTable from '../../components/customTable';
import { BookingsContext } from '../../App';
import './index.css'

const initialSelectedItem = {
    park: '上海',
    skyscraper: '25号楼',
    floor: '全部',
    person: '全部',
    device: ''
}

const CreateReservation = () => {
    const history = useHistory()
    const [selectedItem, setSelectedItem] = useState(initialSelectedItem)
    const { bookings } = useContext(BookingsContext)
    const [tableData, setTableData] = useState(bookings)

    const filterTableData = (e) => {
        console.log(e.target.value)
        if(e.target.value === '') {
            setTableData(bookings)
        } else {
            let newTableData = []
            for(let item of bookings) {
                if(item.room.indexOf(e.target.value) !== -1) {
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
                    <Breadcrumb.Item>创建预订</Breadcrumb.Item>
                    <Breadcrumb.Item>空间预订</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0 0' }}>
                    <div style={{ fontWeight: 'bold', fontSize: 17 }}>空间预订</div>
                    <Button
                        type='primary'
                        size='small'
                        icon={<PlusOutlined />}
                        onClick={() => history.push('/newReservation')}
                    >
                        新建预订
                    </Button>
                </div>
            </div>
            <CustomDivider />
            <div>
                {
                    bookItems.map((item) => (
                        <div key={item[0]}>
                            <span style={{ margin: '0 25px 0 0' }}>{item[1]}:</span>
                            {
                                item.slice(2).map(
                                    (i) => (
                                        <Button
                                            key={i}
                                            shape='round'
                                            type={selectedItem[item[0]] === i ? 'primary' : 'text'}
                                            onClick={() => setSelectedItem({ ...selectedItem, [item[0]]: i })}
                                        >
                                            {i}
                                        </Button>
                                    )
                                )
                            }
                            <CustomDivider />
                        </div>
                    ))
                }
            </div>
            <div style={{ display: 'flex' }}>
                <Input
                    onChange={filterTableData}
                    placeholder='搜索空间名称'
                    style={{ width: 240, marginRight: 300 }}
                    suffix={
                        <Tooltip>
                            <SearchOutlined />
                        </Tooltip>
                    }
                />
            </div>
            <CustomDivider />
            <div style={{ margin: '5px 0' }}>
                <InfoCircleFilled style={{ color: 'rgb(242, 152, 72)', marginRight: 10 }} />
                <span style={{ fontSize: 10, color: 'gray' }}>点击当前时间线(红线)后的单元格可预定相应会议室</span>
            </div>
            <CustomTable columns={table.columns} dataSource={tableData} />
        </div>
    )
}

export default CreateReservation