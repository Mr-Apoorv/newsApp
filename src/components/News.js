import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: null,
      title:
        "Businessinsider.co.za | How a maths teacher from Durban became a  leading Covid-19 tweeter",
      description:
        "Sugan Naidoo started tweeting about Covid-19 to 35 friends - today he tweets to more than 20,000, including some respected doctors on Covid-19 frontlines.",
      url: "https://www.businessinsider.co.za/how-a-maths-teacher-from-durban-became-a-leading-covid-19-tweeter-2021-9",
      urlToImage:
        "http://cdn.24.co.za/files/Cms/General/d/11558/77c3681b55c9499a99a610042ee9a926.jpg",
      publishedAt: "2021-09-19T18:49:40+00:00",
      content:
        "<ul><li>Maths teacher Sugan Naidoo started tweeting about Covid-19 out of boredom during lockdown - when he had just 35 followers.</li><li>Today, he has more than 20,000 followers. </li><li>His dedic… [+8140 chars]",
    },
    {
      source: { id: "the-globe-and-mail", name: "The Globe And Mail" },
      author: null,
      title:
        "The sustainable family farm: How a mother-daughter team built a new life in rural Ontario",
      description:
        "Kimiko Uchikura and her daughter, Tessa, are following their inspiration - and their hearts - to create a sustainable agriculture business in Bobcaygeon, Ont.",
      url: "https://www.theglobeandmail.com/canada/article-the-sustainable-family-farm-how-a-mother-daughter-team-built-a-new/",
      urlToImage:
        "https://www.theglobeandmail.com/resizer/dOWzQztvP29ItbPHBTqjHXUiONg=/1200x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/LJVP63VPP5G55IMD5TPKHQRWFY.jpg",
      publishedAt: "2021-09-19T14:59:14Z",
      content:
        "Kimiko Uchikura, 62, grew up in Toronto to first-generation Japanese Canadians. She had taken over the family graphic-design business, as was the duty of the oldest child, but she never felt fulfille… [+9167 chars]",
    },

    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Vishnu Rajamanickam",
      title: "Supply chain chaos hits small businesses ahead of holiday season",
      description:
        "The holiday shopping season is months away, but US shippers and retailers are already feeling the heat as they work to stockpile inventory.",
      url: "http://www.businessinsider.com/supply-chain-chaos-hits-small-businesses-ahead-of-holiday-season-2021-9",
      urlToImage:
        "https://i.insider.com/61267bec12b9cc001962d35f?width=1200&format=jpeg",
      publishedAt: "2021-09-19T11:43:00Z",
      content:
        "The holiday shopping season is still a few months away, but US shippers and retailers are already feeling the heat as they work to stockpile inventory. \r\nThe ongoing freight backlog is hammering smal… [+3235 chars]",
    },
    {
      source: { id: "business-insider-uk", name: "Business Insider (UK)" },
      author: "Vishnu Rajamanickam",
      title: "Supply chain chaos hits small businesses ahead of holiday season",
      description:
        "The holiday shopping season is months away, but US shippers and retailers are already feeling the heat as they work to stockpile inventory.",
      url: "http://uk.businessinsider.com/supply-chain-chaos-hits-small-businesses-ahead-of-holiday-season-2021-9",
      urlToImage:
        "https://i.insider.com/61267bec12b9cc001962d35f?width=1200&format=jpeg",
      publishedAt: "2021-09-19T11:43:00Z",
      content:
        "The holiday shopping season is still a few months away, but US shippers and retailers are already feeling the heat as they work to stockpile inventory. \r\nThe ongoing freight backlog is hammering smal… [+3235 chars]",
    },
    {
      source: { id: "nfl-news", name: "NFL News" },
      author: null,
      title:
        "Cardinals GM on Chandler Jones: 'We're not in the business of moving on' from good players",
      description:
        "In the midst of a contract year, Chandler Jones is out to prove his worth. Cardinals GM Steve Keim has certainly noticed the star edge rusher's hot start to the 2021 season.",
      url: "https://www.nfl.com/news/cardinals-gm-on-chandler-jones-we-re-not-in-the-business-of-moving-on-from-good-",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/gfx9ylpmzkg62dwambgo",
      publishedAt: "2021-09-19T11:07:29.2936627Z",
      content:
        "Cardinals star Chandler Jones recently said he's focused on playing football and not his much-talked-about next contract.\r\nOf course, this doesn't mean questions still won't be directed general manag… [+1950 chars]",
    },
    {
      source: { id: "the-next-web", name: "The Next Web" },
      author: "The Conversation",
      title:
        "Here’s why the fast internet you pay for is sometimes slow as hell",
      description:
        "Of the 8.2 million homes and businesses active on Australia’s National Broadband Network (NBN) in July 2021, 77% are now reported to be on a broadband plan that delivers speeds of ...",
      url: "http://thenextweb.com/news/why-fast-internet-you-pay-for-is-sometimes-slow-as-hell-syndication",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F09%2Fslow-internet-hed-2.jpg&signature=e0b101e5f62d918419d122cd55ddadd8",
      publishedAt: "2021-09-19T10:00:19Z",
      content:
        "Of the 8.2 million homes and businesses active on Australias National Broadband Network (NBN) in July 2021, 77% are now reported to be on a broadband plan that delivers speeds of at least 50 megabits… [+4743 chars]",
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "Judd Boaz",
      title:
        "Victorians react to the state government's roadmap out of sixth COVID lockdown",
      description:
        "Victoria's cautious, gradual path to easing restrictions across the state draws fire from the opposition and publicans, who say capacity requirements will make it harder for businesses to survive. But the nurses' union says the slow easing is necessary to pre…",
      url: "http://www.abc.net.au/news/2021-09-19/victoria-reacts-to-covid-roadmap-restrictions/100475030",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/0c9e3cbcad922a62a5c556e587ed325b?impolicy=wcms_crop_resize&cropH=673&cropW=1195&xPos=6&yPos=92&width=862&height=485",
      publishedAt: "2021-09-19T09:22:19Z",
      content:
        "The Victorian government outlined the state's roadmap out of lockdown on Sunday, detailing a multi-step plan towards more freedoms and fewer restrictions on movement and activities.\r\nThe implementati… [+6933 chars]",
    },
    {
      source: { id: "google-news-in", name: "Google News (India)" },
      author: null,
      title:
        "Kabul Airport suicide attacker was freed by Taliban after four years in CIA custody for New Delhi terror plot",
      description:
        "Abdul Rehman, a former engineering student with roots in Afghanistan’s Logar province and the son of a merchant who frequently visited New Delhi on business, was freed from Bagram prison on 15 August",
      url: "https://www.firstpost.com/india/kabul-airport-suicide-attacker-was-freed-by-taliban-after-four-years-in-cia-custody-for-new-delhi-terror-plot-9976961.html",
      urlToImage:
        "https://images.firstpost.com/wp-content/uploads/2021/08/Kabul-blast.jpg",
      publishedAt: "2021-09-19T09:14:32+00:00",
      content:
        "Abdul Rehman, a former engineering student with roots in Afghanistans Logar province and the son of a merchant who frequently visited New Delhi on business, was freed from Bagram prison on 15 August\r… [+6203 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loader: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News Monkey 🐒 - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
