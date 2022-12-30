const { response } = require("express");
const express = require("express");
const transporter = require("./mail");

const sendMail = async (request, response) => {
  const {name, from, to, subject, text, html } = request.body;
  // send mail with defined transport object
  let info = await transporter.sendMail(
    {
      from: `"${name}" <${from}>`, // sender address
      to: `${to}`, // list of receivers
      subject: `${subject}`, // Subject line
      text: `${text}`, // plain text body
      html: `${html}`, // html body
    },
    function (err, success) {
      if (err)return response.status(400).json({"message":err});
      return response.status(400).json({"message":success});  
    }
  );
//   console.log(name, from, to, subject, text, html );
};

module.exports = {
  sendMail,
};
