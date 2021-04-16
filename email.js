var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rohitkumar.b@innomick.com',
    pass: '9703623094@RK'
  }
});

var mailOptions = {
  from: 'rohitkumar.b@innomick.com',
  to: 'pradeep.t@innomick.com',
  subject: 'Sending Email using Node.js',
  text: 'Email Sending using Node Js was Successfully Completed.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});