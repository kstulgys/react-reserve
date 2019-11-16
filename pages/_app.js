import App from 'next/app'
import Layout from '../components/_App/Layout'
import NavBar from '../components/Navbar'

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}
	render() {
		const { Component, pageProps } = this.props
		return (
			<Layout>
				<NavBar />
				<Component {...pageProps} />
			</Layout>
		)
	}
}

export default MyApp
