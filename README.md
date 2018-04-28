# Matricula POO

_Desarrollado en ULACIT - Técnicas de Programación Orientada a Objetos_

##Descripción del proyecto

El proyecto se compone de toda la tecnología preparada para funcionar como interfáz web dedicada a interactuar con el servicio REST con los procesos específicos con cada una de las características que ofrece el sistema.

El sistema presenta las siguientes funcionalidades:

- Auteniticación de usuarios
- Creación e ingreso de personal (Estudiantes, Profesores)
- Creación de recursos (Aulas, Materias, Contacto, Carreras)
- Listado, paginación, modificación de los recursos
- Eliminación de cada uno de los recursos o en algunos casos deshabilitación de los elementos para funciones de auditoría.

##Implementación del Poryecto

El sistema fué motivado por el proyecto del curso de **Técnicas de POO** en la universidad **ULACIT - Costa Rica**

Este sistema fue desarrollado mediante el uso de los siguientes patrones en la programación del mismo:

1. **Facade**:

    1. Se utilizó mediante el uso de distintos componentes para crear uno solo, esto se puede apreciar en la parte de src/app/core/_modules/teacher En distintos archivos en el mismo directorio se puede apreciar que se utilizan los objectos de clases hermanas para la creación de un objeto compuesto. Este objeto compuesto se creará con los objectos hijos incluidos una vez instanciado en el sistema.
    2. Se utiliza también en la raíz del proyecto, específicamente en `src/app/app.module.ts` donde se instancia la aplicación raíz mediante la importación de cada uno de los módulos que la componen. Estos módulos son necesarios para el funcionamiento correcto del sistema, de lo contrario el sistema puede presentar errores.
    
2. **Dependency Inyection:**

    1. Este patrón se ve reflejado en el uso de cada uno de los servicios dentro del directorio `src/app/core/_services`. Estos servicios son utilizados por varios componentes pero no dependen de la instanciación interna de ellos, sino que interactúan como elementos aparte aunque sean necesarios para la funcionalidad del componente correctamente.
    
3. **Factory:**
    
    1. El patrón Factory se ve reflejado en la creación de objectos con propiedades similares mediante el uso de un objeto creador o fábricador. Este objeto se ve en `src/app/core/_models` donde se maneja un Factory para la clase `"persona"` esta es utilizada por las clases "`profesor"` y `"estudiante"` que son similares porque poseen elementos identicos.

---


## Implementación técnica del proyecto Front-End

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
