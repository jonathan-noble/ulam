const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
        console.log('notification added', doc);
    })
};

exports.recipeCreated = functions.firestore
    .document('recipes/{recipeId}')
    .onCreate(doc => {
        
        const recipe = doc.data();
        const recipeId = doc.id;
        const notification = {
            content: 'added a new recipe',
            user: `${recipe.authorFirstName} ${recipe.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
            recipeId: recipeId
        }

        return createNotification(notification);

})

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                const notification = {
                    content: 'joined the party!',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification);

            })
})
