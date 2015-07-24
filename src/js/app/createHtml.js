define(['jquery','app/getData','app/options'],function($,getData,o){
    var html='';
    var cHtml='';
    var img='http://mat1.gtimg.com/www/niuping2013/postframe/transparent.gif';
    // var data=getData.init()
    var htmlFn={
        init:function(data){

            if(data.errCode==0){
                var list=data.data.targetlist
                for(var i in list){
                    var cList=list[i].commentlist
                    for(var j in cList){
                        cHtml+='<li class="post   " id="comment_6030214876785882966" tid="1173891748">\
                                    <div class="post-content">\
                                        <div class="post-message-container" style="overflow:hidden;height:auto;">\
                                            <div><span class="headImg popClick" post_uid="202575563"><img src="'+ cList[j].userinfo.head +'"></span> <span post_uid="202575563" class="publisher popClick">'+ cList[j].userinfo.nick +'</span>：\
                                            <em>“</em>'+ cList[j].content +'<em>”</em>\
                                            <a class="np-postlink" targetid="1173891748" commentid="6030208745023817665" parentid="0" href="javascript:void(0)">\
                                            <img src="http://mat1.gtimg.com/www/niuping2013/postframe/transparent.gif"></a><span date="1437713800" class="uptime">57分钟前</span>\
                                            </div>\
                                        </div>\
                                        <div class="post-footer"><em class="newcoment" id="em_6030214876785882966"></em>\
                                        <span class="upvote"><a href="javascript:void(0)"><i>顶</i>(<em>'+ cList[j].up +'</em>)</a></span>\
                                        <span>\
                                        <a class="np-postlink replyy" targetid="1173891748" data-commentid="6030214876785882966" data-parentid="0" href="javascript:void(0)">\
                                        <img src="'+ img +'">回复('+ cList[j].rep +')</a></span>\
                                        </div>\
                                    </div>\
                                </li>'
                    }
                    html+='<li class="targetinfo " id=" '+ list[i].targetid +' ">\
                            <div class="post-title">\
                                <a target="_blank" href="'+ list[i].url +'">'+ list[i].title +'</a>\
                                <a class="num la2" target="_blank" href="http://coral.qq.com/1173891748">'+ list[i].commentnum +' 条评论</a>\
                            </div>\
                            <ul class="targetpost">\
                            '+ cHtml +'\
                            </ul>\
                        </li>'
                }
            }
            return html
        }
    }

    return htmlFn;
    
    
})