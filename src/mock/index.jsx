const park = ['park', '所属园区', '上海', '北京', '济南', '江西', '武汉', '成都', '广州', '合肥', '贵阳', '宁波', '南京', '深圳', '杭州']

const skyscraper = ['skyscraper', '所属大楼', '25号楼', '20号楼']

const floor = ['floor', '所属楼层', '全部', '一楼', '二楼', '三楼', '四楼', '五楼']

const person = ['person', '容纳人数', '全部', '5人以下', '5~10人', '10人以上']

const device = ['device', '设备配置', '投影', '电脑', '视频', '音响', '电话']

export const bookItems = [park, skyscraper, floor, person, device]

export const generateTime = () => {
    let res = []
    for(let i=8; i<20; i++) {
        const str = `${i}:00`
        res = [...res, { title: str, dataIndex: str, key: str }]
    }
    return res
}

const columns = [
    {
        title: '空间名称',
        dataIndex: 'name',
        key: 'name'
    },
    ...generateTime()
]

const tableDate = [
    {
        key: '田子坊',
        name: '田子坊',
        '15:00': { position: 'begin', value: '15:25', endValue: '16:00' },
        '16:00': { position: 'end', value: '16:00', begin: '15:25' }
    }
]

export const table = { columns, tableDate }
