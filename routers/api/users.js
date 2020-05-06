const router = require('express').Router();
let User = require('../../models/user.model');

//@route GET api/items
//@desc Create A Post
//@access Public

router.route('/').get((req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});
//route.post('/', (req, res)=>{ const newUser = new User({name: req.body.name})})
router.route('/add').post((req, res) =>{
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error:' +err));

});
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(users => users.remove().then(() => res.json({success:true})))
    .catch(err => res.status(400).json({success:false}));
});


router.route('/update/:id').post((req, res)=>{
    User.findById(req.params.id)
    .then(users => {
        users.username = req.body.username;

        users.save()
        .then(() => res.json('Items updated!'))
        .catch(err => res.status(400).json('Error:' + err));

    })
    .catch(err => res.status(400).json('Error:' + err));
})


module.exports =router;