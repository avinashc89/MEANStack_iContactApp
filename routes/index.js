var express = require('express');
var router = express.Router();

//to get the contact details
router.get('/contactList', function(req, res) {
	
	db.Contacts.find({},{_id:0}).sort({name:1},function(err,contacts){
		if(err || !contacts){
			res.send("No contact found");
			console.log(err);
		}else
			{
			res.json(contacts);
		}
		
	});

});


//to add new contact details
router.post('/addContact', function(req,res){
	
	db.Contacts.insert(req.body,function(err, doc)
			{
				if(err || !doc){
					console.log(err);
				}else
					{
					res.json(doc);
				}
			});
});

router.post('/checkMutlidataReq',function(req,res)
		{
			
			res.json(req.body);
		});

module.exports = router;
