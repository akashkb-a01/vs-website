import NextImage from "next/image"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import LinkedinIcon from "components/LinkedinIcon"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const Managers = [
	{
		"name": "Nitish Kumar",
		// "image": "",
		"mail": "nitishk@iitk.ac.in",
		"phone": "+91 98356 37958",
		// "linkedin": "https://www.linkedin.com/in/"
	}
]

const Secys = [
	{
		"name": "Akash Biswas",
		"mail": "abiswas20@iitk.ac.in",
		"phone": "+91 94226 19437"
	},
	{
		"name": "Akhil Jain",
		"mail": "akhilj20@iitk.ac.in",
		"phone": "+91 91166 62470"
	},
	{
		"name": "Harish Kumar",
		"mail": "harishk20@iitk.ac.in",
		"phone": "+91 73576 65574"
	},
	{
		"name": "Lavesh Mangal",
		"mail": "laveshm20@iitk.ac.in",
		"phone": "+91 80786 72915"
	},
	{
		"name": "Neelima Singh",
		"mail": "neelima20@iitk.ac.in",
		"phone": "+91 94552 65763"
	},
	{
		"name": "Santu Panja",
		"mail": "santupanja20@iitk.ac.in",
		"phone": "+91 97485 61613"
	},
	{
		"name": "Sheeshram Choudhary",
		"mail": "sheeshram20@iitk.ac.in",
		"phone": "+91 98757 89537"
	},
]

export default function StudentTeam22() {
	return (
		<Page title="Vivekananda Samiti Team 2020-21" >
			<DarkerBackgroundContainer>
				<br />
				<br />
				<Container>
					<SectionTitle>Manager</SectionTitle>
					<CustomAutofitGrid4>
						{Managers.map((member, i) => {
							return (
								<div key={member.name}>
									<Card>
										{/* {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />} */}
										<Title>{member.name}</Title>
										<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
										<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
										{/* <small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small> */}
									</Card>
								</div>
							)
						}
						)}
					</CustomAutofitGrid4>
				</Container>
				<SectionTitle>Secretaries</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{Secys.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid4>
				</Container>
				<br />
			</DarkerBackgroundContainer>
		</Page>
	)
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const Description = styled.div`
  opacity: 0.6;
`

const CustomAutofitGrid2 = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const CustomAutofitGrid3 = styled(AutofitGrid)`
--autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const CustomAutofitGrid4 = styled(AutofitGrid)`
--autofit-grid-item-size: 25rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: var(--primary);
`

const CustomBtnGroup = styled.div`
  display: grid;
  font-size: 1.8rem;
  text-decoration: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
`
