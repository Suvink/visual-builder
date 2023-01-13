import React from 'react';
import Tree from 'react-d3-tree';

const SkillTree1 = (props) => {

    const orgChart = {
        name: 'Suvin Nimnaka',
        children: [
            {
                name: 'Undergraduate Degree',
                attributes: {
                    Organization: 'University of Colombo School of Computing',
                },
                children: [
                    {
                        name: 'Academics',
                        attributes: {
                            major: 'BSc. (Hons) in Information Systems',
                            gpa: '3.90',
                            class: 'First Class',
                        },
                    },
                    {
                        name: 'Awards',
                        children: [
                            {
                                name: 'Local Winner and International Runner Up',
                                attributes: {
                                    Date: '2019',
                                    Organization: 'Hack 19'
                                }
                            },
                            {
                                name: 'Silver Award',
                                attributes: {
                                    Date: '2019',
                                    Organization: 'National Best Quality Software Awards'
                                }
                            },
                        ],
                    },
                    {
                        name: 'Projects',
                        children: [
                            {
                                name: 'Proktara',
                                attributes: {
                                    Date: '2021',
                                    Stack: 'React, Node.js, MongoDB, Express.js'
                                }
                            },
                            {
                                name: 'Firemex',
                                attributes: {
                                    Date: '2022',
                                    Stack: 'Python, Django, PostgreSQL, React, Node.js, MongoDB, Express.js'
                                }
                            },
                        ],
                    },
                ],
            },
            {
                name: 'School Education',
                attributes: {
                    Organization: 'Richmond College',
                },
                children: [
                    {
                        name: 'GCE AL',
                        attributes: {
                            year: '2017',
                        },
                        children: [
                            {
                                name: 'Combined Mathematics',
                                attributes: {
                                    result: 'A'
                                }
                            },
                            {
                                name: 'Physics',
                                attributes: {
                                    result: 'C'
                                }
                            },
                            {
                                name: 'Chemistry',
                                attributes: {
                                    result: 'C'
                                }
                            },
                        ],
                    },

                ],
            },
        ],
    };


    return (
        <div id="treeWrapper" style={{ width: '95vw', height: '50rem', border: '2px solid black' }}>
            <Tree
                data={orgChart}
                collapsible={true}
                depthFactor={400}
            />
        </div>
    );
}

export default SkillTree1;