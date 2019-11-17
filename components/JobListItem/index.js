import { Flex, Box, Text, Button, Image, Badge, Stack } from '@chakra-ui/core'
import { Card } from '../UI/Primitives'
import { FiStar, FiSend, FiBriefcase } from 'react-icons/fi'

export default function JobListItem({ job }) {
	const { title, id, description, logo, dateAdded, source, labels } = job
	return (
		<Card borderRadius="none" borderBottom="2px" borderColor="gray.200">
			<Flex>
				<Box>
					<Text fontSize="lg" fontWeight="semibold">
						{title}
					</Text>
					<Text>Added: {dateAdded}</Text>
					<Text>Source: {source}</Text>
				</Box>
				<Box ml="auto">
					<Image size="20" objectFit="cover" src={logo} />
				</Box>
			</Flex>
			<Text mt="2">{description}</Text>
			<Flex mt="2">
				<Button
					variant="outline"
					variantColor="yellow"
					leftIcon={FiStar}
					size="sm"
					_hover={{ bg: 'yellow.100' }}
					height="6"
				>
					Save
				</Button>
				<Stack ml="auto" isInline alignSelf="flex-end">
					{labels.map((label, i) => {
						return (
							<Badge
								key={`${label}-${i}`}
								variantColor={label === 'new' ? 'blue' : 'gray'}
							>
								{label}
							</Badge>
						)
					})}
				</Stack>
			</Flex>
		</Card>
	)
}
