import Province from "./Province";
import Service from "./Service";

const provinces = [
    new Province(
        'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip-1.jpg',
        'Hoi An',
        '100$ - 300$',
        '3 day 2 night',
        '* * * *',
        [
            new Service(
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cau_Nhat_Ban.jpg/1200px-Cau_Nhat_Ban.jpg',
                'TP Hoi An'
            ),
            new Service(
                'https://kenhhomestay.com/wp-content/uploads/2018/08/nha-hang-hoi-an-3.jpg',
                '345 Nguyen Hue'
            ),
        ]
    ),
    new Province(
        'https://mytourcdn.com/upload_images/Image/Location/11_12_2015/du-lich-mui-dien-phu-yen-mytour-2.jpg',
        'Tuy Hoa',
        '50$ - 200$',
        '4 day 3 night',
        '* * * ',
        [
            new Service(
                'https://quangcaotructuyen24h.vn/wp-content/uploads/2019/07/e516f6844070a42efd61-e1572833817467-1024x1024.jpg',
                'Com ga Thien Huong'
            ),
            new Service(
                'https://vntraveller.com/wp-content/uploads/2019/05/10-resort-phu-yen-2.jpg',
                'Resort Nava - Le Duan'
            ),
        ]
    ),
    new Province(
        'https://vcdn-dulich.vnecdn.net/2022/02/26/Sun-World-Ba-Na-Hills-10-7665-1645841708.jpg',
        'Da Nang',
        '200$ - 500$',
        '3 day 3 night',
        '* * * * * ',
        [
            new Service(
                'https://vn.blog.kkday.com/wp-content/uploads/Ba-Na-%C4%91e%CC%82m-1-min-1.jpg',
                'Ba Na Hill'
            ),
            new Service(
                'https://statics.vinpearl.com/cau-rong-da-nang-3_1629438765.png',
                'Cau Rong - Son Tra'
            ),
        ]
    ),
    new Province(
        'https://images.vietnamtourism.gov.vn/en/images/2021/mongtayisland.jpg',
        'Phu Quoc',
        '300$ - 600$',
        '5 day 4 night',
        '* * * * * ',
        [
            new Service(
                'https://bvhttdl.mediacdn.vn/291773308735864832/2021/9/10/1236789-1631282520916550827286-1631289989124-16312899894722115079259.jpg',
                'Cap treo duong bien'
            ),
            new Service(
                'https://pix10.agoda.net/hotelImages/2577124/-1/fc86bb1219f9ef11bb63eaee7a516fea.jpg?ca=8&ce=1&s=1024x768',
                'Resort Havana - Phu Quoc'
            ),
        ]
    ),

]

export default provinces
