const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'lasdofa asdf asdf asdfg eslndf lkjsnga doiv lirgunas liwenfasdf',
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: 'lasdofa asdf asdf asdfg eslndf lkjsnga doiv lirgunas liwenfasdf',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'lasdofa asdf asdf asdfg eslndf lkjsnga doiv lirgunas liwenfasdf',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'lasdofa asdf asdf asdfg eslndf lkjsnga doiv lirgunas liwenfasdf',
        user_id: 5,
        post_id: 1
    },
    {
        comment_text: 'lasdofa asdf asdf asdfg eslndf lkjsnga doiv lirgunas liwenfasdf',
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: 'lasdofa asdf asdf asdfg eslndf lkjsnga doiv lirgunas liwenfasdf',
        user_id: 2,
        post_id: 4
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;