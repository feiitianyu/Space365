import { useHistory } from 'react-router-dom'
import { Breadcrumb, Input, DatePicker, Button, Select, Divider } from 'antd'
import './index.css'

const { Option } = Select
const { RangePicker } = DatePicker

const NewReservation = () => {
    const history = useHistory()

    return (
        <div>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>创建预定</Breadcrumb.Item>
                    <Breadcrumb.Item>空间预定</Breadcrumb.Item>
                    <Breadcrumb.Item>新建预定</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ fontSize: 18, fontWeight: 'bold', margin: '10px 0 15px' }}>新建预定</div>
                <div className='bookUserInfo'>
                    <span>预定人: 张磊</span>
                    <span>部门: 应用软件部</span>
                    <span>联系方式: 13323232345</span>
                    <span>邮箱: zhanglei@shgbit.com</span>
                </div>
            </div>
            <Divider />
            <div>
                <div className='new-item'>
                    <div>会议主题</div>
                    <Input showCount maxLength={50} style={{ width: 600 }} />
                </div>
                <div className='new-item'>
                    <div>预定会议室</div>
                    <Select style={{ width: 600 }} defaultValue='田子坊'>
                        <Option value='田子坊'>田子坊</Option>
                    </Select>
                </div>
                <div className='new-item'>
                    <div>会议时间</div>
                    <RangePicker showTime />
                </div>
                <div className='new-item'>
                    <div>会议周期</div>
                    <Select style={{ width: 200 }} defaultValue='不重复'>
                        <Option value='田子坊'>重复</Option>
                        <Option value='田子坊'>不重复</Option>
                    </Select>
                </div>
                <div className='new-item'>
                    <div>会议室状态</div>
                    <Input style={{ width: 600 }} />
                </div>
                <div className='new-item'>
                    <div>召集人</div>
                    <Input value='张磊' style={{ width: 600 }} />
                </div>
                <div className='new-item'>
                    <div>所属部门</div>
                    <Input value='应用软件部' style={{ width: 600 }} />
                </div>
                <div className='new-item'>
                    <div>联系方式</div>
                    <Input value='13323232345' style={{ width: 600 }} />
                </div>
                <div className='new-item'>
                    <div>邮箱</div>
                    <Input value='zhanglei@shgbit.com' style={{ width: 600 }} />
                </div>
                <div className='new-item'>
                    <Button type='primary'>预定</Button>
                    <Button onClick={() => history.goBack()} >取消</Button>
                </div>
            </div>
        </div>
    )
}

export default NewReservation
