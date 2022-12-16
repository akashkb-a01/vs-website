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
		name: "Adarsh Kumar",
		// image: "/",
		phone: "(+91) 62066 03698",
		mail: "adarshk20@iitk.ac.in",
		// linkedin: "https://www.linkedin.com/in/"

	},
	{
		name: "Akash Biswas",
		// image: "/",
		phone: "(+91) 94226 19437",
		mail: "abiswas20@iitk.ac.in",
		// linkedin: "https://www.linkedin.com/in/"
	},
	{
		name: "Lavesh Mangal",
		// image: "/",
		phone: "(+91) 80786 72915",
		mail: "laveshm20@iitk.ac.in",
		// linkedin: "https://www.linkedin.com/in/"
	}
]
const Secys = [
	{ 
		name: "Secy", 
		phone: "(+91) 00000 00000", 
		mail: "secy@iitk.ac.in" 
	},
]

const PREVTEAM = [
	"2021-22",
	"2020-21",
	"2019-20",
	"2018-19",
	"2017-18",
	"2016-17",
	"2015-16",
]

export interface StudentTeamProps {
	notNeedTitleAtStudentTeam?: boolean;
}

export default function StudentTeam({ notNeedTitleAtStudentTeam }: StudentTeamProps) {
	return (
		<Page title="Team Members" description="Feel free to reach out to us at vsamiti@iitk.ac.in" keywords="VS Team IITK" notNeedTitle={notNeedTitleAtStudentTeam}>
			<DarkerBackgroundContainer>
				<SectionTitle>Managers</SectionTitle>
				<Container>
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
					<br />
				</Container>
				<SectionTitle>Secretaries</SectionTitle>
				<Container>
					<CustomAutofitGrid3>
						{Secys.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid3>
				</Container>
				<SectionTitle>Previous Teams</SectionTitle>
				<Container>
					<CustomAutofitGrid>
						{PREVTEAM.map((year) => (
							<Link href={`/vs-team/${year}`} key={year}>
								<Card>
									<Title>Team {year}</Title>
								</Card>
							</Link>
						))}
					</CustomAutofitGrid>
				</Container>
			</DarkerBackgroundContainer>
		</Page >
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

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 20rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 15rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 50%;
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
