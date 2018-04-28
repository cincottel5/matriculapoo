import { Injectable } from '@angular/core';
import { Student } from './student';
import { Teacher } from './teacher';
import { PersonaKey } from '../_interfaces/persona-key.interface';

/**
 * Patron factory
 * Person factory
 */
@Injectable()
export class PersonFactory {
    public getPerson(type: string = "student"): PersonaKey {
        if (type == "student") {
            return new Student();
        } else {
            return new Teacher();
        }
    }
}