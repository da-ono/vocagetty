function Controller() {
    function textInputed(e) {
        if (working || "" == e.source.value) return;
        working = true;
        var client = Ti.Network.createHTTPClient({
            timeout: 6e4,
            onload: function() {
                var data = JSON.parse(this.responseText);
                for (var i = 0; 9 > i; i++) {
                    "undefined" != typeof images[i] && $.win.remove(images[i]);
                    var image = Ti.UI.createImageView({
                        image: "http://photohackday.sudachi-works.com/getty/thumb/" + data.imageIds[i] + "/210/210",
                        width: "210px",
                        height: "210px",
                        top: 250 + 215 * Math.floor(i / 3) + "px",
                        left: 215 * Math.floor(i % 3) + "px"
                    });
                    image.title = data.imageIds[i];
                    image.addEventListener("click", function(e) {
                        Ti.App.fireEvent("app:addItems", {
                            items: [ {
                                template: "template",
                                "class": "item",
                                properties: {
                                    height: "85dp"
                                },
                                textEn: {
                                    text: $.textEn.value
                                },
                                textJa: {
                                    text: $.textJa.value
                                },
                                icon: {
                                    image: "http://photohackday.sudachi-works.com/getty/thumb/" + e.source.title + "/340/340"
                                }
                            } ]
                        });
                        $.win.close();
                    });
                    $.win.add(image);
                    images[i] = image;
                }
                working = false;
            },
            onerror: function() {
                alert("Error");
            }
        });
        client.open("GET", "http://photohackday.sudachi-works.com/getty/search/" + e.source.value.toLowerCase());
        client.send();
    }
    function clickImageButton() {
        Ti.Media.openPhotoGallery({
            success: function(e) {
                Ti.App.fireEvent("app:addItems", {
                    items: [ {
                        template: "template",
                        "class": "item",
                        properties: {
                            height: "85dp"
                        },
                        textEn: {
                            text: $.textEn.value
                        },
                        textJa: {
                            text: $.textJa.value
                        },
                        icon: {
                            image: e.media.imageAsCropped({
                                height: 340,
                                width: 340
                            })
                        }
                    } ]
                });
                $.win.close();
            },
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#17a1ff",
        navTintColor: "#fff",
        statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "win",
        title: "Input a word"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.textEn = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: "50dp",
        id: "textEn",
        hintText: "word input"
    });
    $.__views.win.add($.__views.textEn);
    textInputed ? $.__views.textEn.addEventListener("blur", textInputed) : __defers["$.__views.textEn!blur!textInputed"] = true;
    $.__views.textJa = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: "65dp",
        left: "10dp",
        right: "10dp",
        height: "50dp",
        id: "textJa",
        hintText: "和訳"
    });
    $.__views.win.add($.__views.textJa);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.imageButton = Ti.UI.createButton({
        id: "imageButton",
        systemButton: Ti.UI.iPhone.SystemButton.CAMERA
    });
    __alloyId1.push($.__views.imageButton);
    clickImageButton ? $.__views.imageButton.addEventListener("click", clickImageButton) : __defers["$.__views.imageButton!click!clickImageButton"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.toolbar = Ti.UI.iOS.createToolbar({
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        backgroundColor: "#17a1ff",
        barColor: "#17a1ff",
        tintColor: "#fff",
        items: __alloyId1,
        id: "toolbar"
    });
    $.__views.win.add($.__views.toolbar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var working = false;
    var images = [];
    __defers["$.__views.textEn!blur!textInputed"] && $.__views.textEn.addEventListener("blur", textInputed);
    __defers["$.__views.imageButton!click!clickImageButton"] && $.__views.imageButton.addEventListener("click", clickImageButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;