/* eslint-disable react/no-unescaped-entities */
import NextImage from "next/image"
import Link from "next/link"
import styled from "styled-components"

import Button from "components/Button"
import ButtonGroup from "components/ButtonGroup"
import Container from "components/Container"
import OverTitle from "components/OverTitle"
import { media } from "utils/media"

export default function Hero() {
	return (
		<HeroWrapper>
			<Contents>
				{/* <CustomOverTitle>IIT Kanpur</CustomOverTitle> */}
				<Heading>Vivekananda Samiti</Heading>
				<Description>
        Vivekananda Samiti is one of the oldest clubs under the Students’ Gymkhana, functioning for over 50 years, thus spreading the message of Swami Vivekananda among the campus residents. <br/> <br/>

        In present year our focus is to apply the concepts of Swami Vivekananda in our daily life through some practical activities for an overall IIT-K community as well as to take active part in nation building. In the past years, we have conducted a plethora of events like talks on Vendanta, ancient India, Sanskrit Language and permaculture, special lecture on self-belief exercise and Spoken Sanskrit Language, social Services like Health Camps around the campus. Weekly discussions on Swami Vivekananda’s life and teachings, Vendata classes, Sanskrit classes, meditation sessions and distribution of Vivekananda literature among youth were also conducted. <b/>

				</Description>
				<CustomButtonGroup>
					<Link href="/activities" passHref>
						<Button>
              What we do <span>&rarr;</span>
						</Button>
					</Link>
				</CustomButtonGroup>
			</Contents>
			<ImageContainer>
				<NextImage id = "vs_1" src= "/testimonials/vpt1.png"  layout = "fill" objectFit="contain" />
			</ImageContainer>
		</HeroWrapper>
	)
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media("<=desktop")} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media("<=desktop")} {
    max-width: 100%;
  }
`

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`

const ImageContainer = styled.div`
flex: 1;
max-width: 40%;
position: relative;
left : 5rem;
&:before {
  display: block;
  content: '';
  width: 100%;
  padding-top : calc((9 / 16) * 100%);
}

  ${media("<=desktop")} {
    margin-top: 2rem;
    justify-content: center; 
    align-items: center;
    max-width: 100%;
    left: 0;
    width: 100vw;
  }
`

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  text-align: justify;
  ${media("<=desktop")} {
    font-size: 1.5rem;
  }
`

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`

const Heading = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media("<=tablet")} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`
