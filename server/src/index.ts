import express, { Application } from 'express';  
import morgan from 'morgan';
import cors from 'cors'; 

// Importación de rutas para su uso dentro de la base de datos
import { usuarioRoutes } from './routes/usuarioRoutes';
import twitterRoutes from './routes/twitterRoutes'

const app = express();

app.use(cors());

class Server { 
    public app: Application;

    constructor() {
        this.app = express();
        this.config(); 
        this.routes(); 
    }

    config(): void {
        this.app.set('port', process.env.PORT ?? 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json()); // Middleware para parsear JSON

        // Configuración de CORS
        this.app.use(cors({
            origin: 'http://localhost:4200',
            methods: ['GET', 'POST', 'DELETE', 'PUT'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        }));
    }

    routes(): void {
        // Define las rutas
        this.app.use('/api/usuarios', usuarioRoutes); // Se agrega el prefijo /api
        this.app.use('/api/twitter', twitterRoutes);
    } 

    start(): void {
        this.app.listen(this.app.get('port'), () => { 
            console.log('Server on port', this.app.get('port')); 
        }); 
    } 
}

const server = new Server(); 
server.start();

console.log('WORKS!!!!!');
