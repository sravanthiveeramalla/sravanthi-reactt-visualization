import React from 'react';
import {Line,Pie} from 'react-chartjs-2';
import moment from 'moment';
export function LineChart () {
var styles = {
    "graphContainer" : {
        "backgroundColor" : "#fff",
        "height" : "180px",
        "width" : "850px",
        "marginTop" : "15px",
        "padding" : "20px"
    }
};
var currenthour = (moment().format('h')-3);
console.log(currenthour);
function getTimeRanges(interval, language = window.navigator.language) {
    const ranges = [];
    const date = new Date();
    const format = {
        hour: 'numeric',
        minute: 'numeric',
    };
    for (let minutes = 0; minutes < 24 * 11; minutes = minutes + interval) {
        date.setHours(currenthour);
        date.setMinutes(minutes);
        ranges.push(date.toLocaleTimeString(language, format));
    }
    return ranges;
}
const data = {
    labels: getTimeRanges(30, 'en'), //time
	datasets: [
	{
		label : 'Sales  for 2020 (M)',
		data:[0, 100, 200, 300, 400,500,600,700,800,900]
	}]
}

return <div style={styles.graphContainer}><Line data={data} /></div>
}