import React from 'react';

const lineHeightIconStyle = {
    position: 'absolute' as 'absolute',
    left: 10,
    top: 12

}

const percentIconStyle = {
    position: 'absolute' as 'absolute',
    left: 'calc( 50% - 26px)',
    top: 10

}
const pixelIconStyle = {
    position: 'absolute' as 'absolute',
    right: '10px',
    top: 10

}
const spaceIconStyle = {
    position: 'absolute' as 'absolute',
    left: 'calc(50% + 10px)',
    top: 14

}


function Spacing() {
    return (
        <div className="flex h-40">
          <span style={lineHeightIconStyle}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4H4V14H6V4H10V3V2H0V4Z" fill="#AAB2BB"/>
                        <path d="M11 9H8V7H16V9H13V14.0379L11 14V9Z" fill="#AAB2BB"/>
                    </svg>
                </span>
            <input type="text" style={{
                paddingLeft: 30
            }} className="w-1/2 border-2 border-inputBorder rounded-l-md outline-none"/>
            <span style={percentIconStyle} className="text-gray-400 self-end">
                    %
          </span>
            <span style={lineHeightIconStyle}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4H4V14H6V4H10V3V2H0V4Z" fill="#AAB2BB"/>
                        <path d="M11 9H8V7H16V9H13V14.0379L11 14V9Z" fill="#AAB2BB"/>
                    </svg>
                </span>

            <span style={spaceIconStyle}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path
                        d="M8 0L8.92164 -0.388057C8.7655 -0.758871 8.40234 -1 8 -1C7.59766 -1 7.2345 -0.758871 7.07836 -0.388057L8 0ZM10.8 8C11.3523 8 11.8 7.55228 11.8 7C11.8 6.44772 11.3523 6 10.8 6V8ZM4.92164 9.88806L8.92164 0.388057L7.07836 -0.388057L3.07836 9.11194L4.92164 9.88806ZM7.07836 0.388057L11.0784 9.88806L12.9216 9.11194L8.92164 -0.388057L7.07836 0.388057ZM5.2 8H10.8V6H5.2V8Z"
                        fill="#AAB2BB"/>
                    <path d="M1.5 13L2 13.5L2 12.5L1.5 13ZM1.5 13L14.5 13M14.5 13L14 12.5L14 13.5L14.5 13Z"
                          stroke="#AAB2BB" strokeWidth="2" strokeLinecap="round"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="16" height="16" fill="white" transform="translate(0 16) rotate(-90)"/>
                    </clipPath>
                </defs>
            </svg>
            </span>

            <input type="text" style={{
                paddingLeft: 30
            }} className="w-1/2 border-2 border-l-0 border-inputBorder rounded-r-md outline-none"/>
            <span style={pixelIconStyle} className="text-gray-400 self-center">
                    px
          </span>
        </div>
    );
}

export default Spacing;
