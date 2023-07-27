var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sudhakunapareddy3@gmail.com',
        pass:'bnwyoojmujlovagm '
    }
   
});
var mailOptions={
    from:'sudhakunapareddy3@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from Node-JS',
    text:'Hello Sir'
};
transporter.sendMail(mailOptions,function(error,info){
    if (error)
    {
        console.log(error);
    }else{
    console.log('Email sent:'+info.response);
    }
});