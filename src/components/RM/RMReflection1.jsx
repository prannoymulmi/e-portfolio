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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c15{padding-top:20pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c9{padding-top:16pt;padding-bottom:4pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c14{padding-top:14pt;padding-bottom:4pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c4{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:20pt;font-family:"Arial";font-style:normal}.c6{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-family:"Arial";font-style:normal}.c5{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c10{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:center}.c8{text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c16{text-decoration:none;vertical-align:baseline;font-family:"Arial";font-style:normal}.c11{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c1{color:#ffffff;font-weight:700}.c7{color:#ffffff}.c13{font-size:14pt}.c12{margin-left:108pt}.c2{font-size:12pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c11 doc-content"><h1 class="c15" id="h.l28udnt8e8ce"><span class="c4">Unit 1 Reflective Piece (Gibbs Reflective Cycle)</span></h1><h3 class="c9" id="h.9udbfzyr8ywe"><span class="c1 c2">Description</span><span class="c8 c1">&nbsp;</span></h3><p class="c5"><span class="c0">Artificial Intelligence technologies like ChatGPT, Gemini and DALL-E have taken the world with their rapid advancement, and such Generative AI could add a positive value to the economy by 15-40% (Chui et al., 2023). On the other hand, such widespread adoption of these technologies has also triggered a global discussion about their implication for ethical, legal and social concerns, as these technologies present dive into a realm that has yet to be delved into. </span></p><h3 class="c9" id="h.dpq34stpamx0"><span class="c1 c2">Evaluation</span><span class="c8 c1">&nbsp;</span></h3><p class="c5"><span class="c0">A paper by Correa et al. (2023) advances a study into AI governance. This topic is relatively new, and it shows how different countries interpret its usage and harm in designing the appropriate legal framework to regulate AI. The global landscape of AI governance is as diverse as the technology itself, and different countries are taking different approaches to how they see AI.</span></p><p class="c3"><span class="c0"></span></p><h4 class="c14" id="h.pcqunt5q0t0a"><span class="c6 c2">i. European Union</span></h4><p class="c5"><span class="c0">The European Union (EU) is proactively regulating AI, including generative AI technologies currently being drafted. This Act aims to ensure AI systems safety by setting precise requirements for high-risk systems, providing transparency to avoid misinformation, and addressing risks created by AI applications based on a different level of risks (EU AI Act, 2024).</span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 312.25px;"><img alt="" src="/e-portfolio/images/RM/U1_Reflective1_image2.png" style="width: 624.00px; height: 312.25px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><p class="c10"><span class="c0">&nbsp;Figure 1: 4 Levels of risk EU AI Act (EU AI Act, 2024).</span></p><p class="c3"><span class="c0"></span></p><h3 class="c9" id="h.a7samzamn04e"><span class="c7 c2">ii. United States</span></h3><p class="c5"><span class="c0">The approach to generative AI has mainly been innovation-friendly in the United States, with federal and state regulators taking a cautious stance not to stifle technological advancements. The focus has been on fostering innovation while ensuring ethical use. Initiatives like the National AI Initiative aim to support AI development and adoption across various sectors (Greggwirth, 2024).</span></p><p class="c3"><span class="c0"></span></p><h4 class="c14" id="h.5bdufkhqbdgr"><span class="c2 c6">iii. Other Regions</span></h4><p class="c5"><span class="c0">Countries like the United Kingdom, Canada, and Australia have also actively discussed and implemented AI strategies. These typically include funding for AI research, ethical guidelines for AI development and use, and initiatives to integrate AI into public services (Woollacott, E., 2023). Meanwhile, developing countries face unique challenges, including limited access to AI technologies and the risk of widening the digital divide.</span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><h3 class="c9" id="h.d82lxz6515d3"><span class="c1 c2">Analysis</span></h3><p class="c5"><span class="c7">AI is currently not regulated and is in the initial phases, especially in developing countries. Even though Correa et al. (2023) claim developing countries in the African Union possess data protection and privacy legislation, it still needs to be better than Western countries; some do not even have these (Orji, U.J., 2017). This creates significant discrepancies in how AI will be used in different parts of the world and allows bad actors to exploit the vulnerabilities left behind due to this Gap. Due to the rapid usage of AI, this has to be the top priority to avoid any kind of big mishaps. To do this, the politically stable and wealthier countries like the EU, United States, UK, Canada, etc., should play a leading role in uniting the countries to cooperate in creating a Global legal framework for AI usage, to protect privacy, ethical usage, and also encourage growth and development. This task will be of considerable effort, but it is required to create a safe space for the use of AI. &nbsp;</span></p><p class="c3"><span class="c0"></span></p><h3 class="c9" id="h.h2f59bn2nv7c"><span class="c1 c2 c16">Conclusion</span></h3><p class="c5"><span class="c7">The AI revolution presents a pivotal moment in technological and societal evolution. As countries worldwide grapple with how best to harness the potential of AI while addressing its challenges, a collaborative, flexible, and ethical approach is essential. By working together, sharing knowledge, and engaging with diverse stakeholders, we can navigate the complexities of the generative AI revolution and steer it toward outcomes that benefit all of humanity.</span></p><h3 class="c9" id="h.95cbp14lj9gk"><span class="c1 c2">Action Plan</span></h3><p class="c5"><span class="c0">Given AI&#39;s enormous global impact, it is essential to have a multifaceted and cooperative approach between countries despite their political differences. Without proper cooperation and legal frameworks, AI technology can spiral out of control and disrupt social harmony using unethical practices. The following recommendations could help countries navigate the challenges and opportunities presented by AI technologies:</span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c1">Developing International Standards and Frameworks:</span><span class="c0">&nbsp;Countries should collaborate on establishing global standards and ethical frameworks for AI development and use. This could help ensure that AI technologies are developed and used in ways that are safe, ethical, and beneficial to humanity.</span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c1">Fostering Innovation While Ensuring Ethical Use: </span><span class="c0">Policies should encourage innovation in AI while implementing safeguards to address ethical, privacy, and security concerns. This includes investing in education and research to stay at the forefront of AI technology.</span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c1">Inclusive and Equitable Access:</span><span class="c0">&nbsp;Ensuring that the benefits of AI are shared widely requires policies that promote equitable access to AI technologies. This includes supporting developing countries in gaining access to AI technologies and expertise.</span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c0">&nbsp;</span></p><hr style="page-break-before:always;display:none;"><p class="c5"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 538.00px; height: 328.50px;"><img alt="" src="/e-portfolio/images/RM/U1_Reflective1_image1.png" style="width: 538.00px; height: 328.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p><p class="c5 c12"><span class="c0">Figure 2: African Union with Data Protection Acts (Orji, U.J., 2017)</span></p><p class="c3"><span class="c0"></span></p><h3 class="c9" id="h.sukpavt5j72u"><span class="c6 c13">References</span></h3><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c0">EU AI Act (2024) Shaping Europe&rsquo;s digital future. Available from: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai (Accessed: 21 March 2024). </span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c0">Chui, M., Hazan, E., Roberts, R., Singla, A. and Smaje, K., 2023. The economic potential of generative AI.</span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c0">Corr&ecirc;a, N.K., Galv&atilde;o, C., Santos, J.W., Del Pino, C., Pinto, E.P., Barbosa, C., Massmann, D., Mambrini, R., Galv&atilde;o, L., Terem, E. and de Oliveira, N., 2023. Worldwide AI ethics: A review of 200 guidelines and recommendations for AI governance. Patterns, 4(10).</span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c0">Orji, U.J., 2017. Regionalizing data protection law: a discourse on the status and implementation of the ECOWAS Data Protection Act. International Data Privacy Law, 7(3), pp.179-189.</span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c0">Greggwirth (2024) Legalweek 2024: Current US AI regulation means adopting a strategic - and communicative - approach, Thomson Reuters Institute. Available from: https://www.thomsonreuters.com/en-us/posts/legal/legalweek-2024-ai-regulation/ (Accessed: 21 March 2024). </span></p><p class="c3"><span class="c0"></span></p><p class="c5"><span class="c0">Woollacott, E. (2023) U.S, U.K. and 16 other nations agree on AI Security guidelines, Forbes. Available at: https://www.forbes.com/sites/emmawoollacott/2023/11/27/us-uk-and-16-other-nations-agree-ai-security-guidelines/?sh=17a4f48367c9 (Accessed: 22 March 2024)</span></p></body></html>. 
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
