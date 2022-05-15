import IMAGES from "./images";

const data = [
  {
    id: 1,
    name: "Resorts Nha Trang",
    image: IMAGES.NhaTrang,
    hotels: [
      {
        id: 1,
        image: IMAGES.MiaResort,
        name: "Mia Resort",
        sub_name: "Khách sạn 5 sao",
        rating: 4,
        pics: [
          IMAGES.mia1,
          IMAGES.mia2,
          IMAGES.mia3,
          IMAGES.mia4,
          IMAGES.mia5,
          IMAGES.mia6,
        ],
        description:
          "Chỗ nghỉ này cách bãi biển 2 phút đi bộ. Mia Resort Nha Trang 5 sao này cung cấp các buổi tập yoga miễn phí trên bãi biển vào Chủ Nhật và dịch vụ xe điện đưa đón xung quanh chỗ nghỉ. Resort cũng có hồ bơi ngoài trời và các liệu pháp mát-xa thư giãn. Quý khách có thể tham gia các lớp học nấu ăn, các chuyến lặn với ống thở, tour du lịch trong ngày cũng như các buổi tập yoga trên bãi biển từ 07:30 - 09:00 vào Chủ Nhật hàng tuần.\nTất cả các biệt thự rộng rãi và sang trọng gắn máy điều hoà tại đây đều có Wi-Fi miễn phí, tầm nhìn tuyệt đẹp ra đại dương, võng và khu vực tiếp khách thoải mái. Một số biệt thự có hồ bơi riêng. Các biệt thự còn có vòi sen trong nhà và ngoài trời cũng như bồn tắm.\nChỉ cách Bãi Đông 3 phút đi bộ, Mia Resort Nha Trang nằm trong bán kính chưa đến 5 km từ sân golf tuyệt đẹp tại Diamond Bay do Andy Dye thiết kế. Từ resort, quý khách lái xe 25 phút là tới sân bay Cam Ranh, ga tàu Nha Trang, Chùa Long Sơn và Công viên giải trí Vinpearl.\nResort tổ chức các chuyến đi trong ngày tới Khu Bảo tồn Biển Hòn Mun. Quý khách cũng có thể ghé Xanh Spa để có một buổi chiều thư giãn. Resort còn có trung tâm dịch vụ doanh nhân, dịch vụ cho thuê xe hơi và dịch vụ giặt là.\nNhà hàng & Bar Sandals cung cấp các món hải sản và các món ăn quốc tế, trong khi LaBaia chuyên về các món ăn Ý. Bữa sáng tự chọn hàng ngày được phục vụ tại cả 2 nhà hàng. Mojito's Bar có rất nhiều loại cocktail giải khát và đồ ăn nhẹ.",
        location: "Bai Dong, Cam Hải Đông, Nha Trang, Khánh Hòa",
        phone: "0258 3989 666",
        latitude: 12.13436443355805,
        longitude: 109.21209945887057,
        room_pics: [
          IMAGES.miaRoom1,
          IMAGES.miaRoom2,
          IMAGES.miaRoom3,
          IMAGES.miaRoom4,
          IMAGES.miaRoom5,
          IMAGES.miaRoom6,
        ],
        type_room: [
          {
            name: "Phòng A",
            price: 2555251,
            bed: "2 giường đơn",
            area: "40 mét vuông",
          },
          {
            name: "Phòng B",
            price: 2788904,
            bed: "1 giường đôi lớn",
            area: "40 mét vuông",
          },
          {
            name: "Phòng C",
            price: 4555251,
            bed: "2 giường đôi lớn",
            area: "55 mét vuông",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Resorts Vũng Tàu",
    image: IMAGES.VungTau,
  },
  {
    id: 3,
    name: "Resorts Đà Nẵng",
    image: IMAGES.DaNang,
  },
  {
    id: 4,
    name: "Resorts Phú Quốc",
    image: IMAGES.PhuQuoc,
  },
  {
    id: 5,
    name: "Resorts Phan Thiết",
    image: IMAGES.PhanThiet,
  },
];

export default data;
