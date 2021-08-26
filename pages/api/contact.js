const Mailer = ( req, res ) =>
{
    let nodemailer = require( 'nodemailer' )
    const transporter = nodemailer.createTransport( {
        host: "mail.fahimzada.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    } );

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Subject: ${req.body.subject}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    const mailData = {
        from: '',
        to: 'me@fahimzada.com',
        subject: `${req.body.subject}`,
        text: '',
        html: output
    }

    transporter.sendMail( mailData, function ( err, info )
    {
        if ( err ) {
            console.log( err )

        }
        else {

            console.log( info )
        }

    } )

    res.send( 'success' )
}

export default Mailer