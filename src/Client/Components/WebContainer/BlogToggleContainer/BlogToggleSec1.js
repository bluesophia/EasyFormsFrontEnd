import React, { Component } from 'react';
import Accordion from '../../CommonModule/Accordion'
import '../../CommonModule/Accordion/toggle.css'


export default class BlogToggleSec1 extends Component {  
    constructor (props) {
      super(props);
      this.state = {
        blogQuestions: [],
        // blogCategory: [],
        block1: false,
        block2: false,
        block3: false,
        block4: false,
        block5: false,
      };
    }
    _renderContents = () => {
      const Contents = this.state.blogQuestions.map((blogQuestions, id, index) => {
        if(id === 0) {
          return <Accordion question={blogQuestions.question} description={blogQuestions.description} onClick={this.toggle(index + 1)} 
              expand={this.state[`block${index+1}`]} />
        }
        // } else if(id === 1) {
        //   return <Accordion question={blogQuestions.question} description={blogQuestions.description} onClick={this.toggle(index + 1)} 
        //       expand={this.state[`block${index+1}`]} />
        // }
        // } else if(id === 2) {
        //   return <Accordion question={blogQuestions.question} description={blogQuestions.description} onClick={this.toggle(index + 1)} 
        //       expand={this.state[`block${index+1}`]} />
        // } else if(id === 3) {
        //   return <Accordion question={blogQuestions.question} description={blogQuestions.description} onClick={this.toggle(index + 1)} 
        //       expand={this.state[`block${index+1}`]} />
        // } else if(id === 4) {
        //   return <Accordion question={blogQuestions.question} description={blogQuestions.description} onClick={this.toggle(index + 1)} 
        //       expand={this.state[`block${index+1}`]} />
        // }
      });
      return Contents;
    }

    toggle = (index) => () => {
      this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }

    toggleExpand = (expand = false) => () => {
      this.setState({
        block1: expand,
        block2: expand,
        block3: expand,
        block4: expand,
        block5: expand
      });
    }

    componentDidMount() {
      let self= this;
      var data = {
        id: this.state.blogQuestions.id,
        question: this.state.blogQuestions.question,
        description: this.state.blogQuestions.description,
        categoryId: this.state.blogQuestions.categoryId
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
          {
            this.state.blogQuestions ? this._renderContents():'Loading'
            // blogQuestions.map((blogQuestions, index) => (
            //   <Accordion 
            //     question={blogQuestions.question} 
            //     description={blogQuestions.description} 
            //     onClick={this.toggle(index + 1)} 
            //     expand={this.state[`block${index+1}`]} 
            //   />
            // ))
          } 
        </dl> 
      </div>
      )
    }
  }
{/* {this.state.blogQuestions ? this._renderContents() : 'Loading'} */}
const style = {
  paddingRight:30,
  paddingLeft:-30
}