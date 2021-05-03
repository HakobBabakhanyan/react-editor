import React from 'react';
import Select from "react-select";


const options = [
    {value: 'Arial', label: 'Arial'},
    {value: 'Calibri', label: 'Calibri'},
]


const FontFamilySelect = (props: any) => {
    return (
        <Select
            className="w-full border-inputBorder rounded-md"
            options={options}
            isSearchable={false}
            onChange={val => props.onChange(val)}
            styles={{
                control: () => ({
                    border: "2px solid #E8ECF0",
                    display: 'flex',
                    borderRadius: 4
                })
            }}
        />
    );
}

export default FontFamilySelect;
