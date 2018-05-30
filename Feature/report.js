$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FBlogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Facebook",
  "description": "",
  "id": "login-to-facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to FB with valid UN and PWD",
  "description": "",
  "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on FB home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters valid \"\u003cUN\u003e\" and \"\u003cPWD\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user homepage displays",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd;",
  "rows": [
    {
      "cells": [
        "UN",
        "PWD"
      ],
      "line": 9,
      "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd;;1"
    },
    {
      "cells": [
        "ali.hakeem20@gmail.com",
        "hakd@n123$"
      ],
      "line": 10,
      "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login to FB with valid UN and PWD",
  "description": "",
  "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on FB home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters valid \"ali.hakeem20@gmail.com\" and \"hakd@n123$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user homepage displays",
  "keyword": "Then "
});
formatter.match({
  "location": "TestClass.user_is_on_FB_home_page()"
});
formatter.result({
  "duration": 19884947734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ali.hakeem20@gmail.com",
      "offset": 19
    },
    {
      "val": "hakd@n123$",
      "offset": 48
    }
  ],
  "location": "TestClass.user_enters_valid_UN_and_PWD(String,String)"
});
formatter.result({
  "duration": 21683520457,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"u_0_2\"}\nCommand duration or timeout: 20.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027PersonalPC\u0027, ip: \u0027192.168.1.195\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.2, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 408ac8a4-c926-4350-b470-3289c3901ea5\n*** Element info: {Using\u003did, value\u003du_0_2}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat StepDefinitions.TestClass.user_enters_valid_UN_and_PWD(TestClass.java:29)\r\n\tat ✽.When user enters valid \"ali.hakeem20@gmail.com\" and \"hakd@n123$\"(FBlogin.feature:5)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"u_0_2\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027PersonalPC\u0027, ip: \u0027192.168.1.195\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ALIHAK~1/AppData/Local/Temp/anonymous7683346810350685362webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/ALIHAK~1/AppData/Local/Temp/anonymous7683346810350685362webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestClass.user_homepage_displays()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login to FB with valid UN and PWD and log out",
  "description": "",
  "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd-and-log-out",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on FB home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters valid \"\u003cUN\u003e\" and \"\u003cPWD\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user homepage displays",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd-and-log-out;",
  "rows": [
    {
      "cells": [
        "UN",
        "PWD"
      ],
      "line": 19,
      "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd-and-log-out;;1"
    },
    {
      "cells": [
        "ali.hakeem20@gmail.com",
        "hakd@n123$"
      ],
      "line": 20,
      "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd-and-log-out;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Login to FB with valid UN and PWD and log out",
  "description": "",
  "id": "login-to-facebook;login-to-fb-with-valid-un-and-pwd-and-log-out;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on FB home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters valid \"ali.hakeem20@gmail.com\" and \"hakd@n123$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user homepage displays",
  "keyword": "Then "
});
formatter.match({
  "location": "TestClass.user_is_on_FB_home_page()"
});
formatter.result({
  "duration": 16947752603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ali.hakeem20@gmail.com",
      "offset": 19
    },
    {
      "val": "hakd@n123$",
      "offset": 48
    }
  ],
  "location": "TestClass.user_enters_valid_UN_and_PWD(String,String)"
});
formatter.result({
  "duration": 21662229898,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"u_0_2\"}\nCommand duration or timeout: 20.15 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027PersonalPC\u0027, ip: \u0027192.168.1.195\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.2, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1c2c4f21-b9da-4419-a771-1ba65a915c66\n*** Element info: {Using\u003did, value\u003du_0_2}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat StepDefinitions.TestClass.user_enters_valid_UN_and_PWD(TestClass.java:29)\r\n\tat ✽.When user enters valid \"ali.hakeem20@gmail.com\" and \"hakd@n123$\"(FBlogin.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"u_0_2\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027PersonalPC\u0027, ip: \u0027192.168.1.195\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ALIHAK~1/AppData/Local/Temp/anonymous5887449514515473143webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/ALIHAK~1/AppData/Local/Temp/anonymous5887449514515473143webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestClass.user_homepage_displays()"
});
formatter.result({
  "status": "skipped"
});
});