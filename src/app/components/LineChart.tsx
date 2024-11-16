import React, {useState, useEffect} from "react";
import {
	Chart as ChartJS,
	Filler,
	Tooltip,
	Legend,
	LinearScale,
	CategoryScale,
	PointElement,
	LineElement,
	Title
} from "chart.js";
import {Line} from "react-chartjs-2";
import type {ChartData, ChartOptions} from "chart.js";

ChartJS.register(
	LinearScale,
	CategoryScale,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	Filler,
	Title
);
interface LineProps {
	data: ChartData<"line", number[], string>;
	options?: ChartOptions<"line"> | undefined;
}

export default function LineChart(props:{labels: string[], chartNums: number[][], color: string[], label: string[], chartHeight:string, chartWidth:string}) {
	const [data, setData] = useState({labels: props.labels, datasets: [] as Array<object>});
	useEffect(() => {
		getData();
		
	}, [props.labels, props.chartNums, props.color, props.label]);
	// class dataObj {
	// 	label: string;
	// 	data: number[];
	// 	borderColor: string;
	// 	backgroundColor: string;
	// 	constructor(
	// 		label: string,
	// 		data: number[],
	// 		borderColor: string,
	// 		backgroundColor: string,
	// 	) {
	// 		this.label = label;
	// 		this.data = data;
	// 		this.borderColor = borderColor;
	// 		this.backgroundColor = backgroundColor;
	// 	}
	// }

	const options = {
		//responsive: true,
		//maintainAspectRatio: true,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		Element: {
			point: {
				radius: 0,
			},
		},
	};
	
	
	const getData = () => {
		type dataset = LineProps["data"];
		let datasetObj = {
			labels: props.labels,
			datasets: [] as object[],
			
		};
		
		if (
			props.label.length === props.chartNums.length ||
			props.label.length === props.color.length
		) {
			for (let i = 0; i < props.chartNums.length; i++) {
				let dataItem: object = {
					label: props.label[i],
					data: props.chartNums[i],
					backgroundColor: `rgba(${props.color[i]})`,
					borderColor: `rgba(${props.color[i]})`,
					borderWidth: 2,
					fill: false,
					tension: .3,
					pointRadius: 0,
					pointHitRadius: 20,
					pointHoverRadius: 5,	
					pointHoverBackgroundColor: `rgba(${props.color[i]})`,

				};
				datasetObj.datasets.push(dataItem)
			}
			
			return datasetObj;	
		} else {
			throw new Error(
				"labels, chartNums, and color must be the same length"
			);
		}
		
		return datasetObj;
	};

	return (
		<div style={{height: props.chartHeight, width: props.chartWidth}} >
		<Line data={getData()} options={options}/>
		</div>
	);
}
