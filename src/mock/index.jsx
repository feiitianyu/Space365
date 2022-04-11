import { Button } from 'antd'

const park = ['park', '所属园区', '上海', '北京', '济南', '江西', '武汉', '成都', '广州', '合肥', '贵阳', '宁波', '南京', '深圳', '杭州']

const skyscraper = ['skyscraper', '所属大楼', '25号楼', '20号楼']

const floor = ['floor', '所属楼层', '全部', '一楼', '二楼', '三楼', '四楼', '五楼']

const person = ['person', '容纳人数', '全部', '5人以下', '5~10人', '10人以上']

const device = ['device', '设备配置', '投影', '电脑', '视频', '音响', '电话']

export const bookItems = [park, skyscraper, floor, person, device]

export const generateTime = () => {
    let res = []
    for(let i=8; i<18; i++) {
        const str = `${i}:00`
        res = [...res, { title: str, dataIndex: str, key: str }]
    }
    return res
}

const columns = [
    {
        title: '空间名称',
        dataIndex: 'name',
        render: (text) => <Button type='link' style={{padding: '0 15px', border: '0'}}>{text}</Button>,
    },
    ...generateTime()
]

const tableDate = [
    {
        key: '新天地',
        name: '新天地',
    },
    {
        key: '田子坊',
        name: '田子坊',
    },
    {
        key: '城隍庙',
        name: '城隍庙',
    },
    {
        key: '步高里',
        name: '步高里',
    },
    {
        key: '老西门',
        name: '老西门',
    },
    {
        key: '阳光房',
        name: '阳光房',
    },
    {
        key: '小东门',
        name: '小东门',
    },
    {
        key: '陆家嘴',
        name: '陆家嘴',
    },
    {
        key: '大世界',
        name: '大世界',
    },
];

export const table = { columns, tableDate }
