import React, {useState} from 'react';


const FontColor = (props: any) => {

    const [color, setColor] = useState<string>('#ffffff')

    const changeColor = (value: string) => {

        setColor(value)

        props.onChange(value)

    }


    return (
        <div className="flex-auto flex flex-col items-center ">
            <div className="w-full border-2 border-inputBorder rounded-md">
                <div
                    className="w-full flex items-center bg-white p-1 flex border border-gray-200 rounded svelte-1l8159u">
                    <input id="color" onChange={e => changeColor(e.target.value)} value={color}
                           className="bg-transparent border-0 rounded-full w-5 h-5" type="color"/>
                    <label htmlFor="color" className="w-full ml-2 text-gray-900">
                        {color}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FontColor;
