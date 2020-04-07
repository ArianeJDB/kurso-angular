por qué angular? pregunta de entrvista

google quería cumpir con el standart. salieron web componets  

web components: 
custom elements: extender el html ami antojo. crear nuestras propias teiquetas html. que MIS tags sean con guion (w3c ) PARA QUE NO HAYAN ERRORES

HTML IMPORTS ESTÁ EN DESUSO: deprecated-

template: crear el componente en offline y hasta que un proceso dejs lo coge y lo mete dentro del DOM, no lo renderiza el navegador.

Shadow DOM: aislar de donde se utilice. CSS, scoped o global. es lo qie aisla el componente del resto del arbol dom

programación reactiva: permite poder hacer apps que ante un evento de usuario, provoque otro evento en cualquier otro sitio de la app. que no es siemrpe imperativo, para refrescar sino qu ela pagina este "viva", sin tener que refrescar la página. en fron es rxJS. es parte del core de angular

por qué angular: es un fw que aprovecha todas las revoluciones que salen del standerat, webcomponents, o prog reactiva. y ademas hace uso intensivo de TS. permite poder trzbjar en equipo mejor y que el propio IDE te ayude, y poder poner tipos a las variabñes- 

simplicidad: lo bueno de un fw: eres productivo rápido si no ha sido cambiando mucho.

pregunta d entrevista: por qué anular cambio de js a 2. es por los web componentes: 2014 salieron los web components. js imitaba pero empeoraba el rendimiento de las appps. porque intentaba imitar los nativos. por eso para aprovechar los web components nativos que ya comenzaban a tener soporte, hicieron el cambio del fw.
rendimiento optimo: cambio a optimo 
ahead of time compilation: preparar el codigo para prouccion, lo qu hace es quitar el compilador. bundle lo qiue genera tu app que lo pones en prod. tiene que ser lo mas pequeño posible. pq conexiones lentas: tarda en cargan miapp. no se renderiza hast que el avegador no baje todoel bundle
alivia el tamaño del bundle. son 2 mb menos
lo que no se usa lo saca del bundle. "tree shaking", eliminar los imports qu eno se esten usando. quita lo que no se esta usando. configurar IDE para que quite los imports que no se esten usando.
angular 9 proporvcion este ahead en desarrrollo. 

lazy loading: lo mas importante del fw. tener un bungle ms liviano y se descarga rapido y amedida que vas trabajando con la app, se descarga el resto de parrtes. no carga todo el bundle, pero el principal son pocos k y se divide en chunks y cada modulo es un chunk diferente

el ecosistemq de angular no te limimta nada. es la llave para acceder a todo ese ecositema. puedo tener ionic, stencil, nest.js, 

inyeccion de dependencias, traaja de serie con inyeccion de deendencias y mejora el testing. Jasmine y Karma

mejoras en el seo: angular universal: server side rendereing: no se renderiza en el navegador si no en el servidor. 

soporte totalnabegadores.

angular es para hacer aplicaciones SPA. Para otras cosas vue.

el renderizado es con ivy ahora, mas rapido.
y ya viene con aot?

--base-href : para github pages

--host: por defecto solo se puede acceder por localhost hay que levantar la app con --host 0.0.0.0 y asi alguien desde fuera puede poder la ipde mi maquina:4200 y ver mi app

--prod: usarla antes de subirla a prod. hace el bundle lo mas pequeo posible


ejecucion test ng test unitarios y integracion

ng test 
ng test --browsers ChromeHeadless configurarlo para que sea siempre headless

--code-coverage 

tests de aceptacion o e2e: la app tiene que estar implementada

ng e2e

crear cada uno de los elementos que necesitemos. Se puede tener mas proyectos dentro. CLi es como unn worksace

ng lint reglas de angular

schematics: añadir funcionalidad al angular cli

ng update hay que estar siempre ne la utlima version

evitar conflictos de versiones de cli: scripts package: si hay un script ng: bg siemore ejecutra primero el que tiene el proyecto entonce hriamos:

npm run ng -- g c nombrecoponent

y para iniciar solo npm run start

si quiero por defecto los teprale y css inline: schematics en angular.json

index.html es lo que te permite visualizar la app.pero no es parte de la app, este index carga el bundle pero tu app es el bundle.

main.ts fichero rpincipal de angular, le permite arrancar

style.css afecta a toda la app y a los componentes que no tienen habilitado el shadow dom
es donde pondriamos el valor de las variables de css

no se sube nodemodules a un repo

Módulos: todo fichero con este decorador es un modulo @NgModule, dentro podemos tener un objeto json con la config de ese modulo. 

providers: existen las clases o los servicios que vamos a poder inyectar en otra clase

declrations: componentes, pipes, directivas que estan dentro de ese modulo.  si no, no existe.
imports: importar modulos dentro de modulos. solo para modulos.SOLO PARA MODULOS- IMPORT
exports: se pueden usar fuera del modulo. 

entryComponents: ?¿ angular 9 no con ivy.

bootstrap: definir cual es el comp principal de la app, solo va a esta ren el modulo princial.
schemas: para poder usar web components con stencil. compoentes ntivos que no estan hechos con angular, es una librerai de tercero

un modulo principal liviano y N secundarios.

en manin.ts es donde le decimos quien es el modulo principal en bootsrap module


qué cosas pueden estar dentro del modulo?
directivas: componentes, atributo y estructurales.

directivas: componentes, es una clase que está montada con el declarador @cmponents, tiene toda la aconfig del componente. obligtorio: tener dos propiedades: selector como lo voy a llamar  y el template codigo html o templateURL cual es el html del componente: contenido que va a renderizar el componente cuando se instancie.

hooks de lifecycle: podemos implementar codigo nuestro dentro de los hooks. 
onInit: donde se hacen las inicializaciones del componente.
el contrcuttor unicamente se deja para la inyeccion de dependencias. solo declara las dependencias, si no VACIO. o sea que inicializado es ONINIT

detroy cuando salga del arbol dom: sirve para liberar recursos. los ciclos de vida de angular son propios. 

directivas de atributo: directiva que no tienen temprate ( si no serian componntes). son las ngClass, ngStyle. Ya las proporciona el fw. meter clases de cs inamicamente deende de una condicion. acepta un JSON

[] indican properties. 

no se mete js dentro del template. es mejor meter condiciones usando propiedades, mejor que en un metodo. 
en angular es MALA PRACTICA meter js en el template

tengo un metodo que me va a cambiar ese propiedad y uso es la propiedad. 

si la logica es solo una: un boolean: aya no utilizo el json sino un class binding por temas de rendimiento: [class.nombre de clase css que wuiero aplicar cuando se cumpla la condicion]='condicion booleana'

[ngStyle]: style de html, ya no son condiciones, son propiedades. valores que varian dinamicamente. dinamicamente porque tambien puedo poner una prpiedad que es la que va a cambiar

alias-. [style.nombre de clase] = 'ternario'

ESTAS CAMBIAN EL DOM, ya sea por estilos o lo que sea.

Directivas estructurales: modificar el orden dentro de ese DOM, elegir si quiero mostrar una cosa u otra

*ngIf: si se cumple la condición se va a mostrar. LO SACA o lo mete del arbol DOM

then y else: un div que se cierra inlune y las condiciones vayan con ng-template
VER PAGINA 45.
el ng tempralte nunca se rendereiza, solo su contenido:
<div *ngIf="errorCount == 0; then ok else error"></div> //div inline con las cndiciones

 <ng-template #ok>No errors</ng-template> ((ngtempralte con # de la condicion))

 <ng-template #error> ((ngtempralte con # de la condicion))
 {{errorCount}} errors
 </ng-template>

 ngSwitch: 

*ngFor: al que le estoy aplicando se va a renderizar n veces que indique el buCle: NO EN EL DE ARRIBA 

en appmodule en imports metemos EL MODULO directives (no el componente) y ya su componente que esta dentro esta asequible, pero en el modulo hay que exportarlo

modulos: separa la app en partes iguales, en vez de tenerlos todos los componentes en toda la app- respetamos el principal que es el mas liviano. lo hace para el lazy loading. si yo tengo mil componentes dentro del modul prncipal: se cargan todos de una y no se hace el lazy loading. 
cada componente debe estar dentro de un modulo (que si es para reusar se puede llamar shared), 

importo el modulo secundario en app.module qu es el principal
exporto el COMPONENTE desde su modulo padre que es un modulo secundario:

acostumrbarnos a inicializar siemore en oninit: lo declaramos vacio en la propiedad y le damos valos al inicializar en oninit

ngStyle = si es una unica condicion, se hace con style binding: [style.color]='color'

todo lo que va a la derecha de los[] va "" pero NO es string, es condicion. es lo que va a evaluar los corchetes

NGCLASS: las condiciones van en {} porque recibe un json y se pueden encadenar con comas

pipes: muy potente y poco utilizada. aplica a los templates y se usan para hacer transformacion de datoa dentro del propio template. 
hay pipes de serie. ejm fecha

no cambia, solo se vosualiza distinto

propios pipes: cuando necesitamos transformacion de datos a nivel visual.
los pipes tinen que estar en declarations

PIPIES: crear pipe

para usarlo fuera del modulo hay que exportarlo, HAY QUE EXPORTAR EL MODULO. Dentro del modulo exporto el pipe. en declaratios solo hay componentes pipes y directivas NO ,ODULOS.
se exportan directivas, pipes y componentes

en el otro modulo lo importo. en los imports solo van modulos. se importa el modulo con sus pipes de dentro
lo que exporta ese modulo lo puedo ya usar dentro de mi template

eso que le pasas a mi pipe que creè, puedo pasarselo :'**' despues del nombre del pipe o puedo ponerle un atributo y dalre valor en el .ts

DATA BINDING

la bidireccionalidad hay que ponerle ojoporque da al rendimiento. la idea es hacerlo unidireccional.

interpolación: {{}}

poperty binding: []. [propiedad]="le añado a esa propiedad ESTE valor". de esta forma a la derecha no se pone {{}}. este es quivalente a usar {{}}

directive property: *ngIf es simplificacion de [ngIf]. 

component property: trasnsmitir info de fuera a dentro del componente. en <hijoComp [la propierdad del @input]='valor que le va a pasar' > en el hijo: @Input () propiedad que esta en el otro lado en []

event binding: es con (). gestionar eventos. ()="metodo que va a manejar ese evento", que tiene que estar implementado en el componente que tiene ese template.

