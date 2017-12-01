setTimeout(function(){  

var protocol = window.location.protocol,
	pathname = window.location.pathname;

if(window.location.pathname == "/" || !/checkout\/deliveryInfo/i.test(window.location.pathname) || !/checkout\/billing_review/i.test(window.location.pathname) || !/cart/i.test(window.location.pathname)){
	var footer = document.getElementsByClassName('m-footer')[0],
		head = document.getElementsByTagName('head')[0],
		style = document.createElement('style'),
		cssStyle = '\
			<style type="text/css">\n\
				.vd-mobile{display:none;}\n\
				@media screen and (max-width:940px){\n\
						#vd-container{width:100% !important; position:relative; z-index:100 !important;}\n\
						.vd-top{height:auto !important;}\n\
					}\n\
				@media screen and (max-width:480px){\n\
						.vd-desk{display:none;}\n\
						.vd-mobile{display:block;}\n\
					}\n\
			</style>\n\
		',
     
     	bannerContent = '\
				<a href="https://www.teleflora.com/christmas-flowers/cat210045"><div id="vd-container" style="width:940px;margin:0 auto;line-height:0;z-index:99999;">\n\
					<img class="vd-top vd-desk" src="//img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto:eco/prod/banners/TF170907-11_TF.com_XMas_TopBanner_Desktop_940x90.jpg" width="100%" border="0" />\n\
					<img class="vd-top vd-mobile" src="//img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto:eco/prod/banners/TF170907-11_TF.com_XMas_TopBanner_Mobile_480x90.jpg" width="100%" border="0" />\n\
				</div><a>\n\
			',
     
		Banner = document.createElement('div');
		Banner.innerHTML = bannerContent;

 footer.insertAdjacentElement('beforebegin',Banner);
	
	$('head').append(cssStyle);
	$('body').append(tcModal);
	$('#vc-right').click(function(){
		$('#banner-modal').modal('show');
	});
}
 
 }, 1000);