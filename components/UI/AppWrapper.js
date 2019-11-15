import { Flex, Box } from '@chakra-ui/core'

export default function AppWrapper(props) {
	return <Flex minHeight="100vh" flexDir="column" bg="gray.100" {...props} />
}