tambien se pueden manejar eventos que esten contenido dentro del hijo (deleted)="metodo($event)" en el hijo para disparar esa info:
@Output() deleted = new EventEmitter()
dentro de la logica del componente: cuando lo quiera disparar:
this.deleted.emit('la info que quiero enviar hacia arriba y la que va a capturar el padre en el $event')

onchanges se ejectura cuando se modifique el valor del @input, si no tiene un @input no hace nada ahi. cuando cambia ese valor, se ejecuta


inyeccion de dependencias:

providers. donde haya un cosntructor podemos emeter eses ervicio pero tien que estar declarado como provider.
elemento injector: es la que permite inyeccion de dependencias. 
cuando declaro provider e el pricipal appmodule, automaticamente mete ese provider en los demas de abajo, que este disponible en todo slos elementos qu cuelgan de ese modulo. y eso hace uqe atraves del contructor pueda inyetarlo en esos elementos

si lo declaro mas abajo, no en el app, ese elemento solo puede ser utilizado en lo elementosque cuelgan de el.
solouna instancia: singletone? 

la resolucion de dependencias se hace desde donde se inyecta y se va viendo hacia arriba a ver donde esta declarado hasta que lo encuentra

declaracion de providers: @injectable({
    providedIn: 'root
}

ahi ya esta disponible en todos.
se usan para sacar logica fuera de los componentes y que se pueda usar ese servicico en cualquier componente fuera. si estuviera la logica dentro del compoente no puedes usarla en otro lado, la idea es sacarla y usarla en otros lados.
lo inyectas a traves del contructor en donde lo quiero usar. en el constructor del componente de dnde lo quiero usar

se pueden usar un servicio dentro del primero lo ijyectas igual en su constructor

al inyectarlo es nombreService.metodo que esta en ese service()

declarar logica en el servicio.
la inyeccion siemore contructor(private nombreServicio: NombreServicio) y abajo en el metodo donde lo vas a usar: this.firstService.getMessage();

useClass: no entendí =)

useClass providers: [
    {
    provide: SecondService, userC,ass: SecodService
    }
]
hacemos un fake del servidor, hacemos una copa pra quedarm con los mismos metodos y lo llame second fake. creamos uno exactaemnte igual pero devuelve algo distinto pq es fake.
donde esta inyectado lo inyecyo asi con el useClass: SecondFake.

Esto sirve para hacer fakes?¿?¿?¿?¿?¿?¿? no cambio nada de mi codigo pero le cambio la implementacion.

en vez de clases,podemos inyectar valores. una propiedad que queremos disponible en toda la app, por ejemplo valores de configuración.
en app module defino ese objeto que quiero. y para que todos puedan acceder a ese valor: lo declaro como provider
const config = {api: 'jajaja'}
providers: [
    {
        provide: 'congif',
        useValue: cofig
    }
]

para que esto este disponible en un servicio dentro del contructor @inject('config') private config: any
y dentro del metodo dentro de ese servicio: ese config, this.config.api 

useValue es para usar la data de api. Para usar inyctar con @inject en el constructor. pq no es una clase

ROUTING:
defino las rutas y se las doy a angular. relaciono la ruta con el componente que se va a renderizar

se hace dentro de app principal.
const ROUTES: Routes = [
    siemore la vacia que es la de por defento
    y la ** paracuando no encuentra esa y la redirige. 
    pthmtch no se por que va pero va
]

ese bjeto routes se o pasoa la aplicacion en el import RouterModule.forRoot(ROUTE)

modulos secundarios: pueden tener su porpia config su config de rutas.
en el principal definimos los paths que pueda tener
{path: nombre, component: NombreComponente}
path: nombre/:id para detalles.

commo es secundario la configuracion es RouterModule.forChild(ROuTES)

for Root es para el principal y forChild es para el secundario

router outlet va en el html del componente princpial y ahi es donde carga la resolución del router.

routerlink va dentro de un a y va [routerLink]="['nombredelaruta']" 

lazy loadng se configura en el router: que los modulos no esten importados en el principal sino que esten cargados a traves del router. porque ahoramismo esta todo metido en el mimos bundle

al hacer esto estos modulos van a ser independientes, entonces parten del vacio, es la principal la que le va a dar el path para cargaro. Se va a cargar una vez que se vaya a esa ruta
en ese modulo secundario, el path va a ser vacio.

en el principal, entre en vacio y el **, va el path de ese modulo y loadChildren en vez de redirectTo. el loadchildren va a llamar al modulo './lskdñflksd' oooooo loadChildren: () =<z import('./').then(m=>m.modulo)>

independizar los secundarios, en el picinpial darle la ruta, cargar el modulo con loadchildren

ya no necesitariamos importar esos modilos en el principal. 

una vez que hago eso de loadchildren en el principal, los hijos tengo que poner los paths vacios IMPORTANTE.'tu partes de cero: o se vacio porque te voy a cargar con lazy loading'
y en ese path tengo que importar es EL MODULO, no el componente
como los estoy cargando lazy y por router, ya no necesito importarlos y los tnego que quitar del import de la principal

podemos hacer navegacion no solo por enalaces si no tambien puede ser por el codigo, inyectandolo en el contrcutrot private router: router

this.router.navigate(['ruta a donde quieres ir']);
this.router.navigate(['directives']);
esto va en un metodo que maneja un evento. y al hacer eso, te lleva a esa ruta.
si queremos usar el id es
this.router.navigate(['directives', directives.id]);
ngonchanges siemore esta endiente de los cambios que estn en los @input

