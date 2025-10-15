import React from 'react'

const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`cursor-pointer label gap-2 ${selectedGender==="male"?"selected":""}`}>
                    <span className="label-text">male</span>
                    <input checked={selectedGender==="male"} onChange={()=>onCheckBoxChange("male")}  type="checkbox" className="checkbox checkbox-secondary" />
                </label>
            </div>
            <div className='form-control'>
                <label className={`cursor-pointer label gap-2 ${selectedGender==="female"?"selected":""}`}>
                    <span className="label-text">female</span>
                    <input checked={selectedGender==="female"} onChange={()=>onCheckBoxChange("female")}  type="checkbox" className="checkbox checkbox-secondary" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox