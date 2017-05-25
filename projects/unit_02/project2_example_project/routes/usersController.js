var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function (request, response) {

    // find all of the users
    User.find({})
        .exec(function (error, userList) {

            if (error) {
                console.log("Error while retrieving users: " + error);
                return;
            }

            // then pass the list of users to Handlebars to render
            response.render('users/index', {
                userList: userList
            });
        })
})

// USER CREATE FORM (NEW)
router.get('/new', function (request, response) {

    // simply render the new user form
    response.render('users/new');
});

// USER CREATE ROUTE
router.post('/', function (request, response) {

    // grab the new user information from the form POST
    var newUserFromForm = request.body;

    // then create a new User from the User model in your schema
    var user = new User({
        first_name: newUserFromForm.first_name,
        last_name: newUserFromForm.last_name,
        email: newUserFromForm.email
    });

    // then save the new user to the database
    user.save(function (err, user) {
        if (err) {
            console.log(err);
            return;
        }
        
        // once the new user has been saved, redirect to the users index page
        response.redirect('/users');
    });

});

// USER SHOW ROUTE
router.get('/:id', function (request, response) {

    // grab the ID of the user we want to show
    var userId = request.params.id;

    // then find the user in the database using the ID
    User.findById(userId)
        .exec(function (error, user) {

            if (error) {
                console.log("Error while retrieving user with ID of " + userId);
                console.log("Error message: " + error);
                return;
            }

            // once we've found the user, pass the user object to Handlebars to render
            response.render('users/show', {
                user: user
            });
        });

});


// USER EDIT ROUTE
router.get('/edit/:id', function (request, response) {

    // grab the ID of the user we want to edit from the parameters
    var userId = request.params.id;

    // then find the user we want to edit in the database, using the ID
    User.findById(userId)
        .exec(function (error, user) {

            if (error) {
                console.log("Error while retrieving user with ID of " + userId);
                console.log("Error message: " + error);
                return;
            }

            // once we have found the user, pass the user info to the
            // user edit form so we can pre-populate the form with existing data
            response.render('users/edit', {
                user: user
            });
        });
});

// USER UPDATE ROUTE
router.put('/:id', function (request, response) {

    // grab the ID of the user we want to update from the parameters
    var userId = request.params.id;

    // then grab the edited user info from the form's PUT request
    var newUserInfo = request.body;

    // then find the user in the database, and update its info to
    // match what was updated in the form
    // (remember to pass { new: true })
    User.findByIdAndUpdate(userId, newUserInfo, { new: true })
        .exec(function (error, user) {

            if (error) {
                console.log("Error while updating User with ID of " + userId);
                return;
            }

            // once we have found the user and updated it, redirect to 
            // that user's show route
            response.redirect('/users/' + userId);

        });

});


// USER DELETE
router.get('/delete/:id', function (request, response) {

    // grab the ID of the user we want to delete from the parameters
    var userId = request.params.id;

    // then find and delete the user, using the ID
    User.findByIdAndRemove(userId)
        .exec(function (error, user) {

            if (error) {
                console.log("Error while deleting User with ID of " + userId);
                return;
            }

            // once the user has been deleted, redirect back to the users index
            response.redirect('/users');

        });

});

// SHOW NEW ITEM FORM
router.get('/:userId/items/new', function (request, response) {

    // grab the ID of the user we want to create a new item for
    var userId = request.params.userId;

    // then render the new item form, passing along the user ID to the form
    response.render('items/new', {
        userId: userId
    })
});

// ADD A NEW ITEM
router.post('/:userId/items', function (request, response) {

    // grab the user ID we want to create a new item for
    var userId = request.params.userId;

    // then grab the new Item that we created using the form
    var newItemName = request.body.name;

    // Find the User in the database we want to save the new Item for
    User.findById(userId)
        .exec(function (err, user) {

            // add a new Item to the User's list of items, using the data
            // we grabbed off of the form
            user.items.push(new Item({ name: newItemName }));

            // once we have added the new Item to the user's collection 
            // of items, we can save the user
            user.save(function (err) {
                if (err) {
                    console.log(err);
                    return;
                }

                // once the user has been saved, we can redirect back 
                // to the User's show page, and we should see the new item
                response.redirect('/users/' + userId);
            })
        });
});

// REMOVE AN ITEM
router.get('/:userId/items/:itemId/delete', function (request, response) {

    // grab the ID of the User we would like to delete an item for
    var userId = request.params.userId;

    // grab the ID of the Item we would like to delete for the User ID above
    var itemId = request.params.itemId;

    // use Mongoose to find the User by its ID and delete the Item 
    // that matches our Item ID
    User.findByIdAndUpdate(userId, {
        $pull: {
            items: { _id: itemId }
        }
    })
        .exec(function (err, item) {
            if (err) {
                console.log(err);
                return;
            }

            // once we have deleted the item, redirect to the user's show page
            response.redirect('/users/' + userId);
        })
});

// SHOW THE ITEM EDIT FORM
router.get('/:userId/items/:itemId/edit', function (request, response) {

    // grab the ID of the user whose Item we would like to edit
    var userId = request.params.userId;

    // then grab the ID of the Item we would like to edit for the User above
    var itemId = request.params.itemId;

    // find the User by ID
    User.findById(userId)
        .exec(function (error, user) {

            // once we have found the User, find the Item in its' array 
            // of items that matches the Item ID above
            var itemToEdit = user.items.find(function (item) {
                return item.id === itemId;
            })

            // Once we have found the item we would like to edit, render the 
            // Item edit form with all of the information we would like to put 
            // into the form
            response.render('items/edit', {
                userId: userId,
                itemId: itemId,
                itemToEdit: itemToEdit
            })
        })

});

// EDIT AN ITEM
router.put('/:userId/items/:itemId', function (request, response) {

    // find the ID of the user we would like to edit
    var userId = request.params.userId;

    // find the ID of the Item we would like to edit for the User above
    var itemId = request.params.itemId;

    // grab the edited information about the Item from the form
    var editedItemFromForm = request.body;

    // find the User by ID
    User.findById(userId)
        .exec(function (error, user) {

            // once we have found the User, find the Item in that user's 
            // collection of Items that matches our Item ID above
            var itemToEdit = user.items.find(function (item) {
                return item.id === itemId;
            })

            // update the item we would like to edit with the new 
            // information from the form
            itemToEdit.name = editedItemFromForm.name;

            // once we have edited the Item, save the user to the database
            user.save(function (error, user) {
                
                // Once we have saved the user with its edited Item, redirect 
                // to the show page for that User. We should see the Item 
                // information updated.
                response.redirect('/users/' + userId)
            });

            
        });
});

module.exports = router;
