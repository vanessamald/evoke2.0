const path = require('path');
const express = require('express');

const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

//app.use(cors());
//app.use("/", router);

app.get("/api", (req, res) => {
    res.json({ message: 'Testing Express' });
  });

/*
app.post('/contact', (req, res) => {
  console.log(req.body);

  
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html: `
      <p>You have a new message via Evoke Neurodiagnostics Contact Form.</p>
      <h3>Details:</h3>
      <li> Name: ${req.body.name}</li>
      <li> Email: ${req.body.email}</li>
      <li> Subject: ${req.body.subject}</li>
      <li> Message: ${req.body.message}</li>
      `
    };

    transporter.sendMail(mailOptions, (error, info) =>  {
      if (error) {
        res.json({ status: "ERROR"});
      } else {
        res.json({ status: "Message Sent"});
      }
    });
  });
  */
      /*
      if (error) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong, please try again'
        });
      } else {
        res.send({
          success: true,
          message: 'Your message has been sent. We will contact you soon'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong, please try again later"
    })
  }
})
*/


/*
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
*/

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: process.env.email,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  transporter.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});