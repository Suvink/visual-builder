import React from 'react';
import { Timeline } from 'react-svg-timeline';
import moment from 'moment';

const CareerChart1 = () => {

    const data = [
        {
            title: "Intern Software Engineer",
            company: "WSO2",
            start_date: "01/10/2021",
            end_date: "01/04/2022",
            type: "type-intern-x",
            description: "During my internship at WSO2, I was involved with the Identity and AccessManagement  (IAM)  team  developing  the  ecosystem  around  thecompany’s latest product, Asgardeo (an Identity-as-a-service platform). Iwas responsible for designing and developing Asgardeo SDKs for Node.jsand Express which I’m happy to say are now publicly available on the NPMregistry"
        },
        {
            title: "Software Engineer",
            company: "WSO2",
            start_date: "01/04/2023",
            end_date: "01/06/2023",
            type: "type-x",
            description: "During my internship at WSO2, I was involved with the Identity and AccessManagement  (IAM)  team  developing  the  ecosystem  around  thecompany’s latest product, Asgardeo (an Identity-as-a-service platform). Iwas responsible for designing and developing Asgardeo SDKs for Node.jsand Express which I’m happy to say are now publicly available on the NPMregistry"
        }
    ];

    const lanes = [
        {
            laneId: "type-senior-x",
            label: "Senior Software Engineer",
        },
        {
            laneId: "type-x",
            label: "Software Engineer",
        },
        {
            laneId: "type-intern-x",
            label: 'Software Engineer (Intern)',
        }
    ];

    const formatEvents = () => {
        let e = [];
        data.map((job, index) => {
            let obj = {
                eventId: index,
                tooltip: (job.title + " at " + job.company),
                laneId: job.type,
                startTimeMillis: moment(job.start_date, "DD/MM/YYYY").unix(),
                endTimeMillis: moment(job.end_date, "DD/MM/YYYY").unix(),
            };
            e.push(obj);
            console.log(obj)
        });
        return e;
    }

    const dateFormat = (ms) => new Date(ms).toLocaleString()

    return (
        <Timeline width={600} height={300} events={formatEvents()} lanes={lanes} dateFormat={dateFormat} />
    );
}

export default CareerChart1;