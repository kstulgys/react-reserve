import { Flex, Box, Text } from '@chakra-ui/core'
import { Container } from '../UI'
import Link from 'next/link'

export default function NavBar() {
	return (
		<Flex height="16" bg="white" boxShadow="sm">
			<Container align="center" flexDir="row" justify="space-between">
				<Text>Brand</Text>
				<Link href="/login">
					<Text>Login</Text>
				</Link>
			</Container>
		</Flex>
	)
}

{
}
