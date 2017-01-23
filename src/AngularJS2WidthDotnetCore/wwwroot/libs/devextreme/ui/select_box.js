/**
 * DevExtreme (ui/select_box.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    commonUtils = require("../core/utils/common"),
    errors = require("../core/errors"),
    inkRipple = require("./widget/utils.ink_ripple"),
    messageLocalization = require("../localization/message"),
    registerComponent = require("../core/component_registrator"),
    eventUtils = require("../events/utils"),
    DropDownList = require("./drop_down_editor/ui.drop_down_list"),
    themes = require("./themes"),
    clickEvent = require("../events/click");
var DISABLED_STATE_SELECTOR = ".dx-state-disabled",
    SELECTBOX_CLASS = "dx-selectbox",
    SELECTBOX_POPUP_CLASS = "dx-selectbox-popup",
    SELECTBOX_CONTAINER_CLASS = "dx-selectbox-container",
    SELECTBOX_POPUP_WRAPPER_CLASS = "dx-selectbox-popup-wrapper";
var SelectBox = DropDownList.inherit({
    _supportedKeys: function() {
        var that = this,
            parent = this.callBase(),
            clearSelectBox = function(e) {
                var isEditable = this._isEditable();
                if (!isEditable) {
                    if (this.option("showClearButton")) {
                        e.preventDefault();
                        this.reset()
                    }
                } else {
                    if (this._valueSubstituted()) {
                        this._preventFiltering = true
                    }
                }
                this._preventSubstitution = true
            };
        var searchIfNeeded = function() {
            if (that.option("searchEnabled") && that._valueSubstituted()) {
                that._searchHandler()
            }
        };
        return $.extend({}, parent, {
            tab: function() {
                if (this.option("opened") && "instantly" === this.option("applyValueMode")) {
                    this._cleanInputSelection()
                }
                parent.tab.apply(this, arguments)
            },
            upArrow: function() {
                if (parent.upArrow.apply(this, arguments)) {
                    if (!this.option("opened")) {
                        this._setNextValue(-1)
                    }
                    return true
                }
            },
            downArrow: function() {
                if (parent.downArrow.apply(this, arguments)) {
                    if (!this.option("opened")) {
                        this._setNextValue(1)
                    }
                    return true
                }
            },
            leftArrow: function() {
                searchIfNeeded();
                parent.leftArrow.apply(this, arguments)
            },
            rightArrow: function() {
                searchIfNeeded();
                parent.rightArrow.apply(this, arguments)
            },
            home: function() {
                searchIfNeeded();
                parent.home.apply(this, arguments)
            },
            end: function() {
                searchIfNeeded();
                parent.end.apply(this, arguments)
            },
            enter: function(e) {
                if ("" === this._input().val() && this.option("value")) {
                    this.option({
                        selectedItem: null,
                        value: null
                    });
                    this.close()
                } else {
                    if (this.option("acceptCustomValue")) {
                        e.preventDefault()
                    }
                    if (parent.enter.apply(this, arguments)) {
                        return this.option("opened")
                    }
                }
            },
            backspace: clearSelectBox,
            del: clearSelectBox
        })
    },
    _getDefaultOptions: function() {
        return $.extend(this.callBase(), {
            placeholder: messageLocalization.format("Select"),
            fieldTemplate: null,
            valueChangeEvent: "change",
            acceptCustomValue: false,
            onCustomItemCreating: function(e) {
                return e.text
            },
            showSelectionControls: false,
            autocompletionEnabled: true,
            allowClearing: true,
            tooltipEnabled: false,
            openOnFieldClick: true,
            showDropButton: true,
            displayCustomValue: false,
            _isAdaptablePopupPosition: false,
            useInkRipple: false
        })
    },
    _defaultOptionsRules: function() {
        return this.callBase().concat([{
            device: function() {
                return /win8/.test(themes.current())
            },
            options: {
                _isAdaptablePopupPosition: true,
                popupPosition: {
                    at: "left top",
                    offset: {
                        h: 0,
                        v: 0
                    }
                }
            }
        }, {
            device: function() {
                return /android5/.test(themes.current())
            },
            options: {
                _isAdaptablePopupPosition: true,
                popupPosition: {
                    offset: {
                        h: -16,
                        v: -8
                    }
                }
            }
        }, {
            device: function() {
                return /android5/.test(themes.current())
            },
            options: {
                useInkRipple: true
            }
        }])
    },
    _init: function() {
        this.callBase();
        this._initCustomItemCreatingAction()
    },
    _render: function() {
        this._renderSubmitElement();
        this.callBase();
        this.element().addClass(SELECTBOX_CLASS);
        this.option("useInkRipple") && this._renderInkRipple();
        this._renderTooltip();
        this._$container.addClass(SELECTBOX_CONTAINER_CLASS)
    },
    _renderSubmitElement: function() {
        this._$submitElement = $("<input>").attr("type", "hidden").appendTo(this.element())
    },
    _renderInkRipple: function() {
        this._inkRipple = inkRipple.render()
    },
    _toggleActiveState: function($element, value, e) {
        this.callBase.apply(this, arguments);
        if (!this._inkRipple || this._isEditable()) {
            return
        }
        var config = {
            element: this._inputWrapper(),
            jQueryEvent: e
        };
        if (value) {
            this._inkRipple.showWave(config)
        } else {
            this._inkRipple.hideWave(config)
        }
    },
    _createPopup: function() {
        this.callBase();
        this._popup.element().addClass(SELECTBOX_POPUP_CLASS)
    },
    _popupWrapperClass: function() {
        return this.callBase() + " " + SELECTBOX_POPUP_WRAPPER_CLASS
    },
    _renderOpenedState: function() {
        this.callBase();
        if (this.option("opened")) {
            this._scrollToSelectedItem();
            this._focusSelectedElement()
        }
    },
    _focusSelectedElement: function() {
        var searchValue = this._searchValue();
        if (!searchValue) {
            this._focusListElement(null);
            return
        }
        var $listItems = this._list._itemElements(),
            selectedItem = this.option("selectedItem"),
            index = $.inArray(selectedItem, this.option("items")),
            isSelectedItemDisplayed = selectedItem && searchValue === this._displayGetter(selectedItem).toString(),
            focusedElement = index >= 0 && isSelectedItemDisplayed ? $listItems.eq(index) : null;
        this._focusListElement(focusedElement)
    },
    _renderFocusedElement: function() {
        if (!this._list) {
            return
        }
        var searchValue = this._searchValue();
        if (!searchValue || this.option("acceptCustomValue")) {
            this._focusListElement(null);
            return
        }
        var $listItems = this._list._itemElements(),
            focusedElement = $listItems.not(DISABLED_STATE_SELECTOR).eq(0);
        this._focusListElement(focusedElement)
    },
    _focusListElement: function(element) {
        this._preventInputValueRender = true;
        this._list.option("focusedElement", element);
        delete this._preventInputValueRender
    },
    _scrollToSelectedItem: function() {
        if (this._dataSource.paginate() && this._isEditable()) {
            this._list.scrollTo(0)
        } else {
            this._list.scrollToItem(this._list.option("selectedItem"))
        }
    },
    _listContentReadyHandler: function() {
        this.callBase();
        var isPaginate = this._dataSource.paginate();
        if (isPaginate && this._needPopupRepaint()) {
            return
        }
        if (!isPaginate || !this._isEditable()) {
            this._list.scrollToItem(this._list.option("selectedItem"))
        }
    },
    _renderValue: function() {
        this._renderInputValue();
        this._setSubmitValue()
    },
    _setSubmitValue: function() {
        var value = this.option("value"),
            submitValue = "this" === this.option("valueExpr") ? this._displayGetter(value) : value;
        this._$submitElement.val(submitValue)
    },
    _getSubmitElement: function() {
        return this._$submitElement
    },
    _renderInputValue: function() {
        return this.callBase().always($.proxy(function() {
            this._renderTooltip();
            this._renderInputValueImpl();
            this._refreshSelected()
        }, this))
    },
    _renderInputValueImpl: function() {
        this._renderInputAddons()
    },
    _fitIntoRange: function(value, start, end) {
        if (value > end) {
            return start
        }
        if (value < start) {
            return end
        }
        return value
    },
    _setNextValue: function(step) {
        var dataSourceIsLoaded = this._dataSource.isLoaded() ? $.Deferred().resolve() : this._dataSource.load();
        dataSourceIsLoaded.done($.proxy(function() {
            var item = this._calcNextItem(step),
                value = this._valueGetter(item);
            this._setValue(value)
        }, this))
    },
    _calcNextItem: function(step) {
        var items = this._items();
        var nextIndex = this._fitIntoRange(this._getSelectedIndex() + step, 0, items.length - 1);
        return items[nextIndex]
    },
    _items: function() {
        return this._list ? this.option("items") : this._dataSource.items()
    },
    _getSelectedIndex: function() {
        var items = this._items();
        var selectedItem = this.option("selectedItem");
        var result = -1;
        $.each(items, $.proxy(function(index, item) {
            if (this._isValueEquals(item, selectedItem)) {
                result = index;
                return false
            }
        }, this));
        return result
    },
    _setSelectedItem: function(item) {
        var isUnknownItem = !this._isCustomValueAllowed() && void 0 === item;
        this.callBase(isUnknownItem ? null : item)
    },
    _isCustomValueAllowed: function() {
        return this.option("acceptCustomValue") || this.callBase()
    },
    _displayValue: function(item) {
        item = !commonUtils.isDefined(item) && this._isCustomValueAllowed() ? this.option("value") : item;
        return this.callBase(item)
    },
    _listConfig: function() {
        var result = $.extend(this.callBase(), {
            pageLoadMode: "scrollBottom",
            onSelectionChanged: this._getSelectionChangeHandler(),
            selectedItem: this.option("selectedItem"),
            onFocusedItemChanged: $.proxy(this._listFocusedItemChangeHandler, this)
        });
        if (this.option("showSelectionControls")) {
            $.extend(result, {
                showSelectionControls: true,
                selectionByClick: true
            })
        }
        return result
    },
    _listFocusedItemChangeHandler: function(e) {
        if (this._preventInputValueRender) {
            return
        }
        var list = e.component,
            focusedElement = list.option("focusedElement"),
            focusedItem = list._getItemData(focusedElement);
        this._updateField(focusedItem)
    },
    _updateField: function(item) {
        var fieldTemplate = this._getTemplateByOption("fieldTemplate");
        if (!(fieldTemplate && this.option("fieldTemplate"))) {
            this._renderDisplayText(this._displayGetter(item));
            return
        }
        this._renderTemplatedField(fieldTemplate, item)
    },
    _getSelectionChangeHandler: function() {
        return this.option("showSelectionControls") ? $.proxy(this._selectionChangeHandler, this) : $.noop
    },
    _selectionChangeHandler: function(e) {
        $.each(e.addedItems || [], $.proxy(function(_, addedItem) {
            this._setValue(this._valueGetter(addedItem))
        }, this))
    },
    _toggleOpenState: function(isVisible) {
        if (this.option("disabled")) {
            return
        }
        isVisible = arguments.length ? isVisible : !this.option("opened");
        if (this._wasSearch() && isVisible) {
            this._wasSearch(false);
            if (this.option("showDataBeforeSearch") || 0 === this.option("minSearchLength")) {
                this._filterDataSource(this._searchValue() || null)
            } else {
                this._setListOption("items", []);
                this._list && this._setListOption("noDataText", this._list.initialOption("noDataText"))
            }
        }
        this.callBase(isVisible)
    },
    _renderTooltip: function() {
        if (this.option("tooltipEnabled")) {
            this.element().attr("title", this.option("displayValue"))
        }
    },
    _renderDimensions: function() {
        this.callBase();
        this._setPopupOption("width")
    },
    _focusOutHandler: function(e) {
        this.callBase(e);
        if (!this.option("searchEnabled") || this.option("acceptCustomValue")) {
            return
        }
        if (!this._searchValue() && this.option("allowClearing")) {
            this._clearTextValue();
            return
        }
        var selectedItem = this.option("selectedItem");
        this._renderInputValue().always($.proxy(function() {
            this._setSelectedItem(selectedItem);
            this._updateField(this.option("selectedItem"));
            this._wasSearch(false);
            this._filterDataSource(null)
        }, this))
    },
    _clearTextValue: function() {
        this.reset()
    },
    _renderValueChangeEvent: function() {
        if (this._isEditable()) {
            this.callBase()
        }
    },
    _isEditable: function() {
        return this.option("acceptCustomValue") || this.option("searchEnabled")
    },
    _fieldRenderData: function() {
        return this.option("selectedItem")
    },
    _readOnlyPropValue: function() {
        return !this._isEditable() || this.option("readOnly")
    },
    _isSelectedValue: function(value) {
        return this._isValueEquals(value, this.option("value"))
    },
    _shouldCloseOnItemClick: function() {
        return !(this.option("showSelectionControls") && "single" !== this.option("selectionMode"))
    },
    _listItemClickHandler: function(e) {
        var previousValue = this._getCurrentValue();
        this._saveValueChangeEvent(e.jQueryEvent);
        this._completeSelection(this._valueGetter(e.itemData));
        if (this._shouldCloseOnItemClick()) {
            this.option("opened", false)
        }
        if (this.option("searchEnabled") && previousValue === this._valueGetter(e.itemData)) {
            this._updateField(e.itemData);
            this._filterDataSource(null)
        }
    },
    _completeSelection: function(value) {
        if (this._wasSearch()) {
            this._clearFilter()
        }
        this._setValue(value)
    },
    _clearValueHandler: function() {
        this.reset()
    },
    _loadItem: function(value) {
        var that = this,
            deferred = $.Deferred();
        this.callBase(value).done(function(item) {
            deferred.resolve(item)
        }).fail(function() {
            if (that.option("acceptCustomValue")) {
                deferred.resolve(that.option("selectedItem"))
            } else {
                deferred.reject()
            }
        });
        return deferred.promise()
    },
    _valueChangeEventHandler: function() {
        if (!this.option("acceptCustomValue")) {
            return
        }
        this._customItemAddedHandler()
    },
    _initCustomItemCreatingAction: function() {
        this._customItemCreatingAction = this._createActionByOption("onCustomItemCreating")
    },
    _customItemAddedHandler: function() {
        var searchValue = this._searchValue(),
            item = this._customItemCreatingAction({
                text: searchValue
            }),
            isDeferred = item && item.promise && item.done && item.fail;
        if (void 0 === item) {
            this._renderValue();
            throw errors.Error("E0121")
        }
        isDeferred ? item.always($.proxy(this._setCustomItem, this)) : this._setCustomItem(item)
    },
    _setCustomItem: function(item) {
        item = item || null;
        this.option("selectedItem", item);
        this._setValue(this._valueGetter(item));
        this._renderDisplayText(this._displayGetter(item))
    },
    _createClearButton: function() {
        var eventName = eventUtils.addNamespace(clickEvent.name, this.NAME);
        return this.callBase().on(eventName, function() {
            return false
        })
    },
    _wasSearch: function(value) {
        if (!arguments.length) {
            return this._wasSearchValue
        }
        this._wasSearchValue = value
    },
    _searchHandler: function(e) {
        if (e && this._isControlKey(e.which || e.keyCode) || this._preventFiltering) {
            delete this._preventFiltering;
            return
        }
        if (this._needPassDataSourceToList()) {
            this._wasSearch(true)
        }
        this.callBase(e)
    },
    _filterDataSource: function(searchValue) {
        this.callBase(searchValue);
        this._setCollectionWidgetOption("noDataText", searchValue ? "" : this._list && (this.option("noDataText") || this._list.initialOption("noDataText")))
    },
    _dataSourceFiltered: function(searchValue) {
        this.callBase();
        if (null !== searchValue) {
            this._renderInputSubstitution();
            this._renderFocusedElement()
        }
    },
    _valueSubstituted: function() {
        var input = this._input().get(0),
            inputHasSelection = input.selectionStart !== input.selectionEnd;
        return this._wasSearch() && inputHasSelection
    },
    _shouldSubstitutionBeRendered: function() {
        return this.option("autocompletionEnabled") && !this._preventSubstitution && this.option("searchEnabled") && !this.option("acceptCustomValue") && "startswith" === this.option("searchMode")
    },
    _renderInputSubstitution: function() {
        if (!this._shouldSubstitutionBeRendered()) {
            delete this._preventSubstitution;
            return
        }
        var item = this._list && this._list.option("items")[0];
        if (!item) {
            return
        }
        var $input = this._input(),
            valueLength = $input.val().length;
        if (0 === valueLength) {
            return
        }
        var inputElement = $input.get(0),
            displayValue = this._displayGetter(item);
        inputElement.value = displayValue;
        inputElement.selectionStart = valueLength;
        inputElement.selectionEnd = displayValue.length
    },
    _cleanInputSelection: function() {
        var inputElement = this._input().get(0),
            endPosition = inputElement.value.length;
        inputElement.selectionStart = endPosition;
        inputElement.selectionEnd = endPosition
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "_isAdaptablePopupPosition":
            case "autocompletionEnabled":
                break;
            case "onCustomItemCreating":
                this._initCustomItemCreatingAction();
                break;
            case "tooltipEnabled":
                this._renderTooltip();
                break;
            case "displayCustomValue":
            case "acceptCustomValue":
            case "showSelectionControls":
            case "useInkRipple":
                this._invalidate();
                break;
            case "selectedItem":
                if (args.previousValue !== args.value) {
                    this.callBase(args)
                }
                break;
            case "allowClearing":
                break;
            default:
                this.callBase(args)
        }
    }
});
registerComponent("dxSelectBox", SelectBox);
module.exports = SelectBox;
module.exports.default = module.exports;