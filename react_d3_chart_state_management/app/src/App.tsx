import * as d3 from 'd3';

type TProps = {
    xValues: number[];
    yValues: number[];
    width?: number;
    height?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
};

function LinePlot({
    xValues,
    yValues,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20,
}: TProps) {
    const xScale = d3.scaleLinear([0, 10], [marginLeft, width - marginRight]);
    const yScale = d3.scaleLinear([0, 10], [height - marginBottom, marginTop]);
    const line = d3.line((d, i) => xScale(xValues[i]), yScale);
    return (
        <svg width={width} height={height}>
            <path fill='none' stroke='currentColor' strokeWidth='1.5' d={line(yValues)} />
            <g fill='white' stroke='currentColor' strokeWidth='1.5'>
                {xValues.map((x, i) => (
                    <circle key={i} cx={xScale(x)} cy={yScale(yValues[i])} r='2.5' />
                ))}
            </g>
        </svg>
    );
}

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>React D3 Chart State </h1>
            </header>
            <LinePlot xValues={[1, 2, 3, 5]} yValues={[3, 8, 8, 4]} />
        </div>
    );
}

export default App;
