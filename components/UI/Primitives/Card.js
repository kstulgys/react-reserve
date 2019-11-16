import { Flex, Box } from '@chakra-ui/core'

export default function Card(props) {
	return (
		<Box
			p="6"
			borderRadius="md"
			boxShadow="sm"
			bg="white"
			width="full"
			height="32"
			{...props}
		/>
	)
}
