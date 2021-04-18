import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {parseISO, format} from "date-fns"
import {useMetrics} from "../api/hooks/useMetrics";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Dashboard = () => {

    const metrics = useMetrics("blah");

    if (!metrics) {
        return (
            <div>
                <CircularProgress/>
            </div>
        )
    }
    const customizedXAxisTick = ({x, y, payload}) => {
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={23} y={0} dy={14} fontSize="0.90em" fontFamily="bold" textAnchor="end" fill="#363636">
                    {payload.value}</text>
            </g>
        );

    }

    return (
        <div data-testid="leadTimeForChange">
            <h3>Lead time for change</h3>
            <LineChart width={730} height={250} data={metrics.leadTimeForChange}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="deployedAt" tick={customizedXAxisTick}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="numberOfDays" legendType="none" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </div>
    )
}

export default Dashboard;
