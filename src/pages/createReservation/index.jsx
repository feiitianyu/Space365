import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumb, Input, DatePicker, Button, Table, Tooltip } from 'antd'
import moment from 'moment'
import { PlusOutlined, SearchOutlined, InfoCircleFilled } from '@ant-design/icons';
import CustomDivider from '../../components/customDivider';
import { bookItems, table, generateTime } from '../../mock'
import './index.css'

const initialSelectedItem = {
    park: '上海',
    skyscraper: '25号楼',
    floor: '全部',
    person: '全部'
}

const { Column } = Table

const CreateReservation = () => {
    const history = useHistory()
    const [selectedItem, setSelectedItem] = useState(initialSelectedItem)
    const [left, setLeft] = useState(0)

    const handleClick = () => {
        console.log(123)
        
    }
    // console.log(typeof moment().minute())
    useEffect(() => {
        const t = setInterval(() => {
            console.log(`${moment().minute() / 60 * 100}%`)
            setLeft(`${moment().minute() / 60 * 100}%`)
        }, 1000 * 60);
        return () => {
            clearInterval(t)
        }
    }, [])
    
    return (
        <div>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>创建预定</Breadcrumb.Item>
                    <Breadcrumb.Item>空间预定</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0 0' }}>
                    <div style={{ fontWeight: 'bold', fontSize: 17 }}>空间预定</div>
                    <Button
                        type='primary'
                        size='small'
                        icon={<PlusOutlined />}
                        onClick={() => history.push('/newReservation')}
                    >
                        新建预定
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
                                            disabled={item[0] === 'device'}
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
                    placeholder='搜索空间名称'
                    style={{ width: 240, marginRight: 300 }}
                    suffix={
                        <Tooltip>
                            <SearchOutlined />
                        </Tooltip>
                    }
                />
                <DatePicker defaultValue={moment()} />
            </div>
            <CustomDivider />
            <div style={{ margin: '5px 0' }}>
                <InfoCircleFilled style={{ color: 'rgb(242, 152, 72)', marginRight: 10 }} />
                <span style={{ fontSize: 10, color: 'gray' }}>点击当前时间线(红线)后的单元格可预定相应会议室</span>
            </div>
            <Table
                bordered
                dataSource={table.tableDate}
                pagination={{ defaultPageSize: 10 }}
                scroll={{ x: true }}

            >
                <Column
                    title='空间名称'
                    dataIndex='name'
                    render={(text) => <Button type='link' style={{ border: 0, padding: 0 }}>{text}</Button>}
                    fixed
                    // onClick={handleClick}
                />
                {
                    generateTime().map(({ title, dataIndex }) => (
                        <Column
                            title={title}
                            dataIndex={dataIndex}
                            key={dataIndex}
                            // onClick={handleClick}
                            render={(text, record, index) => {
                                // console.log(title.replace(/:00/, ''))
                                // console.log(typeof new Date().getHours())
                                // console.log(`${new Date().getMinutes() / 60 * 100}%`)
                                return <div
                                    style={{
                                        display: `${title.replace(/:00/, '') === `${moment().hour()}` ? 'block' : 'none'}`,
                                        left
                                    }}
                                />
                            }}
                        />
                    ))
                }
            </Table>
        </div>
    )
}

export default CreateReservation