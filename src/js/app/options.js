define(['jquery'],function($){
	// console.log(11)
	var a=$;
	// console.log(a)

	    a.getUrlParam = function(a) {
	        a = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
	        a = window.location.search.substr(1).match(a);
	        return null != a ? unescape(a[2]) : null
	    }
	// (function(a) {})(jQuery);
	return {
                dataSource0: "",
                dataJson: {},
                $mainBody: a("#mainBody"),
                $content: a("#content"),
                $loginTrigger: a("#onekey"),
                $logoutTrigger: a("#loginOut"),
                loginEvent: "logined",
                $topReply: a("#top_reply"),
                $topContent: a("#top_content"),
                $popContent: a("#pop_content"),
                $allComments: a("#allComments"),
                $postBtns: a("#top_post_btn,#pop_post_btn"),
                $loadMore: a("#loadMore"),
                toggleEvent: "toggle",
                fetchUrl: "http://coral.qq.com/",
                wfetchUrl: "http://w.coral.qq.com/",
                popCallback: "parent.popCallback",
                reportCallback: "parent.reportCallback",
                upCallback: "parent.upCallback",
                $popObj: a("#popObj"),
                $loginFlag: a("#wraper"),
                $realtimeComments: 0,
                $insertFlag: "comment",
                $nowDate: new Date,
                $urlapi: {
                    userId: 0,
                    first: "",
                    last: "",
                    msgid: "",
                    pageflag: 0
                },
                $urlapi_mycomment: {
                    userId: 0,
                    first: "",
                    last: "",
                    msgid: "",
                    pageflag: 0
                },
                $urlapi_userComment: {
                    userId: 0,
                    first: "",
                    last: "",
                    msgid: "",
                    pageflag: 0
                },
                loginuin: 0,
                pubSucEvent: "commentpubsuccess",
                topContentTips: "",
                homePageSize: 10,
                centerPageSize: 10,
                loadPageSize: 20,
                newsNum: 0,
                columSource: 1,
                columCode: 1,
                columApi: 1,
                columLink: 1,
                columHot: 1,
                commentNumbers: "",
                centerFlag: 0,
                changeFlag: 0,
                reportId: "",
                hotPageSize: 10,
                order: "",
                upId: "",
                lastId: 0,
                timer: "",
                imgNum: 0,
                targetNum: 0,
                scrollFlag: 1,
                noImg: a.getUrlParam("noimg") || 0
            }
})