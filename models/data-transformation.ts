import { ChartTypeEnum } from './chart-type'
import { Chartcolors } from './color'

export default function DataTransformation(orderData) {
	const avalStatus = Object.keys(orderData.counts.statuses_count);

	return {
		all: orderData,
		isStacked: true,
		chartType: ChartTypeEnum.bar,
		labels: orderData?.data?.map((res) => res.date.split(' ')[1]),

		datasets: avalStatus.reduce((obj, value, index) => {
			obj[index] = {
				label: orderData.statuses_labels[avalStatus[index]],
				data: orderData.data.map((res) => res.statuses[avalStatus[index]]),
				backgroundColor: `${Chartcolors[`_`+avalStatus[index]]}`,
				borderColor: `${Chartcolors[`_`+avalStatus[index]]}`,
				pointBackgroundColor: `${Chartcolors[`_`+avalStatus[index]]}`,
			}
			return obj
		}, []),
	}
}
