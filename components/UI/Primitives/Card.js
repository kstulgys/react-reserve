import { Flex, Box } from '@chakra-ui/core'

export default function Card(props) {
	return (
		<Box
			p="4"
			borderRadius="md"
			boxShadow="sm"
			bg="white"
			width="full"
			{...props}
		/>
	)
}
