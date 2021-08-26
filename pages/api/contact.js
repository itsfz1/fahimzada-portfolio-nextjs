const Mailer = async ( req, res ) =>
{
    let nodemailer = require( 'nodemailer' )
    const transporter = nodemailer.createTransport( {
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASSWORD,
        },
        secure: true,
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

    await transporter.sendMail( mailData, function ( err, info )
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