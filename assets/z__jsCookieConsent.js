Shopify.theme.jsCookieConsent = {
  cookieKey: 'cookie-consent',

  init: function ($section) {
    var data = Shopify.theme.getSectionData($section);
    this.cookieDays = (data && data.cookie_days) ? parseInt(data.cookie_days, 10) : 365;

    var $banner = $section.find('[data-cookie-consent]');
    if (!$banner.length) return;

    if (Cookies.get(this.cookieKey)) {
      return;
    }

    $banner.removeAttr('hidden');

    $banner.on('click.cookieConsent', '[data-cookie-accept]', function (e) {
      e.preventDefault();
      Shopify.theme.jsCookieConsent.choose('accepted', $banner);
    });

    $banner.on('click.cookieConsent', '[data-cookie-reject]', function (e) {
      e.preventDefault();
      Shopify.theme.jsCookieConsent.choose('rejected', $banner);
    });
  },

  choose: function (value, $banner) {
    Cookies.set(this.cookieKey, value, {
      expires: this.cookieDays,
      sameSite: 'Lax'
    });
    $banner.attr('hidden', '');
    $banner.off('click.cookieConsent');
    document.dispatchEvent(new CustomEvent('cookie-consent:set', {
      detail: { value: value }
    }));
  },

  unload: function ($section) {
    var $banner = $section.find('[data-cookie-consent]');
    if ($banner.length) {
      $banner.off('click.cookieConsent');
    }
  }
};

jQuery(document).ready(function () {
  jQuery('.jsCookieConsent').each(function () {
    var $section = jQuery(this);
    if ($section.data('cookieConsentInit')) return;
    $section.data('cookieConsentInit', true);
    Shopify.theme.jsCookieConsent.init($section);
  });
});
