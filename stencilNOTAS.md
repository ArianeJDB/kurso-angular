esta en el libro en la parte de integraciones.
componentes empresariles, ya vienen predefinidos
roles de front: front, ui, ux
ux: es nuevo, estudia los comportamientos de usuarios e intenta hacer interacciones e interfaces para llegar a ese publico objetivo. Tiene muchos datos, hacer acciones comparando datos etc. se maneja cond atos, con google analytics
a traves de esos datos se proponen estrategias para hacer la web multidispositivo
ui maquetador, se divide el ui que solo sabe pintar en el sketch , figma, adobde xd es gatuito, adobe readerm "doby". 
ui lo tiene que pasar esos "dibujos" a la app web.
DevUI
web componentes: stencil, lit element o vanilla
stencil es con WC nativos.
lo instalas como una libreria y le pasas unos valores coo si fuera componente del fw que estás usando

Stencil entra dentro del ecosistema de Angular. 
tecnologia qu elo inventó la gente Ionic
stncil es un compilador de WC, ni libreria ni fw
ionic 4 y 5 se pudde integrar yaen otros fw

hermana de angular, npm init stencil (component)

tets con jest
npm test ya instalas las depedndencias de los tests

todos los componentes stencil los carga de manera on demand,  es lazy solo cuando los necesito.

no se sube .stencil

en dist es donde esta todo
loader permite cargar dentro de la app
www donde genera sus ficheros
packaje:
generate generar componentes

stencil.config: configuramos lo que queremos

donde trabajamos es dentro de src
index.hmtl no pertenece  la libreria, solo para visualizar
my-component tiene readme generado automatico, cuandocambios en css como ts, auntomaticamente lo añade en el readme. si enganchas un componente con otro te crea un grafo de que un comp tiene dependendia de otro. Se puede integrar con storybook

el .tsx es el jsx de react pero con ts
shadow true debe mantenerse por encapsulado. odos los nav ahora soportan el shadow dom. establecer variables de css
selector es tag
@input es @prop()
es la porp con la que invocamos el componente pero sin corchete.

tiene un render() {
    esta implementada con el virtual dom de react. ASi renderiza ms radpio que cualquier otra. dentro del render return y meter el html
}
crear nuevo component create component
dentro de carpeta stencil npm run build
luego npm link (si error con sudo)

en carpeta angular npm link nombreDeProyectoStencil

esto seria omo hacer npm isntal si estuviera ahi ?¿

oara que angular coja esa libreria fichero main.ts

import { defineCustomElements } from 'kursost/loader';
en main-ts de angular project, importar definecustomelements 
y luego al final definecustomeelements(window)

en app module  schemas: [CUSTOM_ELEMENTS_SCHEMA]

luego de esto, el componente de stencil ya lo puedo pegar en el de angular. Si lo pongo en un componente que se carga lazy, tengo que decirle en ese modulo tambien el CUSTOM_ELEMENT_SCHEMA

watch detectar cambios en una propiedad, cuando cambie la prop hago la ejecución

state permite definir estado dentro del componente, lo que hace es que dentri de la logica del cmop cuand cambia una orop denro de state,: llama al render.. vuelve a rederizar todo.

method: exponer un metodo hacia el exterior. que alguien desde el exterior puede invocar a uno metodo de dentro cn queryslecto o document element byid. desde fuer ainvoco cosas de dentro. No es muy buena practica

element: hacer referencia dentro del dom. ViewChild en ngular, es como hacer un document selector. no se usa mucho. 

event: remitir eventos personalizados: es el output. es de tipo eventemitter

listen escuchar eventos del dom o de otro componnte

comp lo mas ontos posibles, exvlucvamente de recibir datos y recibir. la logica la tendruas en la app. componente sin logica. la logica esta del lado del front de pasarle los datos al componente. el event emmiter no se usa demasiado en esto 

hooks: ciclo de vida, los que mas se usan son componentdidload (on init, inicializaciones) aunque no se debeerian hacer llmadass desde este componente.

puedes crear un comp a modo de widget: componente nativo que comunica con api, puede ser un comp con mas logica, did load haga el fetch recibe los datos y los pinte. este cmp se peude meter en un proyecto y va a funcionar de forma autonoma. por eso es tipo widget. recibe y lo pinta. nada mas

LAYOUTS: holy grid. y que sea responsive.
slot etiqueta definida pot html: establecer que es una region donde quiero meter informacion. 
componentes que solo tienen html.slot name='

nom run generate nombre-comp

crear la libreria y distribuirña, pq es un compilador, creas tu la libreria

lo integramos con storybook

ofrecemos enlance a storybook a los desarrolladores
ya no uso index.html si no qu eintegro storybook

time to market
