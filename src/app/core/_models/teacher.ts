import { Person } from './person';
import { PersonaKey } from '../_interfaces/persona-key.interface';

/**
 * Profesor
 */
export class Teacher implements PersonaKey {
    public especialidad: string;
    public profesorKey: ProfesorKey;

    public constructor() {
        this.profesorKey = new ProfesorKey();
    }

    getFullName(){
        return `${this.profesorKey.persona.nombre} ${this.profesorKey.persona.apellido}`;
    }
}

/**
 * Llave del profesor
 */
export class ProfesorKey {
    public idProfesor: number;
    public persona: Person;  
}
