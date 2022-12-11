/* eslint-disable react/no-unescaped-entities */

import Head from "next/head"
import NextImage from "next/image"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const Routes=[
	{
		name:"About Us",
		url:"/about#about"
	},
	{
		name: "Mission",
		url:"/about#mission"
	},
	{
		name: "Vision",
		url: "/about#vision"
	},
	{
		name:"RKM",
		url:"/about#rkm"
	},
]

export default function AboutPage() {
	return (
		<>
			<Page
				title="Vivekananda Samiti, IIT Kanpur"
				description="‘Śiba jñānē jība sēbā’ -Jiva Seva is the knowledge of Shiva"
				routes = {Routes}
			>
				<SectionTitle id = "about">About Vivekananda Samiti</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Vivekananda Samiti is one of the oldest clubs under the Students’ Gymkhana, functioning for over 50 years, thus spreading the message of Swami Vivekananda among the campus residents. <br/> <br/> <br/>
					In present year our focus is to apply the concepts of Swami Vivekananda in our daily life through some practical activities for an overall IIT-K community as well as to take active part in nation building. In the past years, we have conducted a plethora of events like talks on Vendanta, ancient India, Sanskrit Language and permaculture, special lecture on self-belief exercise and Spoken Sanskrit Language, social Services like Health Camps around the campus. Weekly discussions on Swami Vivekananda’s life and teachings, Vendata classes, Sanskrit classes, meditation sessions and distribution of Vivekananda literature among youth were also conducted. <br/> <br/> <br/>
					Uniqueness of some events conducted this year were to motivate more students & to enhance their soft skills, leadership ability & overall personality for personality development as well as to help them in campus placements.
					</SectionText>
					<ImageContainer>
						<NextImage src="/AboutPageImg/vpt15.jpg" alt="IITK" layout="fill" objectFit="contain"	/>
					</ImageContainer>
				</TextWrapper>
				<br />	
				<hr />
				<br />
				<SectionTitle id="_">आत्मनो मोक्षार्थम् जगत् हिताय च</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Atmano mokshartham jagat hitaya cha (translation: for the salvation of our individual self and for the well-being of all on earth) is a sloka of the Rig Veda. Swami Vivekananda would often use it, and it became the motto of the Ramakrishna Mission that he founded in 1897 and the related Ramakrishna Math. <br/> <br/> <br/>
					With that motto in mind, Vivekananda Samiti works towards enhancing positive energy of individuals, using the power of Karma. <br/> <br/> <br/>
						{/* In present year our focus is to apply the concepts of Swami Vivekananda in our daily life through some practical activities for an overall IITK community as well as to take active part in nation building. In the past years, we have conducted a plethora of events like talks on Vendanta, ancient India, Sanskrit Language and permaculture, special lecture on self-belief exercise and Spoken Sanskrit Language, social Services like Health Camps around the campus. Weekly discussions on Swami Vivekananda’s life and teachings, Vendata classes, Sanskrit classes, meditation sessions and distribution of Vivekananda literature among youth were also conducted. */}
					</SectionText>
					<ImageContainer>
						<NextImage src="/AboutPageImg/vpt14.jpg" alt="IITK" layout="fill" objectFit="contain"	/>
					</ImageContainer>
				</TextWrapper>
				<br />
				<br />
				<SectionTitle id="mission">Mission</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					If the sole purpose of life is enjoying pleasures and having fun, it can be done by animals also. What differentiates humans from animals is their ability to uplift the needy. Present Young minds become the future, so it is essential to mould them in the right shape. They must develop empathy for the poor and help them. We aim at shaping the face of humanity. Spirituality can be a path to self-realisation, which incorporates the feeling of compassion towards others. The novel philosophy of Swami Vivekananda is to nurture and nourish the students to lead an ideal life aiding their overall development. We believe that including spirituality in every work makes it a stress-free task.
					</SectionText>
				</TextWrapper>
				<br />
				<br />
				<SectionTitle id="vision">Vision</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Many people have an unanswered question regarding the purpose of our life. Golden teachings of Vivekananda are the perfect guidelines for a peaceful and spiritual way of living. So it is essential to deliver his messages to the world in an easy way that everyone can understand and follow them. We spread his teachings by creating awareness, motivating people through our weekly discussions, Vedanta class, Sanskrit class. The mind is the subtle part of the body and is the control system of the body. Stress is a common problem that disturbs the mental health of a person. It is crucial to fill everyone’s mind with positive energy by inducing positive habits that help them to maintain a positive attitude. We conduct meditation classes to ensure that everyone on the campus leads a positive and stress-free lifeWe also motivate students and help them develop soft skills. These leadership qualities help for their overall development and also make their lives productive. We support the poor and needy communities by conducting donation drives, educating their children.
					</SectionText>
				</TextWrapper>
				<br />
				<br />
				<SectionTitle id="rkm">Ramakrishna Mission</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Ramakrishna Math and Ramakrishna Mission are worldwide, non-political, non-sectarian spiritual organizations which have been engaged in various forms of humanitarian, social service activities for more than a century. Inspired by the ideals of renunciation and service, the monks and lay devotees of the Math and Mission serve millions of men, women and children, without any distinction of caste, religion or race, because they see the living God in them. <br/> <br/>
					The ideals of Ramakrishna Math and Ramakrishna Mission consists of the eternal principles of Vedanta as lived and experienced by Sri Ramakrishna and expounded by Swami Vivekananda. This ideology has three characteristics: it is modern in the sense that the ancient principles of Vedanta have been expressed in the modern idiom; it is universal, that is, it is meant for the whole humanity; it is practical in the sense that its principles can be applied in day-to-day life to solve the problems of life.
					</SectionText>
					<ImageContainer>
						<NextImage src="/AboutPageImg/rkmlogo.png" alt="IITK" layout="fill" objectFit="contain"	/>
					</ImageContainer>
				</TextWrapper>
			</Page>
		</>
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
  text-align: justified;
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
  font-size: 1.47rem;
  opacity: 0.6;
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${media("<=tablet")} {
    display:block;
  }
`

const SectionText = styled.div`
  flex: 1;
  font-size: 1.8rem;
  text-align: justify;
  opacity: 0.9;
  margin:20px 30px auto auto;
  ${media("<=tablet")} {
	margin:20px auto auto auto;
  }
`
const SectionTitle2 = styled.div`
  font-size: 2.4rem;
  font-weight: bold; 
`

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 60rem;

  ${media("<=tablet")} {
	--autofit-grid-item-size: 30rem;
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
const ImageContainer = styled.div`
  max-width: 40%;
  flex: 1;
  position: relative;
  padding: 2px;

  & > :first-child{
	  border-style: solid;
	  border-radius:0.6rem;
  }
  ${media("<=tablet")} {
	max-width: 100%;
    display:block;
	height:30rem;
	width:auto;
	margin-top:20px;
  }
  `
const ImageContainerCenter30 = styled.div`
  height: 30rem;
  align: center;
  position: relative;
`
const Link = styled.a`
  color: rgb(var(--text));
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
`
