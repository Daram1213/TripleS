import React, { useState } from 'react'

const GalleryComponent = ({ lodgingData }) => {
  const [showModal, setShowModal] = useState(false)

  const mainImage = lodgingData.lodging.image[0]
  const otherImages = lodgingData.lodging.image.slice(1, 5)

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Main image */}
        <div className="md:col-span-3">
          <img
            className="w-full h-full object-cover rounded overflow-hidden shadow-lg"
            src={mainImage}
            alt="Main Gallery"
          />
        </div>

        {/* Other images */}
        <div className="md:col-span-2 grid grid-rows-2 grid-cols-2 gap-4">
          {otherImages.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={image} // Use image here instead of otherImages
                alt={`Gallery ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* View all photos button */}
        <div className="md:col-start-5 md:row-start-2 flex justify-center items-center">
          <button
            className="text-lg font-semibold px-4 py-2 rounded-lg shadow-lg bg-white hover:bg-gray-100 whitespace-nowrap"
            onClick={() => setShowModal(true)}
          >
            사진 모두보기
          </button>
        </div>

        {/* Modal for all photos */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute top-0 mx-auto p-5 border w-11/12 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  {/* Close button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-green-600 h-6 w-6"
                    aria-label="Close"
                  >
                    X
                  </button>
                </div>
                {/* All images */}
                <div className="mt-2 px-7 py-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {lodgingData.lodging.image.map((image, index) => (
                      <img
                        key={index}
                        className="object-cover"
                        src={image}
                        alt={`Gallery ${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryComponent
