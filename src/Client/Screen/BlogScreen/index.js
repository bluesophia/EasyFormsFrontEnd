import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import SectionBg from '../../../Assets/Images/blog_1.jpg';
// import BlogToggleContainer from '../../../Components/WebContainer/BlogToggleContainer';
import BlogToggle from '../../Components/WebContainer/BlogToggleContainer/BlogToggle';
import ToggleButton from '../../../Assets/Images/arrow.png';

const Blog01Answer01 = "Whether your business is currently using paper-based timesheets,\
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

const Blog01Answer02 = 
"It could be costing your company a minimum of $2880 per job, per year based on the scenario\
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

const Blog01Answer03 =
"You have picked your staff carefully and would like to think you can trust them. Absolutely! Although,\
 there may not be a dishonest intention, things like human error when it comes to filling out timesheets,\
  or lost pieces of paper scribbled with hours, or merely forgetting total hours spent on a job, or on \
  multiple jobs after a long day at work are all too common."

const Blog01Answer04 =
"EasyForms solutions address these issues and alleviate the headaches associated with timesheet theft.\
We have auto time stamping capabilities and GPS tracking which can track hours and minutes accurately,\
 removing human error, mistakes and double handling. Our solutions can integrate with most accounting\
  packages and output data can be sent to a multitude of locations and different people (internally\
     or externally, whether it’s to the client, back into your in-house system, or people within\
      your organisation) instantly. This means, in most cases staff only need to enter the data once.\
       EasyForms gives you peace of mind when it comes to timesheet theft and job and workflow management,\
        so you can focus on the things you need to."

const Blog01Answer05 =""
const Blog02Answer01 =
"Swamped under mountains of paperwork? Wanting to revolutionise the way you do business?\
 Are you using a multitude of different systems? Tired of double handling and constant\
  re-entering of data, human errors and compliance issues? What about issues with illegible handwriting,\
   repetition, lost information or documents, or, over-complicated processes? Not to mention slow\
    turnaround times, inconsistencies, poor reporting… and the rest!?"
const Blog02Answer02 =
"Reduce piles of paperwork, errors and mistakes. Consolidate your various job and workflow management\
 solutions using mobile forms and our web portal, save time, admin, resource and direct costs.\
  Decrease inefficiencies, automate your entire job management and workflow system so data is\
   only entered once - enhancing data collection, and integrate output data to a variety of\
    internal systems, programs and people of your choice in an instant. Simplify processes,\
     drive compliance and save overall costs.\
Whether you have a sales force, a team of skilled tradesmen, a warehouse team, management\
 or production team, or anything in-between, EasyForms can give you the tools to attack\
  these pain areas, plus more."
const Blog02Answer03 =
"To put it simply, smart or mobile forms are an app-based form which enables data to be\
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
const Blog02Answer04 =
"Then there’s the web portal/job and workflow management side, which includes your CRM,\
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
const Blog02Answer05 =
"We get it, your team may be feeling resistant to change, or to a new app-based solution.\
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
    company, to help you work smarter and more efficiently."
