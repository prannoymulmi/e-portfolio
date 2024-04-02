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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c4{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c1{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c5{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c5 doc-content"><p class="c2"><span class="c1">Thank you, Bradley, for your post and for sharing your thoughts on the criticism of the ACM and BCS code concerning the Case study with the fictional scenario of the defence contractor.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Organisations and companies providing services to the general public must constantly consider ethical considerations, so it should be with the fictional defence contractor developing an autonomous vehicle. However, McNamara et al. 2018 conclude that the ACM code of ethics has significantly less or no influence on ethical decision-making. This pattern of breaking the ACM code is also seen in this case, where you have identified a few breaches of code that the contractor has made.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">I also agree that the ACM and BCS codes are just general guidelines and must not be legally followed by any entity. Therefore, to enforce these guidelines, proper governing laws, such as the Computer Misuse Act (UK Parliament, 1990), should be made and amended regularly to force such service providers to make ethical decisions based on either the ACM or BCS code of conduct.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Also, spreading awareness about the Code of Ethics and professionalism should be prioritised, promoting a culture of good ethical practices. A study by Karim et al. (2017) also confirms that good ethical practices contribute significantly to creating high-quality software products and preserving the Code of Ethics.</span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p><h2 class="c3" id="h.5fm3jucpdjs0"><span class="c4">Reference </span></h2><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Karim, N.S.A., Al Ammar, F. and Aziz, R., 2017, September. Ethical software: Integrating code of ethics into software development life cycle. In 2017 International Conference on Computer and Applications (ICCA) (pp. 290-298). IEEE.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">McNamara, A., Smith, J. and Murphy-Hill, E., 2018, October. Does ACM&rsquo;s code of ethics change ethical decision making in software development?. In Proceedings of the 2018 26th ACM joint meeting on european software engineering conference and symposium on the foundations of software engineering (pp. 729-733).</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">UK Parliament. (1990) Computer misuse act 1990, Legislation.gov.uk. Available at: https://www.legislation.gov.uk/ukpga/1990/18/contents (Accessed: 19th March 2024). </span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p></body></html> 
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
