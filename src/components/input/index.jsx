import React from 'react'

const Input = ({ value, label, placeHolder, formikTouched, formikError, formikChange, formikBlur, formikValue, type }) => {
  return (
    <div className="my-3 ">
      <label htmlFor={value} className="block mb-2 text-sm font-medium text-gray-900 ">{label} {formikTouched && formikError ? (
        <span className=' text-xs text-red-500 mb-.5'>{`(${formikError}*)`}</span>
      ) : null}</label>
      <input
        id={value}
        name={value}
        type={type}
        onChange={formikChange}
        onBlur={formikBlur}
        value={formikValue}
        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeHolder} required />
    </div>
  )
}

export default Input
