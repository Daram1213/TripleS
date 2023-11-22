const navCategories = [
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    newCategory: 'false',
  },
  {
    categoryCode: '2',
    title: '항공권',
    categoryName: 'flights',
    newCategory: 'false',
  },
  {
    categoryCode: '3',
    title: '투어&티켓',
    categoryName: 'tour-and-tickets',
    newCategory: 'false',
  },
  {
    categoryCode: '4',
    title: '항공 + 호텔',
    categoryName: 'packages',
    newCategory: 'true',
  },
  {
    categoryCode: '5',
    title: '기차표',
    categoryName: 'trains',
    newCategory: 'false',
  },
  {
    categoryCode: '6',
    title: '렌터카-공항픽업',
    categoryName: 'airport-transfer',
    newCategory: 'false',
  },
  {
    categoryCode: '7',
    title: '트립 가이드',
    categoryName: 'travel-guide',
    newCategory: 'false',
  },
  {
    categoryCode: '8',
    title: '트립닷컴 리워드',
    categoryName: 'customer/loyalty',
    newCategory: 'false',
  },
  {
    categoryCode: '9',
    title: '프로모션',
    categoryName: 'sale/deals',
    newCategory: 'false',
  },
]

const recommendHotel = [
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '서울',
    hotelName:
      '호텔 스카이파크 킹스타운 동대문점 (Hotel Skypark Kingstown Dongdaemun)',
    hotelId: '12342',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '서울',
    hotelName: '페어필드 바이 메리어트 서울(Fairfield by Marriott Seoul)',
    hotelId: '1235',
    star: 4,
    grade: 4.2,
    reviewCount: 2288,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 134850,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '서울',
    hotelName:
      '나인트리 프리미어 호텔 인사동(Nine Tree Premier Hotel Insadong)',
    hotelId: '2345',
    star: 4,
    grade: 4.5,
    reviewCount: 464,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 131132,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '제주',
    hotelName: '신라스테이 제주(Shilla Stay Jeju)',
    hotelId: '11345',
    star: 4,
    grade: 4.3,
    reviewCount: 283,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '제주',
    hotelName: '신라스테이 제주(Shilla Stay Jeju)',
    hotelId: '12245',
    star: 4,
    grade: 4.3,
    reviewCount: 283,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '제주',
    hotelName: '신라스테이 제주(Shilla Stay Jeju)',
    hotelId: '12315',
    star: 4,
    grade: 4.3,
    reviewCount: 283,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '서귀포',
    hotelName: '신라스테이 제주(Shilla Stay Jeju)',
    hotelId: '12325',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '서귀포',
    hotelName: '신라스테이 제주(Shilla Stay Jeju)',
    hotelId: '12341',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '서귀포',
    hotelName: '신라스테이 제주(Shilla Stay Jeju)',
    hotelId: '12342',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '부산',
    hotelName: '신라스테이 부산(Shilla Stay Jeju)',
    hotelId: '12343',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '부산',
    hotelName: '신라스테이 부산(Shilla Stay Jeju)',
    hotelId: '12344',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '부산',
    hotelName: '신라스테이 부산(Shilla Stay Jeju)',
    hotelId: '12346',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '인천',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '12347',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '인천',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '12348',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '인천',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '12349',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '속초',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '12350',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '속초',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '12355',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '속초',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '12356',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '강릉',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '12357',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '강릉',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '123558',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '강릉',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '123559',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '경주',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '123475',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '경주',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '123450',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
  {
    categoryCode: '1',
    title: '호텔',
    categoryName: 'hotel',
    locale: '경주',
    hotelName: '파라다이스 인천(Shilla Stay Jeju)',
    hotelId: '123459',
    star: 4,
    grade: 4.3,
    reviewCount: 1183,
    freeCancel: 'true',
    timeSale: 'false',
    specialDiscount: 'false',
    salePrice: 120444,
    images: [{ imageOrder: 0, imagePath: 'src/assets/img/hotelExample.jpeg' }],
  },
]

export default { navCategories, recommendHotel }
