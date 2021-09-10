var i=1
window.alert=function(){}
var select = setInterval(function() {
    electCourseTable.tip.submit({lessonId: 458831,lessonCount: 0,ele:this,type:jQuery(this).attr('operator'),virtualLoc:'list',virtualCashEnabled:false});
    // if(($(".result-content").text() == "选课成功") || ($(".result-content").text() == "相同教学班只能选一次")) {
    //     window.clearInterval(select);
    //     console.log("选课成功！");
    // } else {
        console.log("第 " + i + " 次选课尝试");
        i++;
    // }
},200);