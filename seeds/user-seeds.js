const { User } = require('../models');

const userData = [
{
    username: 'burntorange',
    email: 'borange2019@gmail.com',
    password: 'abaaoakl'
},
{
    username: 'llaldkg',
    email: 'alksjgho9@gmail.com',
    password: 'abkaldsjl'
},
{
    username: 'oirenzkje',
    email: 'oigerbnio@gmail.com',
    password: 'aloasdf'
},
{
    username: 'idfjken3qkdsd',
    email: 'lakgdbndfklv@gmail.com',
    password: 'apoejgqger'
},
{
    username: 'vsiinev',
    email: 'wekjnvae2erfg9@gmail.com',
    password: 'abrgeqasg'
},
{
    username: 'gersgerqwg',
    email: 'qergqergqerg9@gmail.com',
    password: 'aoiholjknql'
},
{
    username: 'beqrgvevewse',
    email: 'bsdtq3tegrsvd2019@gmail.com',
    password: 'aegwrgergwwegsvf'
},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;