//post books code fro aws

exports.createBook = function(event,context,callback) {
    var params={
        Item:{
            "id": uuid.v1(),
            "Title": event.title,
            "category": event.category,
            "Description": event.description
        },
        TableName: process.env.TABLE_NAME
    };
    documentClient.put(params, function(err, data){
        callback(err,data);
    })

};