miercoles:__________-

ir importando lo que vamos necesitando. si necesitamos router, importamos el modulo router module
lo mejor es que desde el principio la estructura sea con lazy loading
en los secundarios la rta va vacia porque es la applicacion eque me da la ruta
la ruta la da el modulo princial, cargandolo con el loadchildren. Usando =>import

zona donde renderizar lo que el router determine lo que tiene que mostrar, esa zona es el router outlet. para poder navegar edesde denro de la pp, necesiamos el routerlink  la que le paso donde quiero navegar..
podemos nagear por enlaces o desde el código: inyecto el servicio router y uso el metdo navigate con la dirección y acontinuacion si hace falta mas parametros que están en el path.

RECUPERAR INFORMACION DEL ROUTER
componente que la ruta es /:id o sea  un detail.
inyecto en el contrcutor el activatedRoute
enOnInit: const id = this.activatedRoute.snapshot.params['id']



para navegadr dento del modulo secundario, el nuevo path de :id es en el modulo DATABINDING, y pongo 
{path: ':id', component: ChildComponent},

el router no entiende de hijo sy padres, es el componente que va a renderizar ese id que esta en el path

databinging es un modulo secundario: tiene dos componentes.
uno de ellos tiene una ruta con lazy loading (el pdre con {path: '', component: FatherComponent},) entonces ahi mismo agrego otra ruta que es {path: ':id', component: ChildComponent},

ese id lo asigno a una ropiedad y lo pinto en el template

appmodule tiene las rutas que se cargan en lazy loagind

la ruta que quiero va dento del databingin module, tenia por defecto el vacio que era el padre. y ahi quiero añadir el :id
el router solo entiende de componentes

query params: parametros que no pertenecen a la url como tal (el param si), es lo que hay a continuacion del ? que no tiene que ver con la url pero le pasa informcioon a ese url
por el routerlink, la direccion y luego [queryParams]="{param:1}" 
o tambien podemos usarlo en el navigate


pones el router link en el app.component.html apuntando a la direccion que quieres y en queryparams le pasas los parametros que quieres y al darle click, vas a esa direccion con esos parametros

dentro del app componente meter una lineam mas de router link que referencie a la direccion que quiero. EN EL APPCOMPONENT HTML. le meto la direccion del hijo y a continuacion el queryparams

el query param es lo que va despues del ?

subscribe evitar cuando modifico la url en la barra pero cuando vuelvoa  dr al enclace, la informacion no se refresca, porque capturar la info esta en el oninit y ya se ejecuto y no se va a volver a ejecutar entonces por eso no se refresca, pare evitar me siscribo a los cambios de los queyy params con el subscribe. entonces en el momento en el que haya un cambio, se actualiza el valor y se actualiza
esto es gracias ala programacion reactiva, esta pndiente de los cambio sy si cambia cambian LA VISUALIZACION POR PANTALLA, sin refrescar, solo cambia eso

RUTAS DE GUARDA:
puede impedir que puedas mostrar un determinado componente o o salir de un componente sin haberlo guardado.
caActivate, canDeactivate, act o descat un componente

Se implementan como servicio. Se crea un servicio
nos da info si queremos que se visualice el comp o no. y devuelve un boolean.
aplicar esta logica al router: dentro del path que queremos proteger
consr ROUTES: ROutes = [
    {path:'ruta-protegida', componente: nombre, canActivate [nombredelservicio]}
]

implementar el CanActivate en el authservice asi:
export class AuthService implements CanActivate {

    hay que protegerlo desde elappmodule donde esta el loadchildren

    canDeactivate: no te permite salir del componente ante una determinada situacion. la otra se plicaba a una ruta, esta solamente s epuede apliar a componentes. a un unico componente
    por ejm relleno un formulario y te sales sin enviarlo.  
    confirm: sidices si es true y te dejo salir, si dices ue no, false y no te saca, te quedas en ese componente donde estas
    siemre asociado a un path ue tiene un componente

    se puede aplicar en varios componentes: hacerlo generico.
    para hacerlo generico: un servicio para varios componentes:
    en el servicio hacermos export de interface CanComponentDeactivate
    entonces no dependa de un comp en concreto si no de la interfaz. le decimos todos los componentes que crean esa interfaz (la de candeactivatecomponente)
    el componente que tu quieras que candeactivte tiene que implementar el cancomponentdeactivate, en cada componente donde lo quieras usar, PERO el confirmService es solo uno y es el que dice que si el componente tien el candeact no puede salir, si no lo tiene es true: o sea que puede salir
    cadeactivate se aplica igual al la ruta path:dsds, componente.

    candeactivate generico: mal, no entendi

    ver el codigo o morir

    Rutas anidadas: casos en los que no podemos tener solo un outlet.
    tenemos asociado un componente que asuvez tieene en su componente un router outlet
    creo componentes de layout (distinto por eso quiero hacer esto) y tienen metido dentro un outlet, todos los paths que van dentro del children van asociados al outlet que esta definido ahi, cuando la path en ROUTES tiene un children es que tiene un routeroutlet

    el componente login es el que quiero mostrar en simple layout o sea es su hijo

