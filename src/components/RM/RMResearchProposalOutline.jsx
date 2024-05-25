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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c4{-webkit-text-decoration-skip:none;color:#ffffff;font-weight:400;text-decoration:underline;vertical-align:baseline;text-decoration-skip-ink:none;font-size:11pt;font-family:"Arial";font-style:normal}.c5{padding-top:16pt;padding-bottom:4pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c2{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c9{text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c6{font-weight:400;text-decoration:none;vertical-align:baseline;font-family:"Arial";font-style:normal}.c8{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c3{color:#ffffff;font-size:14pt}.c7{color:#ffffff;font-weight:700}.c1{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c8 doc-content"><p class="c0"><span class="c7 c9">Literature Review Outline</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c7">Topic:</span><span class="c2">&nbsp; Cloud Security Risks in the Health Sector</span></p><p class="c0 c1"><span class="c4"></span></p><p class="c0"><span class="c3">Introduction</span></p><p class="c0"><span class="c2">A. Importance of cloud computing in the health sector.</span></p><p class="c0"><span class="c2">B. Objective of the literature review.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c3">Background</span></p><p class="c0"><span class="c2">A. Overview of cloud computing.</span></p><p class="c0"><span class="c2">B. Adoption of cloud services in the health sector.</span></p><p class="c0"><span class="c2">C. Benefits of cloud computing in healthcare.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c3">Cloud Security Risks</span></p><p class="c0"><span class="c2">A. General cloud security challenges.</span></p><p class="c0"><span class="c2">B. Specific risks associated with the health sector.</span></p><p class="c0"><span class="c2">C. Impact of data breaches on patient confidentiality.</span></p><p class="c0"><span class="c2">D. Case studies of cloud security incidents in healthcare.</span></p><p class="c0 c1"><span class="c3 c6"></span></p><p class="c0"><span class="c3">Compliance and Regulatory Issues</span></p><p class="c0"><span class="c2">A. Health Insurance Portability and Accountability Act (HIPAA).(</span></p><p class="c0"><span class="c2">B. General Data Protection Regulation (GDPR) implications.</span></p><h3 class="c5" id="h.w1v4pfevh635"><span class="c6 c3">Discussion</span></h3><p class="c0"><span class="c2">A. Main findings.</span></p><p class="c0"><span class="c2">B. Evaluation of current practices.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c3">Conclusion</span></p><p class="c0"><span class="c2">A. Summary of key points.</span></p><p class="c0"><span class="c2">B. Final thoughts on cloud security in the health sector.</span></p><p class="c0 c1"><span class="c2"></span></p><p class="c0"><span class="c3">References</span></p><p class="c0 c1"><span class="c4"></span></p><p class="c0 c1"><span class="c4"></span></p></body></html> 
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
            <Header title="Literature Review Outline" />
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
