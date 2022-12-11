/* eslint-disable react/no-unescaped-entities */
import { InferGetStaticPropsType } from "next"
import Head from "next/head"
import styled from "styled-components"
// import BasicSection from 'components/BasicSection';
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"
import {Swiper, SwiperSlide } from "swiper/react"

import Button from "components/Button"
import Container from "components/Container"
// import Link from 'components/Link';
import MessageSection from "components/MessageSection"
import RichText from "components/RichText"
import SectionTitle from "components/SectionTitle"
import { EnvVars } from "env"
import { getAllPosts } from "utils/postsFetcher"
// import Cta from "views/HomePage/Cta"
// import Features from 'views/HomePage/Features';
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import Hero from "views/HomePage/Hero"
import NewsIIT from "views/HomePage/NewsIIT"
// import Partners from "views/HomePage/Partners"
// import WhyRec from "views/HomePage/WhyRec"
import ScrollableBlogPosts from "views/HomePage/ScrollableBlogPosts"
// import Testimonials from "views/HomePage/Testimonials"

// import { useState } from "react"

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>{EnvVars.SITE_NAME}</title>
				<meta
					name="description"
					content="Vivekananda Samiti is one of the oldest clubs under the Students’ Gymkhana, functioning for over 50 years, thus spreading the message of Swami Vivekananda among the campus residents."
				/>
				<meta 
					name="keywords" 
					content="VS"
				/>

			</Head>
			<HomepageWrapper>
				<WhiteBackgroundContainer>
					<Hero />
					
				</WhiteBackgroundContainer>
				<DarkerBackgroundContainer>
					<NewsIIT />
					{/* <Cta /> */}
					<ScrollableBlogPosts posts={posts} />
				</DarkerBackgroundContainer>
			</HomepageWrapper>
		</>
	)
}

const TeamContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

export async function getStaticProps() {
	return {
		props: {
			posts: await getAllPosts(),
		},
	}
}
