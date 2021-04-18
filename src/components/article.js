import React, { Component } from 'react'

class Article extends Component { 
    render() {
        return (
            <div>
                <p className="text_main">{this.props.ar1_title}{this.props.ar1_author}{this.props.ar1_publishedAt}</p>
                <p>{this.props.ar1_url}</p>
                <p>{this.props.ar1_content}</p>
                <img src={this.props.ar1_urlToImage}></img>
                
                <hr></hr>

                <p className="text_main">{this.props.ar2_title}{this.props.ar2_author}{this.props.ar2_publishedAt}</p>
                <p>{this.props.ar1_url}</p>
                <p>{this.props.ar2_content}</p>
                <img src={this.props.ar2_urlToImage}></img>

                <hr></hr>

                <p className="text_main">{this.props.ar3_title}{this.props.ar3_author}{this.props.ar3_publishedAt}</p>
                <p>{this.props.ar1_url}</p>
                <p>{this.props.ar3_content}</p>
                <img src={this.props.ar3_urlToImage}></img>
                <hr></hr>
            </div>
        )
    }
}
export default Article