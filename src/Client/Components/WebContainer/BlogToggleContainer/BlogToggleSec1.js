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
      };
    }
    
    toggle = (index) => () => {
      this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }
   
    render() {
      const contentList01 = () => {
        return (
          <div style={contentListStyle}>
            <ul>
              <li>Capture ACTUAL time spent on jobs - with an auto time stamping capability</li>
              <li>Capture time spent on individual or multiple jobs and even against segments of a project</li>
              <li>Capture travel time with location tracking for multiple jobs - GPS verified</li>
              <li>Capture sick and annual leave (incl. breaks/downtime)</li>
              <li>Streamline payroll and invoicing - integrates with most payroll solutions</li>
              <li>Provides clear and concise reporting at a glance (daily, weekly, monthly - you choose)</li>
              <li>Enhance planning and forecasting</li>
              <li>Save admin & management resource by working smarter</li>
            </ul>
          </div>
        )
      }
      const accordionList = [
      { id:0,
        title: 'Would you like to eliminate timesheet ambiguity?',
        content: "Whether your business is currently using paper-based timesheets,\
        or a job management system, EasyForms helps you achieve the new \"best practice\”. \
        EasyForms allows both staff and management to effectively and precisely log and track \
        hours spent on jobs and projects.\
        We can custom-build a solution to your business needs that can be as comprehensive, \
        or as simple as you would like it to be. Whether you need a complex timesheet solution \
        that tracks against a specific portion of a job, that records travel and break times, \
        reports time against multiple members of a job or an individual's. Or perhaps you just \
        need a simple solution with clock in/clock out capabilities, or anything in-between, we’ve done it all before.\
        EasyForms is a cloud-based solution that enables your field-based teams to enter their timesheet\
        data from anywhere, at any time which can be accessed from any smart device. Our Easy WorkFlow Manager,\
        web-based portal used for reporting and tracking (among other things) can be accessed through your desktop." 
      }, 
      { id:1,
        title: 'So, What is Timesheet Theft Costing You?',
        content: "It could be costing your company a minimum of $2880 per job, per year based on the scenario\
        below for the small things you may not consider, let alone the numerous other jobs/staff you manage.\
        Although this varies from company to company, consider this. Employee A starts work 15 minutes late,\
        but does not log this time. Fifteen minutes -- no biggie, right? Correct, but let’s say for example,\
        this is a scaffolding company where staff work in teams of 6. Well, this means employees B, C, D, E\
        and F cannot start until employee A arrives. This puts the whole job back by 90 minutes, not just\
        the original 15 minutes from employee A. This time that was not logged or tracked has now just\
        cost you approximately $60 for this one job alone (assuming no one is late to this job again that week).\
        Based on this example, if this continued, we can project that this company would be losing an average \
        of $2880+ per year on this one job alone. This is based on only one person being 15 mins late per week,\
        with the snowball effect on other staff members time. This is just one example of many."  
      }, 
      { id:2,
        title: 'Timesheet Theft Is Not Always Deliberate',
        content: "You have picked your staff carefully and would like to think you can trust them. Absolutely! Although,\
        there may not be a dishonest intention, things like human error when it comes to filling out timesheets,\
         or lost pieces of paper scribbled with hours, or merely forgetting total hours spent on a job, or on \
         multiple jobs after a long day at work are all too common."
      },
      { id:3,
        title: 'How We Can Help',
        content: "EasyForms solutions address these issues and alleviate the headaches associated with timesheet theft.\
        We have auto time stamping capabilities and GPS tracking which can track hours and minutes accurately,\
        removing human error, mistakes and double handling. Our solutions can integrate with most accounting\
        packages and output data can be sent to a multitude of locations and different people (internally\
        or externally, whether it’s to the client, back into your in-house system, or people within\
        your organisation) instantly. This means, in most cases staff only need to enter the data once.\
        EasyForms gives you peace of mind when it comes to timesheet theft and job and workflow management,\
        so you can focus on the things you need to." },
      { id:4,
        title: 'We can help your business:',
        content: contentList01()
       },
    ];
      

      return <div className="container">
        <dl className="accordion" style={style}>
          {
            accordionList.map((item, index) => (
              <Accordion 
                key={accordionList.id} 
                title={item.title} 
                content={item.content} 
                onClick={this.toggle(index + 1)} 
                expand={this.state[`block${index+1}`]} 
              />
            ))
          }
        </dl> 
      </div>;
    }
  }

const contentListStyle = {
  paddingRight:30,
  paddingLeft:-30
}

const style = {
  marginTop:0,
  marginBottom:4
}