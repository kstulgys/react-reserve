import { Flex, Box, Text, Input, Button } from '@chakra-ui/core'
import { Card, Container } from '../components/UI/Primitives'
import { FiStar, FiSend, FiBriefcase } from 'react-icons/fi'
import { TextTitle } from '../components/UI/Typography'

export default function Job() {
	return (
		<Container flexDir="row" mt="20">
			<Box width="70%">
				<Card>
					<TextTitle mb="4">Job Title</TextTitle>
					<Text>Job description...</Text>
				</Card>
			</Box>
			<Box ml="4" width="30%">
				<Button
					boxShadow="sm"
					bg="white"
					leftIcon={FiBriefcase}
					mb="3"
					width="full"
				>
					Apply for this job
				</Button>
				<Flex>
					<Button
						boxShadow="sm"
						bg="white"
						leftIcon={FiStar}
						width="full"
						mr="1"
					>
						Save
					</Button>
					<Button
						boxShadow="sm"
						bg="white"
						leftIcon={FiSend}
						width="full"
						ml="1"
					>
						Send
					</Button>
				</Flex>
				<Card mt="3" height="auto">
					<Text>Logo</Text>
					<Text>Added: Sept 3, 2018</Text>
					<Text>Source: Public Company</Text>
				</Card>
			</Box>
		</Container>
	)
}
