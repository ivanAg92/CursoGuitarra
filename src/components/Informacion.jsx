
// Statements y Expresiones en JavScript
/*
Un statement es una instrucción para hacer algo, algunos statements son:
    Creación de variables
    Código condicionales con IF
    Lanzar errores con throw new Error()
    Iterar con While o For

    Todos estos statemente deben escribirse antes del RETURN en react

    Las EXPRESSIONS
    
    Es algo que produce un valor, una vez que es utilizada va a generar un valor nuevo y algunos ejemplos son:
    Ternarios
    Utilizar un Array Method que genere un nuevo Array
    .map que genera un nuevo array a diferencia del forEach

    Esto lo podemos utilizar en la parte del RETURN en React

    ***********************************************************************************

    PROPS en React

    PROPS --> es una forma de compartir información entre componentes. Los componentes de React utilizan Props
    para comunicarse entre ellos. Se puede pasar información de un componente padre al hijo por medio
    de estos props.

    Los props se parecen a los atributos en HTML, pero puedes pasarle arrays, objetos o funciones.

    Los props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre.

    SINTAXIS del PROP.

    <Header
        nombreProp={ datos / state o funciones}
    />

    ** se pueden tener múltiples PROPS

    Si se tiene un state que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo proncipal.

    Cana nivel de componentes deberá tomar y pasar el PROP hacia otros componentes.

    ***********************************************************************************

    Eventos en React

    Los eventos son camelCase, es decir, en lugar de onchange se utiliza onChange,
    en lugar de onclick se utiliza onClick

    También a diferencia de JS y HTML, donde se coloca el nombre de la función
    en un string, en React (JSX) se utiliza la función entre llaves {}

    SINTAXIS de los eventos.

    <button onClick={ getLatestOrders()}>
        Descargar pedidos
    </button>

    <form onSubmit={handleSubmit}>
        <button type="submit">Añadir cliente </button>
    </form>

    ***********************************************************************************
    El STATE es asíncrono, porque no espera a que se terminen de ejecutar funciones para ejecutar todo
    ***********************************************************************************

*/