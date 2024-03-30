import React, {useState, useEffect, useContext} from 'react';
import ReactMarkdown from 'react-markdown';
import {
    Container, Col, Row, ListGroup, Button,
} from 'react-bootstrap';
import Fade from 'react-awesome-reveal';
import {ThemeContext} from 'styled-components';
import rehypeRaw from 'rehype-raw';
import Header from '../Header';
import endpoints from '../../constants/endpoints';
import '../../css/about.css';

const source = {
    html: `
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c6{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left;height:16pt}.c1{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c7{padding-top:20pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c2{margin-left:72pt;padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c9{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:20pt;font-family:"Arial";font-style:normal}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c5{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c8{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c4{color:#ffffff}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c8 doc-content"><h1 class="c7" id="h.7gtnkjxc5g3"><span class="c4 c9">CASE: Malware Disruption</span></h1><p class="c3"><span class="c1">The following case study dives into a recent event for Rouge Services, which provided web hosting services that became myriad legal and ethical issues, particularly breaching many principles upheld by the British Computer Society (BCS, n.d). The company became a hub for hosting spam and malware web-based content, as the company allowed fraudulent hosting, which infected countless machines with ransomware ACM ethics (n.d.). </span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">Rouge Services&#39; decision to facilitate fraudulent activities raises many severe ethical concerns (See Figure 1) about IT organisations&#39; responsibility to safeguard digital assets. The BCS Code of Conduct emphasises the importance of professional competence and integrity, requiring to &quot;avoid harm to others&quot; and &quot;take consideration of the public interest&quot; (BCS, n.d), which tries to preserve ethical harmony in cyberspace by providing various guidelines. In contrast, the focus on guidelines is also one of the issues of BCS, as they are not regulatory bodies and lack direct enforcement. Instead, they rely on the member&#39;s behaviours and can only be punished if existing laws are violated. &nbsp;</span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c4">&nbsp;</span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 441.00px; height: 386.66px;"><img alt="" src="/e-portfolio/images/RM/U1_Blog_Intro_image1.png" style="width: 537.50px; height: 386.66px; margin-left: -35.50px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c2"><span class="c1">Figure 1: Ethical Issues in Cybersecurity in Business (Morgan, G., 2021)</span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">For example, the General Data Protection Regulation in Europe sets a high standard for data protection. If the websites that Rouge Services have malicious content operate within the EU borders, legal actions can be enforced for compliance (GDPR, 2022). &nbsp;</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">Similarly, legislation such as the Computer Misuse Act in the UK criminalises unauthorised access to computer systems and data (UK Parliament, 1990). These legal frameworks provide a baseline for assessing the legality of actions taken in the wake of cyberattacks like the Rogue Services ACM malware incident.</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">Ethically, the principles laid out by ACM and BCS play a crucial role in maintaining professional competence and integrity and prioritising public interest over commercial ones. Both codes share the goal of actively contributing to establishing cybersecurity standards and promoting best practices within the industry. They also play social and ethical roles, helping organisations improve security posture. </span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">According to Wheeler S, 2003, both guidelines are similar in setting standards for social and ethical guidelines as an IT professional or an organisation. Still, at the same time, they also contain some subtle differences. For instance, the ACM has a section on whistle-blowing and the environment, whereas BCS does not include this section (Wheeler S, 2003).</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">Overall, both codes make cyberspace a better place with their guidelines. Still, at the same time, these guidelines are mere recommendations built on personal reflection and judgment rather than policies that can be enforced, still creating a legal loophole which is being exploited.</span></p><p class="c0"><span class="c1"></span></p><hr style="page-break-before:always;display:none;"><h2 class="c6" id="h.vx2wn92nrbxl"><span class="c5 c4"></span></h2><h2 class="c10" id="h.laju2kjuugs"><span class="c4 c5">References</span></h2><p class="c3"><span class="c4">ACM ethics (n.d.). Malware Disruption. Available from: </span><span class="c4">https://ethics.acm.org/code-of-ethics/using-the-code/case-malware-disruption/</span><span class="c1">&nbsp;(Accessed 18th March 2024). </span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c4">BCS (n.d). BCS Code of Conduct. Available from: </span><span class="c4">https://www.bcs.org/media/2211/bcs-code-of-conduct.pdf</span><span class="c1">&nbsp;(Accessed 19th March 2024).</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">GDPR (2022) General Data Protection Regulation. Available from: https://gdpr-info.eu/ (Accessed: 19 March 2024). </span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">Morgan, G., 2021. Ethical Issues in cybersecurity: employing red teams, responding to ransomware attacks and attempting botnet takedowns (Doctoral dissertation, Dublin City University).</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c1">Wheeler, S., 2003. Comparing three IS codes of ethics-ACM, ACS and BCS. PACIS 2003 Proceedings, p.107.</span></p><p class="c0"><span class="c1"></span></p><p class="c3"><span class="c4">UK Parliament. (1990) Computer misuse act 1990, Legislation.gov.uk. Available at: https://www.legislation.gov.uk/ukpga/1990/18/contents (Accessed: 19th March 2024). </span></p></body></html> 
`
};
const styles = {
    introTextContainer: {
        margin: 10,
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '1.2em',
        fontWeight: 500,
        marginBottom: 20,
    },
    introImageContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    header: {
        margin: '100px 0 50px 0',
    },
    unitText: {
        padding: '50px 0 0 0',
    },
};

function SRMD1() {
    const [data, setData] = useState(null);
    const theme = useContext(ThemeContext);

    const parseIntro = (text) => (
        <ReactMarkdown
            children={text}
            rehypePlugins={[rehypeRaw]}
        />
    );

    useEffect(() => {
        fetch(endpoints.srmMain, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    const outcomeLength = data ? data.outcome.length : 3;
    return (
        <>
            <Header title="SRM Discussion 1 Initial Post" />
            <div>
                <Container className="about-screen-body-container">
                    <Fade>
                        <Row>
                            <Col>
                                <div  className="inner-html" dangerouslySetInnerHTML={{ __html: source.html }} />
                            </Col>
                        </Row>
                    </Fade>
                </Container>
            </div>
        </>
    );
}

export default SRMD1;
