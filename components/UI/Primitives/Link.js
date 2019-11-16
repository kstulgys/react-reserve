import NextLink from 'next/link'
import { Link as CHLink } from '@chakra-ui/core'

const Link = React.forwardRef(({ to, as, ...props }, ref) => (
	<NextLink href={to} as={as}>
		<CHLink ref={ref} {...props} />
	</NextLink>
))
export default Link
