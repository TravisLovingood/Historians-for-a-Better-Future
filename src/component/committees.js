import React from "react";
import "../App.css"
// Bootstrap stuff
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

function committees() {
    return (
      
      <Row>    
        <Col></Col>
        <Col md={10}>
          <CardColumns>

{/* Social Media Committee */}
            <Card className="p-3">             
              <Card.Body>
                <Card.Title><h3><strong>Social Media Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/3Fists-Black.PNG" alt="Advocacy Committee Pic" rounded fluid /> 
                <Card.Text><p>At the core of the Social Media Committee, we keep the online presence of Historians for a Better Future as active as possible. This includes consistently crafting original posts, sharing content created by like-minded allies, monitoring the work of our community partners, and engaging our followers. We do so on our existing platforms of Facebook, Twitter, and Instagram, and we strive to steadily grow our online presence by engineering ways to garner new followers and expand to other platforms like YouTube, TikTok, and Snapchat. We also engage non-social media users through our monthly e-newsletter.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a></Card.Footer>
            </Card>

{/* Advocacy Committee */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title><h3><strong>Advocacy Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/Advocacy Committee.jpg" alt="Advocacy Committee Pic" rounded fluid /> 
                <Card.Text>
                  <p>The Advocacy Committee will take issues pinpointed by the Watchdog Committee and issues brought to HBF’s attention through members and create advocacy plans to address the local, regional, national, or international topic.  We will identify resources to connect with elected representatives, agencies, and advocacy groups that are dedicated to working on that issue.  We will also identify vetted organizations where donations on the topic of interest can be made.  The Advocacy committee will work with the Social Media Committee to share this information and with the Outreach Committee to determine if there is something unique HBF can offer to help contextualize, inform, or bring about change on the issue being addressed. </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a></Card.Footer>
            </Card>

{/* Website Committee */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title><h3><strong>Website Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/Website.png" alt="Website Committee Screenshot" rounded fluid /> 
                <Card.Text><p>The Website Committee is responsible for building and maintaining HBF’s website and repository. We will construct the website from the ground up and create a user-friendly site that is informative, accessible, and ADA compliant. Our website will display our mission statement, update visitors on the latest HBF news, connect them to our social media platforms, detail our current and past projects, and provide an HBF archive.  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a></Card.Footer>
            </Card>

{/* Book Club / Events Committee */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title><h3><strong>Book Club / Events Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/Book Club.jpg" alt="Book Club / Events Committee Pic" rounded fluid /> 
                <Card.Text>
                  <p>The Bookclub/Events Committee will schedule occasional digital events, approximately every one to two months, that will invite members and the general public to read a chosen text, article, or publication and participate in a discussion with the author or a topic-based expert concerning one of the subjects of interest to the group.  For example: reading How To Be An Antiracist by Ibram X. Kendi to encourage discussion of systemic racism in the U.S.  These discussions will be recorded and available on our social media and, eventually, our website as a repository of knowledge on the topic to serve as reference tools for outreach and education. </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a></Card.Footer>
            </Card>

{/* Outreach Committee */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title><h3><strong>Outreach Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/Outreach.jpg" alt="Watchdog Committee Screenshot" rounded fluid /> 
                <Card.Text><p>The Outreach & Partnership Committee is responsible for strengthening and maintaining HBF’s dialogue and alliance with (local, state, national, and international) organizations whose missions and values complement and align with our mission. We will pool our intellectual and physical resources, and work alongside our partners to actively champion and generate change through our collective skills and efforts. Our main focus is to provide professional advice and hands-on support to our partners through research and analysis, collaboration, and assisting in the design and delivery of community projects and outreach. </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a></Card.Footer>
            </Card>

{/* Watchdog Committee */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title><h3><strong>Watchdog Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/3Fists-Pink.PNG" alt="Watchdog Committee Screenshot" rounded fluid /> 
                <Card.Text><p>JoCora has yet to write a synopsis (will follow up w/ her)  
                </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a></Card.Footer>
            </Card>

{/* Past Projects Committee */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title><h3><strong>Past Projects Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/Past Projects.jpg" alt="Past Projects Committee Screenshot" rounded fluid /> 
                <Card.Text><p>The Past Projects Committee maintains the momentum of projects like Free History Lessons and the Gerrymandering exhibit. We seek out opportunities to keep the deliverables of these bygone projects productive. This includes but is not limited to: connecting with community partners who may find our deliverables useful, sharing the lessons we learned from past projects with organizations seeking to adapt our models, and transposing our deliverables for a wider audience via online platforms. The Past Projects Committee also collaborates with Historians for a Better Future members working on upcoming projects to anticipate how to maintain the usefulness of any deliverables once HBF shifts its focus to a different topic.</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a>            </Card.Footer>
            </Card>

{/* International Focus Committee */}
            <Card className="p-3">
              <Card.Body>
                <Card.Title><h3><strong>International Focus Committee</strong></h3></Card.Title>
                <Card.Img variant="top" src="pics/International (1).jpg" alt="International Focus Committee Screenshot" rounded fluid /> 
                <Card.Text><p>The International Focus Committee is responsible for looking into international events and movements related to the organization’s mission. The goal is to have an organization that avoids isolation, in the context of the United States and internationally, to better educate ourselves and the general public. </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer><a href="https://github.com/TravisLovingood"><h4>link</h4></a></Card.Footer>
            </Card>

          </CardColumns>
        </Col>
        <Col></Col>
      </Row>  
    )
};
 
export default committees;