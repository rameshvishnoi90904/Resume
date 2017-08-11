import React from 'react';
import moment from 'moment';

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });
    const getUrls = props.workItemData.websites.map(function(item, index) {
        return (<li key={index}><a href={item} target="_blank"> {item} </a></li>)
    });
    const getAppInfo = props.workItemData.apps.map(function(item, index) {
        return (
          <li key={index}>
            <div>{item.title}</div>
            <a href={item.url} target="_blank">{item.url}</a>
          </li>
        )
    });

    return (
        <div className="workItem">
          <h3>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.workItemData.summary}</p>
          <ul>
          {getAppInfo}
          {getHighlights}
          {getUrls}</ul>
        </div>
    )
};

export default WorkItem;
