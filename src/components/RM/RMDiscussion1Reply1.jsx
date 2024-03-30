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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c3{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c3 doc-content"><p class="c2"><span class="c0">Thank you, Stella, for your thoughts on the case of Corazo&#769;n&#39;s Medical Implant Risk Analysis.</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">I enjoyed reading your thoughts about the positive and the opposing sides of &nbsp;Corazo&#769;n&#39;s Medical Implant case. On the one hand, Corazo&#769;n providing heart monitoring devices to underprivileged patients follows the ACM&rsquo;s &nbsp;Principle 1.1 and, at the same time, undermining cyber safety over profit violates &nbsp;ACM&rsquo;s &nbsp;Principle 1.3 of not being honest and trustworthy (ACM, 2018).</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">There are growing concerns about ethical and data privacy matters nowadays, even more so with new technologies like AI and private companies prioritising their interest in the public. Businesses must pay attention to moral issues and make them a top priority (Nabbosa et al., 2020). Strict laws concerning user data privacy and ethical concerns could also steer different organisations into putting more effort into this area. For example, the European Commission issued the Digital Service Act (DSA), which is heading to be the gatekeeper for maintaining ethical actions and obligations (Turillazzi et al. 2023).</span></p><p class="c1"><span class="c0"></span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">References</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">ACM (2018) The Code affirms an obligation of computing professionals to use their skills for the benefit of society. Available from: https://www.acm.org/code-of-ethics (Accessed: 27 March 2024).</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Nabbosa, V. and Kaar, C., 2020, May. Societal and ethical issues of digitalization. In Proceedings of the 2020 international conference on Big Data in Management (pp. 118-124).</span></p><p class="c1"><span class="c0"></span></p><p class="c2"><span class="c0">Turillazzi, A., Taddeo, M., Floridi, L. and Casolari, F., 2023. The digital services act: an analysis of its ethical, legal, and social implications. Law, Innovation and Technology, 15(1), pp.83-106.</span></p><p class="c2"><span class="c0">&nbsp;</span></p></body></html> 
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
