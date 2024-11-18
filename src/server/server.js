require('dotenv').config();
const Hapi = require('@hapi/hapi');
const postJobRoutes = require('../routes/job.post.routes');
const deleteJobRoutes = require('../routes/job.delete.routes');
const updateJobRoutes = require('../routes/job.update.routes');

(
    async () => {
        const server = Hapi.server({
            port: process.env.PORT,
            host: 'localhost',
            routes: {
                cors: {
                    origin: ['*'],
                }
            },
        });

        server.route(postJobRoutes);
        server.route(deleteJobRoutes);
        server.route(updateJobRoutes);

        await server.start();
        console.log(`Server start on ${server.info.uri}`);
        
        //console.log(process.env);

        process.on('unhandledRejection', (err) => {
            console.log(err);
            process.exit(1);
        });
    }
)();