/*
Copyright (c) 2015 Simon Cullen, http://github.com/cullens

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
'use strict';

GLOBAL.$thing = GLOBAL.$thing || {};

$thing.bootstrap = 'node.js';
$thing.usePaho = false;

if (module.exports.setImmediate !== undefined)
    $thing.async = module.exports;
else
    $thing.async = require('async');

$thing.jsonld = require('jsonld');

$thing.getMicroTime = function() {  
    var hrTime = process.hrtime();
    return Math.floor(hrTime[0] * 1000000 + hrTime[1] / 1000);
};

$thing.getThreadId = function(first, container) {

    first = first || 0;

    var threadId = [undefined, container || 'main'],
        stackTraceLimit = Error.stackTraceLimit,
        prepareStackTrace = Error.prepareStackTrace
        ;

    first++;

    Error.prepareStackTrace = function(err, frame) {

        if (frame.length > first) {

            threadId[0] = frame[first].getFileName() + 
                ':' + frame[first].getLineNumber() +
                ':' + frame[first].getColumnNumber()
                ;

            if (container === undefined)
                for (var i = 0; i < frame.length - 1; i++)
                    if (frame[i].getFunctionName() === '$thing.$container') {

                        threadId[1] = frame[i + 1].getFileName() +
                            ':' + frame[i + 1].getLineNumber() +
                            ':' + frame[i + 1].getColumnNumber()
                            ;

                        break;

                    }

        }
             
    };

    Error.stackTraceLimit = container ? first + 1 : Infinity;

    new Error().stack;

    Error.stackTraceLimit = stackTraceLimit;
    Error.prepareStackTrace = prepareStackTrace;

    return threadId;
};

$thing.createBuffer = function(buffer) {
    return buffer;        
};

if ($thing.agent === undefined) {
    require('../lib/core');
    require('../lib/Object');
    require('../lib/Base');
    require('../lib/Definition');
    require('../lib/Ontology');
    require('../lib/Delegate');
    require('../lib/Pattern');
    require('../lib/Agent');
    require('../lib/Behaviour');
    require('../lib/Selector');
    require('../lib/Container');
    require('../lib/Tasker');
    require('../lib/Heartbeat');
    require('../lib/Flow');
    require('../lib/Series');
    require('../lib/Parallel');
    require('../lib/Queue');
    require('../lib/MapReduce');
    require('../lib/Waker');
    require('../lib/Util');
    require('../lib/transport/Mqtt.js');
}

module.exports = $thing.agent;