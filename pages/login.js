import { useEffect, useState } from 'react'
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
import { Card, Container, Search } from '../components/UI'

function Login() {
	const [things, setThings] = useState([])
	return (
		<Container>
			<Search />
			{/* <Box mt="32">
				{things.map(t => {
					return <Text>{t.value}</Text>
				})}
			</Box> */}
		</Container>
	)
}

export default Login
