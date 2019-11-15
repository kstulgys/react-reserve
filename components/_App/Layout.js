import Head from 'next/head'
import Header from './Header'
import HeadContent from './HeadContent'
import { ThemeProvider, CSSReset, Flex } from '@chakra-ui/core'
import { AppWrapper } from '../UI'

function Layout({ children }) {
	return (
		<>
			<Head>
				<HeadContent />
				{/* Stylesheets */}
				{/* <link rel="stylesheet" type="text/css" href="/static/styles.css" /> */}
				<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
				{/* <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        /> */}
				<title>ReactReserve</title>
			</Head>
			{/* <Header /> */}
			<ThemeProvider>
				<CSSReset />
				<AppWrapper>{children}</AppWrapper>
			</ThemeProvider>
		</>
	)
}

export default Layout
