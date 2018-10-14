import React from 'react'
import Svg, { Path } from 'react-native-svg'
import {Platform} from "react-native";
import RadialGradient from "react-native-svg/elements/RadialGradient";
import Stop from "react-native-svg/elements/Stop";
import Circle from "react-native-svg/elements/Circle";

const Cheese = ({style = {height: 24, width: 24}, fill = "#f5f5f5", strokeColor="#b3b3b3", strokeWidth = 14, ...props} = {}) => (
    <Svg
        height={style.height}
        width={style.width}
        {...props}
        viewBox="0 0 300 300"
        style={{
            ...style
        }}
    >

        {Platform.OS === "android" &&
        <RadialGradient id="dropshadow" r="100%" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <Stop offset="40%" stopColor={style.shadowColor} stopOpacity="1"/>
            <Stop offset="100%" stopColor={style.shadowColor} stopOpacity="0"/>
        </RadialGradient>
        }

        {Platform.OS === "android" &&
            <Circle fill="url(#dropshadow)" cx="50%" cy="50%" r="100%" />
        }

        <Path
            d="M141.4,234.6c0,0,17.4-7.3,39-10s38.7,0.7,38.7,0.7"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
        />
        <Path
            d="M9.2,143.9c0,0-10.4,104.6,2.3,115.7c7.7,6.8,26.1-0.8,53.3-3.6c46.9-4.8,83.5-8.9,83.5-9.6
      c0.1-1-10.1-12-10.1-24.8c0-15.3,5.6-36.9,37.7-40.2c26.2-2.7,43.1,10.1,44.5,30.1c0.9,13.6-6.3,25.9-5.7,26.3s71.4-6.5,77.2-14.6
      c2.6-3.5,1.7-20.4,1.9-44.8c0.3-31.6,1.1-70.4,1.1-70.4"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
        />
        <Path
            d="M125.9,127.9c8.6-1.2,17.5-2.4,26.4-3.5c75.5-9.5,142.5-16.4,142.5-16.4s1-32.5-56.1-54s-99.1-17.8-104-11.5
      c-7.8,10.3,5.1,8.5,5.7,18s-13.6,17-25.4,18.5c-11.8,1.5-20-5.9-20-5.9s-20.9,18-44,35.3c-21.6,16.2-45.2,31.4-41.5,36.4
      c3.2,4.4,17.1-2.8,30.4-5.2c9.5-1.7,30.1-5.1,30.3-4.6c0.1,0.5-6.7-4.5-3.9-11c2.8-6.5,19.8-11.1,34.2-10.2
      c7.7,0.5,15.6,3.9,20.2,7.5C124.6,124.5,125.9,127.9,125.9,127.9s1.4,12.3-6.7,25.7c-5.7,9.6-20.4,14-30.9,11.9
      c-25.3-5-18.1-30.4-18.1-30.4"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
        />
        <Path
            d="M222.2,88.8c0.3,7.1-10.5,9.8-24.1,12.1c-17.8,3-26.5-0.2-27-7.2c-0.6-7,11.2-15.7,25-16.8
      C209.7,75.8,221.8,81.7,222.2,88.8z"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
        />
        <Path
            d="M269.7,144.9c0,10.1-9.4,19.6-21.1,19.6s-21.4-0.3-21.4-10.4s9.4-18.6,21.2-18.6S269.7,134.8,269.7,144.9z"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
        />
        <Path
            d="M78.3,219c0,10.1-9.9,17.5-21.7,17.5s-17.3-7.4-17.3-17.5c0-10.1,8-20.7,19.8-20.7S78.3,208.9,78.3,219z"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
        />
    </Svg>
);

export default Cheese
