$(document).ready(function(){
    $('.resume').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = 'uploads/Justin Zhu - Resume.pdf';
    });

/*    if ($(window).width() > 750) {
        $("html, body").addClass("bgPicture");
    }
    $(window).resize(function(){
        if ($(window).width() > 750) {
            console.log($(window).width());
            $("html, body").addClass("bgPicture");
        } else {
            $("html, body").removeClass("bgPicture");
        }
    });*/


    /*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);
$.backstretch("img/bg.jpg");








    /********* AXJAX Form *******/
    // Get the form.
    var form = $('#ajax-contact');
    // Get the messages div.
    var formMessages = $('#form-messages');
    // TODO: The rest of the code will go here...
    $("form").submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

        $(".contact p#confirmation").addClass("confirmation");
    });

    // Add HighCharts to represent list of skills
    function chart() {
        $("#container img").remove();
        $('#container').highcharts({
            chart: {
                type: 'column',
                marginTop: 135,
                renderTo: 'histogram', defaultSeriesType: 'bar',
                         backgroundColor:'rgba(255, 255, 255, 0)'
            },
            title: {
                text: 'List of Known Web Technologies',
                style: {
                    color: '#000', fontWeight: '400', fontFamily: '"Open Sans", sans-serif', fontSize: '30px'
                }
            },  
            subtitle: {
                text: '*Demonstration only; does not reflect level of skill.'
            },
            xAxis: {
                categories: [
                    'HTML5', 'CSS3', 'JS/jQuery', 'Bootstrap', 'AngularJS', 'AJAX/JSON', 'API', 'Git', 'Sass', 'Linux'
                ],
                labels: {
                    style: {
                        color: 'black'
                    }
                },
                crosshair: true,
            },
            yAxis: {
                min: 0,
                max: 5,
                tickInterval: 1,
                title: {
                    text: 'Rating',
                    style: {
                        color: 'black'
                    }
                },
                labels: {
                    style: {
                        color: 'black'
                    }
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                shared: true, useHTML: true
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.category}</span>: <b>{point.y}<br/>'
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2, borderWidth: 0
                }
            },
            series: [{
                name: "Web Technology", data: [5,4,3,5,2,1,3,4,5,1], colorByPoint: true
            }]
        }); 
    }; chart();
});
