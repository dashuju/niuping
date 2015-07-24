define(['jquery','app/options','app/createHtml'], function($,options,createHtml){
	//
	var o=options;
	// console.log(o)
var html='';
	var dataFn={
		d:{},
		init:function(){
			var _this=this;
			$.ajax({
				url: 'http://coral.qq.com/home/comment?lastid=0&reqnum=20',
				type: 'GET',
				dataType: 'jsonp',
				jsonpCallback:'mainComment'
			})
			.done(function(data) {

				console.log(33,data);
				html=createHtml.init(data)
				$('#row1').html(html)
				// _this.d=data;
				// o.dataJson=data;
				// return _this.get();
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			// console.log(22,_this.d)
			// setTimeout(function(){
		 //        console.log(111,    _this.d)
		 //        return _this.d;
		 //    },1000)
			

			// o.$mainBody.html()
		},
		get:function(){
			this.init()
			// console.log(444,this.d)
			return this.d
		}

	}
	return dataFn;
})