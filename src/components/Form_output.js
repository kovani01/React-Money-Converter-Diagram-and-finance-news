import React, { Component } from 'react'
import Article from "./article";

class Prices extends Component {
    state = {
        ar1_title: undefined,
        ar2_title: undefined,
        ar3_title: undefined,

        ar1_author: undefined,
        ar2_author: undefined,
        ar3_author: undefined,

        ar1_content: undefined,
        ar2_content: undefined,
        ar3_content: undefined,

        ar1_publishedAt: undefined,
        ar2_publishedAt: undefined,
        ar3_publishedAt: undefined,

        ar1_url: undefined,
        ar2_url: undefined,
        ar3_url: undefined,


        ar1_urlToImage: undefined,
        ar2_urlToImage: undefined,
        ar3_urlToImage: undefined
    }
    gettingInfo = async(event) => {
        const api_url = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2db1bc5a4d4a490aa55c80dab535ebc7`)
        const data = await api_url.json();
        console.log(data)

        this.setState({
            ar1_title: data.articles[1].title,
            ar2_title: data.articles[2].title,
            ar3_title: data.articles[4].title,

            ar1_author: data.articles[1].author,
            ar2_author: data.articles[2].author,
            ar3_author: data.articles[4].author,

            ar1_content: data.articles[1].content,
            ar2_content: data.articles[2].content,
            ar3_content: data.articles[4].content,

            ar1_publishedAt: data.articles[1].publishedAt,
            ar2_publishedAt: data.articles[2].publishedAt,
            ar3_publishedAt: data.articles[4].publishedAt,

            ar1_url: data.articles[1].url,
            ar2_url: data.articles[2].url,
            ar3_url: data.articles[4].url,

            
            ar1_urlToImage: data.articles[1].urlToImage,
            ar2_urlToImage: data.articles[2].urlToImage,
            ar3_urlToImage: data.articles[4].urlToImage,
        })
      }
      
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="news">
                <h1 className="h1_a" onClick={this.gettingInfo}>FINANCIAL NEWS</h1>
                <Article
                    ar1_title={this.state.ar1_title}
                    ar2_title={this.state.ar2_title}
                    ar3_title={this.state.ar3_title}

                    ar1_author={this.state.ar1_author}
                    ar2_author={this.state.ar2_author}
                    ar3_author={this.state.ar3_author}

                    ar1_content={this.state.ar1_content}
                    ar2_content={this.state.ar2_content}
                    ar3_content={this.state.ar3_content}

                    ar1_publishedAt={this.state.ar1_publishedAt}
                    ar2_publishedAt={this.state.ar2_publishedAt}
                    ar3_publishedAt={this.state.ar3_publishedAt}

                    ar1_url={this.state.ar1_url}
                    ar2_url={this.state.ar2_url}
                    ar3_url={this.state.ar3_url}

                    ar1_urlToImage={this.state.ar1_urlToImage}
                    ar2_urlToImage={this.state.ar2_urlToImage}
                    ar3_urlToImage={this.state.ar3_urlToImage}
                />
                </div>
            </div>
        )
    }
}
export default Prices