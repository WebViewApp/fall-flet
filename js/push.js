document.addEventListener('deviceready', function () {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
  
    window.plugins.OneSignal
      .startInit("b0035cd6-e59b-477f-91e3-17ccc4732004")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
  }, false);