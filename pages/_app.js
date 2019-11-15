import App from 'next/app'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

class MyApp extends App {
	render() {
		const { Component } = this.props
		return (
			<ThemeProvider>
				<CSSReset />
				<Component />
			</ThemeProvider>
		)
	}
}

export default MyApp
