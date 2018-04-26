import { Career } from './career';
import { Classroom } from './classroom';

export class Course {
    public idMateria: Number;
    public nombre: String;
    public costo: Number;
    public creditos: Number;
    public codigo: String;
    public carrera: Career;
    public aula: Classroom;
}