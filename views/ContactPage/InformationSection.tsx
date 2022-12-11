import NextLink from "next/link"
import styled from "styled-components"

import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import { media } from "utils/media"

export default function InformationSection() {
	return (
		<Wrapper>
			<h3>Contact Info</h3>
			<p>
      New SAC, Room No. 102 <br />
      IIT Kanpur, Kanpur-208016 <br />
      U.P., India <br /> <br />
				<span>Email:</span> vsamiti@iitk.ac.in <br /> <br />
      Get the contact details of the team <NextLink href="/current-team">here</NextLink>.
			</p>
			<CustomButtonGroup>
				<NextLink href="/current-team" passHref>
					<CustomButton transparent>
						Current Team
					</CustomButton>
				</NextLink>
			</CustomButtonGroup>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
  flex-direction: column;
  display: none;

  ${media("<=tablet")} {
    display: block;
  }
`

const CustomButton = styled(Button)`
  margin-bottom: 1rem;
  background: rgb(var(--cardBackground));
  text-align: left;
`
