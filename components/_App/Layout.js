import Head from 'next/head'
import HeadContent from './HeadContent'
import { ThemeProvider, CSSReset, Flex } from '@chakra-ui/core'
import AppWrapper from '../UI/AppWrapper'

export default function Layout({ children }) {
	return (
		<html lang="en">
			<Head>
				<HeadContent />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap"
				></link>
				<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
				<link rel="stylesheet" type="text/css" href="/static/styles.css" />
				<title>Job Search</title>
			</Head>
			<ThemeProvider>
				<CSSReset />
				<AppWrapper>{children}</AppWrapper>
			</ThemeProvider>
		</html>
	)
}
