import React, { useState } from 'react';
import moment from 'moment';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import "./index.css";

const CareerChart3 = () => {

    const [viewMode, setViewMode] = useState(ViewMode.Month);
    const [isChecked, setIsChecked] = useState(true);

    let tasks = [
        {
            start: new Date(2021, 9, 1),
            end: new Date(2022, 3, 1),
            name: 'Software Engineer (Intern)',
            id: 't1',
            type: 'task',
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#ffbb54', progressSelectedColor: '#000' },
            displayOrder: 4,
            company: "WSO2"
        },
        {
            start: new Date(2022, 4, 1),
            end: new Date(2023, 6, 1),
            name: 'Software Engineer',
            id: 't2',
            type: 'task',
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#253372', progressSelectedColor: '#000' },
            displayOrder: 3,
            dependencies: ["t1"],
            company: "WSO2"
        },
        {
            start: new Date(2022, 5, 1),
            end: new Date(2023, 6, 1),
            name: 'Freelance Software Engineer',
            id: 't3',
            type: 'task',
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#253372', progressSelectedColor: '#000' },
            displayOrder: 2,
            dependencies: ["t1"],
            company: "X-Venture"
        },
        {
            start: new Date(2023, 7, 1),
            end: new Date(2024, 6, 1),
            name: 'Senior Software Engineer',
            id: 't4',
            type: 'task',
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#115513', progressSelectedColor: '#000' },
            displayOrder: 1,
            dependencies: ["t2", "t3"],
            company: "LSEG"
        }
    ];

    const toolTipCard = ({ task }) => {
        return (
            <div className="card">
                <div className="card-content">
                    <h1 className="title is-6 mb-0">{task.name}</h1>
                    <h1 className="title is-6">{task.company}</h1>
                    <div className="tt-titles has-text-left">
                        <h1 className="title is-6 tooltip-subtitle mb-0">Start: {moment(task.start.toString()).format("DD-MM-YYYY").toString()}</h1>
                        <h1 className="title is-6 tooltip-subtitle mb-0">End: {moment(task.end.toString()).format("DD-MM-YYYY").toString()}</h1>
                        <h1 className="title is-6 tooltip-subtitle">Duration: {moment(task.end).diff(moment(task.start), 'months', true)} Months</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="view-mode-buttons has-text-centered mb-5">
                <div class="buttons are-small">
                    <button class="button is-link" onClick={() => { setViewMode(ViewMode.Year) }}>Year</button>
                    <button class="button is-warning" onClick={() => { setViewMode(ViewMode.Month) }}>Month</button>
                    <button class="button is-danger" onClick={() => { setViewMode(ViewMode.Week) }}>Week</button>
                </div>
                <div class="buttons are-small ml-6">
                    <button class="button is-dark" onClick={() => { setIsChecked(!isChecked) }}>Show/Hide Details</button>
                </div>
                <div class="buttons are-small ml-6"> </div>
            </div>
            <Gantt
                tasks={tasks}
                viewMode={viewMode}
                columnWidth={65}
                onExpanderClick={(task) => { console.log(task) }}
                TooltipContent={toolTipCard}
                listCellWidth={isChecked ? "180px" : ""}
            />
        </>
    );
}

export default CareerChart3;