import { Flex, Box, Text } from '@chakra-ui/core'
import { Container } from '../UI/Primitives'
import { FiBriefcase, FiLogIn, FiLoader } from 'react-icons/fi'
import { Link } from '../UI/Primitives'

export default function NavBar() {
	return (
		<Flex height="16" bg="white" boxShadow="sm">
			<Container align="center" flexDir="row" justify="space-between">
				<Link to="/" display="flex" alignItems="center">
					<Box mr="2" size="6" as={FiBriefcase} />
					<Text fontSize="2xl" fontWeight="semibold">
						Job Search
					</Text>
				</Link>

				<Link to="/login" display="flex" alignItems="center">
					<Box mr="2" size="6" as={FiLogIn} />
					<Text fontSize="lg" fontWeight="semibold">
						Login
					</Text>
				</Link>
			</Container>
		</Flex>
	)
}
