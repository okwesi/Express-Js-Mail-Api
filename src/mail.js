const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "gyamfiowusu630@gmail.com",
    pass: "jujkzafsyudbnmdx", // generated ethereal password
  },
});

module.exports = transporter;

  // // send mail with defined transport object
  // let info = await transporter.sendMail({
  //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
  //   to: "djangotest45@gmail.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // }, function(err, success){
  //   if (err){
  //     console.log(err)
  //   }else{
  //     console.log(success)
  //   }
  // });
