import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { "name": "Alice", "math": 85, "physics": 78, "chemistry": 92 },
        { "name": "Bob", "math": 78, "physics": 82, "chemistry": 75 },
        { "name": "Charlie", "math": 92, "physics": 88, "chemistry": 85 },
        { "name": "David", "math": 65, "physics": 70, "chemistry": 60 },
        { "name": "Eve", "math": 70, "physics": 65, "chemistry": 68 },
        { "name": "Frank", "math": 88, "physics": 90, "chemistry": 85 },
        { "name": "Grace", "math": 95, "physics": 92, "chemistry": 98 },
        { "name": "Hannah", "math": 80, "physics": 75, "chemistry": 82 },
        { "name": "Ian", "math": 73, "physics": 68, "chemistry": 70 },
        { "name": "Jasmine", "math": 68, "physics": 72, "chemistry": 65 }
    ]


    return (
        <div>
            <LChart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke="green">  </Line>

            </LChart>

        </div>
    );
};

export default LineChart;