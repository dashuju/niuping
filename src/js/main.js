// console.log(111)
requirejs.config({
    //By default load any module IDs from js/lib
    // baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        // app: '../app',
        jquery:'../../vendor/jquery/jquery-1.11.3.min'
    }
});

// Start the main app logic.
requirejs(['jquery',  'app/getData','app/createHtml'],
function   ($,          getData,        createHtml) {
    
    getData.init();//初始化
    // console.log(123,    data)
    // var html=createHtml.init(data)
    // $('#row1').html(html)
});