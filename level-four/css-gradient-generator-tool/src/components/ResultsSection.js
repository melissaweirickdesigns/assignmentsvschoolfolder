import CodeView from "./CodeView"

export default function ResultsSection (props) {

    const {color1, color2, gradientType, gradientDirection, anglePercent, handleAnglePercentChange } = props

    return (
        <div className="results-section container">
            <CodeView 
                color1={color1}
                color2={color2}
                gradientType={gradientType}
                gradientDirection={gradientDirection}
                anglePercent={anglePercent}
                handleAnglePercentChange={handleAnglePercentChange}
            />
        </div>
    )
}