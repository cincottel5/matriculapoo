import { Student } from './student';
import { User } from './user';

export class Enrollment {
    /**
     * Attributes
     */
    public idMatricula: number;
    public fecha: Date;
    public monto: number;
    public total: number;
    public usuario: User;

    public actualizadoPor: number;
    public creadoPor: number;
    public fechaActualizacion: Date;
    public fechaCreacion: Date;

    public alumno: Student;

    /**
     * Constructor
     */
    constructor() {

    }
    
}