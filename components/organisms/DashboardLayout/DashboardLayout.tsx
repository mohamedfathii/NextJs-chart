import { useState } from 'react'
import Footer from '../../molecules/Footer'
import Header from '../../molecules/Header'
import Sidebar from '../../molecules/Sidebar'
import { Container, Content, PageContainer } from './DashboardLayout.styles'

type DashboardLayoutProps = {
	children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const [isOpened, setOpened] = useState(true)
	const toggleDrawer = () => {
		setOpened((prev) => !prev)
	}

	return (
		<Container>
			<Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
			<Content>
				<Sidebar isOpened={isOpened} />
				<PageContainer>{children}</PageContainer>
			</Content>
			<Footer />
		</Container>
	)
}
