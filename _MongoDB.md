## MongoDB  ##

------------------------------------------------------------------------------------------------------------

## Connect MongoDB using Mongoose ##

    connect() :- Mongoose require a connection to a MongoDB database.
    You can connect to a locally hosted db with mongoose.connect().
    Syntax :
    mongoose.connect( uri, options, callback )
    
                uri : mongodb://localhost:27017/db_name
                options : {
                    user        : It's a String,
                    pass        : It's a String,
                    dbName      : It's a String,
                    authSource  : It's a String,
                    autoIndex   : It's a Boolean
                    .............
                    .............
                }
                callback : Its a callback function

## Defining your schema ##

    schema :- Everything in Mongoose starts with a Schema.
    Each schema maps to a MongoDB collection
    And defines the shape of the documents within that collection.
    A document schema is a JSON object.
    
        Syntax :
        	import mongoose from 'mongoose'
        	const { Schema } = mongoose

        	const schemaName = new Schema({
        		......
        	})

        The permitted SchemaTypes are:
        	String    Number	Date	   Buffer
        	Boolean	  Array		Mixed	   ObjectId
        	Map       UUID		Decimal128
    
    schema.path() :- Function returns the instantiated schema type for a given path.

## Creating a model ##

    Models are fancy constructor compiled from Schema definations.
    An instance of model is called a document.
    Models are responsible for creating and reacding document from the underlying MongoDB database.

    Syntax :
        import mongoose from 'mongoose'
    	const { Schema } = mongoose

    	<-- Defining Schema -->
    	const schemaName = new Schema({
    		......
    	})

    	<-- Compiling Schema -->
    	const modelName = mongoose.model(modelName|collectionName, schemaName)

    	<-- Creating Document -->
    	const doc = new modelName({
    		.....
    		.....
    	});

    	<-- Save Document -->
    	await doc.save();

------------------------------------------------------------------------------------------------------------

    show dbs : Show all databases
    
    use <database_name> : Use to create a database.
                          If the specified database name does not exist then it creates it.
                          And set it as a current database.
    
    db.dropDatabase() : Method which deletes a current database.
                        Note: Method names are case sensitive.
    
    
    show collections : Commands to list all the collections in a database.
    
    db.createCollection("collection_name") : To create a collection.
    
    db.<collection-name>.drop() : To delete a collection.

------------------------------------------------------------------------------------------------------------


### MongoDB provides the following methods to insert documents into a collection :-

    db.< collection>.insertOne(document, [writeConcern]) - Inserts a single document into a collection.
    db.<collection>.insert() - Inserts one or more documents into a collection.
    db.<collection>.insertMany() - Insert multiple documents into a collection.

    Ordered and unordered inserts

        - By default, MongoDB perform ordered inserts.
        - While executing an ordered list, each operation must wait for the previous operation to finish.
        - Usually executing an ordered insert is slower than executing an unordered insert.
        - Ordered operations stop after an error,
        - While unordered operations continue to process any remaining write operations in the queue.

    Syntax :
    db.collection.insertMany([documents] , {ordered: false})
    You can enable unordered inserts by setting the property ‘order’ to false.


------------------------------------------------------------------------------------------------------------


### MongoDB provides two methods for finding documents from a collection :-

    db.collection.findOne(query, projection) - Returns a the first document that matched with the specified criteria.
    db.collection.find(query, projection) - Returns a cursor to the selected documents that matched with the specified criteria.

    More Methods

    db.collections.findById(ID, projection, option) - Retrive Single document


------------------------------------------------------------------------------------------------------------


### MongoDB provides methods for updating documents from a collection :-

    db.collection.updateByID()
    db.collection.updateOne(filter, update, options)
    db.collection.updateMany(filter, update, options)

    db.collection.findByIdAndUpdate(id, update, options, callback)
    db.collection.findOneAndUpdate(conditions, update, options)

    db.collection.findAndModify(document)


------------------------------------------------------------------------------------------------------------


### MongoDB provides methods for deleting documents from a collection :-

    db.collection.remove() :- Removes documents from a collection.

    db.collection.deleteOne()
    db.collection.deleteMany()

    db.collection.findByIdAndDelete(id, options)
    db.collection.findByIdAndRemove(id, options)
    db.collection.findOneAndDelete(conditions, options)
    db.collection.findOneAndRemove(conditions, options)

------------------------------------------------------------------------------------------------------------


### MongoDB provides methods for replace documents from a collection :-

    db.collection.replaceOne(filter, replacement, options)
    db.collection.findOneAndReplace(filter, replacement, options)

------------------------------------------------------------------------------------------------------------


