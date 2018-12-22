var express = require('express')
var app = express()
var yaml = require('js-yaml')
var fs = require('fs')

module.exports = (cwd, repo) => {
  try {
    var config = yaml.safeLoad(fs.readFileSync(cwd + '/.epitaph.yml', 'utf8'));
  } catch (e) {
    throw(e)
  }
  app.get('/trigger',function(req,res) {
    var resObj = {
      repo: this.repo,
      cfg: this.config
    }
    res.send(JSON.stringify(resObj))
  })
}