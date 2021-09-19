import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Matt Simon, wired.com",
      title: "Fire weather is getting worse in the American West",
      description:
        "Climate change is driving more days that are hot, dry, and windy",
      url: "https://www.wired.com/story/what-is-fire-weather-and-why-is-it-getting-worse/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2021/09/wildfire-760x380.jpg",
      publishedAt: "2021-09-19T11:00:54+00:00",
      content:
        "24 with 17 posters participating\r\nCalifornia is famous for its beach weather, but its also growing increasingly infamous for its fire weather, which is when high temperatures, strong winds, and low h… [+6349 chars]",
    },
    {
      source: { id: "fortune", name: "Fortune" },
      author: "Rajiv J. Shah",
      title:
        "A stronger Earned Income Tax Credit will help Americans weather an era of crisis",
      description:
        "The EITC became an invaluable safety net for low-income Americans during the COVID pandemic. Let's build on that.",
      url: "https://fortune.com/2021/09/16/earned-income-tax-credit-benefits-eitc-expansion/",
      urlToImage:
        "https://content.fortune.com/wp-content/uploads/2021/09/GettyImages-522079632-e1631740139252.jpg?resize=1200,600",
      publishedAt: "2021-09-16T16:30:00Z",
      content: "Skip to Content",
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
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="lorem5"
              imageUrl="https://cdn.arstechnica.net/wp-content/uploads/2021/09/wildfire-760x380.jpg"
              newsUrl="todo"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="lorem5" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="lorem5" />
          </div>
        </div>
      </div>
    );
  }
}
