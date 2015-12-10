var utility = {};

utility.scrollToInnerPage = function(){
	$("[data-ut-from]").click(function(){
		var targetAnchor = $(this).data("ut-from");
		if (targetAnchor.length && $("[data-ut-to='" + targetAnchor + "']").length){
			var offsetTop = $("[data-ut-to='" + targetAnchor + "']").offset().top;
			$("html,body").animate({scrollTop: offsetTop}, "slow");
		}
	});
}

utility.expandCollapsePage = function(){
	$("[data-ut-collapseaccr]").click(function(){
		$('[data-ut-collapsetarget].in').collapse('hide');
	});
	$("[data-ut-expandaccr]").click(function(){
		$("[data-ut-collapsetarget]:not('.in')").collapse('show');
	});
}

utility.pushState = function(url){
	if ('history' in window && 'pushState' in history) {
		window.history.pushState(
	        {url: url},
	        document.title,
	        url
	    );   
	}else{
		window.location.href = url;
	}
}

utility.adjustCenter = function(url){
	function resize(){
		if ($("[data-ut-ctsdheight]").length){
			$.each($("[data-ut-ctsdheight]"), function(index, value){
				var id = $("[data-ut-ctsdheight]:eq(" + index + ")").data('ut-ctsdheight');
				if (id){
					if ($("[data-ut-ctrcheight='" + id + "']").length){
						var receiverContainerHeight = $("[data-ut-ctrcheight='" + id + "']").height(),
							senderContainerHeight = $("[data-ut-ctsdheight]:eq(" + index + ")").height();
						$("[data-ut-ctrcheight='" + id + "']").css({
							"top" : "50%",
							"marginTop" : "-" + receiverContainerHeight / 2 + "px"
						})
					}
				}
			});
		}
	}
	resize();
	$(window).on("throttledresize", function( ) {
	    resize();
	});
}

utility.toggleActive = function(targetClass){
	var toggleClass = targetClass || 'active';
	$("[data-ut-toggleActive]").click(function(){
		$("[data-ut-toggleActive]").removeClass(toggleClass);
		$(this).addClass(toggleClass);
	});
}