/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The entrypoint for blockly_compressed.js.  Provides
 *     various backwards-compatibility hacks.  Not used when loading
 *     in uncompiled (uncompressed) mode via bootstrap.js.
 */
'use strict';

goog.module('Blockly.main');

/** @suppress {extraRequire} */
goog.require('Blockly');
const Msg = goog.require('Blockly.Msg');

// If Blockly is compiled with ADVANCED_COMPILATION and/or loaded as a
// CJS or ES module there will not be a Blockly global variable
// created.  This can cause problems because a very common way of
// loading translations is to use a <script> tag to load one of
// the generated msg/*.js files, which consists of lines like:
//
// Blockly.Msg["ADD_COMMENT"] = "Add Comment";
// Blockly.Msg["CLEAN_UP"] = "Clean up Blocks";
//
// This obviously only works if Blockly.Msg is the Msg export from the
// Blockly.Msg module - so make sure it is, but only if there is not
// yet a Blockly global variable.
if (!('Blockly' in globalThis)) {
  globalThis['Blockly'] = {'Msg': Msg};
}
