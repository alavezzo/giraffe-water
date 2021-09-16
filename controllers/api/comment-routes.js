const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// router.get('/:id', (req, res) => {
//     Comment.findOne({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbUserData => res.json(dbUserData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err)
//         });
// });

router.post('/', (req, res) => {

    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id

    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});


module.exports = router;