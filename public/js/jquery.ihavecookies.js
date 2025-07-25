var options = {
  title: "&#x1F36A; Accept Cookies & Privacy Policy?",
  message:
    "There are no cookies used on this site, but if there were this message could be customised to provide more details. Click the <strong>accept</strong> button below to see the optional callback in action...",
  delay: 600,
  expires: 1,
  link: "privacy-policy.html",
  onAccept: function () {
    var myPreferences = $.fn.ihavecookies.cookie();
    console.log("Yay! The following preferences were saved...");
    console.log(myPreferences);
  },
  uncheckBoxes: true,
  acceptBtnLabel: "Accept Cookies",
  moreInfoLabel: "More information",
  cookieTypesTitle: "Select which cookies you want to accept",
  fixedCookieTypeLabel: "Essential",
  fixedCookieTypeDesc: "These are essential for the website to work correctly.",
};
$(document).ready(function () {
  $("body").ihavecookies(options);
  if ($.fn.ihavecookies.preference("marketing") === true) {
    console.log("This should run because marketing is accepted.");
  }
  $("#ihavecookiesBtn").on("click", function () {
    $("body").ihavecookies(options, "reinit");
  });
});
/*!
 * ihavecookies - jQuery plugin for displaying cookie/privacy message
 * v0.3.2
 *
 * Copyright (c) 2018 Ketan Mistry (https://iamketan.com.au)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */ (function ($) {
  $.fn.ihavecookies = function (options, event) {
    var $element = $(this);
    var settings = $.extend(
      {
        cookieTypes: [
          {
            type: "Site Preferences",
            value: "preferences",
            description:
              "These are cookies that are related to your site preferences, e.g. remembering your username, site colours, etc.",
          },
          {
            type: "Analytics",
            value: "analytics",
            description: "Cookies related to site visits, browser types, etc.",
          },
          {
            type: "Marketing",
            value: "marketing",
            description:
              "Cookies related to marketing, e.g. newsletters, social media, etc",
          },
        ],
        title: "Cookies & Privacy",
        message:
          "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches, and give us insights into user behavior so we can improve our communications and products.",
        link: "/privacy-policy",
        delay: 2000,
        expires: 30,
        moreInfoLabel: "More information",
        acceptBtnLabel: "Accept Cookies",
        advancedBtnLabel: "Customise Cookies",
        cookieTypesTitle: "Select cookies to accept",
        fixedCookieTypeLabel: "Necessary",
        fixedCookieTypeDesc:
          "These are cookies that are essential for the website to work correctly.",
        onAccept: function () {},
        uncheckBoxes: false,
      },
      options
    );
    var myCookie = getCookie("cookieControl");
    var myCookiePrefs = getCookie("cookieControlPrefs");
    if (!myCookie || !myCookiePrefs || event == "reinit") {
      $("#gdpr-cookie-message").remove();
      var cookieTypes =
        '<li><input type="checkbox" name="gdpr[]" value="necessary" checked="checked" disabled="disabled"> <label title="' +
        settings.fixedCookieTypeDesc +
        '">' +
        settings.fixedCookieTypeLabel +
        "</label></li>";
      preferences = JSON.parse(myCookiePrefs);
      $.each(settings.cookieTypes, function (index, field) {
        if (field.type !== "" && field.value !== "") {
          var cookieTypeDescription = "";
          if (field.description !== false) {
            cookieTypeDescription = ' title="' + field.description + '"';
          }
          cookieTypes +=
            '<li><input type="checkbox" id="gdpr-cookietype-' +
            field.value +
            '" name="gdpr[]" value="' +
            field.value +
            '" data-auto="on"> <label for="gdpr-cookietype-' +
            field.value +
            '"' +
            cookieTypeDescription +
            ">" +
            field.type +
            "</label></li>";
        }
      });
      var cookieMessage =
        '<div id="gdpr-cookie-message"><h4>' +
        settings.title +
        "</h4><p>" +
        settings.message +
        ' <a href="' +
        settings.link +
        '">' +
        settings.moreInfoLabel +
        '</a><div id="gdpr-cookie-types" style="display:none;"><h5>' +
        settings.cookieTypesTitle +
        "</h5><ul>" +
        cookieTypes +
        '</ul></div><p><button id="gdpr-cookie-accept" type="button">' +
        settings.acceptBtnLabel +
        '</button><button id="gdpr-cookie-advanced" type="button">' +
        settings.advancedBtnLabel +
        "</button></p></div>";
      setTimeout(function () {
        $($element).append(cookieMessage);
        $("#gdpr-cookie-message")
          .hide()
          .fadeIn("slow", function () {
            if (event == "reinit") {
              $("#gdpr-cookie-advanced").trigger("click");
              $.each(preferences, function (index, field) {
                $("input#gdpr-cookietype-" + field).prop("checked", true);
              });
            }
          });
      }, settings.delay);
      $("body").on("click", "#gdpr-cookie-accept", function () {
        dropCookie(true, settings.expires);
        $('input[name="gdpr[]"][data-auto="on"]').prop("checked", true);
        var prefs = [];
        $.each($('input[name="gdpr[]"]').serializeArray(), function (i, field) {
          prefs.push(field.value);
        });
        setCookie(
          "cookieControlPrefs",
          encodeURIComponent(JSON.stringify(prefs)),
          365
        );
        settings.onAccept.call(this);
      });
      $("body").on("click", "#gdpr-cookie-advanced", function () {
        $('input[name="gdpr[]"]:not(:disabled)')
          .attr("data-auto", "off")
          .prop("checked", false);
        $("#gdpr-cookie-types").slideDown("fast", function () {
          $("#gdpr-cookie-advanced").prop("disabled", true);
        });
      });
    } else {
      var cookieVal = true;
      if (myCookie == "false") {
        cookieVal = false;
      }
      dropCookie(cookieVal, settings.expires);
    }
    if (settings.uncheckBoxes === true) {
      $('input[type="checkbox"].ihavecookies').prop("checked", false);
    }
  };
  $.fn.ihavecookies.cookie = function () {
    var preferences = getCookie("cookieControlPrefs");
    return JSON.parse(preferences);
  };
  $.fn.ihavecookies.preference = function (cookieTypeValue) {
    var control = getCookie("cookieControl");
    var preferences = getCookie("cookieControlPrefs");
    preferences = JSON.parse(preferences);
    if (control === false) {
      return false;
    }
    if (preferences === false || preferences.indexOf(cookieTypeValue) === -1) {
      return false;
    }
    return true;
  };
  var dropCookie = function (value, expiryDays) {
    setCookie("cookieControl", value, expiryDays);
    $("#gdpr-cookie-message").fadeOut("fast", function () {
      $(this).remove();
    });
  };
  var setCookie = function (name, value, expiry_days) {
    var d = new Date();
    d.setTime(d.getTime() + expiry_days * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    return getCookie(name);
  };
  var getCookie = function (name) {
    var cookie_name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cookie_name) === 0) {
        return c.substring(cookie_name.length, c.length);
      }
    }
    return false;
  };
})(jQuery);
