/**
 * Created by kumanan12 on 4/14/2015.
 */
Router.route("/", function () {
    this.render("userList");
});

Router.route("/userDetails", function () {
    this.render("userDetails");
});


Router.route('/userDetails/:_id', function () {
    var params = this.params; // { _id: "5" }
    var id = params._id; // "5"
    console.log("id : " + id);
    this.render("userDetails1",{
        data:{
            name:"test"
        }
    });
});

//userDetails