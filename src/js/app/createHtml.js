define(['jquery','app/getData','app/options'],function($,getData,o){
    var html='';
    // var data=getData.init()
    var htmlFn={
        init:function(data){

            if(data.errCode==0){
                var list=data.data.targetlist
                for(var i in list){
                    html+='<li class=\"targetinfo \" id=\"  \">\
                            <div class="post-title">\
                                <a target="_blank" href="http://news.qq.com/a/20150724/021190.htm">英国早产双胞胎奇迹存活 弟弟仅有哥哥一半大</a>\
                                <a class="num la2" target="_blank" href="http://coral.qq.com/1173891748">426 条评论</a>\
                            </div>\
                            <ul class="targetpost">\
                                <li class="post   " id="comment_6030214876785882966" tid="1173891748">\
                                    <div class="post-content">\
                                        <div class="post-message-container" style="overflow:hidden;height:auto;">\
                                            <div><span class="headImg popClick" post_uid="202575563"><img src="http://wx.qlogo.cn/mmopen/TFA8syOnicFtfwND9ZHGvqWTicKHDpf0Gpq2Xlqn7eogczAyssZTPldCKnpafZN09jXiacprgAC5lHFX4gb927dZmpZjKRMzDTs/46"></span> <span post_uid="202575563" class="publisher popClick">某某先森</span>：\
                                            <em>“</em>我儿子早产半个月，现在22岁很健康180身高很壮实，要看小孩基因。<em>”</em>\
                                            <a class="np-postlink" targetid="1173891748" commentid="6030208745023817665" parentid="0" href="javascript:void(0)">\
                                            <img src="http://mat1.gtimg.com/www/niuping2013/postframe/transparent.gif"></a><span date="1437713800" class="uptime">57分钟前</span>\
                                            </div>\
                                        </div>\
                                        <div class="post-footer"><em class="newcoment" id="em_6030214876785882966"></em>\
                                        <span class="upvote"><a href="javascript:void(0)"><i>顶</i>(<em>17</em>)</a></span>\
                                        <span>\
                                        <a class="np-postlink replyy" targetid="1173891748" data-commentid="6030214876785882966" data-parentid="0" href="javascript:void(0)">\
                                        <img src="http://mat1.gtimg.com/www/niuping2013/postframe/transparent.gif">回复(2)</a></span>\
                                        </div>\
                                    </div>\
                                </li>\
                            </ul>\
                        </li>'
                }
            }
            return html
        }
    }

    return htmlFn;
    
    
})