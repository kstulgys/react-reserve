import { Flex, Box } from '@chakra-ui/core'

function Home() {
	return (
		<Flex minHeight="100vh" flexDir="column" height="20" bg="gray.100">
			<Flex width="full" maxWidth="4xl" mx="auto">
				<Box
					boxShadow="sm"
					borderRadius="lg"
					bg="white"
					width="full"
					height="20"
				>
					Hello
				</Box>
			</Flex>
		</Flex>
	)
}

export default Home
