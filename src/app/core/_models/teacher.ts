import { Person } from './person';

/**
 * Profesor
 */
export class Teacher {
    public especialidad: string;
    public profesorKey: ProfesorKey;

    public constructor() {
        this.profesorKey = new ProfesorKey();
    }
}

/**
 * Llave del profesor
 */
export class ProfesorKey extends Person{
    public idProfesor: number;
    public persona: Person;
}
