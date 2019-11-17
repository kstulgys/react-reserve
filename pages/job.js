import { Flex, Box, Text, Input, Button, Image } from '@chakra-ui/core'
import { Card, Container } from '../components/UI/Primitives'
import { FiStar, FiMail, FiBriefcase } from 'react-icons/fi'
import { TextTitle } from '../components/UI/Typography'
import axios from 'axios'

export default function Job({ job }) {
	const { id, title, description, body, source, dateAdded, logo } = job

	return (
		<Container flexDir="row" mt="20">
			<Box width="70%">
				<Card>
					<TextTitle mb="4">{title}</TextTitle>
					<Text my="2">{description}</Text>
					<Text>{body}</Text>
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
						leftIcon={FiMail}
						width="full"
						ml="1"
					>
						Send
					</Button>
				</Flex>
				<Card mt="3">
					<Image width="full" height="" objectFit="cover" src={logo} />
					<Text mt="2">Added: {dateAdded}</Text>
					<Text>Source: {source}</Text>
				</Card>
			</Box>
		</Container>
	)
}

Job.getInitialProps = async ({ query: { jobId } }) => {
	const url = 'http://localhost:3000/api/jobs/job'
	const payload = { params: { jobId } }
	const { data } = await axios.get(url, payload)
	return { job: data }
}
