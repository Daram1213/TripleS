import React from 'react'
import SideBar from './SideBar'

function MiniCard() {
  return (
    // container
    <div className="container flex justify-center">
      {/* sidebar+grid items */}
      <div className="overflow-x-auto max-w-[calc(100vw - 64px)] flex w-[1350px] sm:flex-col md:flex-col lg:flex-row">
        {/* sidebar */}
        <SideBar />
        {/* grid items */}
        <div className="px-4 flex-auto flex flex-col">
          <div className="px-4 flex-auto">
            <div className="my-5">
              <h2 className="text-2xl font-bold text-gray-900">여행지</h2>
            </div>
            <div className="grid sm:grid-cols-1 sm:gap-x-6  md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>

                  <div className="-mt-1.5">
                    <span className="font-semibold text-blue-500">
                      3.9
                      <span className="text-sm font-medium text-gray-500">
                        /5
                      </span>
                    </span>
                    <span className="ml-2">149건의 리뷰</span>
                  </div>
                  <div className="absolute right-3 bottom-1">
                    <span className="text-sm">최저가</span>
                    <span className="pl-2 text-xl font-semibold text-orange-600">
                      54,500원
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <span className="text-lg text-gray-500">더보기</span>
            </div>
          </div>
          <div className="px-4 flex-auto">
            <div className="my-5">
              <h2 className="text-2xl font-bold text-gray-900">여행지</h2>
            </div>
            <div className="grid sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
              <div className="group relative flex h-29 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
                <div className="h-[116px] w-[116px] overflow-hidden">
                  <img
                    src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                    className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
                    alt="Nature"
                  />
                </div>
                <div className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500 text-base">
                  <h2 className="font-bold text-gray-900">강남구</h2>
                  <p className="-mt-1">서울 대한민국</p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <span className="text-lg text-gray-500">더보기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniCard
