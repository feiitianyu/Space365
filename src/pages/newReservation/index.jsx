import { useState, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Breadcrumb, Input, DatePicker, Button, Select, Form } from 'antd'
import CustomDivider from '../../components/customDivider'
import StatusTable from '../../components/statusTable'
import { generateTime } from '../../mock'
import { BookingsContext } from '../../App';
import './index.css'

const { Option } = Select
const { RangePicker } = DatePicker

const initialFormValue = {
    theme: '',
    room: '',
    time: '',
    cycle: '',
    status: '',
    user: '张磊',
    department: '应用软件部',
    tel: '13898873321',
    email: 'zhanglei@shgbit.com'
}

const NewReservation = () => {
    const history = useHistory()
    const location = useLocation()
    const isNew = location.state.isNew
    const { bookings, setBookings } = useContext(BookingsContext)
    const [formValue, setFormValue] = useState(isNew ? location.state.booking ? { ...initialFormValue, ...location.state.booking } :initialFormValue : location.state.booking)
    const [time, setTime] = useState(isNew ? location.state.booking ? bookings.find((i) => i.room === location.state.booking.room).time : {} : location.state.booking.time)

    const handleChange = (changedFields) => {
        if (changedFields.time) {
            const { time } = changedFields
            const beginTime = `${time[0].hour()}:${time[0].minute() === 0 ? '00' : time[0].minute()}`
            const endTime = `${time[1].hour()}:${time[1].minute() === 0 ? '00' : time[1].minute()}`
            const res = {
                [`${time[0].hour()}:00`]: { position: 'begin', value: beginTime, endValue: endTime },
                [`${time[1].hour()}:00`]: { position: 'end', value: endTime, beginValue: beginTime }
            }
            setFormValue({
                ...formValue,
                time: res
            })
        } else if (changedFields.room) {
            const { room } = changedFields
            setFormValue({ ...formValue, key: room, name: room, room, status: '未开始' })
            const newTime = bookings.find((i) => i.room === room)
            setTime(newTime === undefined ? {} : { ...newTime.time })
        } else {
            setFormValue({ ...formValue, ...changedFields })
        }
    }

    const handleBook = () => {
        if (isNew) {
            setBookings([...bookings, formValue])
        } else {
            const newBookings = bookings.filter((i) => i.room !== formValue.room)
            setBookings([...newBookings, formValue])
        }
        history.push('/')
        setFormValue(initialFormValue)
    }
    // console.log(location.state)
    console.log(formValue)
    console.log(isNew)
    return (
        <div>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>创建预订</Breadcrumb.Item>
                    <Breadcrumb.Item>空间预订</Breadcrumb.Item>
                    <Breadcrumb.Item>新建预订</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ fontSize: 18, fontWeight: 'bold', margin: '2px 0' }}>新建预订</div>
                <div className='bookUserInfo'>
                    <span>预订人: 张磊</span>
                    <span>部门: 应用软件部</span>
                    <span>联系方式: 13323232345</span>
                    <span>邮箱: zhanglei@shgbit.com</span>
                </div>
            </div>
            <CustomDivider />
            <Form
                onValuesChange={handleChange}
                initialValues={formValue}
                layout='vertical'
                wrapperCol={{ span: 12 }}
                size='small'
            >
                <Form.Item label='会议主题' name='theme'>
                    <Input showCount maxLength={50} />
                </Form.Item>
                <Form.Item label='预订会议室' name='room'>
                    <Select disabled={!isNew}>
                        <Option value='田子坊'>田子坊</Option>
                        <Option value='新天地'>新天地</Option>
                    </Select>
                </Form.Item>
                <Form.Item label='会议时间' name='time'>
                    <RangePicker picker='time' />
                </Form.Item>
                <Form.Item label='会议周期' name='cycle'>
                    <Select>
                        <Option value='重复'>重复</Option>
                        <Option value='不重复'>不重复</Option>
                    </Select>
                </Form.Item>
                <Form.Item label='会议室状态'>
                    <StatusTable columns={generateTime()} dataSource={time} />
                </Form.Item>
                <Form.Item label='召集人' name='user'>
                    <Input />
                </Form.Item>
                <Form.Item label='所属部门' name='department'>
                    <Input />
                </Form.Item>
                <Form.Item label='联系方式' name='tel'>
                    <Input />
                </Form.Item>
                <Form.Item label='邮箱' name='email'>
                    <Input />
                </Form.Item>
                <Form.Item style={{ margin: '10px 0px' }}>
                    <Button type='primary' style={{ marginRight: 10 }} onClick={handleBook}>预定</Button>
                    <Button>取消</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default NewReservation
