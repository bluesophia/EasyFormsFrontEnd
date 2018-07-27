import React, { Component } from 'react';
import Accordion from '../../CommonModule/Accordion'

export default class BlogToggleSec2 extends Component {  
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
    
    toggleExpand = (expand = false) => () => {
      this.setState({
        block1: expand,
        block2: expand,
        block3: expand,
        block4: expand,
        block5: expand
      });
    }
    
    render() {
      const contentList02 = () => {
        return (
          <div style={contentListStyle}>
            <ul>
              <li>Automate paper forms into mobile forms, whether it be: a job or daily worksheet, 
                H&S inductions or documents, expense forms, SSSP’s, site inspections, vehicle inspections, 
                checklists, pre-starts, maintenance sheets, near misses -- the list goes on! We can take 
                almost any form (that you have on paper) and transform it into an app-based form</li>
              <li>Streamline quoting - don’t let manual quoting take up any more of your valuable time</li>
              <li>Purchase orders</li>
              <li>Dockets</li>
              <li>Timesheets</li>
              <li>Health & safety processes - we can drive a process that you specify</li>
              <li>Sales pipelines</li>
              <li>CRM</li>
              <li>Job management</li>
              <li>Project management</li>
              <li>GPS tracking of your fleets location</li>
              <li>Reporting - well designed reporting that is available to you in a few simple clicks</li>
              <li>Invoicing, plus more</li>
              <li>Save the trees - be an eco-friendly business. Less paper not only means being more efficient, but you can also help save the trees</li>
              <li>Something else you need? As we are customisable speak to us today about your business requirements</li>
            </ul>
          </div>
        )
      }
      const accordionList = [
      { id:0,
        title: 'Do any of these words and phrases ring true for your business?',
        content: "Swamped under mountains of paperwork? Wanting to revolutionise the way you do business?\
        Are you using a multitude of different systems? Tired of double handling and constant\
        re-entering of data, human errors and compliance issues? What about issues with illegible handwriting,\
        repetition, lost information or documents, or, over-complicated processes? Not to mention slow\
        turnaround times, inconsistencies, poor reporting… and the rest!?" 
      }, 
      { id:1,
        title: 'Well then, perhaps these words and phrases sound more appealing to you?',
        content: "Reduce piles of paperwork, errors and mistakes. Consolidate your various job and workflow management\
        solutions using mobile forms and our web portal, save time, admin, resource and direct costs.\
        Decrease inefficiencies, automate your entire job management and workflow system so data is\
        only entered once - enhancing data collection, and integrate output data to a variety of\
        internal systems, programs and people of your choice in an instant. Simplify processes,\
        drive compliance and save overall costs.\
        Whether you have a sales force, a team of skilled tradesmen, a warehouse team, management\
        or production team, or anything in-between, EasyForms can give you the tools to attack\
        these pain areas, plus more." 
      }, 
      { id:2,
        title: 'So, what are mobile forms anyway?',
        content: "To put it simply, smart or mobile forms are an app-based form which enables data to be\
        entered into the app and for that data to then be pushed or transferred to a multitude\
        of output options simultaneously. This data can be sent to your internal systems/CRM/billing\
        and to the various locations or people of your choice once the form(s) submitted.\
        Mobile forms eliminate the clunky manual process of written forms, using the good \
        old fashioned ‘pen and paper. They simplify processes and reduce administration time,\
        resources and double handling. EasyForms are cloud-based so you can login to your forms\
        from anywhere, at anytime, how convenient!\
        EasyForms can take your existing forms or processes and customise an end-to-end solution\
        for your business. Your apps can be equipped with features that make your job so much easier,\
        I.e., photos, video, GPS tracking, sign on glass, audio, date and time stamping, annotation,\
        barcode scanner, plus much more."  
      }, 
      { id:3,
        title: 'What’s the web app or web portal?',
        content: "Then there’s the web portal/job and workflow management side, which includes your CRM,\
        job scheduling, job management, sales pipelines, production dashboards, inventory and\
        reporting, and more. The mobile forms and web app give you the ability to drive an\
        entire process and manage a job from start to completion. Think about this for a minute.\
        Imagine how much simpler your job would be if you could drive an entire process, or processes,\
        by the various steps we put in place in the mobile apps that must be undertaken each day.\
        Health and safety forms complete, tick. Prestart complete, tick (or any other process you need).\
        Receive notifications when your team is losing, or making money on a job, when the job has gone\
        over the budgeted hours, or overtime completely. The web portal is accessible from your desktop,\
        iPad or tablet. Yes, we can customise a solution that suits your needs. We recognise that no\
        “one size fits all” when it comes to job and workflow management and do not believe in providing\
        you with “off the shelf” products, only to find you use a part of the package.\
        Have increased visibility and transparency over all jobs and projects and manage workflow more\
        efficiently while feeling more in control."
      },
      { id:4,
        title: '“Barriers”, you say?',
        content: "We get it, your team may be feeling resistant to change, or to a new app-based solution.\
        Perhaps they’re ‘used’ to the way they currently do things, or, our favourite, ‘oh, these\
        old dogs won’t be able to learn new tricks’. Well, we can tell you this; our solutions are\
        very easy-to-use. Anyone with a smartphone or device will find our systems to be very intuitive\
        and you can simply use your existing smart device (phone or tablet) for our mobile app-based\
        forms. For those who aren’t so savvy using smart devices, we have designed our systems so that\
        they are as easy to use, as possible. The small amount of time spent getting your head around\
        them will definitely pay off in the long run. Mobile technology is fast becoming a necessity for\
        competitive businesses so that you don’t lag behind.\
        Smart forms and the web portal provide a type of connectivity and flexibility that paper forms merely\
        cannot compete with.\
        We have seen many success stories where clients may have be hesitant initially, only to find they\
        now could not imagine not using our solutions. Another example we often hear is, ‘why would we go\
        paper-less when pen and paper work fine in our business?’ While there may be a place for this in\
        certain, small-sized companies, if you answered yes to any of the points above, it is definitely\
        worthwhile having a chat to us to find out what type of customised solution we can provide your \
        company, to help you work smarter and more efficiently." },
      { id:5,
        title: 'Here’s a “portion” of how we can help your business:',
        content: contentList02()
       },
    ];
      

      return <div className="container">
        <dl className="accordion" style={style}>
          {
            accordionList.map((item, index) => (
              <Accordion key={accordionList.id} title={item.title} content={item.content} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} />
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
    marginBottom:4
  }