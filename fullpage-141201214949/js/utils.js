var utils = {
    //生成min到max+1之间的
    randomInt: function(min, max) {
        return min + Math.random() * (max - min + 1);
    },
    //角度转化为半径
    degreesToRads: function(degrees) {
        //角度与弧度换算公式
        return degrees / 180 * Math.PI;
    }
};
