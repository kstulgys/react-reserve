import { Flex, Box, Text } from '@chakra-ui/core'
import { Card, Container } from '../components/UI'
import NavBar from '../components/Navbar'

function Home() {
	return (
		<>
			<Container>
				<Flex
					boxShadow="sm"
					borderRadius="md"
					my="10"
					bg="white"
					flexDir="column"
					p="10"
					textAlign="right"
				>
					<Text fontSize="4xl">Thinkify</Text>
					<Text fontSize="4xl">The best place to find a job</Text>
				</Flex>
			</Container>
			<Container flexDir="row">
				<Box width="70%">
					{Array(9)
						.fill(null)
						.map(item => (
							<Card />
						))}
				</Box>
				<Box pl="4" width="30%">
					<Card />
				</Box>
			</Container>
		</>
	)
}

export default Home
