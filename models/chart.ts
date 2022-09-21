import { ChartTypeEnum } from './chart-type'
import { Chartcolors } from './color'

export interface ChartsProps {
	chartType: ChartTypeEnum
	isStacked: Boolean
	labels: Array<string>
	datasets: Array<{
		label: string
		data: Array<number>
		backgroundColor: Chartcolors
		fill: Boolean
		borderWidth: number
		borderColor: Chartcolors
		lineTension: number
		pointBackgroundColor: Chartcolors
		pointRadius: number
	}>
}
