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
<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">@import url(https://themes.googleusercontent.com/fonts/css?kit=OPeqXG-QxW3ZD8BtmPikfA);ul.lst-kix_1yk2aggewchm-5{list-style-type:none}ul.lst-kix_1yk2aggewchm-6{list-style-type:none}ul.lst-kix_1yk2aggewchm-7{list-style-type:none}ul.lst-kix_1yk2aggewchm-8{list-style-type:none}ul.lst-kix_1yk2aggewchm-1{list-style-type:none}.lst-kix_1yk2aggewchm-0>li:before{content:"\\0025cf   "}ul.lst-kix_1yk2aggewchm-2{list-style-type:none}.lst-kix_1yk2aggewchm-7>li:before{content:"\\0025cb   "}.lst-kix_1yk2aggewchm-8>li:before{content:"\\0025a0   "}ul.lst-kix_1yk2aggewchm-3{list-style-type:none}ul.lst-kix_1yk2aggewchm-4{list-style-type:none}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}ul.lst-kix_1yk2aggewchm-0{list-style-type:none}.lst-kix_1yk2aggewchm-3>li:before{content:"\\0025cf   "}.lst-kix_1yk2aggewchm-4>li:before{content:"\\0025cb   "}.lst-kix_1yk2aggewchm-1>li:before{content:"\\0025cb   "}.lst-kix_1yk2aggewchm-2>li:before{content:"\\0025a0   "}.lst-kix_1yk2aggewchm-5>li:before{content:"\\0025a0   "}.lst-kix_1yk2aggewchm-6>li:before{content:"\\0025cf   "}ol{margin:0;padding:0}table td,table th{padding:0}.c8{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:1pt;border-right-width:1pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:1pt;border-top-style:solid;background-color:#cccccc;border-left-style:solid;border-bottom-width:1pt;width:165pt;border-top-color:#ffffff;border-bottom-style:solid}.c2{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:1pt;border-right-width:1pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:152.2pt;border-top-color:#ffffff;border-bottom-style:solid}.c9{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:1pt;border-right-width:1pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:165pt;border-top-color:#ffffff;border-bottom-style:solid}.c11{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:1pt;border-right-width:1pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:93pt;border-top-color:#ffffff;border-bottom-style:solid}.c3{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#ffffff;border-top-width:1pt;border-right-width:1pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:438.8pt;border-top-color:#ffffff;border-bottom-style:solid}.c5{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c15{padding-top:20pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c23{padding-top:18pt;padding-bottom:6pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c24{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:20pt;font-family:"Arial";font-style:normal}.c18{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c4{color:#ffffff;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c14{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c13{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c12{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:center}.c20{margin-left:-59.2pt;border-spacing:0;border-collapse:collapse;margin-right:auto}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c0{font-size:10.5pt;font-family:"Roboto";color:#ececec;font-weight:400}.c21{background-color:#121212;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c19{padding:0;margin:0}.c6{height:21pt}.c16{background-color:#212121}.c22{height:36.5pt}.c10{height:11pt}.c17{background-color:#cccccc}.c7{height:0pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c21 doc-content"><h1 class="c15" id="h.93pyfhje9rje"><span class="c24">Professional Skill Matrix</span></h1><p class="c13 c10"><span class="c14"></span></p><a id="t.3d8910d53e956ce58b0f6e9c2a78c81a0cdf0757"></a><a id="t.0"></a><table class="c20"><tr class="c7"><td class="c2 c17" colspan="1" rowspan="1"><p class="c1"><span class="c14">Skill Category</span></p></td><td class="c11 c17" colspan="1" rowspan="1"><p class="c12"><span class="c14">Skill</span></p></td><td class="c11 c17" colspan="1" rowspan="1"><p class="c12"><span class="c14">Proficiency Level</span></p></td><td class="c8" colspan="1" rowspan="1"><p class="c12"><span class="c14">Assessment Criteria</span></p></td><td class="c3 c17" colspan="1" rowspan="1"><p class="c12"><span class="c14">Development Plan</span></p></td></tr><tr class="c6"><td class="c2" colspan="1" rowspan="5"><p class="c10 c12"><span class="c4"></span></p><p class="c12 c10"><span class="c4"></span></p><p class="c12 c10"><span class="c4"></span></p><p class="c12 c10"><span class="c4"></span></p><p class="c12"><span class="c4">Technical Skills</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c0 c16">Cloud Engineer</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c0 c16">Expert</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Completed AWS Cloud solutions architect professional certification and designed many services with AWS.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">More Hands on real-world problems using AWS</span></p></td></tr><tr class="c6"><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Programming Backend</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Expert</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Programming using Java, Python, and Javascript for more than six years professionally. </span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">Learn more efficient ways of programming and better ways of testing code.</span></p></td></tr><tr class="c6"><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">IaC Tools</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Advanced</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">IaC tools like Terraform were used to create an AWS infrastructure.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">Certification on Hashicorp Terraform IaC.</span></p></td></tr><tr class="c6"><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">CI/CD Tools</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Advanced</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Created and maintained CI/CD tools like Jenkins and CircleCI.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">Learn more about the advanced methods to optimise the pipelines and easy maintenance.</span></p></td></tr><tr class="c6"><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c0">Cloud Security</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Intermediate</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Used Cloud Security principles like least privilege, vulnerability testing, etc.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">More hand-on experience and learn about the pitfalls of different services and how to mitigate them.</span></p></td></tr><tr class="c6"><td class="c2" colspan="1" rowspan="4"><p class="c1 c10"><span class="c4"></span></p><p class="c1 c10"><span class="c4"></span></p><p class="c1 c10"><span class="c4"></span></p><p class="c12"><span class="c4">Soft Skills</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Agile Methodologies</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Intermediate</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Participated in many Scrum activities and used them professionally daily.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">Complete a Scrum Master certification.</span></p></td></tr><tr class="c6"><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Communication Skills</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Intermediate</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Worked with a team of 5-6 people professionally and also for university.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">Be more open to ideas and say more when things are not going well.</span></p></td></tr><tr class="c6"><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Team Leadership</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c13"><span class="c4">Beginner</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Led junior developers in assisting them with their work.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">Participate in more leadership trainings.</span></p></td></tr><tr class="c22"><td class="c11" colspan="1" rowspan="1"><p class="c1"><span class="c4">Risk Management</span></p></td><td class="c11" colspan="1" rowspan="1"><p class="c13"><span class="c4">Beginner</span></p></td><td class="c9" colspan="1" rowspan="1"><p class="c1"><span class="c4">Identified and managed risk in a simple system.</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c1"><span class="c4">Get more hands-on experience and training.</span></p></td></tr></table><p class="c13 c10"><span class="c4"></span></p><p class="c13 c10"><span class="c4"></span></p><h2 class="c23" id="h.nvvwfzegoq7u"><span class="c18">Proficiency Levels</span></h2><ul class="c19 lst-kix_1yk2aggewchm-0 start"><li class="c5 li-bullet-0"><span class="c4">Beginner: Basic understanding and limited practical experience.</span></li><li class="c5 li-bullet-0"><span class="c4">Intermediate: Good understanding and ability to apply skills in real-world scenarios with some supervision.</span></li><li class="c5 li-bullet-0"><span class="c4">Advanced: Strong understanding, able to work independently, and mentor others.</span></li><li class="c5 li-bullet-0"><span class="c4">Expert: Deep understanding and expertise, recognised as a subject matter expert.</span></li></ul><p class="c13 c10"><span class="c4"></span></p></body></html>
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
            <Header title="RM Professional Skill Matrix" />
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
