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

import { FiLoader, FiSearch } from 'react-icons/fi'

export default function Search() {
	return (
		<InputGroup borderRadius="md" my="16" size="lg" boxShadow="sm">
			<InputLeftElement
				children={<Box color="gray.400" size="6" as={FiSearch} />}
			/>
			<Input type="search" placeholder="I'm looking for..." />
			<InputRightElement children={<Box color="gray.400" as={FiLoader} />} />
		</InputGroup>
	)
}