    las rutas anidadas otra movida: sirve para tener mas de un outlet, en app.module tienes que cambiar las rutas (ver jemplo) y poner las children que quiero deuna 

      {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)},
      {path: 'father', canActivate: [AuthService], loadChildren: () =>
        import('./data-binding/data-binding.module').then(m => m.DataBindingModule)},
    ]
  },

  estas hijas ya las pinta dentro del marco de applayoute

    {
    path: 'login',
    component: SimpleComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },

  aqui el login se va a pintar bajo el layout de login

  diferentes vistas

  el app-component.html ya la navegacion de routerlink ya no van ahi. va solo un outlet 
  y dentro del lauot principal es donde va a ir todos los routerlink

  jueves____________
  FORMULARIOS
  es muy sistematico. ofrece validaciones sincronas y asincronas

  angular tiene dos formas de hacer for: template driven: ngmodel, es bidireccional. Esta cada vez mas en desuoso, porque esa bidireccional pega al rendimiento, puede ir lento. siempre se prefiere el model drei? o sea reactivo. Reactivo es lo mejor

  primero confirirar el modulo donde se vaya a utilizar: reactiveformsmodule importarlo, y asi ya tenemos disponibles las directivas ara crear formularios

  crear un formulario: partimos del template: angular nos ofrece una sierie de irectivas que nos permite identificar el matcheo con elmodelo. modelo que esta registrado enel componente. 
  el modelo es
  form: FormGroup

  en base al form que hicimos en html, odemos crea nuestro modelo.
  va a dependeer del numero de gruops que tengamos
  this.form = new FormGuopu({
    los cmpos y si hay subgrupos: address: newFormGorup dentro del otro e igual
  })
  para mtchear mi modelo con el de html:añadi la directiva[formGroup]="form" en el html. es el mismo que esta en el td form: FormGrupo
  los que o son formGroup se anota IN CORCHETES formControlName="nombre del camop que tiene que matcher con el modelo"
  si hay subgrupos: fieldset: formGrupName="nombre del sub grupo"

  el formulario no lleva action. el que maneja el submit es el boton de enviar

  importas retiveforms modeule en el modulo NO ES EN L COMPONENTE, y en el componente es donde bvas a hacer el modulo. recomendable hcer primero el form de html plano y luego hacer el modelo

  validacion:
  validaciones sincronas que te da ya de por si angular: required, min, max, minLength, email
  pero no nos confiamos solo de validaciones de cliente.
  hay que validar en back pq JS es muy inseguro, la seguridad tiene que esyar del lado del servidor.y dar el feedback de todo lo que ha ocurrido en el servidor.
  para decir que un cmpo tiene que cumplir con una vliacion s elo pasamos en un array e el segundo elemrnto FormControl('', [Validators.required, Validators.minLength(2)])
  Validators es un servicio que ya existe pero NO HACE FALTA INYECTARLO. se pueden concatenar varios porque es un arrya

  Podemos crear nuestros propios validadores sincronos: no hay qu eesperar a ningun proces, se miran en esemomento
  podemos crear una CLASE (No es un servicio) npm run g -- class commonValidator
  l imporanre es que el metdo tienen que ser todos static al principio a continuacion le damos el metodo que queramos hacer(control: FormControl) control son los campos, entonces es el control al que queremos aplicar. uno por uno.
  y se lo metes al array de vlidators pero como CommonValidaror.nombreDelMetodo
  lo que hay que devolver en estos mtodos es lo fundamental: si la validacion es correcta o sea pasa: devuelve null. y cuand no pasa: de vuelvo un ojeto que tiene un identificacior de la validacion (coincide con el nombre del metodo) y : true
  esto es para mostrar el mensaje especifico del error.
  al ser static accedo directamente a la clase . metodo sin tener que hacer new

  la class la creamos en raiz. ahi va el metodo y el array va en el modulo donde esta el this.form

  asincronas: SIEMORE siempre tiene que devolver una promesa.
  con new Promise
  recibe un servicio que es quien comunica con el servidor.
  ahora lo hacemos con settimeout
  tiene que ir al servidor y devolverme datos
promise tiene dos callbacks uno de resolv y otro de reject y el de reject no se usa en asincronas.
cuando la vlidacion pase: devuelve resolve: null
y cuando no sea ok, es resolve y el objeto con el identificador: true para identificar que esto ha fallado

Tengo que ponerlas dentro de un array como TERCER argumento. defecto, sincronas y asincrnas
las asinc se hacen luego de las sinc.

updateOn: 'blur'

estados de un formulario:

pristine dirty: vcio o escrito
touched-untoched: touched se pone cuando salgo del campo

valid e invalid: 

puedo ponerle a esas clases, estilos para dar el feedback

pending: estado de mientras se esta haciendo la valiacion asincrona

un form no es valido gasta que todos los campos sean validos

mostrar errores: nos apoyamos en el objeto form

form.get('nombreDelCampo') y aqui vemos si es dirty, valid, etc

tener un div por debajo del campo, ngif solo si: no mostrar error antes de hacer accion. una vez dirty es que aplico la validacion.
dentro de ese div van a haver p con los idferente errores.
haserror.('el nombre que pudismos en la validacion')

peticiones:

comunicación con el servidor.
promesas: solucion acallback. 
promesas tienen dos callbacks resolve y reject
al hacer la llamada hay una seccion con -then que es el resolve y se elecuta ese codigo, y cuando hace reject es el catch

