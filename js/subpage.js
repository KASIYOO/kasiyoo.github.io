jQuery(document).ready(function ($) {

    NProgress.start();
    //iconmenu animate
    var $logo_a = $("#logo");
    var $a_A = $("#a");
    var $a_S = $("#s");
    var $a_I = $("#i");
    var $a_Y = $("#y");
    var $a_O = $("#o");
    var $a_OO = $("#oo");
    var ico = $(".iconmenu");
    var $menu = $(".menu");
    var $musical = $(".menu_tool img");
    var $move = $(".me,html,#container");
    //当鼠标点击菜单
    var num = 0;
    var mum = 0;
    function keepPositioin() {
        var he_width = $(document).width();
        var l_r_width = (he_width - 1000) / 2;
        var container_2_height = $("#home_container_2").height();
        $(".keepPosition").css({
            "width": l_r_width + 'px',
            "height": container_2_height + 'px'
        });

    }
    keepPositioin();
    document.oncontextmenu = function () {
        return false;
    };
    
    // stop refresh
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 116) {
            return false;
        }
    };
    //    
    //   function bgstyleChange(){
    //   var styleChange_left= $("#home_container_2").offset().left;
    //    var styleChange_top=$("#home_container_2").offset().top;
    //    var styleChange=$("#styleChange");
    //    
    //    styleChange.css({"left":styleChange_left,"top":styleChange_top});}
    //    bgstyleChange();

    //make the "div" in the center
    $.fn.center = function () {
        return this.each(function () {
            var $this = $(this),
                parent = $this.parent(),
                topPos,
                topMargin,
                leftMargin,
                resizeTimeout;
            if (parent.is("body:not(.root-height-set)")) {
                $("html,body").css("height", "100%").addClass("root-height-set");
            }
            if ($this.css("position") === "absolute" || $this.css("position") === "fixed") {
                topPos = "50%";
                topMargin = "-" + Math.round($this.outerHeight() / 2) + "px";
                leftMargin = "-" + Math.round($this.outerWidth() / 2) + "px";
                $this.css({
                    "left": "50%",
                    "margin-left": leftMargin
                });
            } else {
                topPos = Math.floor((parent.height() - $this.outerHeight()) / 2);
                topMargin = "auto";
                $this.css({
                    "position": "relative",
                    "margin-left": "auto",
                    "margin-right": "auto"
                });
            }
            $this.css({
                "top": topPos,
                "margin-top": topMargin
            });
            $(window).resize(function () {
                if (resizeTimeout) {
                    clearTimeout(resizeTimeout);
                }
                resizeTimeout = setTimeout(function () {
                    if ($this.css("position") === "absolute") {
                        topMargin = "-" + Math.round($this.outerHeight() / 2) + "px";
                        leftMargin = "-" + Math.round($this.outerWidth() / 2) + "px";
                        $this.css({
                            "margin-left": leftMargin,
                            "margin-top": topMargin
                        });
                    } else {
                        topPos = Math.floor((parent.height() - $this.outerHeight()) / 2);
                        $this.css("top", topPos);
                    }
                }, 150);
            });
        });
    };
    $("#centerdiv").center();

    //stop musical
    $musical.click(function (e) {
        if (mum++ % 2 === 0) {
            document.getElementById('musical').pause();

            $musical.attr({
                "src": "/image/musical%20audio.gif"
            });
        } else {
            document.getElementById('musical').play();


            $musical.attr({
                "src": "/image/muscial-audio.gif"
            });
        }

    });

    //animation for menu
    ico.click(function (e) {
        if (num++ % 2 === 0) {
            $menu.addClass("ox");
            ico.children().css({
                "background-color": "#fff"
            });
            $("#goTopBtn").css({
                "color": "#fff"
            });
            $move.css({
                right: "300px"
            });

        } else {
            $menu.removeClass("ox");
            ico.children().css({
                "background-color": " #242323"
            });
            $("#goTopBtn").css({
                "color": "#242323"
            });
            $move.css({
                right: "0"
            });
        }
        e.preventDefault(); //阻止元素的默认动作（如果存在） 
    });
    $(".paper").click(function () {
        if ($menu.hasClass("ox")) {
            ico.trigger('click');
        }
    });
    $(".menu a").click(function(){
             setTimeout(function(){
                 ico.trigger('click');
             },500);
    });
    $(window).scroll(function () {
        var toped = $(window).scrollTop();
        
        //           bgstyleChange();
        if (toped > 0) {
            $("#goTopBtn").css("display", "block");
        } else {
            $("#goTopBtn").css("display", "none");
        }
    });

    $("#goTopBtn").click(function () {
        var toped = $(window).scrollTop();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    //logo change
    $logo_a.mouseenter(
        function () {

            $a_A.css({
                left: '0px',
                opacity: '1',
                transition: "all 0.2s  linear 0.05s",
                "-moz-transition": "all 0.2s  linear 0.05s",
                "-o-transition": "all 0.2s  linear 0.05s",
                "-webkit-transition": "all 0.2s  linear 0.05s",
                "-ms-transition": "all 0.2s  linear 0.05s"

            });
            $a_S.css({
                left: '0px',
                opacity: '1',
                transition: 'all 0.2s  linear 0.1s',
                "-moz-transition": 'all 0.2s  linear 0.1s',
                "-o-transition": 'all 0.2s  linear 0.1s',
                "-webkit-transition": 'all 0.2s  linear 0.1s',
                "-ms-transition": 'all 0.2s  linear 0.1s',
            });
            $a_I.css({
                left: '0px',
                opacity: '1',
                transition: 'all 0.2s  linear 0.15s',
                "-moz-transition": 'all 0.2s  linear 0.15s',
                "-o-transition": 'all 0.2s  linear 0.15s',
                "-webkit-transition": 'all 0.2s  linear 0.15s',
                "-ms-transition": 'all 0.2s  linear 0.15s',

            });

            $a_Y.css({

                left: '0px',
                opacity: '1',
                transition: 'all 0.2s  linear 0.2s',
                "-moz-transition": 'all 0.2s  linear 0.2s',
                "-o-transition": 'all 0.2s  linear 0.2s',
                "-webkit-transition": 'all 0.2s  linear 0.2s',
                "-ms-transition": 'all 0.2s  linear 0.2s',

            });
            $a_O.css({
                left: '0px',
                opacity: '1',
                transition: 'all 0.2s  linear 0.25s',
                "-moz-transition": 'all 0.2s  linear 0.25s',
                "-o-transition": 'all 0.2s  linear 0.25s',
                "-webkit-transition": 'all 0.2s  linear 0.25s',
                "-ms-transition": 'all 0.2s  linear 0.25s',
            });
            $a_OO.css({
                left: '0px',
                opacity: '1',
                transition: 'all 0.2s  linear 0.3s',
                "-moz-transition": 'all 0.2s  linear 0.3s',
                "-o-transition": 'all 0.2s  linear 0.3s',
                "-webkit-transition": 'all 0.2s  linear 0.3s',
                "-ms-transition": 'all 0.2s  linear 0.3s',
            });

        }

    );

    $logo_a.mouseleave(
        function () {
            $a_A.css({
                left: '-20px',
                opacity: '0',
                transition: "all 0.2s  linear 0.3s",
                "-moz-transition": 'all 0.2s  linear 0.3s',
                "-o-transition": 'all 0.2s  linear 0.3s',
                "-webkit-transition": 'all 0.2s  linear 0.3s',
                "-ms-transition": 'all 0.2s  linear 0.3s',
            });
            $a_S.css({
                left: '-20px',
                opacity: '0',
                transition: 'all 0.2s  linear 0.25s',
                "-moz-transition": 'all 0.2s  linear 0.25s',
                "-o-transition": 'all 0.2s  linear 0.25s',
                "-webkit-transition": 'all 0.2s  linear 0.25s',
                "-ms-transition": 'all 0.2s  linear 0.25s',
            });
            $a_I.css({
                left: '-20px',
                opacity: '0',
                transition: 'all 0.2s  linear 0.2s',
                "-moz-transition": 'all 0.2s  linear 0.2s',
                "-o-transition": 'all 0.2s  linear 0.2s',
                "-webkit-transition": 'all 0.2s  linear 0.2s',
                "-ms-transition": 'all 0.2s  linear 0.2s',
            });
            $a_Y.css({
                left: '-20px',
                opacity: '0',
                transition: 'all 0.2s  linear 0.15s',
                "-moz-transition": 'all 0.2s  linear 0.15s',
                "-o-transition": 'all 0.2s  linear 0.15s',
                "-webkit-transition": 'all 0.2s  linear 0.15s',
                "-ms-transition": 'all 0.2s  linear 0.15s',
            });
            $a_O.css({
                left: '-20px',
                opacity: '0',
                transition: 'all 0.2s  linear 0.1s',
                "-moz-transition": 'all 0.2s  linear 0.1s',
                "-o-transition": 'all 0.2s  linear 0.1s',
                "-webkit-transition": 'all 0.2s  linear 0.1s',
                "-ms-transition": 'all 0.2s  linear 0.1s',
            });
            $a_OO.css({
                left: '-20px',
                opacity: '0',
                transition: 'all 0.2s  linear 0.05s',
                "-moz-transition": "all 0.2s  linear 0.05s",
                "-o-transition": "all 0.2s  linear 0.05s",
                "-webkit-transition": "all 0.2s  linear 0.05s",
                "-ms-transition": "all 0.2s  linear 0.05s"
            });
        }
    );
    //moblie layout
    var str = "<embed  class='str'  id='mobile_port_title'  src='/svg/mobile_title_portfolio.svg'>";
    var str2 = "<embed class='str2' id='port_title' src='/svg/title_portfolio.svg'>";
    var str3 = "<embed class='str' id='mobile_about_title' src='/svg/mobile_title_about.svg'>";
    var str4 = "<embed class='str2' id='about_title' src='/svg/title_about.svg'>";
    if ($(window).width() < 640) {
        $("#port_title #about_title").remove();
        $(".home_container_2_title").html(str);
        $(".home_container_3_title").html(str3);
    } else {
        $('#mobile_port_title #mobile_about_title').remove();
        $(".home_container_2_title").html(str2);
        $(".home_container_3_title").html(str4);
    }
    $(window).bind('resize', function () {
        keepPositioin();
        var win_width = $(window).width();
        if (win_width < 640 && (!$("#mobile_port_title").hasClass('str') || !("#mobile_about_title").hasClass("str"))) {
            $("#port_title #about_title").remove();
            $(".home_container_2_title").html(str);
            $(".home_container_3_title").html(str3);
        } else if (win_width > 641 && (!$("#port_title").hasClass('str2') || !("#about_title").hasClass("str2"))) {
            $('#mobile_port_title #mobile_about_title').remove();
            $(".home_container_2_title").html(str2);
            $(".home_container_3_title").html(str4);
        }
    });
      

    $(document).pjax('a[data-pjax]', '#container_var', {
        fragment: '#container_var',
        timeout: 5000
    });
    $(document).on('pjax:start', function () {
        $('#fade').show();
    });
    $(document).on('pjax:end', function () {
        $('#fade').fadeOut(2500);
    });
    

  
   
    // loading bar done
    $(window).load(function () {

    NProgress.done();
 
});

});
