import React from 'react';

const Blog = () => {
    return (
        <div className='container bg-white my-5'>
            <h1 className='my-5 text-warning text-center'>Here are some of my latest BLOGS</h1>
            <div className='my-4 p-4'>
                <h2>What are the differences between Javascript and Node js ?</h2>
                <p className='fs-5'>1.JavaScript is a high level programming language but Node js is a javasript runtime. Which helps  us to run javascript in our server.
                    2.We can add HTML  tags in javascript and run DOM in browser but in Node js we can not connect HTML tags with it.
                    3.It is a programming language and it can run in any browser that has a browser engine , where node js is a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use directly.</p>
            </div>
            <div className='my-4 p-4'>
                <h2>When should you use nodejs and when should you use mongodb?</h2>
                <p className='fs-5'>The node js and mongodb are two differents technology. We can use them together in web development technology.
                    Node js is a javascript runtime.We can use Node js to build a backent server for our website.So we can say that, when we need to create a programming environment by using javascript , we will use Node js.
                    MongoDB is NoSQL database which is document oriented . We can store , update, delete our data in mongodb database. MongoDb provides us some api collection and we can manage our information through the api's in MongoDB.</p>
            </div>
            <div className='my-4 p-4'>
                <h2>What are the differences between sql and nosql databases?</h2>
                <p className='fs-5'>SQL databases are relational but NoSQL databases are non-relational.
                    SQL databases use structured and have a predefined schema while NoSQL databases have dynamic schemas .SQL databases are vertically scaleable but NOSQL databases are horizontally scaleable.SQL databases are table-based but NOSQL databases are documents, key value stores.SQL databases are better for multi-row transaction but NSQL is better for JSON. Some SQL databases are ORACLE, MYSQL , some NOSQL databases are MongoDB , cassandra.
                </p>
            </div>
            <div className='my-4 p-4'>
                <h1>What is the purpose of jwt and how does it work?</h1>
                <p className='fs-5'>JSON web token is a security verrify system .A JWT system is made up three part.1.header,2.payload,3.signature. This is a trusted digitally signatured system to transmit information between server and client. The information can be verrified by using a secret (HMAC algorithm) or pulic/private key.The signature ensures that the token been altered.The JWT sign is known to both the issuer and reciever, when the token is used , the verifies party verifies the header and payload match the signature.</p>
            </div>
        </div>
    );
};

export default Blog;