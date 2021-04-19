import React from 'react';

function TextAlign() {
    return (
        <div className="h-full flex justify-between w-full">
            <label htmlFor="text_left" className="cursor-pointer flex justify-center items-center w-1/4 border-2 border-inputBorder rounded-l-md">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="13.0001" width="10" height="2" fill="#D5D9DD"/>
                    <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                </svg>
            </label>
            <input type="radio" id="text_left" name="text_align" style={{
                display:'none'
            }}/>
            <label htmlFor="text_center" className="cursor-pointer flex justify-center items-center w-1/4 border-2 border-inputBorder border-l-0 border-r-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="13.0001" width="8" height="2" fill="#D5D9DD"/>
                    <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                    <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                </svg>
            </label>
            <input type="radio" id="text_center" name="text_align" style={{
                display:'none'
            }}/>
            <label htmlFor="text_right" className="cursor-pointer flex justify-center items-center w-1/4  border-2 border-inputBorder ">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <rect x="6" y="13.0001" width="10" height="2" fill="#D5D9DD"/>
                        <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                        <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                        <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                    </g>
                </svg>
            </label>
            <input type="radio" id="text_right" name="text_align" style={{
                display:'none'
            }}/>
            <label htmlFor="text_justify" className="cursor-pointer flex justify-center items-center w-1/4  border-2 border-inputBorder border-l-0 rounded-r-md">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <rect y="13.0001" width="16" height="2" fill="#D5D9DD"/>
                        <rect y="1.00012" width="16" height="2" fill="#D5D9DD"/>
                        <rect y="9.00012" width="16" height="2" fill="#D5D9DD"/>
                        <rect y="5.00012" width="16" height="2" fill="#D5D9DD"/>
                    </g>
                </svg>
            </label>
            <input type="radio" id="text_justify" name="text_align" style={{
                display:'none'
            }}/>

        </div>
    );
}

export default TextAlign;
