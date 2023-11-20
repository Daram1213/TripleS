import React from 'react'

function MimiCard() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-10 p-10">
      <div className="m-10"> 테일윈드 왜안먹혀</div>
      <div className="relative flex w-auto max-w-md flex-col items-start gap-2 overflow-hidden rounded-lg p-4 shadow-lg">
        <h2 className="text-2xl font-semibold">Card Title</h2>
        <p className="text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been thes standard dummy text ever since the
          1500
        </p>
        <button className="rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700">
          Button
        </button>
      </div>

      <div className="flex gap-10">
        <div className="group flex w-auto max-w-xs cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
          <img
            src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
            className="transition-all duration-300 group-hover:opacity-90"
            alt="Nature"
          />
          <div className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-semibold">Card Title</h2>
            <p className="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s
            </p>
            <button className="w-[100px] rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700">
              Button
            </button>
          </div>
=======
    // container
    <div className="container flex justify-center">
      {/* sidebar+grid items */}
      <div className="flex w-[1250px] sm:flex-col md:flex-col lg:flex-row ">
        {/* sidebar */}
        <div className="relative flex flex-col text-gray-700 w- p-4 shadow-xl shadow-blue-gray-900/5">
          <nav className="relative flex flex-col gap-1 min-w-[200px] p-2 font-sans text-base font-normal text-gray-700">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center w-full p-3 rounded-lg text-start active:text-blue-900 outline-none"
            >
              Blocks
            </div>
            {/* Rest of the items */}
          </nav>
>>>>>>> 254d499 (chore: commit before checkout main)
        </div>

        {/* grid items */}
        <div className="px-4 w-full">
          <div className="my-5">
            <h2 className="text-lg font-semibold text-gray-900">여행지</h2>
          </div>
          <div className="grid sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1070px] w-full">
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
            <div className="group relative flex h-28 mb-6 bg-white overflow-hidden border-solid border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
              <div className="h-28 w-28 overflow-hidden">
                <img
                  src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                  className="h-28 w-28 object-cover duration-1000 group-hover:scale-125 "
                  alt="Nature"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-1 px-2 py-1.5">
                <h2 className="text-base font-bold">강남구</h2>
                <p className="text-sm text-gray-500">서울 대한민국</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MimiCard
