import React, { Component } from 'react';
import Accordion from '../../CommonModule/Accordion'
import '../../CommonModule/Accordion/toggle.css'


export default class BlogToggleSec1 extends Component {  
    constructor (props) {
      super(props);
      this.state = {
        block1: false,
        block2: false,
        block3: false,
        block4: false,
        block5: false,
        blogQuestions: []
      };
    }
    componentDidMount(){
      let self= this;
      var data = {
        id: this.state.id,
        categoryId: this.state.categoryId,
        question: this.state.question,
        description: this.state.description
      }
      fetch('/api/blogcontents', {
        method:'GET'
      }).then(function(response) {
        if(response >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json();
      }).then(function(data) {
        self.setState({blogQuestions: data})
      }).catch(err => {
        console.log("caught it!", err);
      })
    }
    
    toggle = (index) => () => {
      this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }
  
    render() {
      const { blogQuestions } = this.state;
    return <div className="container">
    <dl className="accordion" style={style}>
      {this.state.blogQuestions.map((blogQuestions, index) => {
        if(index < 5) {
          return(
            <Accordion 
            key={blogQuestions.id} 
            title={blogQuestions.question} 
            content={blogQuestions.description} 
            onClick={this.toggle(index + 1)} 
            expand={this.state[`block${index+1}`]} 
          />
          )
        }
      })}
    </dl> 
  </div>;
    }
  }

const contentListStyle = {
  paddingRight:30,
  paddingLeft:-30
}

const style = {
  marginBottom:4
}