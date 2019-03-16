
(function() {
    // Dynamic values from page request
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"6","deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.14.3","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"73.0.3683.75","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"weather":{"windy":"0","currentCondition":"cloudy","apparentTemperature":10.0,"temperature":10.0,"windSpeed":1,"cloudCoverage":44,"conditions":[{"name":"cloudy","weight":0}]},"ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"TN","ipCityGeonameId":"4644585","ipCity":"Nashville","ipPostalCode":"37215","ipLat":36.0964,"ipLng":-86.8212,"accountId":"559cecfe","folderId":"72709804","placementId":"f723e2f2","supplierId":null,"sessionId":"s1552693449x7e1f940653eeb9x85002480","purpose":"live","secure":1,"clientTimestamp":"1552693433.270","clientTimeZoneOffsetInMinutes":300,"clientIp":"99.45.48.91","gpsLat":null,"gpsLng":null,"language":"en","acceptLanguage":"en-US,en;q=0.9","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{},"variantChoices":{"WindowOpenWithDelay":"noDelay"},"neustarSegment":null,"authBasis":"1552693449579,1994828a,f723e2f2","authToken":"87014497a7a3d6ef3f74cb120db302c1","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[],"dynamicContent":{},"usedCustomFeedFields":[],"dynamicContentMetaData":{},"customFeedFields":[],"tuneIosQueryStringFragment":null,"tuneAndroidQueryStringFragment":null,"tuneCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"f723e2f2","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.14.3","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"73.0.3683.75","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"language":"en","ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"TN","ipCityGeonameId":"4644585","ipCity":"Nashville","weather":{"windy":"0","currentCondition":"cloudy","apparentTemperature":10.0,"temperature":10.0,"windSpeed":1,"cloudCoverage":44,"conditions":[{"name":"cloudy","weight":0}]},"clientTimestamp":"1552693433.270","clientTimeZoneOffsetInMinutes":300},"utSignals":null,"_mraidCheck":null,"externalAdServer":"Custom","externalCreativeId":null,"externalCreativeName":null,"externalPlacementId":null,"externalPlacementName":null,"externalSiteId":"D4BC81_B45A7C88_11B5EA1","externalSiteName":null,"externalSupplierId":null,"externalSupplierName":null,"externalLineItemId":null,"externalSessionId":null,"externalBundleId":null,"externalCreativeWidth":null,"externalCreativeHeight":null,"externalCampaignId":null,"externalCampaignName":null,"externalAdvertiserId":null,"clickUrl":"http://mpc.mxptint.net/9S1S24B755C7S5A8ES34316S12CS258SC0DSB35D13_B45A7C7A_11355615SD4BC81_B45A7C88_11B5EA1%3fhttp://r.mxptint.net%3f","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":0,"universalAndAppLinksInMRAID":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":1271157584,"second":1186867747},"skipOffset":null,"_enablePoliteLoading":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"_mopubExt":null,"enabledServices":["googleMaps","contentSharing"],"vastCompanion":0,"creativeVariantLockSize":null,"vastVersion":null,"country":"US","productCategoryCode":null,"campaignName":"23182: Pepsico: Pepsico: Team Rubicon at Walmart Q1 19","agencyId":null,"customPartnerAttributeBrandId":null,"expandDirection":"undefined","hostPageLoadId":"49807895943673763"};
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['{celtraAccountId}', "559cecfe"]
,['{celtraAgencyId}', ""]
,['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraAndroidAdvIdTrackingLimited}', ""]
,['{celtraAndroidAdvId}', ""]
,['{celtraCampaignId:int}', "1919981572"]
,['{celtraCampaignId}', "72709804"]
,['{celtraCampaignName}', "23182: Pepsico: Pepsico: Team Rubicon at Walmart Q1 19"]
,['{celtraCountryCode}', "US"]
,['{celtraCreativeId:int}', "429163146"]
,['{celtraCreativeId}', "1994828a"]
,['{celtraCreativeVariant:urlenc}', ""]
,['{celtraCreativeVariant}', ""]
,['{celtraCustomPartnerAttribute\\[code\\]}', ""]
,['{celtraExternalAdServer}', "Custom"]
,['{celtraExternalAdvertiserId}', ""]
,['{celtraExternalBundleId}', ""]
,['{celtraExternalCampaignId}', ""]
,['{celtraExternalCampaignName}', ""]
,['{celtraExternalCreativeId}', ""]
,['{celtraExternalCreativeName}', ""]
,['{celtraExternalLineItemId}', ""]
,['{celtraExternalPlacementId}', ""]
,['{celtraExternalPlacementName}', ""]
,['{celtraExternalSessionId}', ""]
,['{celtraExternalSiteId}', "D4BC81_B45A7C88_11B5EA1"]
,['{celtraExternalSiteName}', ""]
,['{celtraExternalSupplierId}', ""]
,['{celtraExternalSupplierName}', ""]
,['{celtraIosAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraIosAdvIdTrackingLimited}', ""]
,['{celtraIosAdvId}', ""]
,['{celtraPlacementId:int}', "4146324210"]
,['{celtraPlacementId}', "f723e2f2"]
,['{celtraPlatformAdvIdTrackingLimited}', ""]
,['{celtraPlatformAdvId}', ""]
,['{celtraProductCategoryCode}', ""]
,['{celtraProto}', "https"]
,['{celtraRandom}', (Math.random()+'').slice(2)]
,['{celtraSessionId}', "s1552693449x7e1f940653eeb9x85002480"]
,['{celtraSupplierId:int}', ""]
,['{celtraSupplierId}', ""]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/1994828a/compiled/web.js";
    var cacheParams = {"v": "2-831736b264", "secure": 1, "cachedVariantChoices": "W10-", "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0', "adx-in-banner-video": '1'};

    
    var trackers = (function() {
    return [
        // 3rd-party tracker (regular)
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros([])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.name == 'videoStart')
        return {urls: macros([])};

    if (event.name == 'videoFirstQuartile')
        return {urls: macros([])};

    if (event.name == 'videoMidpoint')
        return {urls: macros([])};

    if (event.name == 'videoThirdQuartile')
        return {urls: macros([])};

    if (event.name == 'videoComplete')
        return {urls: macros([])};

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},
// 3rd-party tracker (click regular)
function(event) {
    if (event.name === "urlOpened" && event.label === "https://www.walmart.com/col/622252184")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "urlOpened" && event.label === "https://www.walmart.com/col/622252184")
        return {urls: macros(["http://mpc.mxptint.net/9S1S24B755C7S5A8ES34316S12CS258SC0DSB35D13_B45A7C7A_11355615SD4BC81_B45A7C88_11B5EA1%3fhttp://r.mxptint.net%3f"]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };
       

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1552693449x7e1f940653eeb9x85002480"};
adLoadingEvent.clientTimestamp = new Date/1000;

trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
    // On IE 8+ URLs containing '%' character sometimes throw an error and
    // stop current JS run loop. One solution  would be to look for that
    // and replace it with '%25', but we've decided not to modify incoming
    // URLs, because this issue is really a combination of two external
    // problems: broken URL on a buggy browser.
    // https://celtra.atlassian.net/browse/MAB-4476
    try {
        var img = new Image;
        
        img.src = url;
    } catch(e) {}
});
    

    

    function buildPayloadUrl(payloadBase) {
      var pairs = [];
      for (var k in cacheParams)
          pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
      return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);

    
// Request and run payload
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
})();
  