const Blog02Answer06 =""
const QuestionStyle = css`
    font-size:${Themes.fontsize.h3};
    text-align:left;
    line-height:25px;
    color:${Themes.colors.blue};
    font-weight:${Themes.fontWeight.regular};
`
const BlogScreen = () => ({
  render: function(){
    return(
      <ThemeProvider theme={Themes}>
      <Container>
        <Section>
          <Section__Header>
            <Section__TitleDiv>
              <Section__Title>Is Timesheet Theft Giving You a Constant Headache?</Section__Title>
              <HeaderLine />
            </Section__TitleDiv>
            <Section__FirstBlog>
              <QuestionDiv onClick={this.toggle}>
                  <Question>Would you like to eliminate timesheet ambiguity?</Question>
                  <ArrowDiv className="arrowFlip" ><Arrow src={ToggleButton}/></ArrowDiv>
              </QuestionDiv>
            </Section__FirstBlog>
          </Section__Header>
            <Section__Contents>
                  <AnswerDiv className="toggle">{Blog01Answer01}</AnswerDiv>
                  <BlogToggle 
                    question={'So, What is Timesheet Theft Costing You?'}
                    answer={Blog01Answer02}
                    className="Blog01Answer02"/>
                  <BlogToggle 
                    question={'Timesheet Theft Is Not Always Deliberate'}
                    answer={Blog01Answer03}
                    className="Blog01Answer03"/>
                  <BlogToggle 
                    question={'How We Can Help'}
                    answer={Blog01Answer04}
                    className="Blog01Answer04"/>
                  <BlogToggle 
                    question={'We can help your business:'}
                    answer={Blog01Answer05}
                    className="Blog01Answer05"/>
            </Section__Contents>
        </Section>
        <Section>
          <Section__Header>
            <Section__TitleDiv>
              <Section__Title>Are Mountains of Paperwork Dragging Your Business Down?</Section__Title>
              <HeaderLine />
            </Section__TitleDiv>
            <Section__FirstBlog>
              <QuestionDiv>
                  <Question onClick={this.toggle} >Do any of these words and phrases ring true for your business?'</Question>
                  <ArrowDiv className="arrowFlip" ><Arrow src={ToggleButton}/></ArrowDiv>
              </QuestionDiv>
            </Section__FirstBlog>
          </Section__Header>
            <Section__Contents>
             <AnswerDiv className="toggle">{Blog02Answer01}</AnswerDiv>
                  <BlogToggle 
                    question={'Well then, perhaps these words and phrases sound more appealing to you?'}
                    answer={Blog02Answer02}/>
                  <BlogToggle 
                    question={'So, what are mobile forms anyway?'}
                    answer={Blog02Answer03}/>
                  <BlogToggle 
                    question={'What’s the web app or web portal?'}
                    answer={Blog02Answer04}/>
                  <BlogToggle 
                    question={'“Barriers”, you say?'}
                    answer={Blog02Answer05}/>
                  <BlogToggle 
                    question={'Here’s a “portion” of how we can help your business:'}
                    answer={Blog02Answer06}/>
            </Section__Contents>
        </Section>
      </Container>
    </ThemeProvider>
    )
  },
    toggle: function(){
      let answerToggle = document.querySelector('.toggle');
      let arrowFlip = document.querySelector('.arrowFlip');
        if (answerToggle.style.display === 'none' && arrowFlip.style.transform === 'rotateX(0deg)') {
          answerToggle.style.display = 'block';
          arrowFlip.style.transform = 'rotateX(180deg)';
        } else {
          answerToggle.style.display = 'none';
          arrowFlip.style.transform = 'rotateX(0deg)';
        }
     }
}

)

const Container = styled.div`
    position:relative;
`
const Section = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  ${breakpoint('md')`
  `}
`
const Section__Header = styled.div`
  display:flex;
  justify-content:center;
  flex-direaction:coulmn;
  background:linear-gradient(rgba(8,39,90), rgba(8,39,90,0.4)), url(${SectionBg});
  background-size:cover;
  padding-top:100px;
  padding-bottom:80px;
  position:relative;
  ${breakpoint('md')`
    padding-top:180px;
    width:100%;
    background-position:center-top;
  `}
`
const Section__TitleDiv = styled.div`
  padding-right:8%;
  padding-left:8%;
  ${breakpoint('md')`
    margin-bottom:40px;
  `}
`
const Section__Title = styled.div`
  ${BigTitle};
  font-size:30px;
  ${breakpoint('md')`
    ${BigTitle};
    font-size:35px;
  `}
`
const Section__FirstBlog = styled.div`
  width:100%;
  padding:0;
  margin-bottom:-4px;
  position:absolute;
  bottom:0;
    ${breakpoint('md')`
    padding:0 20%;
    width:60%;
  `}
`
const Section__Contents = styled.div`
  box-sizing:border-box;
  width:100%;
  margin:4px auto 0 auto;
    ${breakpoint('md')`
    padding:0 20% 100px 20%;
    `}
`

const QuestionDiv = styled.div`
  height:80px;
  background-color:#EEEEEE;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 8%;
  margin-bottom:3px;
    ${breakpoint('lg')`
    padding:0 5%;
    `}
`
const Question = styled.div`
  width:250px;
  ${QuestionStyle};
    ${breakpoint('lg')`
        width:100%;
        ${QuestionStyle};
        text-align:left;
        font-weight:${Themes.fontWeight.bold};
    `}
`
const ArrowDiv = styled.div`
    width:20px;
    height:auto;
    transform:rotateX(0deg);
`
const Arrow = styled.img`
    width:20px;
    height:auto;
`
const AnswerDiv = styled.div`
  background-color:${Themes.colors.veryLightGrey};
  padding:30px 90px 30px 40px; 
  color:${Themes.colors.black};
  margin-bottom:3px;
  line-height:25px;
  display:none;
`

const Section02 = styled.div`
`

export default BlogScreen;