observqble: tercera orma de asincronia , tiene ventajas con respecto a promess. es progrsmacion reactiva. y si no podemos el .subscribe o no nos subscribimos a los observables no va a pasar nada.ni siquiera se va a ver en el network. porque la promesa se hace si o si, es la diferencia
observable.create es como new promise
el resolve es ahora el obs.next
else obs.error
entonces cuando te suscribes, data=> todo ok
erro=> error y luego cuando el string se cierra se ejcuta el ultimo 
observble es como un tuo que va desde el seridor hatsa donde esta suscrito.
obs es un patron de sdiseño, te permite resolver casos de uso de manera elegante
esto es rxjs: es una libreria ue se puede incluir en cualquier fw. rxjs es observables a js. prog reactiva

httpClient ya funciona con observables. hay que importar el modulo httpClientModule, es una forma de pasar info global de la api que vamos a usar

recuperación de datos: rl sabe que lo que recupera es json. primero genemos que saber que interfaz necesitamos para recuperar los datos:
export interface UserDTO {
  campo: string,
  otrocampo: string
}
es como el schema modelo de mongoose
tiene que coindidir con lo que e devuelve el endpoint
dto data teransfer object.

una vez que tenemos la interfaz, usamos el httpcliente, se inyecta htppcliente
y un metodo luego que hace el get
getusers this.http.get<NombredelDTO[]>(this.config.api)
este servicio devuelve ibservable de UserDTO
estos metodos que inyectan http los llama proxys.
que SOLO tengan esta lógica: llamo a aservidor y devulve observable
inyectamos esto en una clase de un servicio. debe estar en un mismo módulo

crear una interfaz y luego inyectar en unservicio¿?
y usamos ese servicio en los componentes donde lo necesitaremos con constructor(private service: nombre)

nunca inyectar hhttp client en un componente. NUNCA. porque no se puede testar
se puede tener varias llamadas e un servicio. que tengan logica compartida.


luego de inyectar ene l componente: un metodo que recije this.service.getusers().subscribe ahi es cuando vme va a dar un observable

si hacemos un subscribe luego hay que meterlo tambien luego en ngDestroy(){
  this.sub.unsubscribe();
}
un subscribe por CADA subscribe

pipeasync: se prefiere
no hago el subscribe sobre el componente si no que directamente 
users:Observable<User[]>
constructor(private service: Servicio) {}

metodo() {
  this.users = this.service.metodo()
}

y en el template nfor='user of (users | async)

pero si no devuelve JSON

