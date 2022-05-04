import React from 'react';

const Blog = () => {
   return (
     <div>
       <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
         <div>
           <h2 className="text-center font-mono text-4xl font-semibold">
             My Blogs
           </h2>
           <div>
             <p className="mt-10 mb-3 font-semibold text-2xl text-gray-900">
               Difference between `javascript` and `nodejs`.
             </p>
             <p className="text-gray-800 grid">
               <span className="font-mono font-semibold text-xl">
                 Javascript:
               </span>
               Javascript is a programming language that is used for writing
               scripts on the website. Javascript can only be run in the
               browsers. It is basically used on the client-side. Javascript is
               capable enough to add HTML and play with the DOM. Javascript is
               used in frontend development. It is the upgraded version of ECMA
               script that uses Chrome’s V8 engine written in C++.
             </p>
             <p className="text-gray-800 grid">
               <span className="font-mono font-semibold text-xl">NodeJS:</span>
               NodeJS is a Javascript runtime environment. We can run Javascript
               outside the browser with the help of NodeJS. It is mostly used on
               the server-side. Nodejs does not have capability to add HTML
               tags. V8 is the Javascript engine inside of node.js that parses
               and runs Javascript. Nodejs is used in server-side development.
               Nodejs is written in C, C++ and Javascript.
             </p>
             <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
               When should you use `nodejs` and when should you use `mongodb`.
             </p>
             <p className="text-gray-800 grid">
               <span className="font-mono font-semibold text-xl">
                 When should we use Nodejs:
               </span>
               Any project needs a programming environment and a runtime library
               that offers you basic programming tools/support and can compile
               and/or interpret your code. Nodejs is such as tool for the
               Javascript programming language. There are other similar tools
               for other languages such as Python, Java, PHP, C#, C++, Go,
               etc... So, if you want to write some kind of stand-alone program
               or server in Javascript, then you can use nodejs for it.
             </p>
             <p className="text-gray-800 grid">
               <span className="font-mono font-semibold text-xl">
                 When should we use MongoDB:
               </span>
               If your application needs the ability to persistently store data
               in a way that you can efficiently query or update it later, then
               you would typically use some form of database. There are dozens
               of popular databases. MongoDB is one such database. MariaDB,
               MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other
               databases. Different databases have different strengths (things
               they are best at) and different ways of using them so it's a
               whole different question to choose the right/best database for
               what you're doing.
             </p>
             <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
               Differences between `sql` and `nosql` Databases.
             </p>
             <p className="text-gray-700">
               A database is a set of related data organized according to
               certain rules that provide general principles for the use,
               description, and storage of data. In web development there are
               two main types of databases: relational and non-relational. An
               SQL database (relational database) is a collection of rows and
               columns that store information in the form of linked tables. All
               database tables own a specific key that recognizes the data in
               the table. NoSQL stands for non-relational databases, but many
               types of non-relational databases support SQL-compatible queries.
               NoSQL databases have flexible schemas and are specially designed
               for specific data models. NoSQL databases are great for
               developing modern applications. Now let's analyze the difference
               between SQL and NoSQL databases:
               <ol className="list-disc ml-5">
                 <li>
                   -Scalability. Relational databases can most often be scaled
                   vertically, while non-relational databases can be scaled
                   horizontally. For large or frequently changing databases, the
                   choice will be mostly NoSQL.
                 </li>
                 <li>
                   - Type and structure. Non-relational databases have flexible
                   schemas for unstructured data. Relational databases, on the
                   contrary, need a uniquely defined data storage structure.
                 </li>
                 <li>
                   - Reliability. At the moment, there is an opinion that SQL
                   databases are more reliable than NoSQL databases.
                 </li>
                 <li>
                   - Requests. NoSQL does not have a universal query language.
                   Relational databases use the SQL language.
                 </li>
                 <li>
                   - Storage and access to complex data structures. By their
                   nature, relational databases are associated with complex
                   situations, which is why they outperform NoSQL solutions
                   here.
                 </li>
               </ol>
             </p>
             <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
               What is the purpose of `jwt` and how does it work?
             </p>
             <p className="text-gray-700">
               JSON Web Token (JWT) is an open standard (RFC 7519) that defines
               a compact and self-contained way for securely transmitting
               information between parties as a JSON object. This information
               can be verified and trusted because it is digitally signed. JWTs
               can be signed using a secret (with the HMAC algorithm) or a
               public/private key pair using RSA or ECDSA. Although JWTs can be
               encrypted to also provide secrecy between parties, we will focus
               on signed tokens. Signed tokens can verify the integrity of the
               claims contained within it, while encrypted tokens hide those
               claims from other parties. When tokens are signed using
               public/private key pairs, the signature also certifies that only
               the party holding the private key is the one that signed it.
               Working Process:
               <ol className="list-disc ml-5">
                 <li>
                   Header: The header contains the metadata for the token and at
                   a minimal contains the type of the signature and/or
                   encryption algorithm.
                 </li>
                 <li>
                   Claims: The claims contains any information that you want
                   signed.
                 </li>
                 <li>
                   JSON Web Signature (JWS): The headers and claims digitally
                   signed using the algorithm in the specified in the header.
                   They handle some of the problems with information passed from
                   a client to a server. JWT allows the server to verify the
                   information contained in the JWT without necessarily storing
                   state on the server. As a trend, we are seeing more and more
                   SaaS products include JWT integrations as a feature or using
                   JWT in their product directly.
                 </li>
               </ol>
             </p>
           </div>
         </div>
       </section>
     </div>
   );
};

export default Blog;