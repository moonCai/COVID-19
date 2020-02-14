
(function(){

    var myChart = echarts.init(document.getElementById('container'));

    var uploadedDataURL = "/lib/echarts/json/china.json";    
    var geoGpsMap = {
        '1': [114.3896, 30.6628],
        '2': [119.5313, 29.8773],
        '3': [113.12244, 23.009505],
        '4': [113.4668, 34.6234],
        '5': [116.4551, 40.2539],
    };
    var geoCoordMap = {
        "西藏": [91.11, 29.97],
        '澳门': [113.33, 22.13],
        "青海": [101.4038, 36.8207],
        '台湾': [121.5135,25.0308],
        '香港': [114.15, 22.15],
        "宁夏": [106.3586, 38.1775],
        "新疆": [87.9236, 43.5883],
        '内蒙古': [110.3467, 41.4899],
        '吉林': [125.8154, 44.2584],
        "甘肃": [103.5901, 36.3043],
        "天津": [117.4219, 39.4189],
        "辽宁": [123.1238, 42.1216],
        "山西": [112.3352, 37.9413],
        "贵州": [106.6992, 26.7682],
        "海南": [110.3893, 19.8516],
        "云南": [102.9199, 25.4663],
        "广西": [108.479, 23.1152],
        "陕西": [109.1162, 34.2004],
        "河北": [114.4995, 38.1006],
        "福建": [119.4543, 25.9222],
        '上海': [121.4648, 31.2891],
        '北京市': [116.4551, 40.2539],
        '黑龙江': [127.9688, 45.368],
        "四川": [103.9526, 30.7617],
        "山东": [117.1582, 36.8701], 
        "重庆": [108.384366, 30.439702],
        "江苏": [118.8062, 31.9208],
        "江西": [116.0046, 28.6633],
        "安徽": [117.29, 32.0581],
        "湖南": [113.0823, 28.2568],
        "浙江": [119.5313, 29.8773],
        "河南": [113.4668, 34.6234],
        "广东": [113.12244, 23.009505],
        "湖北": [114.3896, 30.6628]
    };
    
    var colors = [
        ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
        ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
        ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
    ];
    var colorIndex = 0;
    $(function() {
        var year = ["2020/02/09", "2020/02/10", "2020/02/11", "2020/02/12"];
        var mapData = [
            [
                {"year": year[0], name: "西藏", value: 1},
                {"year": year[0], name: "澳门", value: 10},
                {"year": year[0], name: "青海", value: 18},
                {"year": year[0], name: "台湾", value: 18},
                {"year": year[0], name: "香港", value: 29},
                {"year": year[0], name: "宁夏", value: 45},
                {"year": year[0], name: "新疆", value: 45},
                {"year": year[0], name: "内蒙古", value: 54},
                {"year": year[0], name: "吉林", value: 78},
                {"year": year[0], name: "甘肃", value: 79},
                {"year": year[0], name: "天津", value: 107},
                {"year": year[0], name: "辽宁", value: 101},
                {"year": year[0], name: "山西", value: 115},
                {"year": year[0], name: "贵州", value: 99},
                {"year": year[0], name: "海南", value: 130},
                {"year": year[0], name: "云南", value: 141},
                {"year": year[0], name: "广西", value: 195},
                {"year": year[0], name: "陕西", value: 208},
                {"year": year[0], name: "河北", value: 206},
                {"year": year[0], name: "福建", value: 250},
                {"year": year[0], name: "上海", value: 293},
                {"year": year[0], name: "北京市", value: 326},
                {"year": year[0], name: "黑龙江", value: 307},
                {"year": year[0], name: "四川", value: 386},
                {"year": year[0], name: "山东", value: 444},
                {"year": year[0], name: "重庆", value: 450},
                {"year": year[0], name: "江苏", value: 468},
                {"year": year[0], name: "江西", value: 740},
                {"year": year[0], name: "安徽", value: 779},
                {"year": year[0], name: "湖南", value: 838},
                {"year": year[0], name: "浙江", value: 1075},
                {"year": year[0], name: "河南", value: 1033},
                {"year": year[0], name: "广东", value: 1131},
                {"year": year[0], name: "湖北", value: 27100}
            ],
            [
                {"year": year[0], name: "西藏", value: 1},
                {"year": year[0], name: "澳门", value: 10},
                {"year": year[0], name: "青海", value: 18},     
                {"year": year[0], name: "台湾", value: 18},
                {"year": year[0], name: "香港", value: 38},
                {"year": year[0], name: "宁夏", value: 49},
                {"year": year[0], name: "新疆", value: 49},
                {"year": year[0], name: "内蒙古", value: 58},
                {"year": year[0], name: "吉林", value: 80},
                {"year": year[0], name: "甘肃", value: 83},
                {"year": year[0], name: "天津", value: 95},
                {"year": year[0], name: "辽宁", value: 108},
                {"year": year[0], name: "山西", value: 119},
                {"year": year[0], name: "贵州", value: 109},
                {"year": year[0], name: "海南", value: 138},
                {"year": year[0], name: "云南", value: 149},
                {"year": year[0], name: "广西", value: 210},
                {"year": year[0], name: "陕西", value: 213},
                {"year": year[0], name: "河北", value: 218},
                {"year": year[0], name: "福建", value: 261},
                {"year": year[0], name: "上海", value: 299},
                {"year": year[0], name: "北京市", value: 337},
                {"year": year[0], name: "黑龙江", value: 331},
                {"year": year[0], name: "四川", value: 405},
                {"year": year[0], name: "山东", value: 466},
                {"year": year[0], name: "重庆", value: 473},
                {"year": year[0], name: "江苏", value: 492},
                {"year": year[0], name: "江西", value: 771},
                {"year": year[0], name: "安徽", value: 830},
                {"year": year[0], name: "湖南", value: 879},
                {"year": year[0], name: "浙江", value: 1092},
                {"year": year[0], name: "河南", value: 1073},
                {"year": year[0], name: "广东", value: 1159},
                {"year": year[0], name: "湖北", value: 29631}
            ],
            [
                {"year": year[1], name: "西藏", value: 1},
                {"year": year[1], name: "澳门", value: 10},
                {"year": year[1], name: "青海", value: 18},
                {"year": year[1], name: "台湾", value: 18},
                {"year": year[1], name: "香港", value: 49},
                {"year": year[1], name: "宁夏", value: 53},
                {"year": year[1], name: "新疆", value: 55},
                {"year": year[1], name: "内蒙古", value: 58},
                {"year": year[1], name: "吉林", value: 81},
                {"year": year[1], name: "甘肃", value: 86},
                {"year": year[1], name: "天津", value: 104},
                {"year": year[1], name: "辽宁", value: 111},
                {"year": year[1], name: "山西", value: 122},
                {"year": year[1], name: "贵州", value: 127},
                {"year": year[1], name: "海南", value: 142},
                {"year": year[1], name: "云南", value: 153},
                {"year": year[1], name: "广西", value: 215},
                {"year": year[1], name: "陕西", value: 219},
                {"year": year[1], name: "河北", value: 239},
                {"year": year[1], name: "福建", value: 267},
                {"year": year[1], name: "上海", value: 303},
                {"year": year[1], name: "北京市", value: 342},
                {"year": year[1], name: "黑龙江", value: 360},
                {"year": year[1], name: "四川", value: 417},
                {"year": year[1], name: "山东", value: 487},
                {"year": year[1], name: "重庆", value: 489},
                {"year": year[1], name: "江苏", value: 515},
                {"year": year[1], name: "江西", value: 804},
                {"year": year[1], name: "安徽", value: 860},
                {"year": year[1], name: "湖南", value: 912},
                {"year": year[1], name: "浙江", value: 1117},
                {"year": year[1], name: "河南", value: 1105},
                {"year": year[1], name: "广东", value: 1177},
                {"year": year[1], name: "湖北", value: 31728}
            ],
            [
                {"year": year[2], name: "西藏", value: 1},
                {"year": year[2], name: "澳门", value: 10},
                {"year": year[2], name: "青海", value: 18},
                {"year": year[2], name: "台湾", value: 18},
                {"year": year[2], name: "香港", value: 49},
                {"year": year[2], name: "宁夏", value: 58},
                {"year": year[2], name: "新疆", value: 59},
                {"year": year[2], name: "内蒙古", value: 60},
                {"year": year[2], name: "吉林", value: 83},
                {"year": year[2], name: "甘肃", value: 86},
                {"year": year[2], name: "天津", value: 107},
                {"year": year[2], name: "辽宁", value: 116},
                {"year": year[2], name: "山西", value: 124},
                {"year": year[2], name: "贵州", value: 131},
                {"year": year[2], name: "海南", value: 151},
                {"year": year[2], name: "云南", value: 154},
                {"year": year[2], name: "广西", value: 222},
                {"year": year[2], name: "陕西", value: 225},
                {"year": year[2], name: "河北", value: 251},
                {"year": year[2], name: "福建", value: 272},
                {"year": year[2], name: "上海", value: 311},
                {"year": year[2], name: "北京市", value: 352},
                {"year": year[2], name: "黑龙江", value: 378},
                {"year": year[2], name: "四川", value: 436},
                {"year": year[2], name: "山东", value: 497},
                {"year": year[2], name: "重庆", value: 505},
                {"year": year[2], name: "江苏", value: 543},
                {"year": year[2], name: "江西", value: 844},
                {"year": year[2], name: "安徽", value: 889},
                {"year": year[2], name: "湖南", value: 946},
                {"year": year[2], name: "浙江", value: 1131},
                {"year": year[2], name: "河南", value: 1135},
                {"year": year[2], name: "广东", value: 1219},
                {"year": year[2], name: "湖北", value: 33366}
            ]
        ];
    
        /*柱状图柱子Y名称*/
        var categoryData = [];
        var barData = [];
        for (var key in geoCoordMap) {
            categoryData.push(key);
        }
 
        for (var i = 0; i < mapData.length; i++) {
            barData.push([]);
            for (var j = 0; j < mapData[i].length; j++) {
                barData[i].push(mapData[i][j].value)
            }
        }
        
        $.getJSON(uploadedDataURL, function(geoJson) {
            echarts.registerMap('china', geoJson);
            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
    
            var convertToLineData = function(data, gps) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap['湖北'];
                    var toCoord = geoCoordMap[dataItem.name];
                    debugger;
                    // var toCoord = gps;
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                            value: dataItem.value
                        }, {
                            coord: toCoord,
                        }]);
                    }
                }
                return res;
            };
    
            optionXyMap01 = {
                timeline: {
                    data: year,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 2000,
                    left: '5%',
                    right: '30%',
                    bottom: '5%',
                    width: '65%',
                    //  height: null,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },
                },
                baseOption: {
                    animation: true,
                    animationDuration: 1000,
                    animationEasing: 'cubicInOut',
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'cubicInOut',
                    grid: {
                        right: '5%',
                        top: '10%',
                        bottom: '10%',
                        width: '20%'
                    },
                    tooltip: {
                        trigger: 'axis', // hover触发器
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                color: 'rgba(150,150,150,0.1)' //hover颜色
                            }
                        }
                    },
                    geo: {
                        show: true,
                        map: 'china',
                        roam: true,
                        zoom: 1,
                        center: [113.83531246, 34.0267395887],
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                // shadowColor: 'rgba(255, 255, 255, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    }
                },
                options: []
    
            };
            for (var n = 0; n < year.length; n++) {
                optionXyMap01.options.push({
                    backgroundColor: '#051b4a',
                    title: [{
                            /* text: '地图',
                             subtext: '内部数据请勿外传',
                             left: 'center',
                             textStyle: {
                                 color: '#fff'
                             }*/
                        },
                        {
                            id: 'statistic',
                            text: "新型冠状病毒肺炎疫情-动态追踪",
                            left: '30px',
                            top: '30px',
                            textStyle: {
                                color: '#fff',
                                fontSize: 30
                            }
                        }
                    ],
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 2,
                            textStyle: {
                                color: '#aaa'
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        //  name: 'TOP 20',
                        nameGap: 16,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        data: categoryData
                    },
                    series: [
                        //未知作用
                        {
                            //文字和标志
                            name: 'light',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n]),
                            symbolSize: function(val) {
                                return val[2] > 10000 ? 20 : 5
                                // return 20
                                //val[2] / 10000 * 20
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n]
                                }
                            }
                        },
                        //地图？
                        {
                            type: 'map',
                            map: 'china',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#FFFFFF',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: mapData
                        },
                        //地图点的动画效果
                        {
                            //  name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n].sort(function(a, b) {
                                return b.value - a.value;
                            }).slice(0, 34)),
                            symbolSize: function(val) {
                                return val[2] > 10000 ? 20 : 5
                                // return 20
                                //val[2] / 10000 * 20;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    shadowBlur: 10,
                                    shadowColor: colors[colorIndex][n]
                                }
                            },
                            zlevel: 1
                        },
                        //地图线的动画效果
                        {
                            type: 'lines',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4, //箭头指向速度，值越小速度越快
                                trailLength: 0.05, //特效尾迹长度[0,1]值越大，尾迹越长重
                                symbol: 'arrow', //箭头图标
                                symbolSize: 10, //图标大小
                            },
                            lineStyle: {
                                normal: {
                                    color: colors[colorIndex][n],
                                    width: 0.1, //尾迹线条宽度
                                    opacity: 0.6, //尾迹线条透明度
                                    curveness: .3 //尾迹线条曲直度
                                }
                            },
                            data: convertToLineData(mapData[n], geoGpsMap[Math.ceil(Math.random() * 6)])
                        },
                        {
                            type: 'scatter',
                            zlevel: 2,
                            coordinateSystem: 'geo',
                            symbol: 'pin',
                            symbolSize: 50,
                            itemStyle: {
                                color:'#f00',
                            },
                            data: [{
                                value: [114.3896, 30.6628],
                            }],
                        },
                        //柱状图
                        {
                            zlevel: 1.5,
                            type: 'bar',
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n]
                                }
                            },
                            data: barData[n]
                        }
                    ]
                })
            }
            myChart.setOption(optionXyMap01);
        });
    });
})()