import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';

const ChartComponent = (props) => {
    let values = [];
    let times = [];

    if (props.packs) {
        props.packs.forEach(pack => {
            const payload = pack.payload;
            values = values.concat(payload.map(p => p.v));
            times = times.concat(payload.map(p => p.t));
        });
    }

    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);



    return (<div>
        <ReactEcharts
            option={{
                title: {
                    text: props.currentDataType && props.currentDataType.toUpperCase(),
                },
                grid: {
                    show: true,
                },

                xAxis: {
                    name: 'Time',
                    data: times,
                    boundaryGap:false,
                    axisLabel: {
                        formatter: (function(value){
                            return moment(value, ['HH:mm:ss']).format('HH:mm');
                        })
                    }

                },
                yAxis: {
                    type: 'value',
                    min: minValue - 1,
                    max: maxValue + 1,
                    scale: true,
                },
                series: [{
                    data: values,
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                }]
            }}
            style={{height: '600px', width: '100%'}}
        />
    </div>);
};


const mapStateToProps = (state) => {
    return {
        packs: state.mainStore.currentNodeStore.packs,
        currentDataType: state.mainStore.currentNodeStore.currentDataType,
    };
};

export default connect(
    mapStateToProps,
)(ChartComponent);
