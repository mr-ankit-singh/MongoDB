#__ Schema in MongoDB __#
    - A document schema is a JSON object that allowsyou to define the shape and content
      of documents and embedded documents in a collections.
    - You can use a schema :-
        : To require a specific set of fields.
        : Configure the content of field.
        : To validate changes to a document based on its beginning and ending states.
    - By default Mongoose adds an _id to your schema.
    - Note : schema.path() function return the instanitiated schema type for a given path.
    
    - Syntax 
        import mongoose from 'mongoose'
        const nameSchema = new mongoose.Schema({
            key1 : {type : String},
            key2 : {type : Number},
            key3 : {type : Array},
            key4 : {type : Boolean},
            key5 : {type : Date},
            .....................
            .....................
        })

        type : It is a special property in Mongoose schema
               String     Number  Date        Buffer    Boolean     Mixed
               ObjectId   Array   Decimal128  Map       Schema

        String
            lowercase : Boolean, whether to always call .toLowerCase() on the value.
            uppercase : Boolean, whether to always call .toUpperCase() on the value.
            trim      : 
            match     :
            enum      :
            minLength :
            maxLength :
            populate  :

        Number 
            min
            max
            enum
            populate

        Date
            min
            max

        All Schema type
            required
            default
            select
            validate
            get
            set
            alias

        

