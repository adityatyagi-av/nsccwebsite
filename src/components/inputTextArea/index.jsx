import React from 'react'

const InputTextArea = ({value,label,placeHolder,formikTouched,formikError,formikChange,formikBlur,formikValue}) => {
  return (
    <div className='mb-4'>
        <label htmlFor={value} className="block mb-2 text-sm font-medium text-gray-900 ">{label} {formikTouched && formikError ? (
          <span className=' text-xs text-red-500 mb-.5'>{`(${formikError}*)`}</span>
        ) : null} </label>
        <textarea 
        id={value}
        name={value}
        type="textarea"
        onChange={formikChange}
        onBlur={formikBlur}
        value={formikValue}
        rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-900 focus:border-blue-900 " placeholder={placeHolder}
        required></textarea>

    </div>
  )
}

export default InputTextArea
