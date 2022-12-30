const { response } = require("express");
const express = require("express");
const transporter = require("./mail")

const helloWorld =  async (request, response) => {
    response.send("hello world")
}



module.exports = {
    helloWorld
}