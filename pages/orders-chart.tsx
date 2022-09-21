import axios from 'axios'
import Charts from '../components/atoms/Chart'
import Container from '../components/organisms/Container'
import DataTransformation from '../models/data-transformation'

export default function OrderChart({ orderData }) {
	return (
		<div>
			<Container title="Orders">
				<Charts {...orderData} />
			</Container>
		</div>
	)
}

export const getServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api')
	return {
		props: {
			orderData: DataTransformation(data),
		},
	}
}
