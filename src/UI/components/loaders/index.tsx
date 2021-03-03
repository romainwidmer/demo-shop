import React from 'react'
import Loader from 'react-loader-spinner'

type Props = {
    type?: "Audio"
        |"BallTriangle"
        |"Bars"
        |"Circles"
        |"Grid"
        |"Hearts"
        |"Oval"
        |"Puff"
        |"Rings"
        |"TailSpin"
        |"ThreeDots"
        |"Watch"
        |"RevolvingDot"
        |"Triangle"
        |"Plane"
        |"MutatingDots"
        |"CradleLoader",
    color?: string,
    width?: number,
    height?: number
}

const AppLoader:React.FC<Props> = ({ type='Rings', color='#00BFFF', width=100, height = 100 }) => (
    <div className="loader-container">
        <Loader type={ type } color={ color } width={ width } height={ height } />
    </div>
)


export default AppLoader

