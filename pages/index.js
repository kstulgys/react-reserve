import PropTypes from 'prop-types'
import { memo } from 'react'
import { Flex, Box, Text, Button, Image } from '@chakra-ui/core'
import { Card, Container, Link } from '../components/UI/Primitives'
import Search from '../components/Search'
import axios from 'axios'
import { FiUploadCloud } from 'react-icons/fi'
import JobListItem from '../components/JobListItem'

export default function Home({ jobs }) {
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
					<JobList jobs={jobs} />
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

const JobList = memo(({ jobs }) => {
	return (
		jobs &&
		jobs.map(job => (
			<Link
				key={job.id}
				to={`/job?jobId=${job.id}`}
				as={`/job/${job.id}`}
				_hover={{ textDecoration: 'none' }}
			>
				<JobListItem job={job} />
			</Link>
		))
	)
})
