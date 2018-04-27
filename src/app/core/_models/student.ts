import { Person } from './person';
import { Career } from './career';

/**
 * Profesor
 */
export class Student {
    public beca: string;
    public carrera: Career;
    public alumnoKey: AlumnoKey;

    public constructor() {
        this.alumnoKey = new AlumnoKey();
    }
}

/**
 * Llave del profesor
 */
export class AlumnoKey {
    public idAlumno: number;
    public persona: Person;
}
