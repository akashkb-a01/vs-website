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
		name:"Talks",
		url:"/activities#talks"
	},
	{
		name:"Blanket & Clothes Donation",
		url:"/activities#donation"
	},
	{
		name:"Guided Meditation Session",
		url:"/activities#meditation"
	},
	{
		name:"VYLC",
		url:"/activities#vylc"
	},
	{
		name:"Drishti",
		url:"/activities#drishti"
	},
	{
		name:"Spiritual Retreats",
		url:"/activities#retreats"
	},
]

export default function ActivitiesPage() {
	return (
		<>
			<Page
				title="Activities @VS IIT Kanpur"
				description="Arise awake and stop not until the goal is reached."
				routes = {Routes}
			>
				<SectionTitle id = "talks">Talks</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Talks are a crucial element of Vivekananda Samiti. Various influential speakers are invited by VS to deliver talks on topics ranging from nation building to youth development to vedanta to spirituality. All the talks are highly beneficial not just for the youth but people from all walks of life. <br /> <br />
					The recordings of the talks are available on the official YouTube handle of Vivekananda Samiti, IITK. <br /> <br />
					PS: We have 350K+ subscribers on the <a href="https://www.youtube.com/@vsiitk" target="_blank" rel="noreferrer">YouTube</a> handle! 

					</SectionText>
					<ImageContainer>
						<NextImage src="/ActivitiesImg/talk.jpg" alt="talk" layout="fill" objectFit="contain"	/>
					</ImageContainer>
				</TextWrapper>
				<br />
				<br />
				<hr />
				<br />
				<SectionTitle id = "donation">Blanket & Clothes Donation</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Vivekananda Samiti conducts various donation drives such as distributing blankets during the winters. <br /> <br />
					Funds are raised by the generous donations from the people of IITK and beyond. Also the success of the drives lies heavily on the volunteers, who put in their best efforts and precious time for the noble cause. <br /> <br />
					Also Vivekananda Samiti conducts the Clothes donation drive. Wherein, the campus residents donate their clothes by placing them into one of many donation boxes kept at various places in the campus by the eam members. Later, the clothes are collected and cleaned before donating them.
					</SectionText>
					<ImageContainer>
						<NextImage src="/ActivitiesImg/blanket.png" alt="Blanket Donation" layout="fill" objectFit="contain"	/>
					</ImageContainer>
				</TextWrapper>
				<br />
				<br />
				<hr />
				<br />
				<SectionTitle id = "meditation">Guided Meditation Session</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Vivekananda Samiti conducts weekly guided Meditation Session under the guidance of Rev. Swami Atmashraddhananda Ji Maharaj, the current Secretary of Ramkrishna Mission Ashram, Kanpur every Saturday morning. <br /> <br />
					The session proceeds in the following order
						<ul>
							<li>Vedic Chanting</li>
							<li>Reading of Swamiji’s literature and reflecting upon it.</li>
							<li>Guided Meditation</li>
							<li>QnA Session</li>
						</ul>
					</SectionText>
					<ImageContainer>
						<NextImage src="/ActivitiesImg/meditation.png" alt="IITK" layout="fill" objectFit="contain"	/>
					</ImageContainer>
				</TextWrapper>
				<br />
				<br />
				<hr />
				<br />
				<SectionTitle id = "vylc">VYLC</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Vivekananda Youth Leadership Convention popularly called VYLC by campus residents is a 2-3 days long convention organised during the birth anniversary of Swami Vivekananda. A plethora of activities ranging from talk series, workshop to book distribution are conducted during the convention spanning for almost a week. <br /> <br />
					VYLC Includes:
						<ul>
							<li>Talks</li>
							<li>Workshops</li>
							<li>Competitions</li>
							<li>Kavi Sammelan</li>
							<li>Indian Classical Music</li>
							<li>and much more...</li>
						</ul>

					</SectionText>
					<ImageContainer>
						<NextImage src="/ActivitiesImg/VYLC.jpg" alt="IITK" layout="fill" objectFit="contain"	/>
					</ImageContainer>
				</TextWrapper>
				<br />
				<br />
				<hr />
				<br />
				<SectionTitle id = "drishti">Drishti</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					We meet to discuss on  different topics and try to reach at a valuable understanding and conclusion. <br /> <br />
					Every Friday 9PM to 9:45PM <br /> <br />
					Recently discussed topics:
						<ol>
							<li>'समाज का आधार: दायित्व या अधिकार?'</li>
							<li>Our Needs</li>
							<li>Students, IITK and Classes: The Roles</li>
						</ol>

					</SectionText>
					{/* <ImageContainer>
						<NextImage src="/AboutPageImg/AboutIITK.jpg" alt="IITK" layout="fill" objectFit="contain"	/>
					</ImageContainer> */}
				</TextWrapper>
				<br />
				<br />
				<hr />
				<br />
				<SectionTitle id = "retreats">Spiritual Retreats</SectionTitle>
				<br />
				<br />
				<TextWrapper>
					<SectionText>
					Vivekananda Samiti with Ramakrishna Mission Ashrama Kanpur hosted a one of its kind Spiritual Retreat. Although, students visit Ashrama on a weeky basis, this retreat was a day long programme where students spent a whole day right from morning to evening at the Ashrama under the holy guidance of Maharaj there. <br /> <br />
					The retreat included the following activities
						<ul>
							<li>Vedic chanting and guided meditation at the temple</li>
							<li>Reading from the Complete Works of Swami Vivekananda</li>
							<li>Film Screening on Belur Math</li>
							<li>Talk on Understanding Vedanta, Sri Ramakrishna and his message</li>
							<li>Exploring the Ashrama and the School campus</li>
							<li>Delicious lunch and breakfast prasad with regular tea breaks</li>
						</ul>

					</SectionText>
					<ImageContainer>
						<NextImage src="/ActivitiesImg/retreat.jpeg" alt="IITK" layout="fill" objectFit="contain"	/>
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
