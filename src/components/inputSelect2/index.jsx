import React from 'react'

const InputSelect = ({value,label,options,formikTouched,formikError,formikChange,formikBlur}) => {
  return (
    <div className='my-3'>
      
    <label htmlFor={value} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label} {formikTouched && formikError ? (
          <span className=' text-xs text-red-500 mb-.5'>{`(${formikError}*)`}</span>
           ) : null}</label>
    <select id={value} onChange={formikChange}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
        {options.map((item,index)=>{
            return(
                <option key={index}
                 value={item.id}
                 onChange={formikChange}
                 onBlur={formikBlur}
                 className="ml-2 text-sm font-medium text-gray-900 "
                 >{`${item.name} (${item.id})`}
                </option>
            )
        })}
    </select>

    </div>
  )
}

export default InputSelect
