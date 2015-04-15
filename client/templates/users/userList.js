/**
 * Created by Kumanan on 4/11/2015.
 */

var userList=[
    {
        _id:1,
        createdAt:"1/1/2015",
        profile:{
            name:"Kumanan Murugesan"
        }
    },
    {
        _id:2,
        createdAt:"3/11/2015",
        profile:{
            name:"Nannan Murugesan"
        }
    },
    {
        _id:1,
        createdAt:"4/7/2015",
        profile:{
            name:"Chezhiyan Murugesan"
        }
    }
];

Template.userList.helpers({
    users:function(){
        return Students.find();
    }
});
