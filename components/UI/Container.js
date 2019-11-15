import { Flex, Box } from '@chakra-ui/core'

export default function Container(props) {
	return (
		<Flex
			px="4"
			flexDir="column"
			width="full"
			maxWidth="4xl"
			mx="auto"
			{...props}
		/>
	)
}
