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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c1{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c0{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c8{padding-top:16pt;padding-bottom:4pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c6{font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c7{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;color:#1155cc;text-decoration:underline}.c4{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c3{color:inherit;text-decoration:inherit}.c5{color:#ffffff}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c4 doc-content"><p class="c2"><span class="c1">Thank you, Clarissa, for your thoughts on this case study on abusive workplace behaviour.</span></p><p class="c2"><span class="c1">This case study delves into the complexities of ethical, legal, and professional considerations within an IT workplace, emphasising the crucial roles of respect, recognition, and moral leadership. The troubling interactions among Max, Diane, and Jean highlight the detrimental effects of emotional abuse and gender discrimination, not just on individual well-being but on overall organisational culture (Balducci et al. 2021). </span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">The scenario underscores the importance of following professional standards set by bodies like the ACM and BCS (ACM, 2018), particularly in recognising contributions and fostering respect among colleagues. It also highlights the necessity for proactive managerial intervention to combat toxic workplace dynamics and promote a culture of inclusivity and integrity. </span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">This discussion reaffirms the vital need for leaders and organisations to commit to ethical conduct and maintaining a supportive work environment, ensuring that professionalism and ethical considerations are at the forefront of workplace interactions and policies (Medina et al., 2020).</span></p><p class="c0"><span class="c1"></span></p><p class="c0"><span class="c1"></span></p><h3 class="c8" id="h.1pdwomttxa3e"><span class="c5 c6">References</span></h3><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c5">ACM (2018). ACM Ethics. [online] ACM Ethics. Available at: </span><span class="c7"><a class="c3" href="https://www.google.com/url?q=https://ethics.acm.org/&amp;sa=D&amp;source=editors&amp;ust=1712107884709551&amp;usg=AOvVaw1MKhhcQ4k50dAij9bF_010">https://ethics.acm.org/</a></span><span class="c1">.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Balducci, C., Conway, P.M. and van Heugten, K., 2021. The contribution of organizational factors to workplace bullying, emotional abuse and harassment. Pathways of job-related negative behaviour, pp.3-28.</span></p><p class="c0"><span class="c1"></span></p><p class="c2"><span class="c1">Medina, A., Lopez, E. and Medina, R., 2020. The unethical managerial behaviours and abusive use of power in downwards vertical workplace bullying: a phenomenological case study. Social Sciences, 9(6), p.110.</span></p></body></html> 
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
            <Header title="SRM Discussion 1 Reply 3" />
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
