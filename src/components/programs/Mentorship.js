import React from 'react'
import { Tab } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Programs.css"

class Mentorship extends React.Component {
    render() {
        return (
            <div>
                {/* Updating the mentorship page 
                Steps:
                1. Place the most recent mentorship flyer on a new page in the Programs.js file
                   (Follow the block of comment with steps in the Programs.js file)
                2. Then update Mentorship.js with the new mentorship information
                3. Remember to update the dates in the disclaimer in the Programs.js file
                */}
                <Tab.Container defaultActiveKey="menteeRole">
                    <p>
                        <h2><span className="highlight-text"><b>Program Description</b></span></h2>
                        <p>
                            In this world, it could be a bit difficult to find some footing for a stable, independent life. Thankfully, if you are one
                            of these people, you are not alone. If you become a mentee in this program, a mentor can show you the ropes to
                            not only help you on your way to landing that six-figure job, but also help you navigate the pothole-filled road called life.
                        </p>
                        <p className="program-description">
                            In this program, mentees will:
                        </p>
                        <p>
                            ❖<span className="highlight-text point"><b>Time Management</b></span><br />
                            ❖<span className="highlight-text point"><b>Building your Resume, Cover Letter, Thank You Letter</b></span><br />
                            ❖<span className="highlight-text point"><b>Behavioral and Technical Interviews</b></span><br />
                            ❖<span className="highlight-text point"><b>Creating professional social media accounts (Handshake, LinkedIn)</b></span><br />
                            ❖<span className="highlight-text point"><b>Technical Practices in the CS field (Agile, Waterfall)</b></span><br />
                            ❖<span className="highlight-text point"><b>Conferences</b></span><br />
                            ❖<span className="highlight-text point"><b>Finances</b></span><br />
                        </p>
                        <p className="program-description">
                            The deadline to apply is Sunday, February 7, 2021. Join our mentorship program today before it's too late!
                        </p>
                    </p>
                    <img src={this.props.flyer} className="img-fluid programs-poster" alt="mentorship flyer"></img>
                    <Tab.Content className="programs-tab-content">
                        {/* Mentor sign up */}
                        {/*<Tab.Pane eventKey="mentorRole"><br></br>
                            <img src={require('./pictures/leader.png')} className="img-fluid mentorship-images"></img>
                            <p>
                                When you become a mentor, you become a leader. <span className="highlight-text"><i>Becoming a leader is about your level of influence and not 
                                about your level of authority.</i></span> As you begin working with mentee(s), you will develop valuable leadership 
                                traits. You will begin to question and refine your thinking process, as well as your methods 
                                of approaching various situations. As a mentor, you will be shaping the leaders of tomorrow. You will be
                                instilling leadership principles to your mentee(s), such as effective communication, time 
                                management, networking, and responsibility. Also, you will help mentees improve 
                                their professional and academic skills. When you begin to mentor others in their professional and academic lives, you 
                                will gain a better understanding of the things that you will be teaching. <br></br><br></br>
                                
                                In this program, mentors will: <br></br><br></br>
                                <b className="highlight-text">
                                    ❖ Shape the leaders of tomorrow<br></br>
                                    ❖ Gain new perspectives and ideas<br></br>
                                    ❖ Transform someone else's world<br></br>
                                    ❖ Be learning by teaching<br></br>
                                    ❖ Gain a sense of accomplishment by knowing they positively influenced others<br></br><br></br>
                                </b>
                            </p>
                        </Tab.Pane>*/}
                        <Tab.Pane eventKey="menteeRole">
                            {/*<img src={require('./pictures/mentee.png')} className="img-fluid mentorship-images" style={{'float': 'left'}}></img>*/}

                        </Tab.Pane>
                    </Tab.Content>

                    {/* <Button variant="success" size="lg" href="https://forms.gle/CSdU5xJUDAPV1oEt6">Join Now!</Button><br /> */}
                </Tab.Container>
            </div>
        )
    }
}

export default Mentorship;