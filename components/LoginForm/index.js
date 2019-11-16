import {
	Flex,
	Box,
	Text,
	InputGroup,
	FormControl,
	FormLabel,
	Input,
	Button,
	FormErrorMessage,
} from '@chakra-ui/core'
import { Formik, Field } from 'formik'
import { FiSend } from 'react-icons/fi'

export default function LoginForm() {
	function validateName(value) {
		let error
		if (!value) {
			error = 'Name is required'
		}
		return error
	}

	return (
		<Formik
			initialValues={{ name: '' }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					actions.setSubmitting(false)
				}, 1000)
			}}
			render={({ handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					<Field
						name="name"
						validate={validateName}
						render={({ field, form }) => (
							<FormControl
								maxWidth="xl"
								mt="16"
								isInvalid={form.errors.name && form.touched.name}
							>
								<FormLabel htmlFor="name">First name</FormLabel>
								<Input
									{...field}
									borderRadius="md"
									boxShadow="sm"
									size="lg"
									id="name"
									placeholder=""
								/>
								<FormErrorMessage>{form.errors.name}</FormErrorMessage>
							</FormControl>
						)}
					/>
					<Button
						rightIcon={FiSend}
						variantColor="blue"
						variant="solid"
						loadingText="Submitting"
						mt={4}
						isLoading={!!isSubmitting}
						type="submit"
					>
						Submit
					</Button>
				</form>
			)}
		/>
	)
}
