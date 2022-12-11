/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from "next/link"
// import Icon, {Telegram} from 'react-share-icons';
// import ytIcon from "../public/assets/yticon.svg"
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share"
import styled from "styled-components"

import Container from "components/Container"
import { media } from "utils/media"

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
	{
		title: "IITK Links",
		items: [
			{ title: "IITK Homepage", href: "https://iitk.ac.in/" },
			{ title: "DoAA", href: "https://iitk.ac.in/doaa/" },
			{ title: "DoSA", href: "https://iitk.ac.in/dosa" },
			{ title: "Students' Gymkhana", href: "https://students.iitk.ac.in/" },
		],
	},
	{
		title: "About",
		items: [
			{ title: "About Us", href: "/about#about" },
			{ title: "Mission", href: "/about#mission" },
			{ title: "Vision", href: "/about#vision" },
			{ title: "RKM", href: "/about#rkm" },
		],
	},
	{
		title: "Activities",
		items: [
			{ title: "Talks", href: "/activities#talks" },
			{ title: "Blankets & Clothes Donation", href: "/activities#donation" },
			{ title: "Guided Meditation Session", href: "/activities#meditation" },
			{ title: "VYLC", href: "/activities#vylc" },
		],
	},
]

export default function Footer() {
	return (
		<FooterWrapper>
			<Container>
				<ListContainer>
					{footerItems.map((singleItem) => (
						<FooterList key={singleItem.title} {...singleItem} />
					))}
					<div>
						<ListHeader>Contact</ListHeader>
						<ListItemWrapper>
							<span style={{ color: "rgba(var(--textSecondary), 0.75)" }} >
								New SAC, Room No. 102 <br />
								IIT Kanpur, Kanpur-208016 <br />
								U.P., India <br />
								Email:
								<NextLink href="mailto:vsamiti@iitk.ac.in" passHref>
									<a>vsamiti@iitk.ac.in</a>
								</NextLink>
								<br />
							</span>
							<ListItemWrapper>
								<NextLink href="/current-team" passHref>
									<a>Contact Team Members</a>
								</NextLink>
							</ListItemWrapper>
						</ListItemWrapper>
					</div>
				</ListContainer>
				<BottomBar>
					<ShareBar>

						<NextLink href="mailto:vsamiti@iitk.ac.in" passHref>
							<a>
								<EmailIcon size={50} round={true} />
							</a>
						</NextLink>

						<NextLink href="https://www.facebook.com/vsiitk" passHref>
							<a>
								<FacebookIcon size={50} round={true} />
							</a>
						</NextLink>

						<NextLink href="https://www.twitter.com/vsiitk" passHref>
							<a>
								<TwitterIcon size={50} round={true} />
							</a>
						</NextLink>
					</ShareBar>
					<Copyright>&copy; Copyright 2022 Vivekananda Samiti, IIT Kanpur</Copyright>
				</BottomBar>
			</Container>
		</FooterWrapper>
	)
}

function FooterList({ title, items }: SingleFooterList) {
	return (
		<ListWrapper>
			<ListHeader>{title}</ListHeader>
			{items.map((singleItem) => (
				<ListItem key={singleItem.href} {...singleItem} />
			))}
		</ListWrapper>
	)
}

function ListItem({ title, href }: SingleFooterListItem) {
	return (
		<ListItemWrapper>
			<NextLink href={href} passHref>
				<a>{title}</a>
			</NextLink>
		</ListItemWrapper>
	)
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media("<=tablet")} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media("<=phone")} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media("<=tablet")} {
    flex-direction: column;
  }
`
