const { User } = require('../models');

const userData = [
{
    username: 'burntorange',
    password: 'abaaoakl'
},
{
    username: 'llaldkg',
    password: 'abkaldsjl'
},
{
    username: 'oirenzkje',
    password: 'aloasdf'
},
{
    username: 'idfjken3qkdsd',
    password: 'apoejgqger'
},
{
    username: 'vsiinev',
    password: 'abrgeqasg'
},
{
    username: 'gersgerqwg',
    password: 'aoiholjknql'
},
{
    username: 'beqrgvevewse',
    password: 'aegwrgergwwegsvf'
},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;