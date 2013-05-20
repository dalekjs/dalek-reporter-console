/*!
 *
 * Copyright (c) 2013 Sebastian Golasch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

'use strict';

// int. libs
var Log = require('./level0');

/**
 * @class LogLevel1
 * @constructor
 * @param {object} opts
 */

var LogLevel1 = Log;

/**
 * @module LogLevel1
 */

module.exports = LogLevel1;

/**
 * Outputs a message when the testrunner starts
 *
 * @method outputRunnerStarted
 * @return {LogLevel1}
 */

LogLevel1.prototype.outputRunnerStarted = function () {
  this.echo('Running tests', {foreground: 'magentaBright'});
  return this;
};

/**
 * Outputs a message when a test is finished
 *
 * @method outputTestFinished
 * @param {object} data
 * @return {LogLevel1}
 */

LogLevel1.prototype.outputTestFinished = function (data) {
  this.echo('.', {nl: false, foreground: (data.status ? 'greenBright' : 'redBright')});
  return this;
};

/**
 * Outputs a message when the testrunner has been finished
 *
 * @method outputRunnerFinished
 * @param {object} data
 * @return {LogLevel1}
 */

LogLevel1.prototype.outputRunnerFinished = function (data) {
  var elapsedTime = data.elapsedTime;
  var timeOutput = '';

  // generate formatted time output
  if (elapsedTime.hours > 0) {
    timeOutput += elapsedTime.hours + ' hrs ';
  }

  if (elapsedTime.minutes > 0) {
    timeOutput += elapsedTime.minutes + ' min ';
  }

  timeOutput += Math.round(elapsedTime.seconds * Math.pow(10, 2)) / Math.pow(10, 2) + ' sec';

  // newline FTW!
  this.echo('', {nl: true});

  // echo the assertion & time status
  this.echo(
    data.assertionsPassed + '/' + data.assertions + ' assertions passed.' + ' Elapsed Time: ' + timeOutput,
    {foreground: 'whiteBright', style: 'bold', background: (data.status ? 'bgGreenBright' : 'bgRedBright')}
  );
  return this;
};
