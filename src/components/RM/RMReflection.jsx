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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">.lst-kix_8vxaxvda1lij-1>li:before{content:"\\0025cb   "}ul.lst-kix_8vxaxvda1lij-4{list-style-type:none}ul.lst-kix_8vxaxvda1lij-3{list-style-type:none}.lst-kix_8vxaxvda1lij-0>li:before{content:"\\0025cf   "}.lst-kix_8vxaxvda1lij-2>li:before{content:"\\0025a0   "}ul.lst-kix_8vxaxvda1lij-6{list-style-type:none}ul.lst-kix_8vxaxvda1lij-5{list-style-type:none}.lst-kix_8vxaxvda1lij-3>li:before{content:"\\0025cf   "}ul.lst-kix_8vxaxvda1lij-8{list-style-type:none}ul.lst-kix_8vxaxvda1lij-7{list-style-type:none}.lst-kix_8vxaxvda1lij-5>li:before{content:"\\0025a0   "}.lst-kix_8vxaxvda1lij-4>li:before{content:"\\0025cb   "}.lst-kix_8vxaxvda1lij-6>li:before{content:"\\0025cf   "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_8vxaxvda1lij-8>li:before{content:"\\0025a0   "}.lst-kix_8vxaxvda1lij-7>li:before{content:"\\0025cb   "}ul.lst-kix_8vxaxvda1lij-0{list-style-type:none}ul.lst-kix_8vxaxvda1lij-2{list-style-type:none}ul.lst-kix_8vxaxvda1lij-1{list-style-type:none}ol{margin:0;padding:0}table td,table th{padding:0}.c0{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c2{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c7{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c1{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c4{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c9{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c6{padding:0;margin:0}.c8{padding-left:0pt}.c5{margin-left:36pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c9 doc-content"><h2 class="c1" id="h.lx2jkrj1k22v"><span class="c2">Introduction</span></h2><p class="c4"><span class="c0">In the reflective piece, I want to use the Gibbs Reflective Cycle to explore my experience within the &ldquo;Research Methods and Professional Practices&rdquo; module (Gibbs, G. 1988). This essay will delve into my learning journey, which guided me through this subject and focus on gaining valuable skills in the research methods process and different statistical analysis skills and their impact on my personal and professional development. </span></p><h2 class="c1" id="h.f1bo008mk2rk"><span class="c2">Description</span></h2><p class="c3"><span class="c7"></span></p><p class="c4"><span class="c0">The &ldquo;Research Methods and Professional Practices&rdquo; module is a dynamic platform primarily focusing on engaging research methods and data analysis techniques. It offers a comprehensive understanding of using quantitative and qualitative methods (Crotty, J. and Daniel, E., 2022) and diverse ways of collecting data for research. The practical application of these skills made this module stand out. The assignments involved using Excel and Python statistical tools to analyse real-world data are integral to the coursework and instrumental in deepening our theoretical knowledge through hands-on experience.</span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">Furthermore, the different assignments highlight a literature review on a specific topic, presenting one&#39;s analysis, preparing a research proposal, and presenting its findings.</span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c2">Feelings</span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">At the beginning of the module, I felt a mixture of excitement and anxiety. The excitement was triggered by the fact that this would allow me to deepen my understanding of research methods and statistical analysis skills required to advance in academia. &nbsp;However, at the same time, the feeling of anxiousness was also beside me due to the thoughts of understanding the complexity of understanding the application of the different methods in real life and the steep learning curve that is associated with mastering advanced statistical methods, i.e. hypothesis testing (Lago, J.M.L. and Cruz, R.O.D., 2021) and the statistical tools.</span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">As I progressed through the modules, I experienced a rollercoaster of emotions. The joy of learning new ideas, like how to collect data and which research method is more feasible, and the struggle to understand key aspects, especially regarding statistical analysis, were present throughout the module. I was generally satisfied with this module, even with challenging topics, as there was ample support from the tutor when needed during the seminar for questions and good practical explanations to understand the more complex issues. </span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c2"></span></p><p class="c4"><span class="c2">Evaluation</span></p><p class="c3"><span class="c2"></span></p><p class="c4"><span class="c0">The module had diverse aspects. Firstly, it provided a structured framework for understanding different research methodologies and their appropriate application. This helped me understand their usages, where these methods can be applied during my research activities, and what points I should take care of, including ethicality and proper sourcing. The emphasis on practical assignments, especially the literature reviews, research proposals and statistics exercises, allowed me to apply the theoretical concepts to learning. Furthermore, the Peer discussions and feedback were invaluable, offering diverse perspectives and deepening my understanding.</span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">One of my challenges was the initial difficulty in selecting appropriate research methods and statistical tools for specific research questions. Aligning theoretical knowledge with practical application was sometimes overwhelming, leading to moments of frustration. The learning curve of mastering statistical tools was also challenging, requiring significant time and effort. Additionally, my personal literature review and research proposal were made on two different topics, and that made me realise that even though the research is done in a similar field where cybersecurity is in the foreground, the methods used can be different.</span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c2">Analysis</span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">My challenges were primarily due to my initial lack of practical experience with advanced statistical tools and the complexity of integrating various research methodologies. This experience highlighted the importance of comprehensively understanding research methods&#39; theoretical and practical aspects. My difficulties with statistical software underscored the need for robust training and preparation, especially in interpreting data outputs relevant to specific research questions and also identifying proper resources for literature review that is up-to-date with the current topics and not old. </span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">Throughout the module, I identified strengths in critical thinking and theoretical knowledge but noted weaknesses in applied statistical analysis and time management. These exercises and assignments clearly showed my competencies and areas needing improvement. The action plan I developed focused on specific, measurable, and achievable goals, such as additional training in statistical analysis, better project scheduling and more thorough research on the subject to find suitable updated resources.</span></p><p class="c3"><span class="c2"></span></p><p class="c4"><span class="c2">Conclusion</span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">From this experience, I recognise significant growth in understanding and applying research methods and statistical analysis. The module has provided me with a solid foundation for conducting robust and reliable research. Despite initial challenges, the experience has been profoundly rewarding, enhancing my confidence and competence in theoretical and practical research aspects. Despite many headwinds during this module, I still understood the core ideas that this module wanted to take with me. However, there is a lot of room for improvement. As I learned in this module, carrying out research is very time-intensive and topic-dependent, and the methods used in one study may be less effective than those used in another. </span></p><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c2"></span></p><p class="c4"><span class="c2">Action Plan</span></p><p class="c3"><span class="c2"></span></p><p class="c4"><span class="c0">To ensure continuous improvement and professional growth, I plan to:</span></p><p class="c3 c5"><span class="c0"></span></p><ul class="c6 lst-kix_8vxaxvda1lij-0 start"><li class="c4 c8 c5 li-bullet-0"><span class="c0">Engage in Peer Discussions and Collaborative Projects: I will participate in peer discussions and collaborative projects to enhance my practical skills and ability to work effectively in diverse teams. This will provide opportunities to learn from others and gain different perspectives.</span></li></ul><p class="c3 c5"><span class="c0"></span></p><ul class="c6 lst-kix_8vxaxvda1lij-0"><li class="c4 c8 c5 li-bullet-0"><span class="c0">Review and Adapt My Action Plan: I will continuously review and adapt my action plan based on ongoing experiences and feedback. This will ensure my professional development aligns with my career goals and aspirations.</span></li></ul><p class="c3 c5"><span class="c0"></span></p><ul class="c6 lst-kix_8vxaxvda1lij-0"><li class="c4 c5 c8 li-bullet-0"><span class="c0">Feedback and Correction: Seek feedback from peers and mentors to gain insights into my performance and areas for improvement. Mentorship can provide valuable guidance and support in navigating complex research challenges.</span></li></ul><p class="c3"><span class="c0"></span></p><p class="c3"><span class="c0"></span></p><hr style="page-break-before:always;display:none;"><p class="c3"><span class="c0"></span></p><h2 class="c1" id="h.pmai45i6gf7g"><span class="c2">References</span></h2><p class="c3"><span class="c7"></span></p><p class="c4"><span class="c0">Crotty, J. and Daniel, E., 2022. Cyber threat: its origins and consequence and the use of qualitative and quantitative methods in cyber risk assessment. Applied Computing and Informatics, (ahead-of-print).</span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">Gibbs, G. 1988. Learning by Doing. A Guide to Teaching and Learning Methods. Oxford Centre for Staff and Learning Development. 2013. Oxford Brooks University.Oxford. </span></p><p class="c3"><span class="c0"></span></p><p class="c4"><span class="c0">Lago, J.M.L. and Cruz, R.O.D., 2021. Linking to the real world: contextual teaching and learning of statistical hypothesis testing. LUMAT: International Journal on Math, Science and Technology Education, 9(1), pp.597-621.</span></p></body></html>
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

function SRMReflection() {
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
            <Header title="RM Final Reflection" />
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

export default SRMReflection;
