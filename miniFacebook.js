// Mini Facebook 

var facebookProfile = {
    name: "Andrew",
    friends: 800,
    messages: ["Hey bud", "yo", "hi"],
    postMessage: function(message){
    facebookProfile.messages.push(message); 
    },
    deleteMessage: function(index){
    facebookProfile.messages.splice(index, 1);
    }, 
    addFriend: function(){
    facebookProfile.friends++;
    }, 
    removeFriend: function(){
    facebookProfile.friends--;
    }
}; 