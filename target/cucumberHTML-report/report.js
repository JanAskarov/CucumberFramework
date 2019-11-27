$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EtsySearchFunctionality.feature");
formatter.feature({
  "line": 2,
  "name": "Etsy Search Functionality",
  "description": "",
  "id": "etsy-search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-103"
    },
    {
      "line": 1,
      "name": "@ui"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate Etsy Search message",
  "description": "",
  "id": "etsy-search-functionality;validate-etsy-search-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TECTC-1011"
    },
    {
      "line": 4,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate Etsy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches for \"\u003citem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate search message have word \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "etsy-search-functionality;validate-etsy-search-message;",
  "rows": [
    {
      "cells": [
        "item"
      ],
      "line": 10,
      "id": "etsy-search-functionality;validate-etsy-search-message;;1"
    },
    {
      "cells": [
        "carpet"
      ],
      "line": 11,
      "id": "etsy-search-functionality;validate-etsy-search-message;;2"
    },
    {
      "cells": [
        "123"
      ],
      "line": 12,
      "id": "etsy-search-functionality;validate-etsy-search-message;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3723287700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate Etsy Search message",
  "description": "",
  "id": "etsy-search-functionality;validate-etsy-search-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-103"
    },
    {
      "line": 1,
      "name": "@ui"
    },
    {
      "line": 4,
      "name": "@smokeTest"
    },
    {
      "line": 4,
      "name": "@TECTC-1011"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate Etsy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches for \"carpet\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate search message have word \"carpet\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EtsySteps.navigate_Etsy_Homepage()"
});
formatter.result({
  "duration": 3130324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carpet",
      "offset": 19
    }
  ],
  "location": "EtsySteps.user_searches_for(String)"
});
formatter.result({
  "duration": 3103239000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carpet",
      "offset": 35
    }
  ],
  "location": "EtsySteps.validate_search_message_have_word(String)"
});
formatter.result({
  "duration": 72573000,
  "status": "passed"
});
formatter.after({
  "duration": 784094800,
  "status": "passed"
});
formatter.before({
  "duration": 2175756500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate Etsy Search message",
  "description": "",
  "id": "etsy-search-functionality;validate-etsy-search-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-103"
    },
    {
      "line": 1,
      "name": "@ui"
    },
    {
      "line": 4,
      "name": "@smokeTest"
    },
    {
      "line": 4,
      "name": "@TECTC-1011"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate Etsy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches for \"123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Validate search message have word \"123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EtsySteps.navigate_Etsy_Homepage()"
});
formatter.result({
  "duration": 3043854200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 19
    }
  ],
  "location": "EtsySteps.user_searches_for(String)"
});
formatter.result({
  "duration": 2989205300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 35
    }
  ],
  "location": "EtsySteps.validate_search_message_have_word(String)"
});
formatter.result({
  "duration": 76510800,
  "status": "passed"
});
formatter.after({
  "duration": 734143400,
  "status": "passed"
});
formatter.before({
  "duration": 2134461400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validating over price functionality",
  "description": "",
  "id": "etsy-search-functionality;validating-over-price-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@TECTC-1014"
    },
    {
      "line": 36,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Navigate Etsy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User searches for \"carpet\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User clicks on Over Price checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User verifies all items prices are over that price",
  "keyword": "Then "
});
formatter.match({
  "location": "EtsySteps.navigate_Etsy_Homepage()"
});
formatter.result({
  "duration": 5836877800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carpet",
      "offset": 19
    }
  ],
  "location": "EtsySteps.user_searches_for(String)"
});
formatter.result({
  "duration": 3711604700,
  "status": "passed"
});
formatter.match({
  "location": "EtsySteps.user_clicks_on_Over_Price_checkbox()"
});
formatter.result({
  "duration": 3674417800,
  "status": "passed"
});
formatter.match({
  "location": "EtsySteps.user_verifies_all_items_prices_are_over_that_price()"
});
formatter.result({
  "duration": 144693300,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefs.EtsySteps.user_verifies_all_items_prices_are_over_that_price(EtsySteps.java:116)\r\n\tat ✽.Then User verifies all items prices are over that price(EtsySearchFunctionality.feature:41)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1325111400,
  "status": "passed"
});
formatter.uri("VerifyLoginFunctionality.feature");
formatter.feature({
  "line": 2,
  "name": "Verifying login functionality",
  "description": "",
  "id": "verifying-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-101"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    },
    {
      "line": 1,
      "name": "@ui"
    }
  ]
});
formatter.before({
  "duration": 2207689900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Common first steps",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "VerifyLoginFunctionalitySteps.navigate_to_login_page()"
});
formatter.result({
  "duration": 3748177400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verifying with valid credentials",
  "description": "",
  "id": "verifying-login-functionality;verifying-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User logs in with valid credentials username \"Tester\" password \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify user is in Homepage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 46
    },
    {
      "val": "test",
      "offset": 64
    }
  ],
  "location": "VerifyLoginFunctionalitySteps.login(String,String)"
});
formatter.result({
  "duration": 811810600,
  "status": "passed"
});
formatter.match({
  "location": "VerifyLoginFunctionalitySteps.verify_user_is_in_Homepage()"
});
formatter.result({
  "duration": 7185200,
  "status": "passed"
});
formatter.after({
  "duration": 916374700,
  "status": "passed"
});
formatter.uri("addingOrder.feature");
formatter.feature({
  "line": 2,
  "name": "Adding Order",
  "description": "",
  "id": "adding-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-102"
    },
    {
      "line": 1,
      "name": "@ui"
    },
    {
      "line": 1,
      "name": "@smokeTest"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    }
  ]
});
formatter.before({
  "duration": 2248799300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify create order functionality",
  "description": "",
  "id": "adding-order;verify-create-order-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User logs in with valid credentials username \"Tester\" password \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Order",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User creates new order",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Quantity",
        "Customer Name",
        "Street",
        "City",
        "State",
        "Zip",
        "Card Nr",
        "Expire Date"
      ],
      "line": 11
    },
    {
      "cells": [
        "ScreenSaver",
        "2",
        "Techtorial",
        "123 N tech",
        "Chicago",
        "IL",
        "60000",
        "123123123",
        "12/21"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verifies Order is created",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLoginFunctionalitySteps.navigate_to_login_page()"
});
formatter.result({
  "duration": 3310622800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 46
    },
    {
      "val": "test",
      "offset": 64
    }
  ],
  "location": "VerifyLoginFunctionalitySteps.login(String,String)"
});
formatter.result({
  "duration": 741153700,
  "status": "passed"
});
formatter.match({
  "location": "AddingOrderSteps.user_clicks_on_Order()"
});
formatter.result({
  "duration": 328950500,
  "status": "passed"
});
formatter.match({
  "location": "AddingOrderSteps.user_creates_new_order(DataTable)"
});
formatter.result({
  "duration": 1036523100,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefs.AddingOrderSteps.user_creates_new_order(AddingOrderSteps.java:42)\r\n\tat ✽.Then User creates new order(addingOrder.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddingOrderSteps.user_verifies_Order_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 955457200,
  "status": "passed"
});
formatter.before({
  "duration": 2259319100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify create order functionality with invalid data",
  "description": "",
  "id": "adding-order;verify-create-order-functionality-with-invalid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User logs in with invalid credentials username \"Tester\" password \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User clicks on order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User creates new order",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Quantity",
        "Customer Name",
        "Street",
        "City",
        "State",
        "Zip",
        "Card Number",
        "Expired Date"
      ],
      "line": 20
    },
    {
      "cells": [
        "ScreenSaver",
        "2",
        "Techtorial",
        "123 N Tech",
        "Chicago",
        "IL",
        "6jhsb",
        "718292",
        "12/21"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User verifies order \"is NOT\" created",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLoginFunctionalitySteps.navigate_to_login_page()"
});
formatter.result({
  "duration": 3296575600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 48
    },
    {
      "val": "test",
      "offset": 66
    }
  ],
  "location": "VerifyLoginFunctionalitySteps.user_logs_in_with_invalid_credentials_username_password(String,String)"
});
formatter.result({
  "duration": 824649600,
  "status": "passed"
});
formatter.match({
  "location": "AddingOrderSteps.user_clicks_on_order()"
});
formatter.result({
  "duration": 1136900,
  "status": "passed"
});
formatter.match({
  "location": "AddingOrderSteps.user_creates_new_order(DataTable)"
});
formatter.result({
  "duration": 5078478400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ctl00_MainContent_fmwOrder_ddlProduct\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O48R3B37\u0027, ip: \u0027192.168.1.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\jan\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:50259}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f3339823959d39ad75184faa1dd1f157\n*** Element info: {Using\u003did, value\u003dctl00_MainContent_fmwOrder_ddlProduct}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat stepDefs.AddingOrderSteps.user_creates_new_order(AddingOrderSteps.java:33)\r\n\tat ✽.Then User creates new order(addingOrder.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "is NOT",
      "offset": 21
    }
  ],
  "location": "AddingOrderSteps.user_verifies_order_created(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 984210300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify Delete functionality",
  "description": "",
  "id": "adding-order;verify-delete-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@TECTC-1015"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User logs in with valid credentials username \"Tester\" password \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User deletes \"\u003cName\u003e\" from table",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Validate that \"\u003cName\u003e\" is deleted",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "adding-order;verify-delete-functionality;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 33,
      "id": "adding-order;verify-delete-functionality;;1"
    },
    {
      "cells": [
        "Mark Smith"
      ],
      "line": 34,
      "id": "adding-order;verify-delete-functionality;;2"
    },
    {
      "cells": [
        "Samuel Clemens"
      ],
      "line": 35,
      "id": "adding-order;verify-delete-functionality;;3"
    },
    {
      "cells": [
        "Paul Brown"
      ],
      "line": 36,
      "id": "adding-order;verify-delete-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2198188500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify Delete functionality",
  "description": "",
  "id": "adding-order;verify-delete-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-102"
    },
    {
      "line": 1,
      "name": "@ui"
    },
    {
      "line": 25,
      "name": "@TECTC-1015"
    },
    {
      "line": 1,
      "name": "@smokeTest"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User logs in with valid credentials username \"Tester\" password \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User deletes \"Mark Smith\" from table",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Validate that \"Mark Smith\" is deleted",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLoginFunctionalitySteps.navigate_to_login_page()"
});
formatter.result({
  "duration": 3279575500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 46
    },
    {
      "val": "test",
      "offset": 64
    }
  ],
  "location": "VerifyLoginFunctionalitySteps.login(String,String)"
});
formatter.result({
  "duration": 771221600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark Smith",
      "offset": 14
    }
  ],
  "location": "AddingOrderSteps.user_deletes_from_table(String)"
});
formatter.result({
  "duration": 7051254700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark Smith",
      "offset": 15
    }
  ],
  "location": "AddingOrderSteps.validate_that_is_deleted(String)"
});
formatter.result({
  "duration": 199076200,
  "status": "passed"
});
formatter.after({
  "duration": 639766000,
  "status": "passed"
});
formatter.before({
  "duration": 2235939800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify Delete functionality",
  "description": "",
  "id": "adding-order;verify-delete-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-102"
    },
    {
      "line": 1,
      "name": "@ui"
    },
    {
      "line": 25,
      "name": "@TECTC-1015"
    },
    {
      "line": 1,
      "name": "@smokeTest"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User logs in with valid credentials username \"Tester\" password \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User deletes \"Samuel Clemens\" from table",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Validate that \"Samuel Clemens\" is deleted",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLoginFunctionalitySteps.navigate_to_login_page()"
});
formatter.result({
  "duration": 3385956400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 46
    },
    {
      "val": "test",
      "offset": 64
    }
  ],
  "location": "VerifyLoginFunctionalitySteps.login(String,String)"
});
formatter.result({
  "duration": 703413200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samuel Clemens",
      "offset": 14
    }
  ],
  "location": "AddingOrderSteps.user_deletes_from_table(String)"
});
formatter.result({
  "duration": 6705805100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samuel Clemens",
      "offset": 15
    }
  ],
  "location": "AddingOrderSteps.validate_that_is_deleted(String)"
});
formatter.result({
  "duration": 226423200,
  "status": "passed"
});
formatter.after({
  "duration": 651654100,
  "status": "passed"
});
formatter.before({
  "duration": 2275709700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify Delete functionality",
  "description": "",
  "id": "adding-order;verify-delete-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TEC-102"
    },
    {
      "line": 1,
      "name": "@ui"
    },
    {
      "line": 25,
      "name": "@TECTC-1015"
    },
    {
      "line": 1,
      "name": "@smokeTest"
    },
    {
      "line": 1,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User logs in with valid credentials username \"Tester\" password \"test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User deletes \"Paul Brown\" from table",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Validate that \"Paul Brown\" is deleted",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLoginFunctionalitySteps.navigate_to_login_page()"
});
formatter.result({
  "duration": 3467455900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 46
    },
    {
      "val": "test",
      "offset": 64
    }
  ],
  "location": "VerifyLoginFunctionalitySteps.login(String,String)"
});
formatter.result({
  "duration": 791185200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paul Brown",
      "offset": 14
    }
  ],
  "location": "AddingOrderSteps.user_deletes_from_table(String)"
});
formatter.result({
  "duration": 6846106600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paul Brown",
      "offset": 15
    }
  ],
  "location": "AddingOrderSteps.validate_that_is_deleted(String)"
});
formatter.result({
  "duration": 207644900,
  "status": "passed"
});
formatter.after({
  "duration": 669027500,
  "status": "passed"
});
});