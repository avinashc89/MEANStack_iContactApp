db.Contacts.insert([{name:'Avinash',email:'gac_4@yahoo.co.in',phone:'9790776'}])
,
{name:'Amsha',email:'amzala@gmail.co.in',phone:'9988998899'},
{name:'Shiva',email:'shiv_y2k@hotmail.com',phone:'8869744989'}])


db.Contacts.find().sort({name:1})
db.Contacts.find()._addSpecial( "$orderby", { name : 1 } )
db.Contacts.find( { $query: {}, $orderby: {name : 1 } } )

db.Contacts.find({
    $query:{},
    $orderby:{name:1}
    })

db.Contacts.remove({$or:[{_id: ObjectId("5511e6d33b31f0c02688c965")},{_id: ObjectId("5511e6d33b31f0c02688c966")}]})

db.Contacts.remove({_id: ObjectId("5511ea203b31f0c02688c97c")});

db.Contacts.update({name:'Avinash'},{phone:'(650) 296-8078'})

db.Contacts.update({name:'Amsha'},{$set:{phone:'(474) 889-0882',email:'amzalekha@gmail.com'}})
db.Contacts.update({name:'Shiva'},{$set:{phone:'(336) 690-3696'}})
db.Contacts.update({name:'Avinash'},{$set:{phone:'(650) 285-8078'}})