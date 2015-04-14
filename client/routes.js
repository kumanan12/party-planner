/**
 * Created by kumanan12 on 4/14/2015.
 */
Router.route("/", function () {
    this.render("userList");
});

Router.route("/userDetails", function () {
    this.render("userDetails");
});

//userDetails