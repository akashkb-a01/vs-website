import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

import Button from "components/Button"
import Input from "components/Input"
import { media } from "utils/media"

import MailSentState from "../../components/MailSentState"

interface EmailPayload {
	company: string;
	name: string;
	email: string;
	phone: string;
	designation: string;
	description: string;
}

export default function FormSection() {
	const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false)
	const [hasErrored, setHasErrored] = useState(false)
	const { register, handleSubmit, formState } = useForm()
	const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState

	async function onSubmit(payload: EmailPayload) {
		try {
			const res = await fetch("/api/sendEmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ subject: "Email from contact form on VS Website", ...payload }),
			})

			if (res.status !== 204 && res.status !== 200) {
				setHasErrored(true)
				return
			}
		} catch {
			setHasErrored(true)
			return
		}

		setHasSuccessfullySentMail(true)
	}

	const isSent = isSubmitSuccessful && isSubmitted
	const isDisabled = isSubmitting || isSent
	const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled

	if (hasSuccessfullySentMail) {
		return <MailSentState />
	}

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{hasErrored && <ErrorMessage>Oops! Couldn&apos;t send email. Please contact <Link href="/current-team" passHref>the team members</Link> directly.</ErrorMessage>}
				<InputGroup>
					<InputStack>
						{errors.company && <ErrorMessage>First Name is required</ErrorMessage>}
						<Input placeholder="First Name" id="company" disabled={isDisabled} {...register("company", { required: true })} />
					</InputStack>
					<InputStack>
						{errors.name && <ErrorMessage>Last Name is required</ErrorMessage>}
						<Input placeholder="Last Name" id="name" disabled={isDisabled} {...register("name", { required: true })} />
					</InputStack>
				</InputGroup>
				<InputGroup>
					<InputStack>
						{errors.phone && <ErrorMessage>Phone number is required</ErrorMessage>}
						<Input placeholder="Your Phone number" id="phone" disabled={isDisabled} {...register("phone", { required: true })} />
					</InputStack>
					<InputStack>
						{errors.email && <ErrorMessage>Email is required</ErrorMessage>}
						<Input placeholder="Your Email" id="email" disabled={isDisabled} {...register("email", { required: true })} />
					</InputStack>
				</InputGroup>
				{/* <InputStack>
					{errors.designation && <ErrorMessage>Designation is required</ErrorMessage>}
					<Input placeholder="Your Designation" id="designation" disabled={isDisabled} {...register("designation", { required: true })} />
				</InputStack> */}
				<InputStack>
					{errors.description && <ErrorMessage>Description is required</ErrorMessage>}
					<Textarea
						as="textarea"
						placeholder="Enter Your Message..."
						id="description"
						disabled={isDisabled}
						{...register("description", { required: true })}
					/>
				</InputStack>
				<Button as="button" type="submit" disabled={isSubmitDisabled}>
					Send Message
				</Button>
			</Form>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  flex: 2;
`

const Form = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`

const InputGroup = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${media("<=tablet")} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`

const InputStack = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`

const ErrorMessage = styled.p`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
`

const Textarea = styled(Input)`
  width: 100%;
  min-height: 20rem;
`