### MongoDB Cursor 

    -The find() method returns a cursor object which can be used to iterate the result.

    Syntax: var cursor = db.<collection_name>.find()
            cursor.<cursorMethod>({ queries })

    Method                  Description
    cursor.count()          Returns the total number of documents referenced by a cursor.
    cursor.forEach()        Iterates the cursor to apply a JavaScript function to each document from the cursor.
    cursor.hasNext()        Returns true if a cursor can iterate further to return more documents.
    cursor.isExhausted()    Returns true if the cursor is closed and there are no remaining objects in the batch.
    cursor.itcount()        Counts the number of documents remaining in a cursor.
    cursor.limit()          Specify the maximum number of documents the cursor will return.
    cursor.max()            Specifies the exclusive upper bound for a specific index in order to constrain the results of find().
    cursor.min()            Specifies the inclusive lower bound for a specific index in order to constrain the results of find().
    cursor.next()           Returns the next document from the result set.
    cursor.pretty()         Display result in the readable format.
    cursor.readConcern()    Specifies a level of isolation for read operations.
    cursor.skip()           Skips the specified number of document for pagination.
    cursor.sort()           Specifies the order in which the query returns matching documents.
    cursor.toArray()        Returns an array that contains all the documents from a cursor.
    cursor.map()            Applies a function to each document visited by the cursor and collects the return
                            values from successive applications of the function into a Cursor object.

------------------------------------------------------------------------------------------------------------


### Comparision Operators 

    Syntax : 
        db.collection.find({ "fieldName" : { $Operator : "value" }})

    Name    Description
    $eq     Matches values that are equal to a specified value.
    $gt     Matches values that are greater than a specified value.
    $gte    Matches values that are greater than or equal to a specified value.
    $lt     Matches values that are less than a specified value.
    $lte    Matches values that are less than or equal to a specified value.
    $ne     Matches all values that are not equal to a specified value.
    $in     Matches any of the values specified in an array.
    $nin    Matches none of the values specified in an array.

### Logical Operators 

    Syntax : 
        db.collection.find({ $and :[ { condition1 } , { condition2 }] })
        db.collection.find({ $or :[ { condition1 } , { condition2 }] })
        db.collection.find({ $nor :[ { condition1 } , { condition2 }] })
        db.collection.find({ "fieldName" : { $not : "value" }})

    Name    Description
    $and    Returns all documents that match the conditions of both clauses.
    $or     Returns all documents that match the conditions of either clause.
    $nor    Returns all do cuments that fail to match both clauses.
    $not    Returns documents that do not match the query expression.

    Note : In MongoDB, when you provide multiple fields within a single query document,
    MongoDB treats them as an implict AND operations.


### Element Operators 

    Name    Description
    $exists Matches documents that have the specified field.
    $type   Selects documents if a field is of the specified type.

### Evaluation Operators 

    Name    Description
    $expr   Allows use of aggregation expressions within the query language.
    $regex  Selects documents where values match a specified regular expression.
    $text   Performs text search.
    $where  Matches documents that satisfy a JavaScript expression.

    $expr
        - Allows the use of aggregation expressions within the query language.
        - Syntax : { $expr: { <expression> } }
        - Examples
          db.monthlyBudget.find( { $expr: { $gt: [ "$spent" , "$budget" ] } } )
          db.supplies.find( { $expr: { $lt:[ discountedPrice, NumberDecimal("5") ] } });

------------------------------------------------------------------------------------------------------------


### MongoDB provides the following methods to update existing documents in a collection:

    db.collection.updateOne(filter, document, options) - Modifies a single document in a collection.
    db.collection.updateMany(filter, document, options) - Modifies one or more documents in a collection.

    The following table lists the update operators which can be used with the updateOne() and updateMany() methods.

    Method          Description
    $currentDate    Sets the value of a field to current date, either as a Date or a Timestamp.
    $inc            Increments the value of the field by the specified amount.
    $min            Only updates the field if the specified value is less than the existing field value.
    $max            Only updates the field if the specified value is greater than the existing field value.
    $mul            Multiplies the value of the field by the specified amount.
    $rename         Renames a field.
    $set            Sets the value of a field in a document.
    $setOnInsert    Sets the value of a field if an update results in an insert of a document.
                    Has no effect on update operations that modify existing documents.
    $unset          Removes the specified field from a document.


------------------------------------------------------------------------------------------------------------


### Sort Documents in MongoDB Collection ###

    - MongoDB provides the db.collection.find() method returns a cursor object for the resulted documents.
    - Use the cursor.sort() method or db.collection.find().sort() to sort the resulted documents in a cursor
      based on the specified order.

        Syntax :
            db.collection.find().sort(document)

------------------------------------------------------------------------------------------------------------


### MongoDB: Delete Documents in a Collection ###

    MongoDB provides the following methods to delete one or more documents in a collection.

    db.collection.deleteOne(filter, options) - Deletes the first matching document in a collection.
    db.collection.deleteMany(filter, options) - Deletes all the matching documents in a collection.


------------------------------------------------------------------------------------------------------------


### Projections

    In MongoDB, projection means selecting only the necessary data rather than selecting whole of the data of a document.
    To limit this, you need to set a list of fields with value 1 or 0.
    1 is used to show the field while 0 is used to hide the fields.

    Syntax :
        db.collection.find( {} , { "key" : 0/1 })

    Note : You cannot include or exclude fields simultaneously in the same query

------------------------------------------------------------------------------------------------------------

