/**
 * gulp-qn - index.js
 * Created by mengdesen on 15/4/13.
 */

'use strict';

var through = require('through2');
var PluginError = require('gulp-util').PluginError;
var colors = require('gulp-util').colors;
var log = require('gulp-util').log;
var qn = require('qn');
var merge = require('merge');
var path = require('path');
var async = require('async'); 


module.exports = function(options) {
    return through.obj(function(file, enc, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
        options = merge({
            prefix: ''
        }, options);
        console.log(options)
        if (!options.qiniu) {
            console.log('没有配置')
            return callback(null, file);
        }
        var client = qn.create(options.qiniu);
        var filePath = file.path;
        console.log('全路径===' + filePath);
        console.log('根路径===' + options.projectRoot);
        var relativePath = filePath.replace(options.projectRoot, '');
        console.log('相对路径===' + relativePath);
        var fileName = path.basename(file.path);
        var fileKey = relativePath; //path.join(options.prefix, fileName);
        console.log(fileName + '====>' + fileKey)
        // return
        async.auto({
            stat: function(cb) {
                client.stat(fileKey, function(err, stat) {
                    if (err) {
                        cb(null, true);
                    } else {
                        file.path = options.qiniu.domain + '/' + fileKey;
                        log('Skip:', colors.grey(fileName));
                        cb(null, false)
                    }
                });
            },
            upload: ['stat', function(cb, results) {
                if (results.stat) {
                    client.uploadFile(file.path, {
                        key: fileKey
                    }, function(err, result) {
                        if (err) {
                            cb(err);
                        } else {
                            log('Upload:', colors.green(result.url));
                            file.path = result.url;
                            cb(null, result);
                        }
                    });
                } else {
                    cb(null)
                }
            }]
        }, function(err) {
            if (err) {
                log('Error', colors.red(new PluginError('gulp-qn', err).message));
            }
            callback(null, file);
        });
    })
};