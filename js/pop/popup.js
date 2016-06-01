$(function(){
	//首次加入china
	commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E5%85%A8%E5%9B%BD&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",chinaFn);
    //全国
	$("#china-btn").on('click',function(){
		$("#nowDot").css({'left':'17px'});
		$("#china-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E5%85%A8%E5%9B%BD&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",chinaFn);
	    return false;
	});

	//北京
	$("#beijing-btn").on('click',function(){
		$("#nowDot").css({'left':'53px'});
		$("#beijing-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E5%8C%97%E4%BA%AC&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",beijingFn);
	    return false;
	});

	//成都
	$("#chengdu-btn").on('click',function(){
		$("#nowDot").css({'left':'89px'});
		$("#chengdu-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E6%88%90%E9%83%BD&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",chengduFn);
	    return false;
	});

	//上海
	$("#shanghai-btn").on('click',function(){
		$("#nowDot").css({'left':'125px'});
		$("#shanghai-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E4%B8%8A%E6%B5%B7&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",shanghaiFn);
	    return false;
	});

	//广州
	$("#guangzhou-btn").on('click',function(){
		$("#nowDot").css({'left':'161px'});
		$("#guangzhou-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E5%B9%BF%E5%B7%9E&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",guangzhouFn);
	    return false;
	});

	//深圳
	$("#shenzhen-btn").on('click',function(){
		$("#nowDot").css({'left':'197px'});
		$("#shenzhen-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E6%B7%B1%E5%9C%B3&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",shenzhenFn);
	    return false;
	});

	//武汉
	$("#wuhan-btn").on('click',function(){
		$("#nowDot").css({'left':'233px'});
		$("#wuhan-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E6%AD%A6%E6%B1%89&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",wuhanFn);
	    return false;
	});

	//大连
	$("#dalian-btn").on('click',function(){
		$("#nowDot").css({'left':'269px'});
		$("#dalian-page").html("");
		commonAjaxFn("GET","http://www.shixiseng.com/interns?k=%E5%89%8D%E7%AB%AF&c=%E5%A4%A7%E8%BF%9E&s=0,0&d=&m=&x=&t=zh&ch=&p=1","html",dalianFn);
    	return false;
    });	
});
	$("#reloadBtn").on('click',function(){
		window.location.reload();
		return false;
	});
	
// common function
//ajax发送执行的公共函数
function commonAjaxFn(ajaxType, ajaxUrl, ajaxDataType, successFn){
	$.ajax({
	        type: ajaxType,
	        url: ajaxUrl,
	        dataType: ajaxDataType,
	        beforeSend: ajaxBeforeFn,
	        success: function(data){successFn(data)},
	        error: ajaxErrorFn,
	        complete: ajaxCompleteFn
    });
}
function ajaxFn(data){

}

//ajax执行前的公共函数
function ajaxBeforeFn(){
	$(".pop-div").show();
	$(".net-ok").hide();
	$(".spinner").show();       
}

//ajax执行完成后的公共函数
function ajaxCompleteFn(){
	$(".spinner").hide();
	$(".net-ok").show();
	$(".pop-div").hide();
}

//ajax执行后错误的公共函数
function ajaxErrorFn(){

}


// 每一个网站的处理函数

function dalianFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 9) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#dalian-page").html(ulHtml).show();
}

function chinaFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 12) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#china-page").html(ulHtml).show();
}

function beijingFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 9) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#beijing-page").html(ulHtml).show();
}

function shanghaiFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 9) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#shanghai-page").html(ulHtml).show();
}

function chengduFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 9) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#chengdu-page").html(ulHtml).show();
}
function guangzhouFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 9) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#guangzhou-page").html(ulHtml).show();
}

function shenzhenFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 9) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#shenzhen-page").html(ulHtml).show();
}

function wuhanFn(data){
	var ulHtml="";

	$(data).find("#load_box").find(".job_inf_inf").each(function(index, ele) {
		if (index > 9) { return false};
		 var title = $(ele).find('.job_head a').attr('title');
    var link = $(ele).find('.job_head a').attr('href');
    var money = $(ele).find('.money_box').text().slice(3);
    var company = $(ele).find('.company_name').text();
    var addr = $(ele).find('.addr_box').attr('title');

    var liHtml = '<li><a target="_blank" href="http://www.shixiseng.com'+link
          +'" title="'+title+'" "><p class="page-title">'+title
          +'</p>'
          +'<p class="page-brief">'+company+'|'+addr+'|'+money+'</p></a></li>';
		ulHtml += liHtml;
	});

	$(".cat-list ul").hide();
	$("#wuhan-page").html(ulHtml).show();
}
//tools
function delHtmlTag(str){
  return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
 }


//all page
function allPage(data){
	$(".container").text(data);
}

// version fn
function versionFn(data){
	var v = parseFloat($(data).find("#version").text());
	var locV = parseFloat($("#version").text());
	if(locV < v){
		$(".version-alert").show();
	}

}







