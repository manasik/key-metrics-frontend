import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {useMetrics} from "../api/hooks/useMetrics";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Dashboard = () => {

    const metrics = useMetrics("blah");

    if (!metrics) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }
    const leadTimeForChange = metrics.leadTimeForChange;

    return (
        <div data-testid="leadTimeForChange">
            <LineChart width={730} height={250} data={leadTimeForChange}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="buildVersion"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="timeInMinutes" stroke="#8884d8"/>
            </LineChart>
        </div>
    )
}

export default Dashboard;
