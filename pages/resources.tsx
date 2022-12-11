import NextImage from "next/image"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import LinkedinIcon from "components/LinkedinIcon"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const ebooks = [
	{
		name: "Complete works of Swami Vivekananda (Vol. 1)",
		image: "/assets/CWCoverVol-1.jpg",
		url: "https://ebooks.advaitaashrama.org/product/complete-works-of-swami-vivekananda-vol-1",
		author: "Swami Vivekananda"

	},
	{
		name: "The Gospel of Sri Ramakrishna",
		image: "/assets/gospelrk.jpg",
		url: "http://www.ramakrishnavivekananda.info/gospel/gospel.htm",
		author: "Swami Nikhilananda"
	},
	{
		name: "A Short Life of Swami Vivekananda",
		image: "/assets/shorvive.jpg",
		url: "https://ebooks.advaitaashrama.org/product/a-short-life-of-swami-vivekananda",
		author: "Swami Tejasananda"
	},
	{
		name: "A Short Life of Sri Ramakrishna",
		image: "/assets/shorrk.jpg",
		url: "https://ebooks.advaitaashrama.org/product/a-short-life-of-sri-ramakrishna-1",
		author: "Swami Tejasananda"

	},
	{
		name: "A Short Life of Holy Mother",
		image: "/assets/shorma.jpg",
		url: "https://ebooks.advaitaashrama.org/product/a-short-life-of-holy-mother-1",
		author: "Swami Pavitrananda"
	},
	{
		name: "Inspiring Lives",
		image: "/assets/insp.jpg",
		url: "https://ebooks.advaitaashrama.org/product/inspiring-lives",
		author: ""
	}
]

export interface StudentTeamProps {
	notNeedTitleAtStudentTeam?: boolean;
}

export default function StudentTeam({ notNeedTitleAtStudentTeam }: StudentTeamProps) {
	return (
		<Page title="Resources" description="Feel free to check out these free resources" keywords="VS Resources" notNeedTitle={notNeedTitleAtStudentTeam}>
			<DarkerBackgroundContainer>
				<SectionTitle>Ebooks</SectionTitle>
				<Container>
					<CustomAutofitGrid4>
						{ebooks.map((member, i) => {
							return (
								<div key={member.name}>
									<a href={member.url} target="_blank" rel="noreferrer">
										<Card>
											{member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
											<Title>{member.name}</Title>
											<Description>{member.author}</Description>
										</Card>
									</a>
								</div>
							)
						}
						)}
					</CustomAutofitGrid4>
					<br />
				</Container>
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
