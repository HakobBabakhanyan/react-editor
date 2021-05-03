import React from 'react';
import Select from "react-select";


const options = [
    {value: 'roboto', label: 'Roboto'},
]

const customStyles = {
    option: (provided: any, state: { isSelected: any; }) => ({
        ...provided,
        // borderBottom: '1px dotted pink',
        // color: state.isSelected ? 'red' : 'blue',
    }),
    control: () => ({
        border: "2px solid #E8ECF0",
        borderRight: "none",
        display: 'flex',
        borderBottomLeftRadius: '4px',
        borderTopLeftRadius: '4px',
    }),
    singleValue: (provided: any, state: { isDisabled: any; }) => {
        const opacity = state.isDisabled ? 0.5 : 1;

        return {...provided, opacity};
    }
}

const fontSizes = [
    {value: 'none', label: 'None'},
    {value: 'italic', label: 'Italic'},
    {value: 'bold', label: 'Bold'},
    {value: 'underline', label: 'Underline'}
]

const fontInputIconStyle = {
    position: 'absolute' as 'absolute',
    left: 10,
    top: 12

}


const FontStyle = (props: any) => {
    return (
        <div className="w-full h-40 flex relative">
            <Select
                onChange={v => props.onChangeFontStyle(v?.value)}
                styles={customStyles}
                className="w-2/3 rounded-r-none"
                options={fontSizes}
            />
            <div className="relative w-1/3">
                      <span style={fontInputIconStyle}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4H4V14H6V4H10V3V2H0V4Z" fill="#AAB2BB"/>
                        <path d="M11 9H8V7H16V9H13V14.0379L11 14V9Z" fill="#AAB2BB"/>
                    </svg>
                </span>
                <input type="text"
                       onChange={e => props.onChangeFontSize(e.target.value)}
                       style={{
                           paddingLeft: 30
                       }} className="w-full border-2 h-full border-inputBorder outline-none rounded-r-md"/>
            </div>

        </div>
    );
}

export default FontStyle;
