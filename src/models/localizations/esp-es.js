const facts = [
  "En 1987 los gatos superaron a los perros como la mascota número uno en Estados Unidos.",
  "Los gatos que viven juntos a veces se frotan la cabeza para demostrar que no tienen intención de pelearse. Los gatos jóvenes lo hacen más a menudo, sobre todo cuando están excitados.",
  "Las gatas madre enseñan a sus gatitos a usar la caja de arena.",
  "La forma de tratar a los gatitos en las primeras etapas de su vida determinará sus rasgos de personalidad más adelante.",
  "Contrariamente a la creencia popular, el gato es un animal social. Un gato como mascota responderá y contestará a lo que se le diga, y parece disfrutar de la compañía humana.",
  "Cuando está bien tratado, un gato puede vivir veinte años o más, pero la vida media de un gato doméstico es de 14 años.",
  "Castrar a un gato alarga su vida dos o tres años.",
  "Los gatos, sobre todo los mayores, padecen cáncer. Muchas veces esta enfermedad puede tratarse con éxito.",
  "Los gatos no pueden saborear los dulces.",
  "Los gatos deben tener grasa en su dieta porque no pueden producirla por sí mismos.",
  "Algunas plantas de interior comunes venenosas para los gatos incluyen: Hiedra inglesa, iris, muérdago, filodendro y tejo.",
  "El Tylenol y el chocolate son venenosos para los gatos.",
  "Muchos gatos no pueden digerir correctamente la leche de vaca. La leche y los productos lácteos les provocan diarrea.",
  "La comida media de un gato equivale a unos cinco ratones.",
  "Los gatos pueden contraer tenias por comer pulgas. Estos gusanos viven dentro del gato para siempre, o hasta que se eliminan con medicación. Se reproducen desprendiendo un eslabón del extremo de sus largos cuerpos. Este eslabón sale por el ano del gato y desprende cientos de huevos. Estos huevos son ingeridos por larvas de pulga, y el ciclo continúa. Los humanos también pueden contraer estas tenias, pero sólo si comen pulgas infectadas. Los gatos con tenias deben ser desparasitados por un veterinario.",
  "Los gatos pueden contraer tenias por comer ratones. Si su gato atrapa un ratón es mejor quitarle el premio.",
  "Existe una forma de SIDA en los gatos.",
  "El color de los puntos en los gatos siameses está relacionado con el calor. Las zonas frías son más oscuras.",
  "Los gatitos siameses nacen blancos debido al calor existente en el interior del útero de la madre antes del parto. Este calor impide que el pelo de los gatitos se oscurezca en las puntas.",
  "Las personas alérgicas a los gatos lo son en realidad a la saliva o a la caspa de los gatos. Si se baña regularmente al gato residente, los alérgicos lo toleran mejor.",
  "Los estudios muestran ahora que el alérgeno de los gatos está relacionado con sus glándulas odoríferas. Los gatos tienen glándulas odoríferas en la cara y en la base de la cola. Los gatos machos enteros son los que generan más olor. Si esta secreción de las glándulas odoríferas es el alérgeno, las personas alérgicas deberían tolerar mejor las gatas esterilizadas.",
  "Los gatos no piensan que son personas pequeñas. Creen que somos grandes felinos. Esto influye en su comportamiento de muchas maneras.",
  "Los gatos son propensos a las enfermedades de las encías y a la caries dental. El veterinario o el dentista para gatos debe limpiarles los dientes una vez al año.",
  "Muchas personas temen contraer una enfermedad protozoaria, la toxoplasmosis, de los gatos. Esta enfermedad puede causar enfermedades en el ser humano, pero lo que es más grave, puede provocar defectos congénitos en el feto. La toxoplasmosis es una enfermedad frecuente, que a veces se transmite a través de las heces de los gatos. La causa más frecuente es la ingestión de carne de vacuno cruda o poco hecha. Las mujeres embarazadas y las personas con el sistema inmunitario deprimido no deben tocar la caja de arena del gato. Aparte de eso, no hay ninguna razón para que estas personas tengan que evitar a los gatos.",
  "El antepasado de todos los gatos domésticos es el gato salvaje africano, que aún existe hoy en día.",
  "En el antiguo Egipto, matar a un gato era un crimen castigado con la muerte.",
  "En el antiguo Egipto, las momias estaban hechas de gatos, y los ratones embalsamados se colocaban con ellos en sus tumbas. En una ciudad antigua se encontraron más de 300.000 momias de gatos.",
  "En la Edad Media, durante la Fiesta de San Juan, los gatos eran quemados vivos en las plazas de las ciudades.",
  "La primera exposición felina tuvo lugar en 1871 en el Crystal Palace de Londres.",
  "Hoy existen unas 100 razas distintas de gato doméstico.",
  "Al igual que los pájaros, los gatos tienen una capacidad de volver a casa que utiliza su reloj biológico, el ángulo del sol y el campo magnético de la Tierra. Un gato alejado de su hogar puede volver a él. Pero si los dueños de un gato se alejan de su hogar, el gato no puede encontrarlos.",
  "Los gatos entierran sus heces para cubrir sus rastros de los depredadores.",
  "Los gatos duermen entre 16 y 18 horas al día. Cuando duermen, están alerta a los estímulos que reciben. Si le picas la cola a un gato dormido, responderá en consecuencia.",
  "Además de oler con la nariz, los gatos pueden oler con un órgano adicional llamado órgano de Jacobson, situado en la superficie superior de la boca.",
  "El cloro del agua fresca del grifo irrita las partes sensibles de la nariz del gato. Deje reposar el agua del grifo durante 24 horas antes de dársela a un gato.",
  "A Abraham Lincoln le encantaban los gatos. Tuvo cuatro mientras vivió en la Casa Blanca.",
  "Julio César, Enrique II, Carlos XI y Napoleón tenían miedo de los gatos.",
  "Los gatos tienen una media de 24 bigotes, dispuestos en cuatro filas horizontales a cada lado.",
  "La palabra 'gato' en varios idiomas: francés: chat; alemán: katze; italiano: gatto; español/portugués: gato; yiddish: kats; maltés: qattus; sueco/noruego: katt; neerlandés: kat; islandés: kottur; griego: catta; hindú: katas; japonés: neko; polaco: kot; ucraniano: kotuk; hawaiano: popoki; ruso: koshka; latín: cattus; egipcio: mau; turco: kedi; armenio: Gatz; chino: mio; árabe: biss; indonesio: qitta; búlgaro: kotka; malayo: kucing; tailandés/vietnamita: meo; rumano: pisica; lituano: katinas; checo: kocka; eslovaco: macka; armenio: gatz; vasco: catua; estonio: kass; finés: kissa; swahili: paka.",
  "Las estadísticas indican que, en los últimos años, los amantes de los animales han mostrado preferencia por los gatos frente a los perros.",
  "A los gatos se les puede enseñar a andar con correa, pero se necesita mucho tiempo y paciencia para enseñarles. Cuanto más joven sea el gato, más fácil le resultará aprender.",
  "Ronronear no siempre significa felicidad. El ronroneo puede significar que un gato está sufriendo un dolor terrible, como durante el parto. Los gatitos ronronean a su madre para hacerle saber que están tomando suficiente leche durante la lactancia. El ronroneo es un proceso de inhalación y exhalación que suele realizarse con la boca cerrada. Pero no se preocupe, si su gato ronronea mientras lo acaricia suavemente y lo estrecha contra usted, ¡es un gato feliz!",
  "La planta de la hierba gatera contiene un aceite llamado hepetalactona que hace por los gatos lo que la marihuana hace a algunas personas. No todos los gatos reaccionan a ella, pero los que lo hacen parecen entrar en un estado de trance. Una reacción positiva consiste en que el gato olfatea la hierba gatera, luego la lame, la muerde, la mastica, se frota y se revuelca en ella repetidamente, ronronea, maúlla e incluso salta en el aire.",
  "De todas las especies de gatos, el gato doméstico es la única especie capaz de sostener la cola verticalmente mientras camina. Todas las especies de gatos salvajes la sostienen horizontalmente o metida entre las patas mientras caminan.",
  "Un gato feliz mantiene la cola alta y firme.",
  "Casi el 10% de los huesos de un gato están en su cola, y la cola se utiliza para mantener el equilibrio.",
  "Las familias de gatos suelen jugar mejor en número par. Los gatos y los gatitos deben adquirirse en parejas siempre que sea posible.",
  "El chocolate para hornear es el chocolate más peligroso para su gato.",
  "Compruebe el pulso de su gato en la parte interior del muslo trasero, donde la pata se une al cuerpo. Normal para los gatos: 110-170 latidos por minuto.",
  "Los jaguares son los únicos grandes felinos que no rugen.",
  "El campo de visión de un gato es de unos 185 grados.",
  "Los gatos tienen preferencias individuales en cuanto a superficies y ángulos de rascado. Algunos arañan horizontalmente mientras que otros ejercitan sus garras verticalmente.",
  "El Maine Coon es la única raza nativa americana de pelo largo.",
  "El Maine Coon es de 4 a 5 veces más grande que el Singapura, la raza de gato más pequeña.",
  "Se cree que los gatos atigrados deben su nombre a Attab, un distrito de Bagdad, actual capital de Irak.",
  "Las garras retráctiles son un fenómeno físico que diferencia a los gatos del resto del reino animal. En la familia de los felinos, sólo los guepardos no pueden retraer las garras.",
  "No todos los gatos se 'colocan' con la hierba gatera. Que un gato responda o no a ella depende de un gen recesivo: sin gen, no hay alegría.",
  "Un gato puede esprintar a unos cincuenta kilómetros por hora.",
  "En el antiguo Egipto cuando un gato de la familia moría todos los miembros de la familia se afeitaban las cejas en señal de luto.",
  "Los gatos llevan domesticados la mitad de tiempo que los perros.",
  "Se cree que los bigotes de los gatos son una especie de radar que les ayuda a medir el espacio por el que caminan.",
  "Un gato puede pasar cinco o más horas al día acicalándose.",
  "Todos los gatos tienen tres conjuntos de pelos largos sensibles a la presión: bigotes, cejas y pelos entre las almohadillas de las patas.",
  "Tanto los humanos como los gatos tienen regiones idénticas en el cerebro responsables de la emoción.",
  "El cerebro de un gato es más parecido al de un hombre que al de un perro.",
  "Un gato tiene más huesos que un humano; los humanos tienen 206, y el gato 230.",
  "Los gatos tienen 30 vértebras, 5 más que los humanos.",
  "Los gatos son la mascota más popular en Estados Unidos: Hay 88 millones de gatos de compañía y 74 millones de perros.",
  "Los gatos tienen más de 20 músculos que controlan sus orejas.",
  "Un grupo de gatos se llama clowder.",
  "Hay gatos que han sobrevivido a caídas desde más de 32 pisos (320 metros) sobre hormigón.",
  "Los gatos duermen el 70% de su vida.",
  "Un gato ha sido alcalde de Talkeetna, Alaska, durante 15 años. Se llama Stubbs.",
  "Un gato se ha postulado para alcalde de la Ciudad de México en 2013.",
  "En los tigres y los atigrados, la mitad de la lengua está cubierta de espinas que apuntan hacia atrás, utilizadas para romper y agarrar la carne.",
  "Cuando los gatos hacen muecas, suelen estar 'olfateando sabores'. Tienen un órgano extra que, con cierto control de la respiración, permite a los gatos percibir el sabor del aire.",
  "Los gatos no pueden saborear lo dulce.",
  "Tener un gato puede reducir en un tercio el riesgo de infarto y apoplejía.",
  "Wikipedia tiene una grabación de un gato maullando porque, ¿por qué no?",
  "El gato más grande del mundo medía 48,5 pulgadas de largo. https://www.youtube.com/watch?v=gc5M0aGc_EI",
  "Las pruebas sugieren que los gatos domesticados existen desde el 3600 a.C., 2.000 años antes que los faraones egipcios.",
  "El ronroneo de un gato puede ser una forma de autocuración, ya que puede ser un signo de nerviosismo, así como de satisfacción.",
  "Del mismo modo, la frecuencia del ronroneo de un gato doméstico es la misma con la que los músculos y los huesos se reparan.",
  "Los gatos adultos sólo maúllan para comunicarse con los humanos.",
  "El gato más rico del mundo vale 13 millones de dólares después de que su humana falleciera y le dejara su fortuna.",
  "Tu gato reconoce tu voz pero actúa como si no le importara (probablemente porque es así).",
  "Los gatos son a menudo intolerantes a la lactosa, ¡así que deja de darles leche!",
  "Los gatos pueden saltar hasta seis veces su longitud.",
  "Los gatos han contribuido a la extinción de 33 especies diferentes.",
  "Los gatos pueden beber agua de mar para sobrevivir.",
];

const langName = "spanish",
  langISO = "esp",
  langLocale = "es",
  langLocaleName = "spain";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
