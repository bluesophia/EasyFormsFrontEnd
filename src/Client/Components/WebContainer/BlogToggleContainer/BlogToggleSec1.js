import React, { Component } from 'react';
import Accordion from '../../CommonModule/Accordion'
import '../../CommonModule/Accordion/toggle.css'


export default class BlogToggleSec1 extends Component {  
    constructor (props) {
      super(props);
      this.state = {
        blogQuestions: [],
        blogCategory: [],
        block1: false,
        block2: false,
        block3: false,
        block4: false,
        block5: false,
      };
    }
    _renderContents = () => {
      const Contents = this.state.blogQuestions.map((blogQuestions, key, description, question, index, id) => {
        return(
          <Accordion 
          key={blogQuestions.categoryid} 
                question={blogQuestions.question} 
                description={blogQuestions.description} 
                onClick={this.toggle(index + 1)} 
                expand={this.state[`block${index+1}`]} 
        />
        )
        return Contents
      })
    }
    toggle = (index) => () => {
      this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }
    componentDidMount() {
      let self= this;
      var data = {
        id: this.state.id,
        question: this.state.question,
        description: this.state.description,
        categoryId: this.state.categoryId
      }
    

    fetch('/api/blog', {
      method:'GET'
    }).then(function(response){
      if(response.status >= 400){
        throw new Error("Bad response from server");
      }
      return response.json()
    }).then(function(data){
      self.setState({blogQuestions: data});
    }).catch(err => {

    })
  }
    render() {
      const { blogQuestions } = this.state;
      return( 
      <div className="container">
        <dl className="accordion">
        {this.state.blogQuestions ? this._renderContents() : 'Loading'}
          
            {/* blogQuestions.map((blogQuestions, index) => (
              <Accordion 
                key={blogQuestions.categoryid} 
                question={blogQuestions.question} 
                description={blogQuestions.description} 
                onClick={this.toggle(index + 1)} 
                expand={this.state[`block${index+1}`]} 
              />
            ))
           */}
        </dl> 
      </div>
      )
    }
  }

const style = {
  paddingRight:30,
  paddingLeft:-30
}