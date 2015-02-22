/*global describe, it */
'use strict';
var http   = require('http');
var assert = require('assert');
var tibia  = require('../');

function getPlayer(char, cb) {
  http.get('http://www.tibia.com/community/?subtopic=characters&name=' + char, function(res) {
    cb(res);
  });
}

function match(body, value) {
  return body.match(value)[0];
}

describe('tibia-regex', function () {

  it('get character', function () {
    getPlayer('Serphir', function(res) {
      var
        player        = tibia.characters,
        name          = player.name,
        level         = player.level,
        vocation      = player.vocation,
        sex           = player.sex,
        achievement   = player.achievement,
        world         = player.world,
        residence     = player.residence,
        lastlogin     = player.lastlogin,
        accountstatus = player.accountstatus;

      assert(match(res, name)         , 'Serphir ');
      assert(match(res, level)        , '36');
      assert(match(res, vocation)     , 'Knight');
      assert(match(res, sex)          , 'male');
      assert(match(res, achievement)  , 1);
      assert(match(res, world)        , 'Luminera');
      assert(match(res, residence)    , 'Thais');
      assert(match(res, lastlogin)    , 'Jan 05 2015, 02:22:23 CET');
      assert(match(res, accountstatus), 'Free Account');
    });
  });

});
