import { Helmet } from "react-helmet-async";

const Blogs = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>Khujo | Blogs</title>
            </Helmet>
            <div className='text-center pb-10 pt-14'>
                <h1 className='text-5xl font-bold'>Blogs of Junaed</h1>
                <section className='py-5 px-20 text-center'>
                    <div className='text-center mb-10'>
                        <figure>
                            <img className='h-[500px] w-[1100px] mx-auto ' src={'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg'} alt='' />
                        </figure>
                    </div>
                    <div className="bg-red-100 p-10 mb-5">
                        <h1 className='text-3xl font-bold'>What is an access token and refresh token? How do they work and where should we
                            store them on the client-side?</h1>
                        <p className='text-center text-xl justify-evenly'>
                            <span className="text-4xl"> - A</span>ccess tokens and refresh tokens are fundamental components in modern authentication and authorization systems. An access token is a short-lived credential that grants limited access to resources, while a refresh token is a long-lived secret used to obtain new access tokens without user intervention. Access tokens are stored in memory for short-term use, providing access to protected resources. In contrast, refresh tokens, with their longer validity, are stored securely, typically in cookies or platform-specific secure storage. They work together to maintain user sessions and ensure secure access to protected data, following best practices for token management and security.
                        </p>
                    </div>
                    <div className="bg-green-100 p-10 my-10">
                        <h1 className='text-3xl font-bold'>What is express js? What is Nest JS?</h1>
                        <p className='text-center text-xl justify-evenly'>
                            <span className="text-4xl"> - Express.js:</span> Express.js is a minimal and flexible Node.js web application framework that simplifies the development of web and mobile applications. It provides a set of features for building robust and scalable web servers, including routing, middleware support, and a vibrant ecosystem of plugins. Express is widely used for creating APIs and web applications due to its simplicity and speed.
                            <br />
                            <span className="text-4xl"> - NestJS:</span> NestJS is a progressive and versatile Node.js framework built with TypeScript. Its designed for building efficient and maintainable server-side applications, primarily focused on back-end development. NestJS leverages TypeScripts features, and it follows a modular and structured approach using decorators, making it highly extensible and testable. Its particularly suitable for creating complex, scalable, and enterprise-grade applications, and it promotes the use of well-established architectural patterns like Dependency Injection.
                        </p>
                    </div>
                    <div className="bg-orange-100 p-10 my-10">
                        <h1 className='text-3xl font-bold'>Code Explanation</h1>
                        <p className='text-center text-xl justify-evenly'>
                            <span className="text-4xl"> - </span>In this project, I have used React for front-end and NodeJS for backend. For database, I have used MongoDB.
                        </p>
                    </div>

                </section>
            </div>

        </div>
    );
};

export default Blogs;