
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.CXDICBU6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.BFVtOfRT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage-legacy.BjoY_gv8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.4bCN-fsQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal-legacy.DAwcWkFm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods-legacy.D9lCJCtu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup-legacy.km4lO55Y.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown-legacy.33P-ZLEC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MarketsProDisclaimer-legacy.CFjZNdp7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo-legacy.BxrdnHE9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.CnxDgf6S.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo-legacy.BCjWtk_f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks-legacy.a_u4Xn7i.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment-legacy.Po3sTRnp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin-legacy._XWn2fC-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShopPayRequiresVerification-legacy.V27GV82V.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section-legacy.EWg5khAc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk-legacy.UMqbEeZ5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader-legacy.CNV1FTC_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage-legacy.6k1tms7Q.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.C2jqNTQm.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture-legacy.DewEDLjx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context-legacy.FNBy6wYt.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions-legacy.BiJg9_qc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact-legacy.GaVkLFqP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList-legacy.D5AvsB3X.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch-legacy.B5WQ6rpa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.BmJh99RV.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  