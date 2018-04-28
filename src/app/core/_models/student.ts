import { Person } from './person';
import { Career } from './career';
import { PersonaKey } from '../_interfaces/persona-key.interface';

/**
 * Profesor
 */
export class Student implements PersonaKey{
    public beca: string;
    public carrera: Career;
    public alumnoKey: AlumnoKey;

    public constructor() {
        this.alumnoKey = new AlumnoKey();
    }

    /**
     * Patron facade
     */
    getFullName(){
        return `${this.alumnoKey.persona.nombre} ${this.alumnoKey.persona.apellido}`;
    }
}

/**
 * Llave del profesor
 */
export class AlumnoKey {
    public idAlumno: number;
    public persona: Person;
}
