<template>
    <div id="allmap">
        <div id="map"></div>
        <div id="result">
            <input type="button" value="清除所有覆盖物" @click="clearAll()"/>
        </div>
        <div class="name">{{ name }}</div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapState} from 'vuex';

    export default {
        data() {
            return {
                name: null,
                map: null,
                overlays: []
            }
        },
        computed: mapState(['id']),
        methods: {
            clearAll: function () {
                alert('1');
                for (var i = 0; i < this.overlays.length; i++) {
                    this.map.removeOverlay(overlays[i]);
                }
                overlays.length = 0
            },
            getInfo() {
                axios.get('api/info.php', {params: {id: this.id}})
                    .then(response => {
                        console.log(response.data);
                        if (response.data != 0 && response.data != null) {
                            this.name = response.data.name;
                        } else {
                            alert('获取用户信息失败');
                        }
                    })
            }
        },
        mounted: function () {
            if (this.id == 0) {
                this.$router.push({path: '/'});
            }
            this.getInfo();
            this.map = new BMap.Map('map');
            var point = new BMap.Point(116.404, 39.915);
            this.map.centerAndZoom(point, 13);
            this.map.enableScrollWheelZoom();
            this.map.addControl(new BMap.ScaleControl);
            var overlaycomplete = function (e) {
                this.overlays.push(e.overlay);
            };
            var styleOptions = {
                strokeColor: "red",    //边线颜色。
                fillColor: "red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 3,       //边线的宽度，以像素为单位。
                strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
                fillOpacity: 0.1,      //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            }
            //实例化鼠标绘制工具
            var drawingManager = new BMapLib.DrawingManager(map, {
                isOpen: false, //是否开启绘制模式
                enableDrawingTool: true, //是否显示工具栏
                drawingToolOptions: {
                    anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                    offset: new BMap.Size(5, 5), //偏离值
                },
                circleOptions: styleOptions, //圆的样式
                polylineOptions: styleOptions, //线的样式
                polygonOptions: styleOptions, //多边形的样式
                rectangleOptions: styleOptions //矩形的样式
            });
            //添加鼠标绘制工具监听事件，用于获取绘制结果
            drawingManager.addEventListener('overlaycomplete', overlaycomplete);
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #allmap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        zoom: 1;
        position: relative;
    }

    #map {
        height: 100%;
        width: 100%;
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    #result {
        position: absolute;
        display: inline;
        height: 30px;
        top: 100px;
        right: 20px;
        font-size: 12px;
        z-index: 10000;
    }

    .name {
        position: absolute;
        display: inline;
        height: 30px;
        top: 100px;
        left: 20px;
        font-size: 12px;
        z-index: 10000;
    }
</style>
