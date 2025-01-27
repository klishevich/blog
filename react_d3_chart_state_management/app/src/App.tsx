import * as d3 from 'd3';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align='right'>Calories</TableCell>
                        <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                        <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                        <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.calories}</TableCell>
                            <TableCell align='right'>{row.fat}</TableCell>
                            <TableCell align='right'>{row.carbs}</TableCell>
                            <TableCell align='right'>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Typography variant='h2' gutterBottom>
                    React D3 Chart State
                </Typography>
            </header>
            <div>
                <LinePlot xValues={[1, 2, 3, 5]} yValues={[3, 8, 8, 4]} />
            </div>
            <div style={{ maxWidth: 800 }}>
                <BasicTable />
                <Button variant='contained'>Material UI Button</Button>
            </div>
        </div>
    );
}

export default App;
