'use strict';

module.exports = {

    name          : /.*?Name:.*?td.*?td.*?([A-Za-z\s\'\-]+).+/
  , sex           : /.*?Sex:?.*?(male|female).+/
  , vocation      : /.*?Vocation:?.*?(Master Sorcerer|Sorcerer|Elite Knight|Knight|Elder Druid|Druid|Royal Paladin|Paladin).+/
  , level         : /.*?Level:?.*?(\d+).+/i
  , achievement   : /.*?Points:?.*?(\d+).+/i
  , world         : /.*?World:.*?td.*?td.*?([A-Za-z]+).+/
  , residence     : /.*?Residence:.*?td.*?td.*?([A-Za-z\s]+).+/
  , marriedto     : /.*?Married to:.*?td.*?td.*?\&name=.*?([A-Za-z\s\'\-\+]+).+/
  , guildrank     : /.*?membership:.*?td.*?td.*?([A-Za-z\s\'\-]+).+/
  , guildname     : /.*?membership:.*?td.*?td.*?\&GuildName=.*?([A-Za-z\s\'\-\+]+).+/
  , comment       : /.*?Comment:.*?(.+)Status:.+/
  , accountstatus : /.*?Status:?<.*?(Free Account|Premium Account).+/

};
