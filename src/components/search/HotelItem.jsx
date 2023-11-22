function HotelItem({ hotel }) {
  return (
    <div className="h-29 group relative mb-6 flex overflow-hidden border border-solid border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
      <div className="h-[116px] w-[116px] overflow-hidden">
        <img
            src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
            className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
            alt="Nature"
          />
      </div>
      <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-base text-gray-500">
        <h2 className="font-bold text-gray-900">{hotel.name}</h2>
        <p className="-mt-1">
          {hotel.city} {hotel.country}
        </p>

        <div className="-mt-1.5">
          <span className="font-semibold text-blue-500">
            {hotel.rating}
            <span className="text-sm font-medium text-gray-500">/5</span>
          </span>
          <span className="ml-2">{hotel.reviewCount}건의 리뷰</span>
        </div>
        <div className="absolute bottom-1 right-3">
          <span className="text-sm">최저가</span>
          <span className="pl-2 text-xl font-semibold text-orange-600">
            {hotel.price}원
          </span>
        </div>
      </div>
    </div>
  )
}

export default HotelItem
