import React, { useState } from 'react'
import {
  CheckCircleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/solid'

const DescriptionComponent = ({ lodgingData }) => {
  console.log(lodgingData)

  const [showModal, setShowModal] = useState(false)

  const getIcon = (optionType) => {
    switch (optionType) {
      case '프론트서비스':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'info':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />
      case 'question':
      default:
        return <QuestionMarkCircleIcon className="h-5 w-5 text-yellow-500" />
    }
  }
  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">Ddnayo 나이 호스팅하는 펜션</h1>
          <p className="text-sm text-gray-600">
            차대 일명 · 체험 1개 · 손님 1명
          </p>
        </div>
        <div className="rounded-full bg-pink-600 h-12 w-12 flex items-center justify-center">
          {/* Replace with logo */}
          <span className="text-white text-lg">dd</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {lodgingData.lodging.option.map((option, index) => (
          <div key={index} className="flex items-center">
            {getIcon(option.category)}{' '}
            {/* Replace `option.type` with the actual property that determines the icon */}
            <p className="ml-2 text-sm">{option.details}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-4">
        <p className="text-sm mb-2">
          특별한 정보는 자동 번역되었습니다.{' '}
          <span className="text-blue-600 cursor-pointer">원문 보기</span>
        </p>
        <p className="text-sm mb-2">{lodgingData.lodging.rule}</p>
        <p className="text-sm">{lodgingData.lodging.description}</p>
        <div className="mt-4">
          <button
            className="text-sm bg-gray-200 rounded-full px-3 py-1"
            onClick={() => setShowModal(true)}
          >
            더 보기
          </button>
        </div>
      </div>

      {/* Modal for more information */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-start"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative top-0 mx-auto p-5 border w-11/12 md:max-w-2xl shadow-lg rounded-md bg-white mt-10"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                숙소 설명
              </h3>
              <button
                className="rounded-full p-1"
                onClick={() => setShowModal(false)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm mb-2">{lodgingData.lodging.description}</p>
            <h2 className="text-lg font-bold mb-2">숙소</h2>
            <p className="text-sm mb-2">{lodgingData.lodging.theme}</p>
            <h2 className="text-lg font-bold mb-2">운영 시간</h2>
            <p className="text-sm mb-2">{lodgingData.lodging.rule}</p>
            {/* ... additional content ... */}
          </div>
        </div>
      )}
    </div>
  )
}

export default DescriptionComponent
