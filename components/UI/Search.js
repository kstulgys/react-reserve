import {
	Flex,
	Box,
	Text,
	InputGroup,
	Input,
	Icon,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/core'

export default function Search() {
	return (
		<InputGroup maxWidth="xl" my="20" size="lg">
			<InputLeftElement children={<Icon name="search" color="gray.300" />} />
			<Input type="phone" placeholder="Phone number" />
			<InputRightElement children={<Icon name="check" color="green.500" />} />
		</InputGroup>
	)
}
