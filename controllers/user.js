const express 	= require('express');
const router 	= express.Router();

router.get('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.render('user/create');
	}else{
		res.redirect('/login');
	}
});


router.post('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		// res.send('success');
		console.log(req.body);
		//console.log( req.session.name.length);
		let id= 1+ (req.session.name.length);
		let username=req.body.username;
		let password= req.body.password;
		let email= req.body.email;
		let newuser= [id,username,email,password,];
		req.session.name.push(newuser);
		console.log(newuser);
		console.log(req.session.name);
		//res.render('home/userlist', {users: req.session.name});	
		res.redirect('/home/userlist');

	}else{
		res.redirect('/login');
	}
});

router.get('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.render('user/edit');
	}else{
		res.redirect('/login');
	}
});

router.post('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.send('updated');
	}else{
		res.redirect('/login');
	}
});

router.get('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var user = {username: 'alamin', password: '123', email: 'email@gmail.com'};
		res.render('user/delete', user);
	}else{
		res.redirect('/login');
	}
});

router.post('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.send('done!');
	}else{
		res.redirect('/login');
	}
});

module.exports = router;

