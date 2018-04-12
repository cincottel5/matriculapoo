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
    { path: 'teachers', title: 'Profesores',  icon:'ti-user', class: '' },
    { path: 'prueba', title: 'Carreras',  icon:'ti-bag', class: '' },
    { path: 'prueba', title: 'Materias',  icon:'ti-book', class: '' }
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
