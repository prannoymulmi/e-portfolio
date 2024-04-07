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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c1{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c7{padding-top:16pt;padding-bottom:4pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c2{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c5{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c4{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;color:#1155cc;text-decoration:underline}.c8{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c6{color:inherit;text-decoration:inherit}.c9{color:#ffffff}.c3{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c8 doc-content"><h2 class="c2" id="h.9op8m23ugyb3"><span class="c9 c10">Summary Post </span></h2><p class="c0"><span class="c9">(Link: </span><span class="c4"><a class="c6" href="https://www.google.com/url?q=https://www.my-course.co.uk/mod/forum/discuss.php?d%3D221611%23p393048&amp;sa=D&amp;source=editors&amp;ust=1712498608649379&amp;usg=AOvVaw3R6_ReMMaablnkVhjdaAhc">https://www.my-course.co.uk/mod/forum/discuss.php?d=221611#p393048</a></span><span class="c1">)</span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">In the era of digital technology, it is almost impossible to avoid cyberspace in daily life. This phenomenon is both a blessing and a curse, as the advancement in technologies and services provides us with a more leisurely lifestyle. In contrast, we pay the price of personal data exposure (Phishing, scams) and manipulation/influence in the wrong direction by such technologies (Sinaga, H., 2023). &nbsp;</span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">Similarly, the case involving Rouge Services, a web hosting provider embroiled in legal and ethical controversies, underscores the complex interplay between commercial operations to provide better services to the general public and ethical deceit, allowing malicious operators to host websites for personal benefit. This provider found itself facilitating unethical and illegal activities, breaking the integrity and principles of the BCS Code of Conduct (BCS, n.d) and ACM&rsquo;s Code. </span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">Such actions prove that BCS and ACM are mere guidelines and principles that should be followed by the developers and organisations rather than any stipulated law (Gotterbarn et al. 2017). Such procedures are necessary to make people aware of the essential ethical principles of bringing a service to the general public. Still, more than these guides are needed to preserve ethics. This is where different digital Acts and laws, like the GDPR (GDPR, 2022) and the UK Digital Act (UK Parliament, 1990), provide a legal framework to protect user data and criminalise misuse of digital systems.</span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">In Conclusion, the divergence between the ideals set by ethical guidelines and enforcement realities underscores a broader issue within the IT and cybersecurity sectors. As digital technologies evolve, so must the frameworks that govern their use, ensuring that ethical considerations are not sidelined in favour of commercial interests. The Rouge Services case is a cautionary tale, emphasising the necessity for robust ethical standards backed by enforceable legal frameworks to protect the public interest in the increasingly digitised global landscape.</span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0 c3"><span class="c1"></span></p><h3 class="c7" id="h.6861s8coonwp"><span class="c5">References</span></h3><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">BCS (n.d). BCS Code of Conduct. Available from: https://www.bcs.org/media/2211/bcs-code-of-conduct.pdf (Accessed 6th April 2024).</span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">Gotterbarn, D., Bruckman, A., Flick, C., Miller, K. and Wolf, M.J., 2017. ACM code of ethics: a guide for positive action. Communications of the ACM, 61(1), pp.121-128.</span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">GDPR (2022) General Data Protection Regulation. Available from: https://gdpr-info.eu/ (Accessed: 6th April 2024). </span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">Sinaga, H., 2023. Legal and Ethical Implications in Data Theft Cases in the Digital Era. East Asian Journal of Multidisciplinary Research, 2(11), pp.4585-4604.</span></p><p class="c0 c3"><span class="c1"></span></p><p class="c0"><span class="c1">UK Parliament. (1990) Computer misuse act 1990, Legislation.gov.uk. Available at: https://www.legislation.gov.uk/ukpga/1990/18/contents (Accessed: 6th April 2024). </span></p></body></html>  
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
            <Header title="SRM Discussion 1 Summary Post : Case: Malware Disruption" />
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
