const nodemailer = require( 'nodemailer' )

const Mailer = async ( req, res ) =>
{
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

    await new Promise( ( resolve, reject ) =>
    {
        // send mail
        transporter.sendMail( mailData, ( err, info ) =>
        {
            if ( err ) {
                console.error( err )
                reject( err )
            } else {
                console.log( info )
                resolve( info )
            }
        } )
    } )

    res.send( 'success' )
}

export default Mailer