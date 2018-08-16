// const bcrypt = require('bcrypt');
// const jwt = require('jwt-simple');
const secretKey = (process.env.JWT_SECRET_KEY || "secretKey");
const mail_user = process.env.MAIL_UUSER;
const mail_user_pass = process.env.MAIL_PASS;
// const userModel = require('./../models/User');

// const nodemailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');

// const { createUser } = require('../actions/signUp');

// const tokenForUser = (user) => {
//     const timestamp = new Date().getTime();
//     return jwt.encode({
//         sub: user.id,
//         iat: timestamp,
//         secretKey
//     });
// };

module.exports = {
    // addUser: function (req, res, next) {
    //     userModel.create(
    //         { 
    //             first_name: req.body.first_name, 
    //             last_name: req.body.last_name, 
    //             email: req.body.email, 
    //             password: req.body.password 
    //         }, 
    //         function (err, result) {
    //             switch (err) {
    //                 case err:
    //                     next(err);
    //                 case err.code === 11000:
    //                     // res.json(
    //                     //     {
    //                     //         status: "error",
    //                     //         message: `${req.body.first_name} ${req.body.last_name} could not be created, because ${req.body.email} already exist`,
    //                     //         data: req.body
    //                     //     }
    //                     // );
    //                     // next(err);
    //                     res.send(404)
    //                 default:
    //                     res.json(
    //                         {
    //                             status: "success",
    //                             message: `${req.body.first_name} ${req.body.last_name} was created`,
    //                             data: null
    //                         }
    //                     );
    //             }
    //         }
    //     );
    // },

    // getUser: (req, res, next) => {
    //     userModel.findById(req.params.id).then
    //     /*populate('following').exec*/((err, user)=> {
    //         if (err) {
    //             res.send(err)
    //         } else if (!user){
    //             res.send(404)
    //         } else {
    //             res.send(user)
    //             next()
    //         }
    //     });
    // },

    // getAllUsers: (req, res, next) => {
    //     userModel.find(req.params.id).then
    //     /*populate('following').exec*/((err, user)=> {
    //         if (err){
    //             res.send(err)
    //         } else if (!user){
    //             res.send(404)
    //         } else {
    //             res.send(user);
    //             next();
    //         }
    //     });
    // },
    
    // authUser: function (req, res, next) {
    //     userModel.findOne({ email: req.body.email }, function (err, userInfo) {
    //         if (err) {
    //             next(err);
    //         } else {
    //             if (bcrypt.compareSync(req.body.password, userInfo.password)) {
    //                 const token = jwt.sign({ id: userInfo._id }, req.app.get(secretKey), { expiresIn: '12h' });
    //                 res.json({ status: "success", message: "user found!", data: { user: userInfo, token: token } });
    //             } else {
    //                 res.json({ status: "error", message: "Invalid email/password!!!", data: null });
    //             }
    //         }
    //     });
    // },

    // contactEmail: function(req, res, next){
                
    //     const message = () => {
    //         const name = req.body.name;
    //         const email = req.body.email;
    //         const phone = req.body.phone;
    //         const contact = req.body.contact;
    //         const message = req.body.message;
    //         return `${name} nos contacto por la pagina web, su email es ${email} y su numero de telefono ${phone}\n prefire ser contactado por ${contact} y nos dejo el siguiente mensaje \n ${message}`
    //     }

    //     const transporter = nodemailer.createTransport(
    //         smtpTransport(
    //             {
    //                 service: 'gmail',
    //                 host: 'smtp.gmail.com',
    //                 auth: {
    //                     user: 'luxurymotorsweb@gmail.com, luxurymotorspanama@gmail.com ',
    //                     pass: 'LuxuryMotorsPanama01'
    //                 }
    //             }
    //         )
    //     );

    //     const mailOptions = {
    //         from: 'luxurymotorsweb@gmail.com',
    //         to: 'luxurymotorsweb@gmail.com',
    //         subject: 'Mensaje de contacto',
    //         text: message()
    //     };

    //     transporter.sendMail(
    //         mailOptions, function (error, info) {
    //             if (error) {
    //                 console.log(error);
    //                 res.json({ status: "error", message: error });
    //             } else {
    //                 console.log('Email sent: ' + info.response);
    //                 res.json({ status: "success", message: info.response });
    //             }
    //         }
    //     );
  
    // },

    signIn: (req, res, next) => {
        res.send({
            // token: tokenForUser(req.user)
        });
    },

    // signUp: (req, res, next) => {
    //     const { name, email, password } = req.body;
    //     const saltRounds = 12;

    //     if(!email || !password){
    //         res.status(422).send({
    //             error: 'El correo electrónico y la contraseña son necesarios.'
    //         })
    //     }
        
    //     bcrypt.hash(password, saltRounds)
    //         .then((hash) => {
    //             return createUser( name, email, hash )
    //                 .then((newUser) =>{
    //                     res.json({
    //                         token: tokenForUser(newUser)
    //                     })
    //                 })
    //                 .catch((error) => {
    //                     res.json({
    //                         error: 'Ha ocurrido un error al intentar crear el usuario.'
    //                     })
    //                 })
    //         })
    //         .catch((error) => {
    //             return next(error);
    //     })
    // }

    // addUser: (req, res, next) => {
    //     new User(req.body).save((err, newUser) => {
    //         if (err)
    //             res.send(err)
    //         else if (!newUser)
    //             res.send(400)
    //         else
    //             res.send(newUser)
    //         next()
    //     });
    // },
    /**
     * user_to_follow_id, user_id
     */
    // followUser: (req, res, next) => {
    //     userModel.findById(req.body.id).then((user) => {
    //         return userModel.follow(req.body.user_id).then(() => {
    //             return res.json({msg: "followed"})
    //         })
    //     }).catch(next)
    // },
    // getUserProfile: (req, res, next) => {
    //     userModel.findById(req.params.id).then
    //     ((_user) => {
    //         return userModel.find({'following': req.params.id}).then((_users)=>{
    //             _users.forEach((user_)=>{
    //                 userModel.addFollower(user_)
    //             })
    //             return Article.find({'author': req.params.id}).then((_articles)=> {
    //                 return res.json({ user: _user, articles: _articles })
    //             })
    //         })
    //     }).catch((err)=>console.log(err))
    // }
}