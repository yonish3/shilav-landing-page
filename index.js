var appInsights = window.appInsights || function (config) { function i(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = document, e = window, o = "script", s = "AuthenticatedUserContext", h = "start", c = "stop", l = "Track", a = l + "Event", v = l + "Page", y = u.createElement(o), r, f; y.src = config.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js"; u.getElementsByTagName(o)[0].parentNode.appendChild(y); try { t.cookie = u.cookie } catch (p) { } for (t.queue = [], t.version = "1.0", r = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; r.length;)i("track" + r.pop()); return i("set" + s), i("clear" + s), i(h + a), i(c + a), i(h + v), i(c + v), i("flush"), config.disableExceptionTracking || (r = "onerror", i("_" + r), f = e[r], e[r] = function (config, i, u, e, o) { var s = f && f(config, i, u, e, o); return s !== !0 && t["_" + r](config, i, u, e, o), s }), t }({ instrumentationKey: "32515ebe-b12c-467c-b91d-24c2588085da" }); window.appInsights = appInsights; appInsights.trackPageView();


<script
type="text/javascript">$(function () { $.datepicker.setDefaults($.datepicker.regional["he"]); });</script>
<script type="text/javascript">
var currentLeadFormName = "smartphone";
window.page_direction = 'rtl';
$(document).ready(

    function () {

        $('.ddl-select-label-in').closest('.field').addClass("hideSelectTitle");

        $('input[type="text"][title],input[type="date"][title],input[type="number"][title],textarea').each(function (index, element) {
            if (this.value == '') {
                this.value = $(this).attr('title');
                $(this).addClass('text-label');
            }
            $(this).closest('.field').addClass("hideTitle");

            var spanLabel = $(this).parent().siblings("span.label");

            if ($(this).attr('type') === 'number' && !spanLabel.is(":visible")) {
                $(this).prop('placeholder', spanLabel.text());
            }

            if ($(this).attr('type') === 'date' && !spanLabel.is(":visible")) {
                $(this).attr('data-placeholder', spanLabel.text());
            }

            $(this).focus(function () {
                if (this.value == $(this).attr('title')) {
                    this.value = '';
                    $(this).removeClass('text-label');
                    if ($(this).closest('.wfield').hasClass("validation-in-rtl")) {
                        $(this).closest('.wfield').removeClass("validation-in-rtl");
                    }
                }
                else {
                    if ($(this).closest('.wfield').hasClass("label-in-validation-rtl")) {
                        $(this).closest('.wfield').addClass("validation-in-rtl");
                    }
                }
            });

            if ($(this).closest('.wfield').hasClass("label-in-validation-rtl")) {
                $(this).keypress(function () {
                    $(this).closest('.wfield').addClass("validation-in-rtl");
                });
            }

            $(this).change(function () {
                if (this.value != $(this).attr('title')) {
                    $(this).removeClass('text-label');
                }
            });

            $(this).blur(function () {
                if (this.value == '') {
                    this.value = $(this).attr('title');
                    $(this).addClass('text-label');
                    if ($(this).closest('.wfield').hasClass("validation-in-rtl")) {
                        $(this).closest('.wfield').removeClass("validation-in-rtl");
                    }
                }
                else {
                    if ($(this).closest('.wfield').hasClass("label-in-validation-rtl")) {
                        $(this).closest('.wfield').addClass("validation-in-rtl");
                    }
                }
            });
        });

    }

);

$(function () {

    $('.vp_radio').buttonset();
    $('.vp_datepicker').datepicker({ dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, yearRange: "-100:+25" });
    //,showOn: "button",buttonImage: "/App_Themes/AtpTemplateEngine/calendar.gif",buttonImageOnly: false

    $("form:first").validationEngine('attach', { promptPosition: "topRight:0", scroll: false }); $(".field:nth-child(odd)").addClass("field_odd");
});
</script>
<script type="text/javascript">
try {
    if (isMobile.any()) {
        $('select').css('display', '').width('100%');
        $('select[multiple="multiple"]').select2();
    }
    else $('select').css('display', '').select2();
} catch (e) {
    $('select').css('display', '').select2();
    $('select.tranzila-quantity').css('display', '').select2();
    $('select.tranzila-quantity').select2({ dropdownCssClass: 'tranzila-quantity' });
}
$('select.multiple-label-in').each(function (index) {
    $(this).select2({ placeholder: $(this).attr("title") });
});
$('.vp_radio').buttonset();
$('.vp_datepicker').datepicker({ dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, yearRange: "-100:+25" });
//,showOn: "button",buttonImage: "/App_Themes/AtpTemplateEngine/calendar.gif",buttonImageOnly: false


</script>