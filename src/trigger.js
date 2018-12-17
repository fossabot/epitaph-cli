var express = require('express')
var yaml = require('js-yaml')
var fs = require('fs')

module.exports = (cwd, repo) => {
  try {
    var config = yaml.safeLoad(fs.readFileSync(cwd + '/.epitaph.yml', 'utf8'));
  } catch (e) {
    throw(e)
  }
  express
}