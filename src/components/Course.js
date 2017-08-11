import React from 'react';

const Course = props => {
    const getEducation = props.courseData.map(function(item, index) {
  		return (
          <li key={index}>
            <div>{item.title}</div>
            <a href={item.url} target="_blank">{item.url}</a>
  				</li>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Course</h2>
        <ul>
        {getEducation}
        </ul>
      </section>
  	)
};

export default Course;
