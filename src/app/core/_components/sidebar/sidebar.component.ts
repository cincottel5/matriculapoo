import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Inicio',  icon: 'ti-panel', class: '' },
    { path: 'classrooms', title: 'Aulas',  icon:'ti-blackboard', class: '' },
    { path: 'careers', title: 'Carreras',  icon:'ti-view-list-alt', class: '' },
    { path: 'students', title: 'Estudiantes',  icon:'ti-id-badge', class: '' },
    { path: 'teachers', title: 'Profesores',  icon:'ti-user', class: '' },
    { path: 'users', title: 'Usuarios',  icon:'ti-user', class: '' },
    { path: 'courses', title: 'Materias',  icon:'ti-book', class: '' },
    { path: 'contacts', title: 'Contactos',  icon:'ti-email', class: '' },
    { path: 'enrollments', title: 'Matriculas',  icon:'ti-calendar', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
