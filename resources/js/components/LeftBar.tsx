import React from 'react';
import Select from "react-select";
import Spacing from "./Spacing";
import TextAlign from "./TextAlign";
import FontFamilySelect from "./FontFamilySelect";
import FontStyle from "./FontStyle";

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

const titleStyle = {
    color: "#788994",
    fontSize: "11px",
    lineHeight: "13.2px",
    fontWeight: 600
}



const  LeftBar = (props: any) => {

    return (
        <div className="bg-white min-h-screen p-15">
            <p className="pb-15"
               style={titleStyle}>Text</p>
            <div className="w-full h-40 mb-10">
                <FontFamilySelect onChange={ (value: any) => props.setFontFamily(value)} />
            </div>
            <div className="w-full h-40 mb-10 flex relative">
                <FontStyle
                    onChangeFontStyle={(value: string) => props.onChangeFontStyle(value)}
                    onChangeFontSize={(value: string) => props.onChangeFontSize(value)} />
            </div>
            <div className="w-full h-40 mb-10">
                <Select
                    className="w-full"
                    options={options}
                    styles={{
                        control: () => ({
                            border: "2px solid #E8ECF0",
                            display: 'flex',
                            borderRadius: 4
                        })
                    }}
                />
            </div>
            <div className="w-full h-40 mb-10 flex relative">
                 <Spacing />
            </div>
            <div className="w-full h-40 mb-10 flex relative">
                 <TextAlign />
            </div>
        </div>
    );
}

export default LeftBar;
