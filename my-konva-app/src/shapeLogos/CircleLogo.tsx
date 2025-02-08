import React from "react";

export default function CircleLogo() {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 105 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1_7)">
                <circle
                    cx="52.5"
                    cy="54"
                    r="47"
                    stroke="black"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    shapeRendering="crispEdges"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_1_7"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_7"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_7"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
