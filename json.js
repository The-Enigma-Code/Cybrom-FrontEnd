db.createCollection('nonfiction',
    {
        validator: {
                $jsonSchema:{
                    required:['name','price'],
                    properties:{
                        name:{
                            bsonType:'string',
                            description:'required and must be string'
                        },
                        price:{
                            bsonType:'number',
                            description:'required and must be number'
                        }
                    }
                }
        },

        validationAction: 'error'
    })
    db.runCommand({
        collMod:'nonfiction',
        validator: {
            $jsonSchema:{
                required:['name','price','authors'],
                properties:{
                    name:{
                        bsonType:'string',
                        description:'required and must be string'
                    },
                    price:{
                        bsonType:'number',
                        description:'required and must be number'
                    },
                    authors:{
                        bsonType:'array',
                        description:'required and must be array',
                        items:{
                            bsonType:'object',
                            required:['authorName','email'],
                            properties:{
                                authorName:{
                                    bsonType:'string',
                                    description:'required and must be string'
                                },
                                email:{
                                    bsonType:'string',
                                    description:'required and must be string'
                                }
                            }
                        }
                    }
                }
            }
    },validationAction:'error'
    })