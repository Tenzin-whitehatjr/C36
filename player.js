class Player{
    constructor(){

    }

    getCount(){
    var playing=database.ref("playerCount");
    playing.on("value",function(data){
        playerCount=data.val()
    })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
    update(){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}