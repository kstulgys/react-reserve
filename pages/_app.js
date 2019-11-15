import App from 'next/app'
import Layout from '../components/_App/Layout'
import NavBar from '../components/Navbar'

class MyApp extends App {
	render() {
		const { Component } = this.props
		return (
			<Layout>
				<NavBar />
				<Component />
			</Layout>
		)
	}
}

export default MyApp
