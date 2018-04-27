import { Course } from './course';
import { Enrollment } from './enrollment';

/**
 * Enrollment detail class
 */
export class EnrollmentDetail {
    public idDetalleMatricula: number;
    public materia: Course;
    public matricula: Enrollment;
}