const { Post } = require('../models');

const postData = [
    {
        title: 'alkadjvnl',
        post_text: 'lorem epsom adsfadflkasdfjads asdf kjasdfjalsd a;sfdkajsd;f as;dlkf aslkjashdf as glakjsdhgnf asljad nalsdgj nasldfnadsgjkn faldfjnal;skf a;skdfnalsdjkfa ',
        user_id: 4
    },
    {
        title: 'oadgjvna;d',
        post_text: 'lorem epsom adsfadflkasdfjads asdf kjasdfjalsd a;sfdkajsd;f as;dlkf aslkjashdf as glakjsdhgnf asljad nalsdgj nasldfnadsgjkn faldfjnal;skf a;skdfnalsdjkfa ',
        user_id: 1
    },
    {
        title: 'albvooo',
        post_text: 'lorem epsom adsfadflkasdfjads asdf kjasdfjalsd a;sfdkajsd;f as;dlkf aslkjashdf as glakjsdhgnf asljad nalsdgj nasldfnadsgjkn faldfjnal;skf a;skdfnalsdjkfa ',
        user_id: 5
    },
    {
        title: 'klvsjnaasdfvnl',
        post_text: 'lorem epsom adsfadflkasdfjads asdf kjasdfjalsd a;sfdkajsd;f as;dlkf aslkjashdf as glakjsdhgnf asljad nalsdgj nasldfnadsgjkn faldfjnal;skf a;skdfnalsdjkfa ',
        user_id: 3
    },
    {
        title: 'zljnasdk',
        post_text: 'lorem epsom adsfadflkasdfjads asdf kjasdfjalsd a;sfdkajsd;f as;dlkf aslkjashdf as glakjsdhgnf asljad nalsdgj nasldfnadsgjkn faldfjnal;skf a;skdfnalsdjkfa ',
        user_id: 4
    },
    {
        title: 'muginvr',
        post_text: 'lorem epsom adsfadflkasdfjads asdf kjasdfjalsd a;sfdkajsd;f as;dlkf aslkjashdf as glakjsdhgnf asljad nalsdgj nasldfnadsgjkn faldfjnal;skf a;skdfnalsdjkfa ',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;