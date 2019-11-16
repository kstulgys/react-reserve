import PropTypes from 'prop-types'
import { Flex, Box, Text, Button } from '@chakra-ui/core'
import { Card, Container, Link } from '../components/UI/Primitives'
import Search from '../components/Search'
import axios from 'axios'
import { FiUploadCloud } from 'react-icons/fi'

function Home({ jobs }) {
	return (
		<>
			<Container>
				<Search />
			</Container>
			<Container flexDir="row">
				<Box
					width="70%"
					borderTopLeftRadius="md"
					borderTopRightRadius="md"
					overflow="hidden"
					boxShadow="sm"
				>
					{jobs.map(({ title, id, description }) => (
						<Link key={id} to={`/job?jobId=${id}`} as={`/job/${id}`}>
							<Card
								borderRadius="none"
								borderBottom="2px"
								borderColor="gray.200"
							>
								<Text>{title}</Text>
								<Text>{description}</Text>
							</Card>
						</Link>
					))}
				</Box>
				<Box pl="4" width="30%">
					<Card height="auto">
						<Text mb="3">Let employers find you</Text>
						<Button width="full" leftIcon={FiUploadCloud}>
							Upload resume
						</Button>
					</Card>
				</Box>
			</Container>
		</>
	)
}

Home.getInitialProps = async () => {
	const url = 'http://localhost:3000/api/jobs'
	const { data } = await axios.get(url)
	return { jobs: data }
}

export default Home