HTTP.GET(ENDOPINT, {responseType: 'text})

parametros http.post('endpoint', body, {
  params: new HttpParams().set('cñave', 'valor')
})

en el propio metodo se pueden modificarlas cabeceras. el objeto headers.set es inmutable
HttpHeaders

meter headers y authorization es solo por servicio, si lo tengo en uno, solo sirve en ese: pero esto se resuelve:
con interceptores. par ano repetir el mismo codigo en distintas cabeceras. Es un objeto que s epone antes de hacerla llamada que lo que hace es establecer lo que uqeramos antes de hacer la llamada. Pasa por el interceptor antes del servicio
para poner el jwt, paara loguear etc

es un servicio: porque tiene el @injectable y implementa htppInterceptor
y puede impelemntar intercept(req: a peticion que hace sde cliente a servidor)
se pueden tener varios interceptores.
luego de la logica hacer next.handle(req)



y usar el pipe async y suscribe y desuscribe de forma implicita. no hay qu eimportarlo porque ya viene en el fw
siempre que se pueda usar el pipe de async

hay que declararlo como provider: en el modulo principal. 
providers en appmodule 
providers: [
  provide: HTTP_INTERCEPTOR,
  useClass: MIiNTERCEPTOR,
  multi:true

]

con intercetor se pueden modificar las cbeceras

hay que hacer un clone de la req original y dentro headers: req original sus cabeceras  y le esablezco autorization y el token

practica lazy loading nuevo enlace:
chuck module es secundario:
const ROUTES: Routes = [
  {path: '', component: ChuckComponent}
];VACIO PORQUE ES LAZY
tengo que declararlo: routerModule.forChild(ROUTES)
como es lazy no hay que exportarlo
ahora hayq ue meterlo en router princpial: en app module
pero como es lazy tiene que estar en el de LOADCHILDREN en el LAYOUT
y ademas añadir el routerlink en el layout donde quiero qe vaya

si tengo la guarda: canactivate: acordar que necesita el toekn

pasos para hacer la peticion get de STRING SIN SCHEMA PQ ES SOLO UN STRING

chuck service; inyectarle el private http: httpclient

ahi dentro un metodo que get: retirna el this.http.get('endpoint', {responseType:'text})
y en es emetodo es Observable<string>
 enonce ese sservicio se usa en COMPONENTE

en chuck module importar el httpclientmodule

en componente: lo inyectamos.
propiedad phrases: Observable<string>

metodo que () {
  this.phrases = this.servicio.metodoservicio()

}



ractica login: servicio, recibe inyetado httpclient

metodo login,tiene que srecibir username y password

tiene que devolver observable de una interfaz (User en mi caso)
tienes que pasarle el obj esxactamente igual
expires_in: nmber;
access_token: str

return this.http.post<INTERFAZ>('URL', {username, password})

LA INTERFAZ ES DE LO QUE RECIBE, COÑO

hacer la llamada a la api protegida y hacer el interceptop

la base de la api siempr va en appmodule. el resto que le pones depues de la base va e los servicios

NTERCEPTIP PRACTICA:
haces el interceptor con su logica, lo metes en app module, luego en chuck component haces la logica

TESTING
lo que mas cuesta del desarrolo de una app no es dl desarrollo sino el mantenimiento (  ue es como un 70%). por eso es tan impotante-

jazmin: 

tests unitarios: los mas rapidos
de ntegracion,
ui: se hacen con protractor, pero hay una tecnologia mejor que es cypress. protractor lo hace fluggy?¿ que a vecs funciona y a veces no.
unitarios, una clase en concreto.
integracion: prueban mas de una cosa. por ejm para que pasen tengo que gtener levantado algun tipo de servicio. Si necedito elback pra pasar unos tests, es intergracion.

que cypres no vaya en el codigo fuente si no en proyecto independiente. 
si ayayidmos xit es para que se ignore en ese momento, si le pones una fit solo ejecuta este y se salta el resto
cada test debe ejecturase de forma independiente, si depende de otro MAL

si hay codigo repetido dentro del test, debes llevarlo al beforeEach: ejectuarse siempre antes de cada uno de los casos de test.una instancia puede ir ahi porque hace el new ahi
en el test no importa el cdigo repetido. Qeu cada caso de test tenga todo lo necesario.
afterEach: siempre despues de cada una de las ejecuciones. por cada caso de test no suit

done es para temwa Ade asyncronia, para decirle que ya se ha acabado el test. ponerlo dentro del then en async

para ejecutar los test loqurbiene por defecto config es karma: es un test runner
coge todos los test que esten en .spec y los ejecuta
karma.conf si quieres añadir o editar config de tests

npm run test para ejecutar, cobertura:
npm run test -- --code-coverage

bma.coverage


TTD ES UNA HERRAMIENTA DE DISEÑO, no de test, pero usa el test como medio.
que hace que vaya emergiendo la architectura y como medio usa los tests. si nos asegura que la arquitetcura, tener el minimo codigo posible y testeado obvio, 

dividir angular en tres "globos": componntes en un lado, porque estn com @components y son muy dificiles de testear pq estan ligados al DOm y son muy fificiles de testear
otro globo: proxy: las clases que inyectan el servicio httpcleint. todo servicio que inyecta el http cliente esta en este globo de proxys y que tmbien es muy dificil de testear
una uena arquitectura parte de seprar estas tres capas o tres dominios: componentes @componentes, el dominio de los proxys con httclientes y todos los dominios qu estan entre los dos,con todas las reglas de negocio y servicios independientes yson mas fciles de testear porque son mas faciles de testear proque no tiene htto cliente ni maneja dom

por eso no se pone httpcliente en componentes.

las reglas de negocio, pipes, adaptadores, es mas facil de testear y estan separados de los demas

partiendo de esta arquitectura: 
hacer un fake y nunca conectarse con el servidor
hacemos mocks: elementos que pueden ser fake o stub que devuelvan la info que yo necesito par ami logica.
fakes con jasmine: es utilizar el metodo spyOn

spyON en vez de hace rllamada en ese servicio, callFake el observable se lo devuelvo con ese of y le paso lo que estoy devulviendo

const spyService = spyOn(usersService, 'getUsers').and.callFake(() => {
12 return of(users);

ninguna regla de negocio en httpclient

mockito: libreria, no es de angular

testbed: la clase mas importante y que nos va a permitir hacer test unit y de integra dentro de angular. lo tiene el franework.

testbed: sirve para simular que la app esta corriendo: que lso modulos estan importados, que todo este bien declarado: con configureTestingModule
admite lo mismo que el ngModule

en beforeEach testebed. configureTEwsti es donde se hace la configuración del test.
se puede usar spyOn aqui. y podemos preguntar si el metodo se ha ejecutado ono

testbed tiene tesbed.get y nos devuelve una nstanci de esa clase

testbed para configurar lo que necesita el modulo y get para recuperar la instancia. 

testbed interactuar con nuestra app

situaciones de testing: 
la situacion mas sencilla unitaria de test es: pipe o servicio (olos tratamos igual), que no tenga dependencias

añadirle en onfiguretestinnodule: prviders [decoratorPipe]
cuando esta providing root no hay que declararlo explicitamente

 y eso nos permite hacer el test.bed.get(DecoratorPipe)CON ESTO COJO LA INSTANCIA. no hacemos new por la inyeccion de dependencia
 una vez que tenemos esa instancia, vemos si el transform se esta haciendi
 expect(pipe,transfor('Test', '***').toBe('***TesT***'))

Situacion: cuando hayan dependencias externas: esas dep externas las tenemos que mockear, no nos interesa que se ejecute el codigo de produccion. mocker: rimplementar esa clase fake o con el spyOn -> forma correcta de hacer el fake. el truco de useClass fake es de angular, se pueden hacer las dos
haciendo los fakes no eseran nada para devolver los datos entonces no sevitamos la aync

otra situacion: test asincronos. cuando quiero testear esa llamada  y tengo que esprar que se resuelva esa promesa.
añado async antes de la impleentacion de la funcion. async te importa del core de angular y eser aa que se resuelva

async await siemre es con promiesas, no con observables.

situacion: test de componente: que no tiene dependencias:

configurar el confuguretestogmodule: el componente tiene que estar denro de la red de declarations
VER LIBRO
queremos testear la logica del componente no la lista ¿? testear la minica logica que haya dentro del componente, el template me da igual:
schemas: [NO_ERROR_SCHEMA] solo me quiero fijar en el comp no en el template.
como me quedo solo con la instancia del componente? CompnentFixture<MyComponent> (rsta sintaxis eta en el test ya)
y aqui podemos llamar a los componentes para verificar qe se esta cumpliendo lo que se tiene que hacer. NO TEST INTERACCIONES CON EL TEMPLATE

comp que si tiene dependencias: la dependencia la tengo que mockear

testear directivas: poner nosotros el template dentro del test 

test de un servicio on httpclient: no testeamos que llamamos directamente
htppclientetestingmodule y httptestingcontrole, dentro del beforeeach tengo un import del httpclientetestingmoule. para no usar el client y reimplemnentar toda la llamada
es especifico para hacer los test unitarios. 
en provider: el servicio que esta inyectando el http client

quireo verificar que la llamada se esta haciendo. no que me llega tales datos.
llamo al metodo del servicio y como siempre devuelve un observable: hago un subscribe para verificar que lo que esta devolviendo coincide con lo que le he puesto arriba

httpmock.expectOne verificame que se esta llamado a esta url
request.flush(fakePost) inyecto por el canuto del htpp esta info con lo que llega a ese subscribe y se soluciona el expect. que la logica sea solo que usa httpclient y devuela datos. si meto algo de logica, verificar si esa logica se cumple o no se cumple.

NO SUBSCRIBE NO LLAMADA

_____-

tenemos un proxy: coge todos los datos de ese api y tiene el dto para recoger todos esos datos y tengo el componente que va a pintar el modelo. EL modelo no tiene que coincidir con el DTO.
para mas fcil test: una clase en medio que recibe los datos del proxy, lo adapta , aplica l logica de negocio que se reuquiera y se lo pasa al componente. el componente que inyecta el servicio es un smart component.

ese intermedio es un servicio, esta en los globos en el dominoio. no es ni dom ni http, si no dominio.

DTO lo que me viene del back
model mi front

en el intermedio puedo tener uno o varios.

hago una inerfaz es es el modelo que osn los datos que requiere mi app t voy a usar. AQUI ESTAMOS DESACOPLANDO

en ese servicio del medio (user service SIN PROXY) voy a usar es la iterfaz del MODEL no del DTO

cuando hago subscribe ya se ejecuta la opracion.
cuando es un observable hago .pipe()
REACTIVA
se hace programacion reatica con map
el map es una funcion y hace que coge el flujo qu ele llega hace algo a cada uno de esos elementos que le llega.
el map recibe el DTO y lo transforma en un arraay del model

testearlo: que se esta haciendo esta adaptacion de model.



fake del proxy

____
programacion reactiva
rxjs: cualquier osa en la eb prooca una fuente de datos.flujo de informacion (stream)
cold observable no depende de async
hot obser: depende de async

mergeMap en vez de encadenar dos subscribe

gestion de estado: cuando ya queremos cierta ractividad.

singleton: 
nehaviur sbject:almacena el ultimo valor emitido

abstract no se puede instaciat, no se puede acer new

pagina 520

router maxi: 
en app module
const ROUTES: ROutes=[] importar este Routes from angular/router. Dentro de ese array. {path:'', componente: HomeComp},
{path: 'path', component: Componente}
En improts: RouterModule.forRoot(ROUTES). importarlo arriba 
en html router-outlet
el router evita el reload de la página. es mas rapido
router link dentro de un <a> Puede ser routerLink="/ruta" o [routerLink]="['/']" 

en los secundarios siempre poner /

router  link active: lo pones al <a > o al padre de estem "active", lo añades en cada link de navegacion: cambiar el estilo de la ruta que esté activa en la que estes y los otros distinto.ese 'active' es una clase de estilos
pero el home siempre se queda activo porque es empty path y siempre hay empty path: 

guardas son servicios.

pasar datos estaticos por snapshot: 
tengo un componente de error: recibe {{errormessage}}, como prop errormessage:string
en el router que te lleva a esa pagina de error (el **) pones ese componente te error., luego de poner el componente en el path,  le pasamos data
{path: 'not-found', component: ErrorComponent, data: {message: 'age not found'}} ESTO ES ESTATICO

en el componente de errir: private route: ActivaedRouter

ngOnit() {
  this.errormesage = this.route.snapshot.date['message'] este 'message' dentro del array es el key del data que le pase

  sirve este de arriba o este de abajo, cualquiera, NO LOS DOS JUNTOS 
this.route.data.subscribe(
  (data: Data) => {
    this.errorMessage = data['message']
  }
)
}

dinamic data:
servicio resolver, es ocmo canactivte etc

class ServerResolver implements Resolve<unaInterfaz>
resolve(route: ActivatedRouteSnapshit, state: RouterStateSnapshot): Oservable<LaInterdaz> | Lainterfaz {

}
inyetas el servicio en el contrsuctor


en el path, meter despues del componente {server: serverResolver} 

el resolver coge el route y el state

