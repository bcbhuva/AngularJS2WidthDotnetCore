/**
 * DevExtreme (data/remote_query.js)
 * Version: 16.2.4
 * Build date: Tue Jan 17 2017
 *
 * Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
 * EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
 */
"use strict";
var $ = require("jquery"),
    queryAdapters = require("./query_adapters"),
    errorsModule = require("./errors"),
    arrayQueryImpl = require("./array_query");
var remoteQueryImpl = function(url, queryOptions, tasks) {
    tasks = tasks || [];
    queryOptions = queryOptions || {};
    var createTask = function(name, args) {
        return {
            name: name,
            args: args
        }
    };
    var exec = function(executorTask) {
        var _adapterFactory, _adapter, _taskQueue, _currentTask, _mergedSortArgs, d = $.Deferred();
        var rejectWithNotify = function(error) {
            var handler = queryOptions.errorHandler;
            if (handler) {
                handler(error)
            }
            errorsModule._errorHandler(error);
            d.reject(error)
        };

        function mergeSortTask(task) {
            switch (task.name) {
                case "sortBy":
                    _mergedSortArgs = [task.args];
                    return true;
                case "thenBy":
                    if (!_mergedSortArgs) {
                        throw errorsModule.errors.Error("E4004")
                    }
                    _mergedSortArgs.push(task.args);
                    return true
            }
            return false
        }

        function unmergeSortTasks() {
            var head = _taskQueue[0],
                unmergedTasks = [];
            if (head && "multiSort" === head.name) {
                _taskQueue.shift();
                $.each(head.args[0], function() {
                    unmergedTasks.push(createTask(unmergedTasks.length ? "thenBy" : "sortBy", this))
                })
            }
            _taskQueue = unmergedTasks.concat(_taskQueue)
        }
        try {
            _adapterFactory = queryOptions.adapter;
            if (!$.isFunction(_adapterFactory)) {
                _adapterFactory = queryAdapters[_adapterFactory]
            }
            _adapter = _adapterFactory(queryOptions);
            _taskQueue = [].concat(tasks).concat(executorTask);
            while (_taskQueue.length) {
                _currentTask = _taskQueue[0];
                if (!mergeSortTask(_currentTask)) {
                    if (_mergedSortArgs) {
                        _taskQueue.unshift(createTask("multiSort", [_mergedSortArgs]));
                        _mergedSortArgs = null;
                        continue
                    }
                    if ("enumerate" !== String(_currentTask.name)) {
                        if (!_adapter[_currentTask.name] || false === _adapter[_currentTask.name].apply(_adapter, _currentTask.args)) {
                            break
                        }
                    }
                }
                _taskQueue.shift()
            }
            unmergeSortTasks();
            _adapter.exec(url).done(function(result, extra) {
                if (!_taskQueue.length) {
                    d.resolve(result, extra)
                } else {
                    var clientChain = arrayQueryImpl(result, {
                        errorHandler: queryOptions.errorHandler
                    });
                    $.each(_taskQueue, function() {
                        clientChain = clientChain[this.name].apply(clientChain, this.args)
                    });
                    clientChain.done(d.resolve).fail(d.reject)
                }
            }).fail(rejectWithNotify)
        } catch (x) {
            rejectWithNotify(x)
        }
        return d.promise()
    };
    var query = {};
    $.each(["sortBy", "thenBy", "filter", "slice", "select", "groupBy"], function() {
        var name = String(this);
        query[name] = function() {
            return remoteQueryImpl(url, queryOptions, tasks.concat(createTask(name, arguments)))
        }
    });
    $.each(["count", "min", "max", "sum", "avg", "aggregate", "enumerate"], function() {
        var name = String(this);
        query[name] = function() {
            return exec.call(this, createTask(name, arguments))
        }
    });
    return query
};
module.exports = remoteQueryImpl;