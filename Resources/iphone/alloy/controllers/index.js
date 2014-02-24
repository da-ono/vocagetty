function Controller() {
    function itemclick(e) {
        var item = e.section.getItemAt(e.itemIndex);
        item.textJa.visible = item.textJa.visible ? false : true;
        e.section.updateItemAt(e.itemIndex, item);
    }
    function rightNavBtnClick() {
        $.nav.openWindow(Alloy.createController("add").getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#17a1ff",
        barColor: "#17a1ff",
        navTintColor: "#fff",
        statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "win",
        titleImage: "header_logo.png"
    });
    $.__views.rightNavBtn = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.ADD,
        color: "#fff",
        id: "rightNavBtn"
    });
    rightNavBtnClick ? $.__views.rightNavBtn.addEventListener("click", rightNavBtnClick) : __defers["$.__views.rightNavBtn!click!rightNavBtnClick"] = true;
    $.__views.win.rightNavButton = $.__views.rightNavBtn;
    var __alloyId5 = {};
    var __alloyId8 = [];
    var __alloyId9 = {
        type: "Ti.UI.ImageView",
        bindId: "icon",
        properties: {
            width: "85dp",
            height: "85dp",
            right: "0px",
            bindId: "icon"
        }
    };
    __alloyId8.push(__alloyId9);
    var __alloyId10 = {
        type: "Ti.UI.Label",
        bindId: "textEn",
        properties: {
            font: {
                fontSize: 22
            },
            top: "12dp",
            left: "20dp",
            bindId: "textEn"
        }
    };
    __alloyId8.push(__alloyId10);
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "textJa",
        properties: {
            font: {
                fontSize: 15
            },
            top: "45dp",
            left: "20dp",
            visible: false,
            bindId: "textJa"
        }
    };
    __alloyId8.push(__alloyId11);
    var __alloyId7 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId8
    };
    __alloyId5["template"] = __alloyId7;
    var __alloyId13 = [];
    $.__views.__alloyId14 = {
        properties: {
            height: "85dp",
            id: "__alloyId14"
        },
        template: "template",
        textEn: {
            text: "curious"
        },
        textJa: {
            text: "好奇心の強い、詮索好きな"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/919390dc819ea4de0bb6d691b756cbf3/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId14);
    $.__views.__alloyId15 = {
        properties: {
            height: "85dp",
            id: "__alloyId15"
        },
        template: "template",
        textEn: {
            text: "occupied"
        },
        textJa: {
            text: "占領された、塞がった"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/11f931a8f3c809292269913f2e85c01c/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId15);
    $.__views.__alloyId16 = {
        properties: {
            height: "85dp",
            id: "__alloyId16"
        },
        template: "template",
        textEn: {
            text: "discover"
        },
        textJa: {
            text: "発見する、気づく"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb/515ca74bdc046a899de65ca4aae8f4fd/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId16);
    $.__views.__alloyId17 = {
        properties: {
            height: "85dp",
            id: "__alloyId17"
        },
        template: "template",
        textEn: {
            text: "ingest"
        },
        textJa: {
            text: "摂取する、吸収する"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/ec41fed4297c97b37bd6b44e5b8def9c/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId17);
    $.__views.__alloyId18 = {
        properties: {
            height: "85dp",
            id: "__alloyId18"
        },
        template: "template",
        textEn: {
            text: "lawn"
        },
        textJa: {
            text: "芝生、空き地"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/75fd86746893259a22f3bb888a69d05d/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId18);
    $.__views.__alloyId19 = {
        properties: {
            height: "85dp",
            id: "__alloyId19"
        },
        template: "template",
        textEn: {
            text: "loaves"
        },
        textJa: {
            text: "（パン、肉の）塊"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/add61296ad29f983ff50ca80d232c4da/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId19);
    $.__views.__alloyId20 = {
        properties: {
            height: "85dp",
            id: "__alloyId20"
        },
        template: "template",
        textEn: {
            text: "upset"
        },
        textJa: {
            text: "あわてさせる、ひっくり返る"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/d3686b4373f0f644832f72c29a13e48d/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId20);
    $.__views.__alloyId21 = {
        properties: {
            height: "85dp",
            id: "__alloyId21"
        },
        template: "template",
        textEn: {
            text: "strive"
        },
        textJa: {
            text: "頑張る、尽力する"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/10c00eed35c39cc59004f838346c503c/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId21);
    $.__views.__alloyId22 = {
        properties: {
            height: "85dp",
            id: "__alloyId22"
        },
        template: "template",
        textEn: {
            text: "along"
        },
        textJa: {
            text: "一緒に、沿って"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/367d7a5c9af05a785ada8d7ee5fadf6f/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId22);
    $.__views.__alloyId23 = {
        properties: {
            height: "85dp",
            id: "__alloyId23"
        },
        template: "template",
        textEn: {
            text: "incline"
        },
        textJa: {
            text: "傾斜、心が傾く"
        },
        icon: {
            image: "http://photohackday.sudachi-works.com/getty/thumb2/fef3b729aac5f5411e247c98372e4888/340/340"
        }
    };
    __alloyId13.push($.__views.__alloyId23);
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    $.__views.section.items = __alloyId13;
    var __alloyId24 = [];
    __alloyId24.push($.__views.section);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId24,
        templates: __alloyId5,
        id: "listView",
        defaultItemTemplate: "item"
    });
    $.__views.win.add($.__views.listView);
    itemclick ? $.__views.listView.addEventListener("itemclick", itemclick) : __defers["$.__views.listView!itemclick!itemclick"] = true;
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        backgroundColor: "#17a1ff",
        window: $.__views.win,
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("app:addItems", function(e) {
        $.section.insertItemsAt(0, e.items);
    });
    $.nav.open();
    __defers["$.__views.rightNavBtn!click!rightNavBtnClick"] && $.__views.rightNavBtn.addEventListener("click", rightNavBtnClick);
    __defers["$.__views.listView!itemclick!itemclick"] && $.__views.listView.addEventListener("itemclick", itemclick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;