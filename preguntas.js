const bancoPreguntas = [
    {
        "id": 1,
        "tema": "Farmacología del SNA I: Fármacos Colinérgicos",
        "pregunta": "Un agricultor es llevado a emergencia por presentar miosis, broncorrea masiva, sialorrea, diarrea y fasciculaciones musculares luego de manipular insecticidas. Tras asegurar la vía aérea, se decide administrar el fármaco que revierte con mayor rapidez las manifestaciones responsables del compromiso respiratorio agudo. ¿Cuál es el medicamento indicado?",
        "opciones": [
            "Pralidoxima",
            "Neostigmina",
            "Atropina",
            "Diazepam"
        ],
        "correcta": 2,
        "explicacion": "La atropina es un antagonista competitivo de los receptores muscarínicos que revierte rápidamente los efectos del exceso de acetilcolina sobre bronquios y glándulas exocrinas, disminuyendo la broncorrea y el broncoespasmo responsables del compromiso respiratorio en la intoxicación por organofosforados."
    },
    {
        "id": 2,
        "tema": "Anticonvulsivantes y Ansiolíticos",
        "pregunta": "Paciente sometido a endoscopia digestiva recibe un sedante que aumenta la frecuencia de apertura del canal de cloro asociado al receptor GABA-A. Posteriormente desarrolla depresión excesiva del nivel de conciencia y se administra un antagonista específico. ¿Cuál es el fármaco utilizado?",
        "opciones": [
            "Sugammadex",
            "Naloxona",
            "Flumazenil",
            "Neostigmina"
        ],
        "correcta": 2,
        "explicacion": "El flumazenil es un antagonista competitivo del sitio de unión de las benzodiacepinas en el receptor GABA-A, revirtiendo rápidamente la sedación y la depresión del sistema nervioso central inducidas por estos fármacos."
    },
    {
        "id": 3,
        "tema": "Anticonvulsivantes y Ansiolíticos",
        "pregunta": "Paciente con epilepsia focal recibe un antiepiléptico que no actúa principalmente bloqueando canales de sodio ni potenciando directamente la neurotransmisión GABAérgica. Su efecto se relaciona con la modulación de la exocitosis de vesículas sinápticas mediante interacción con una proteína presináptica específica. ¿Cuál es el medicamento?",
        "opciones": [
            "Fenobarbital",
            "Levetiracetam",
            "Carbamazepina",
            "Fenitoína"
        ],
        "correcta": 1,
        "explicacion": "El levetiracetam se une a la proteína vesicular sináptica SV2A, modulando la liberación de neurotransmisores y disminuyendo la excitabilidad neuronal, sin actuar principalmente sobre canales de sodio ni potenciar directamente la neurotransmisión GABAérgica."
    },
    {
        "id": 4,
        "tema": "Anticonvulsivantes y Ansiolíticos",
        "pregunta": "Paciente con cirrosis hepática Child-Pugh B desarrolla síndrome ansioso agudo. Se decide utilizar una benzodiazepina cuyo aclaramiento sea relativamente independiente de la actividad del sistema microsomal hepático CYP450. ¿Cuál de los siguientes fármacos posee esta característica?",
        "opciones": [
            "Diazepam",
            "Clonazepam",
            "Lorazepam",
            "Alprazolam"
        ],
        "correcta": 2,
        "explicacion": "El lorazepam se metaboliza principalmente por glucuronidación, por lo que su aclaramiento depende poco del sistema CYP450. Esta característica lo convierte en la benzodiacepina de elección en pacientes con insuficiencia hepática."
    },
    {
        "id": 5,
        "tema": "Anticonvulsivantes y Ansiolíticos",
        "pregunta": "Paciente con ansiedad crónica requiere un tratamiento que no produzca sedación importante ni potenciación de la neurotransmisión GABAérgica. El medicamento actúa principalmente como agonista parcial de un receptor serotoninérgico. ¿Cuál es el fármaco?",
        "opciones": [
            "Diazepam",
            "Midazolam",
            "Buspirona",
            "Alprazolam"
        ],
        "correcta": 2,
        "explicacion": "La buspirona es un agonista parcial de los receptores serotoninérgicos 5-HT1A, produciendo un efecto ansiolítico sin potenciar la neurotransmisión GABAérgica, por lo que presenta escasa sedación y bajo riesgo de dependencia."
    },
    {
        "id": 6,
        "tema": "Antiinflamatorios y Analgésicos Periféricos y Centrales",
        "pregunta": "Paciente varón de 67 años con antecedente de infarto agudo de miocardio hace 8 meses consulta por gonalgia secundaria a osteoartrosis. Solicita tratamiento antiinflamatorio debido a persistencia del dolor. Considerando sus antecedentes cardiovasculares, ¿cuál de los siguientes fármacos debería evitarse por incrementar el riesgo de eventos tromboembólicos?",
        "opciones": [
            "Tramadol",
            "Celecoxib",
            "Naproxeno",
            "Paracetamol"
        ],
        "correcta": 1,
        "explicacion": "El celecoxib inhibe selectivamente la COX-2, disminuyendo la síntesis de prostaciclina (PGI₂) sin inhibir significativamente la producción de tromboxano A₂. Este desequilibrio favorece un estado protrombótico y aumenta el riesgo de eventos cardiovasculares."
    },
    {
        "id": 7,
        "tema": "Antiinflamatorios y Analgésicos Periféricos y Centrales",
        "pregunta": "Paciente con insuficiencia cardíaca crónica compensada desarrolla lumbalgia y automedicación con un AINE. Días después presenta edema periférico, aumento de peso y disnea de esfuerzo. ¿Cuál es el mecanismo farmacológico que mejor explica esta descompensación?",
        "opciones": [
            "Bloqueo de la enzima convertidora de angiotensina",
            "Estimulación de la liberación de péptido natriurético auricular",
            "Disminución de natriuresis y retención de sodio",
            "Activación de receptores mineralocorticoides en el túbulo colector"
        ],
        "correcta": 2,
        "explicacion": "Los AINE inhiben la síntesis de prostaglandinas renales, disminuyendo el flujo sanguíneo renal y la excreción de sodio. Esto favorece la retención hidrosalina, el edema y la descompensación de la insuficiencia cardíaca."
    },
    {
        "id": 8,
        "tema": "Fármacos Antihipertensivos",
        "pregunta": "Paciente de 72 años es hospitalizado por un infarto agudo de miocardio. Durante las primeras horas presenta presión arterial de 85/60 mmHg y desarrolla insuficiencia renal aguda con elevación progresiva de creatinina sérica. Se revisa la medicación cardiovascular y se decide evitar temporalmente un fármaco debido al riesgo de empeorar tanto la perfusión renal como la hipotensión. ¿Cuál de los siguientes medicamentos está contraindicado en este contexto?",
        "opciones": [
            "Atorvastatina",
            "Clopidogrel",
            "Enalapril",
            "Ácido acetilsalicílico"
        ],
        "correcta": 2,
        "explicacion": "El enalapril inhibe la enzima convertidora de angiotensina y produce dilatación de la arteriola eferente glomerular, disminuyendo la presión de filtración. En pacientes con hipotensión e insuficiencia renal aguda puede agravar el deterioro de la función renal."
    },
    {
        "id": 9,
        "tema": "Fármacos Vasoactivos",
        "pregunta": "Paciente con shock cardiogénico recibe un inodilatador intravenoso. Tras el inicio del tratamiento se observa aumento del índice cardíaco y disminución de la presión capilar pulmonar sin incremento significativo del consumo miocárdico de oxígeno. El efecto se produce por aumento de AMPc tanto en cardiomiocitos como en músculo liso vascular. ¿Cuál es el fármaco administrado?",
        "opciones": [
            "Fenilefrina",
            "Milrinona",
            "Noradrenalina",
            "Dobutamina"
        ],
        "correcta": 1,
        "explicacion": "La milrinona inhibe la fosfodiesterasa III, aumentando las concentraciones de AMPc en cardiomiocitos y músculo liso vascular. Este mecanismo incrementa la contractilidad cardíaca y produce vasodilatación periférica."
    },
    {
        "id": 10,
        "tema": "Fármacos Vasoactivos",
        "pregunta": "Paciente con insuficiencia cardíaca aguda presenta bajo gasto cardíaco y adecuada presión arterial. El médico selecciona un inotrópico cuyo efecto principal es aumentar la contractilidad miocárdica con escaso efecto cronotrópico y una disminución moderada de la poscarga. ¿Cuál es el fármaco?",
        "opciones": [
            "Vasopresina",
            "Fenilefrina",
            "Dobutamina",
            "Noradrenalina"
        ],
        "correcta": 2,
        "explicacion": "La dobutamina es un agonista predominante de los receptores β₁-adrenérgicos que aumenta la contractilidad miocárdica con escaso efecto cronotrópico. Además, su leve acción sobre receptores β₂ disminuye moderadamente la resistencia vascular sistémica."
    },
    {
        "id": 11,
        "tema": "Fármacos Antiarrítmicos",
        "pregunta": "Varón de 64 años es hospitalizado por un infarto agudo de miocardio. Durante su evolución desarrolla episodios recurrentes de taquicardia ventricular. ¿Qué fármaco antiarrítmico presenta mayor afinidad por los canales rápidos de sodio en estado inactivo, característica que favorece su acción en tejido ventricular isquémico?",
        "opciones": [
            "Verapamilo",
            "Lidocaína",
            "Procainamida",
            "Flecainida"
        ],
        "correcta": 1,
        "explicacion": "La lidocaína es un antiarrítmico clase IB que presenta mayor afinidad por los canales rápidos de sodio en estado inactivo, predominantes en el miocardio ventricular isquémico, suprimiendo selectivamente las arritmias ventriculares."
    },
    {
        "id": 12,
        "tema": "Fármacos en Insuficiencia Cardíaca",
        "pregunta": "Paciente de 68 años con insuficiencia cardíaca aguda descompensada presenta bajo gasto cardíaco, extremidades frías y signos de hipoperfusión sistémica. ¿Qué fármaco intravenoso es capaz de aumentar la contractilidad miocárdica y, simultáneamente, reducir la poscarga mediante vasodilatación periférica?",
        "opciones": [
            "Vasopresina",
            "Noradrenalina",
            "Milrinona",
            "Fenilefrina"
        ],
        "correcta": 2,
        "explicacion": "La milrinona produce un efecto inotrópico positivo y vasodilatador mediante la inhibición de la fosfodiesterasa III, aumentando el AMPc independientemente de la estimulación de receptores β-adrenérgicos."
    },
    {
        "id": 13,
        "tema": "Fármacos en Insuficiencia Cardíaca",
        "pregunta": "Paciente con insuficiencia cardíaca aguda presenta bajo gasto cardíaco e hipotensión leve. ¿Qué fármaco incrementa la contractilidad miocárdica y produce una reducción moderada de la resistencia vascular sistémica?",
        "opciones": [
            "Midodrina",
            "Dobutamina",
            "Vasopresina",
            "Fenilefrina"
        ],
        "correcta": 1,
        "explicacion": "La dobutamina incrementa el gasto cardíaco por estimulación de receptores β₁, mejorando la contractilidad miocárdica y reduciendo moderadamente la resistencia vascular sistémica gracias a su leve actividad β₂."
    },
    {
        "id": 14,
        "tema": "Fármacos en Insuficiencia Cardíaca",
        "pregunta": "Paciente de 72 años con insuficiencia cardíaca aguda descompensada presenta bajo gasto cardíaco y signos de hipoperfusión sistémica. Durante la hospitalización muestra escasa respuesta a dosis crecientes de dobutamina. El equipo médico sospecha una disminución de la densidad y sensibilidad de receptores β-adrenérgicos secundaria a insuficiencia cardíaca crónica avanzada. ¿Cuál de los siguientes fármacos conseguiría un efecto inotrópico positivo en este escenario?",
        "opciones": [
            "Dopamina",
            "Isoproterenol",
            "Milrinona",
            "Adrenalina"
        ],
        "correcta": 2,
        "explicacion": "La milrinona conserva su efecto inotrópico en pacientes con insuficiencia cardíaca avanzada porque aumenta el AMPc mediante inhibición de la fosfodiesterasa III, sin depender de la densidad o sensibilidad de los receptores β-adrenérgicos."
    },
    {
        "id": 15,
        "tema": "Fármacos en la Hemostasia",
        "pregunta": "Paciente de 68 años con infarto agudo de miocardio requiere doble antiagregación plaquetaria. Dentro de sus antecedentes presenta úlcera duodenal en tratamiento crónico con omeprazol. ¿Qué fármaco antiagregante debe evitarse debido al riesgo de disminución de su activación metabólica y pérdida de eficacia antitrombótica?",
        "opciones": [
            "Abciximab",
            "Aspirina",
            "Clopidogrel",
            "Ticagrelor"
        ],
        "correcta": 2,
        "explicacion": "El clopidogrel es un profármaco que requiere activación por la enzima CYP2C19. El omeprazol inhibe esta isoenzima, reduciendo la formación del metabolito activo y disminuyendo el efecto antiagregante plaquetario."
    },
    {
        "id": 16,
        "tema": "Fármacos en la Hemostasia",
        "pregunta": "Varón de 78 años es hospitalizado por un infarto agudo de miocardio. Durante su evolución desarrolla insuficiencia renal aguda con un aclaramiento de creatinina marcadamente reducido. Se evalúan opciones de anticoagulación y se decide evitar una heparina de bajo peso molecular debido al riesgo de acumulación farmacológica y sangrado secundario a su eliminación predominantemente renal. ¿Cuál de los siguientes fármacos es el responsable de esta limitación?",
        "opciones": [
            "Fondaparinux",
            "Enoxaparina",
            "Heparina no fraccionada",
            "Warfarina"
        ],
        "correcta": 1,
        "explicacion": "La enoxaparina se elimina predominantemente por vía renal. En pacientes con insuficiencia renal grave puede acumularse, incrementando el riesgo de hemorragia, motivo por el cual suele preferirse la heparina no fraccionada."
    },
    {
        "id": 17,
        "tema": "Fármacos en la Hemostasia",
        "pregunta": "Paciente con fibrilación auricular valvular inicia anticoagulación oral. Al quinto día desarrolla necrosis cutánea dolorosa. Se sospecha una reducción desproporcionadamente rápida de proteínas anticoagulantes fisiológicas respecto a factores procoagulantes. ¿Qué proteína explica principalmente este fenómeno?",
        "opciones": [
            "Proteína Z",
            "Proteína C",
            "Antitrombina III",
            "Plasminógeno"
        ],
        "correcta": 1,
        "explicacion": "La warfarina disminuye rápidamente los niveles de proteína C debido a su corta vida media. Esto genera un estado transitorio de hipercoagulabilidad que puede producir necrosis cutánea durante los primeros días del tratamiento."
    },
    {
        "id": 18,
        "tema": "Fármacos en la Hemostasia",
        "pregunta": "Paciente con síndrome coronario agudo recibe anticoagulación parenteral. Una semana después presenta trombocitopenia y trombosis recurrente. Se decide suspender inmediatamente el anticoagulante y evitar su reexposición futura. ¿Cuál de los siguientes fármacos se asocia con mayor frecuencia a este efecto adverso?",
        "opciones": [
            "Bivalirudina",
            "Heparina no fraccionada",
            "Fondaparinux",
            "Enoxaparina"
        ],
        "correcta": 1,
        "explicacion": "La heparina no fraccionada puede inducir trombocitopenia inmunomediada por anticuerpos contra el complejo factor plaquetario 4-heparina, provocando activación plaquetaria y trombosis paradójica."
    },
    {
        "id": 19,
        "tema": "Fármacos Anti Dislipidémicos",
        "pregunta": "Paciente tratado con atorvastatina presenta debilidad muscular proximal y elevación de CK. El efecto adverso se relaciona con la inhibición de una ruta metabólica que genera tanto colesterol como moléculas necesarias para la función mitocondrial. ¿Cuál de los siguientes compuestos disminuye como consecuencia directa de esta inhibición?",
        "opciones": [
            "Ácido araquidónico",
            "Carnitina",
            "Creatina",
            "Coenzima Q10"
        ],
        "correcta": 3,
        "explicacion": "Las estatinas inhiben la HMG-CoA reductasa, reduciendo la síntesis de mevalonato y de coenzima Q10, componente esencial de la cadena respiratoria mitocondrial. Su disminución se relaciona con la aparición de miopatía."
    },
    {
        "id": 20,
        "tema": "Fármacos Anti Dislipidémicos",
        "pregunta": "Paciente tratado con gemfibrozilo presenta disminución significativa de triglicéridos plasmáticos. El efecto terapéutico se atribuye a la activación de PPAR-α. ¿Cuál de los siguientes cambios metabólicos NO es consecuencia directa de dicha activación?",
        "opciones": [
            "Aumento de Apo A-I y Apo A-II",
            "Aumento de la lipólisis intravascular de VLDL",
            "Disminución de Apo C-III",
            "Inhibición de la HMG-CoA reductasa"
        ],
        "correcta": 3,
        "explicacion": "El gemfibrozilo activa el receptor nuclear PPAR-α, aumentando la actividad de la lipoproteína lipasa, disminuyendo Apo C-III e incrementando Apo A-I y Apo A-II. No inhibe la HMG-CoA reductasa, mecanismo exclusivo de las estatinas."
    },
    {
        "id": 21,
        "tema": "Antiasmáticos y Antihistamínicos - EPOC",
        "pregunta": "Paciente con asma grave recibe dosis elevadas y repetidas de salbutamol durante una exacerbación. Horas después presenta temblor, taquicardia y alteraciones bioquímicas secundarias a estimulación sistémica β₂. ¿Cuál de los siguientes cambios de laboratorio sería el menos esperable?",
        "opciones": [
            "Incremento del lactato sérico",
            "Disminución del potasio sérico",
            "Elevación del calcio sérico",
            "Elevación de la glucemia plasmática"
        ],
        "correcta": 2,
        "explicacion": "El salbutamol estimula los receptores β₂-adrenérgicos, aumentando la glucogenólisis, la producción de lactato y la captación intracelular de potasio. No produce elevación del calcio sérico, por lo que este hallazgo es el menos esperable."
    },
    {
        "id": 22,
        "tema": "Antiasmáticos y Antihistamínicos - EPOC",
        "pregunta": "Paciente de 8 años con asma bronquial presenta episodios recurrentes de sibilancias y disnea. Se decide iniciar un broncodilatador inhalado cuyo mecanismo principal consiste en aumentar las concentraciones intracelulares de AMPc en el músculo liso bronquial, produciendo relajación rápida de la vía aérea. ¿Cuál de los siguientes fármacos es el más apropiado?",
        "opciones": [
            "Ipratropio",
            "Budesonida",
            "Salbutamol",
            "Montelukast"
        ],
        "correcta": 2,
        "explicacion": "El salbutamol es un agonista selectivo de los receptores β₂-adrenérgicos que activa la adenilato ciclasa, incrementando el AMPc en el músculo liso bronquial y produciendo broncodilatación rápida."
    },
    {
        "id": 23,
        "tema": "Antiasmáticos y Antihistamínicos - EPOC",
        "pregunta": "Paciente de 32 años con asma de difícil control inicia un fármaco oral broncodilatador. Posteriormente desarrolla ansiedad, insomnio, pesadillas y palpitaciones. ¿Cuál es el fármaco que causa estos efectos por inhibición de la vía fisiológica que normalmente ejerce acciones depresoras sobre el sistema nervioso central?",
        "opciones": [
            "Omalizumab",
            "Montelukast",
            "Teofilina",
            "Ipratropio"
        ],
        "correcta": 2,
        "explicacion": "La teofilina inhibe la fosfodiesterasa y antagoniza los receptores de adenosina, aumentando el AMPc y bloqueando la acción depresora fisiológica de la adenosina sobre el sistema nervioso central, lo que explica el insomnio, la ansiedad y las palpitaciones."
    },
    {
        "id": 24,
        "tema": "Antiasmáticos y Antihistamínicos - EPOC",
        "pregunta": "Paciente de 19 años con asma persistente presenta exacerbaciones frecuentes pese al uso adecuado de corticoides inhalados. Se añade un fármaco que disminuye la síntesis de leucotrienos al bloquear una enzima clave de la vía del ácido araquidónico. ¿Cuál de las siguientes enzimas es inhibida por este tratamiento?",
        "opciones": [
            "3-lipooxigenasa",
            "5-lipooxigenasa",
            "Fosfolipasa A2",
            "Ciclooxigenasa-2"
        ],
        "correcta": 1,
        "explicacion": "El zileutón inhibe la enzima 5-lipooxigenasa, disminuyendo la síntesis de leucotrienos derivados del ácido araquidónico y reduciendo el broncoespasmo y la inflamación de la vía aérea."
    },
    {
        "id": 25,
        "tema": "Antiasmáticos y Antihistamínicos - EPOC",
        "pregunta": "Paciente pediátrico con asma recibe un broncodilatador que no estimula directamente receptores adrenérgicos, pero incrementa AMPc intracelular mediante inhibición enzimática. Días después desarrolla insomnio, ansiedad y pesadillas. ¿Cuál es el fármaco más probable?",
        "opciones": [
            "Salmeterol",
            "Montelukast",
            "Tiotropio",
            "Teofilina"
        ],
        "correcta": 3,
        "explicacion": "La teofilina incrementa el AMPc intracelular mediante inhibición de la fosfodiesterasa, produciendo broncodilatación sin actuar directamente sobre receptores adrenérgicos."
    },
    {
        "id": 26,
        "tema": "Antiasmáticos y Antihistamínicos - EPOC",
        "pregunta": "Paciente con urticaria crónica recibe un antihistamínico de segunda generación. El receptor sobre el cual actúa normalmente activa la fosfolipasa C y aumenta la concentración intracelular de calcio. ¿A qué proteína G está acoplado dicho receptor?",
        "opciones": [
            "Go",
            "Gi",
            "Gq",
            "Gs"
        ],
        "correcta": 2,
        "explicacion": "El receptor H₁ de histamina está acoplado a la proteína Gq, cuya activación estimula la fosfolipasa C, incrementando la formación de IP₃ y DAG y aumentando la concentración intracelular de calcio."
    },
    {
        "id": 27,
        "tema": "Fármacos Digestivos",
        "pregunta": "Un paciente con encefalopatía hepática presenta deterioro del estado mental secundario a hiperamonemia. Se prescribe un fármaco que disminuye la absorción intestinal de amoníaco al promover su transformación en una forma ionizada que queda atrapada en la luz intestinal. ¿Cuál es el medicamento más apropiado?",
        "opciones": [
            "Subsalicilato de bismuto",
            "Lactulosa",
            "Simeticona",
            "Hidróxido de aluminio"
        ],
        "correcta": 1,
        "explicacion": "La lactulosa es fermentada por la microbiota intestinal formando ácidos orgánicos que acidifican el colon, favoreciendo la conversión del amoníaco (NH₃) en amonio (NH₄⁺), el cual queda atrapado en la luz intestinal y disminuye su absorción."
    },
    {
        "id": 28,
        "tema": "Fármacos Digestivos",
        "pregunta": "Paciente con infección por Helicobacter pylori inicia terapia. Parte de la eficacia del esquema se atribuye a que uno de sus componentes interfiere con la actividad de la ureasa bacteriana, disminuyendo la producción local de amoníaco y dificultando la supervivencia del microorganismo en el ambiente ácido gástrico. ¿Cuál de los siguientes fármacos es responsable principalmente de este mecanismo?",
        "opciones": [
            "Omeprazol",
            "Metronidazol",
            "Subsalicilato de bismuto",
            "Tetraciclina"
        ],
        "correcta": 2,
        "explicacion": "El subsalicilato de bismuto ejerce actividad frente a Helicobacter pylori al inhibir la ureasa bacteriana, disminuyendo la producción de amoníaco y dificultando la supervivencia del microorganismo en el ambiente ácido gástrico."
    },
    {
        "id": 29,
        "tema": "Fármacos Digestivos",
        "pregunta": "Paciente de 68 años con antecedente de úlcera gástrica complicada recibe pantoprazol de forma continua durante varios años. Durante el seguimiento, el médico evalúa posibles efectos adversos asociados al uso crónico del tratamiento. ¿Cuál de los siguientes hallazgos no se relaciona con el uso prolongado de pantoprazol?",
        "opciones": [
            "Hipomagnesemia persistente",
            "Hipercalcemia",
            "Incremento de osteoporosis",
            "Deficiencia de vitamina B12"
        ],
        "correcta": 1,
        "explicacion": "El uso prolongado de inhibidores de la bomba de protones puede asociarse con deficiencia de vitamina B12, hipomagnesemia y aumento del riesgo de osteoporosis, pero no produce hipercalcemia."
    },
    {
        "id": 30,
        "tema": "Fármacos Digestivos",
        "pregunta": "Paciente de 67 años portador de una válvula protésica mecánica recibe anticoagulación crónica con warfarina. Durante una evaluación gastroenterológica se diagnostica una úlcera duodenal activa que requiere tratamiento antisecretor. Debido al riesgo de interacciones farmacológicas que puedan alterar el INR, ¿cuál de los siguientes fármacos es la mejor opción para este paciente?",
        "opciones": [
            "Pantoprazol",
            "Esomeprazol",
            "Omeprazol",
            "Cimetidina"
        ],
        "correcta": 0,
        "explicacion": "El pantoprazol presenta menor inhibición de las enzimas CYP2C19 y CYP2C9, por lo que tiene menor potencial de interacción con la warfarina y menor riesgo de alterar el INR."
    },
    {
        "id": 31,
        "tema": "Antirresortivos y Suplementos para Osteoporosis",
        "pregunta": "Paciente con osteoporosis recibe tratamiento con un fármaco antirresortivo, además de suplementos de calcio y vitamina D. Días después desarrolla elevación aguda de creatinina sérica y el estudio histopatológico revela necrosis tubular aguda. El cuadro se atribuye a un efecto adverso farmacológico relacionado con:",
        "opciones": [
            "Calcitonina",
            "Teriparatida",
            "Ácido zoledrónico",
            "Raloxifeno"
        ],
        "correcta": 2,
        "explicacion": "El ácido zoledrónico, un bisfosfonato intravenoso, puede producir nefrotoxicidad por lesión tubular aguda, especialmente cuando se administra rápidamente o en pacientes con insuficiencia renal previa."
    },
    {
        "id": 32,
        "tema": "Antirresortivos y Suplementos para Osteoporosis",
        "pregunta": "Paciente de 62 años con osteoporosis presenta litiasis renal recurrente, calcio sérico de 11,8 mg/dL y PTH elevada. Mientras se completa el estudio etiológico, se evalúan opciones farmacológicas para disminuir el riesgo de fracturas. ¿Cuál de los siguientes tratamientos debe evitarse por su mecanismo de acción?",
        "opciones": [
            "Denosumab",
            "Teriparatida",
            "Ácido zoledrónico",
            "Raloxifeno"
        ],
        "correcta": 1,
        "explicacion": "La teriparatida es un análogo de la PTH que incrementa la resorción ósea y eleva el calcio sérico, por lo que está contraindicada en pacientes con hipercalcemia o hiperparatiroidismo."
    },
    {
        "id": 33,
        "tema": "Hipoglicemiantes",
        "pregunta": "Paciente de 24 años con diabetes mellitus tipo 1 presenta hiperglucemia posprandial persistente pese a recibir insulina basal adecuadamente ajustada. Se decide añadir insulina lispro antes de las comidas debido a sus características farmacocinéticas. ¿Cuál de las siguientes propiedades justifica mejor la elección de este fármaco?",
        "opciones": [
            "Metabolismo hepático reducido",
            "Inicio de acción lento y duración prolongada",
            "Ausencia de absorción subcutánea",
            "Inicio de acción rápido y duración corta"
        ],
        "correcta": 3,
        "explicacion": "La insulina lispro posee una rápida absorción subcutánea por su menor tendencia a formar hexámeros, lo que permite controlar eficazmente la glucemia posprandial con una duración corta del efecto."
    },
    {
        "id": 34,
        "tema": "Hipoglicemiantes",
        "pregunta": "Paciente con diabetes mellitus recibe insulina NPH. Tras la unión de la hormona a su receptor tirosina quinasa, se activa una cascada intracelular que culmina con la inserción de transportadores de glucosa en la membrana de los miocitos. ¿Cuál es el transportador involucrado en este proceso?",
        "opciones": [
            "GLUT-2",
            "GLUT-4",
            "GLUT-1",
            "GLUT-3"
        ],
        "correcta": 1,
        "explicacion": "La unión de la insulina a su receptor tirosina quinasa activa la vía IRS-PI3K-Akt, promoviendo la translocación de transportadores GLUT-4 hacia la membrana de miocitos y adipocitos para aumentar la captación de glucosa."
    },
    {
        "id": 35,
        "tema": "Hipoglicemiantes",
        "pregunta": "Paciente con diabetes mellitus recibe insulina para el control de la hiperglucemia. La activación del receptor de insulina desencadena múltiples efectos metabólicos destinados a favorecer el almacenamiento y utilización de nutrientes. Todos los siguientes corresponden a efectos fisiológicos de la insulina, EXCEPTO:",
        "opciones": [
            "Incremento de la síntesis proteica y captación de aminoácidos",
            "Estimulación de la gluconeogénesis hepática",
            "Incremento de la síntesis de glucógeno hepático y muscular",
            "Translocación de GLUT-4 hacia la membrana celular en músculo y tejido adiposo"
        ],
        "correcta": 1,
        "explicacion": "La insulina inhibe la gluconeogénesis hepática y favorece el almacenamiento de nutrientes mediante aumento de la síntesis de glucógeno, captación de glucosa y síntesis proteica."
    },
    {
        "id": 36,
        "tema": "Hipoglicemiantes",
        "pregunta": "Paciente diabético desarrolla hipoglucemia severa tras omitir varias comidas. Se identifica un fármaco que estimula la secreción pancreática de insulina mediante cierre de canales de potasio ATP-dependientes independientemente de la concentración plasmática de glucosa. ¿Cuál de los siguientes medicamentos posee mayor riesgo de producir este efecto?",
        "opciones": [
            "Pioglitazona",
            "Metformina",
            "Glibenclamida",
            "Sitagliptina"
        ],
        "correcta": 2,
        "explicacion": "La glibenclamida bloquea los canales de potasio ATP-dependientes de la célula β pancreática, estimulando la liberación de insulina independientemente de la glucemia, lo que aumenta el riesgo de hipoglucemia."
    },
    {
        "id": 37,
        "tema": "Hipoglicemiantes",
        "pregunta": "Paciente de 28 años con diabetes mellitus tipo 2 recientemente diagnosticada presenta HbA1c de 6,7% y ausencia de síntomas catabólicos. Antes de considerar tratamiento farmacológico, el médico plantea una intervención dirigida a disminuir la resistencia a la insulina y mejorar el control metabólico. ¿Cuál es la estrategia inicial más apropiada?",
        "opciones": [
            "Monoterapia con inhibidores de DPP-4",
            "Restricción calórica y ejercicio físico",
            "Asociación de metformina y sulfonilurea",
            "Terapia intensiva con insulina basal-bolo"
        ],
        "correcta": 1,
        "explicacion": "Las modificaciones del estilo de vida mejoran la sensibilidad a la insulina y constituyen la intervención inicial en pacientes con diabetes mellitus tipo 2 recientemente diagnosticada y sin síntomas catabólicos."
    },
    {
        "id": 38,
        "tema": "Hipoglicemiantes",
        "pregunta": "Paciente con diabetes mellitus tipo 2, obesidad y antecedente de hipoglucemias inicia un fármaco que activa receptores acoplados a proteína G en la célula β pancreática, incrementando la secreción de insulina de manera glucosa-dependiente. Además, produce retraso del vaciamiento gástrico y aumento de la saciedad. ¿Cuál es el medicamento que cumple esta característica farmacológica?",
        "opciones": [
            "Empagliflozina",
            "Liraglutida",
            "Sitagliptina",
            "Glibenclamida"
        ],
        "correcta": 1,
        "explicacion": "La liraglutida es un agonista del receptor GLP-1 acoplado a proteína G que aumenta la secreción de insulina de forma dependiente de la glucosa, retrasa el vaciamiento gástrico y aumenta la saciedad."
    },
    {
        "id": 39,
        "tema": "Hematinicos",
        "pregunta": "Paciente con anemia megaloblástica recibe vitamina B12 debido a la presencia de síntomas neurológicos. La mejoría clínica esperada se relaciona con la restauración de una vía metabólica involucrada en la integridad de la mielina. ¿Cuál de los siguientes cambios bioquímicos se espera tras un tratamiento adecuado?",
        "opciones": [
            "Disminución de ferritina sérica",
            "Disminución de ácido metilmalónico sérico",
            "Disminución de eritropoyetina circulante",
            "Disminución de transferrina plasmática"
        ],
        "correcta": 1,
        "explicacion": "La vitamina B12 es cofactor de la metilmalonil-CoA mutasa. Su administración restaura esta vía metabólica, disminuyendo la concentración de ácido metilmalónico, metabolito cuya acumulación se relaciona con el daño neurológico."
    },
    {
        "id": 40,
        "tema": "Hematinicos",
        "pregunta": "Paciente con anemia por enfermedad renal crónica será tratado con epoetina alfa. El médico revisa antecedentes que podrían incrementar el riesgo de la complicación más grave asociada al tratamiento. ¿Cuál de los siguientes antecedentes tiene mayor relevancia clínica?",
        "opciones": [
            "Enfermedad ulcerosa péptica",
            "Osteoporosis posmenopáusica",
            "Tromboembolismo pulmonar previo",
            "Colecistectomía previa"
        ],
        "correcta": 2,
        "explicacion": "La epoetina alfa estimula la eritropoyesis aumentando la masa eritrocitaria y la viscosidad sanguínea, lo que incrementa el riesgo de eventos tromboembólicos, especialmente en pacientes con antecedentes de trombosis."
    },
    {
        "id": 41,
        "tema": "Antibacterianos I Pared Bacteriana",
        "pregunta": "Paciente con neumonía por Mycoplasma pneumoniae recibe amoxicilina/ácido clavulánico sin respuesta terapéutica. La falta de eficacia se debe a la imposibilidad del antibiótico para inhibir una estructura bacteriana específica. ¿Cuál es dicha estructura?",
        "opciones": [
            "ADN girasa",
            "Peptidoglicano de la pared celular",
            "ARN polimerasa dependiente de ADN",
            "Subunidad ribosomal 50S"
        ],
        "correcta": 1,
        "explicacion": "Mycoplasma pneumoniae carece de pared celular y, por tanto, no posee peptidoglicano. Los antibióticos β-lactámicos requieren esta estructura para ejercer su acción, motivo por el cual son ineficaces frente a este microorganismo."
    },
    {
        "id": 42,
        "tema": "Antibacterianos I Pared Bacteriana",
        "pregunta": "Paciente con cistitis aguda recibe un antibiótico cuya acción ocurre antes de la formación de los monómeros de peptidoglicano. ¿Qué fármaco actúa inhibiendo la incorporación del fosfoenolpiruvato a un precursor de la pared celular bacteriana?",
        "opciones": [
            "Vancomicina",
            "Aztreonam",
            "Fosfomicina",
            "Cefalexina"
        ],
        "correcta": 2,
        "explicacion": "La fosfomicina inhibe la enzima MurA, bloqueando la incorporación del fosfoenolpiruvato al UDP-N-acetilglucosamina, primer paso en la síntesis de los precursores del peptidoglicano."
    },
    {
        "id": 43,
        "tema": "Antibacterianos I Pared Bacteriana",
        "pregunta": "Paciente de 45 años presenta una infección cutánea por Staphylococcus aureus. Se inicia tratamiento con un antibiótico que inhibe la síntesis de la pared celular bacteriana al impedir el transporte de los precursores de peptidoglicano desde el citoplasma hacia el espacio periplásmico. ¿De qué fármaco se trata?",
        "opciones": [
            "Cefalexina",
            "Bacitracina",
            "Vancomicina",
            "Fosfomicina"
        ],
        "correcta": 1,
        "explicacion": "La bacitracina inhibe la desfosforilación del bactoprenol, impidiendo el transporte de los precursores del peptidoglicano desde el citoplasma hacia la superficie de la membrana bacteriana."
    },
    {
        "id": 44,
        "tema": "Antibacterianos I Pared Bacteriana",
        "pregunta": "Paciente con bacteriemia por Staphylococcus aureus resistente a meticilina recibe un antibiótico glucopéptido. El fármaco ejerce su acción al unirse a un precursor del peptidoglicano, evitando el crecimiento longitudinal de la pared bacteriana. ¿Qué etapa de la síntesis de pared se encuentra principalmente inhibida?",
        "opciones": [
            "Formación de UDP-N-acetilmurámico",
            "Transglicosidación",
            "Transporte por bactoprenol",
            "Transpeptidación mediada por PBP"
        ],
        "correcta": 1,
        "explicacion": "La vancomicina se une al extremo D-Ala-D-Ala de los precursores del peptidoglicano, bloqueando principalmente la reacción de transglicosidación e impidiendo el alargamiento de la pared bacteriana."
    },
    {
        "id": 45,
        "tema": "Antibacterianos II Síntesis de Proteína y Metabólicos",
        "pregunta": "Paciente con infección gastrointestinal recibe un antibiótico que interfiere en la síntesis de nucleótidos bacterianos al impedir la reducción de dihidrofolato a tetrahidrofolato. ¿Cuál es el medicamento más probable?",
        "opciones": [
            "Sulfametoxazol",
            "Doxiciclina",
            "Trimetoprima",
            "Rifaximina"
        ],
        "correcta": 2,
        "explicacion": "La trimetoprima inhibe la dihidrofolato reductasa bacteriana, bloqueando la conversión de dihidrofolato en tetrahidrofolato y disminuyendo la síntesis de purinas y timidina necesarias para la producción de ADN."
    },
    {
        "id": 46,
        "tema": "Antibacterianos II Síntesis de Proteína y Metabólicos",
        "pregunta": "Paciente con infección urinaria alta recibe un antibiótico bactericida que actúa sobre la subunidad 30S ribosomal. Días después desarrolla necrosis tubular aguda y ototoxicidad. ¿Cuál de las siguientes estructuras celulares concentra preferentemente el fármaco y explica su toxicidad?",
        "opciones": [
            "Podocitos y neuronas corticales",
            "Células mesangiales glomerulares y hepatocitos",
            "Células del túbulo proximal y células ciliadas cocleares",
            "Células yuxtaglomerulares y miocitos cardíacos"
        ],
        "correcta": 2,
        "explicacion": "Los aminoglucósidos se acumulan preferentemente en las células del túbulo proximal renal y en las células ciliadas del oído interno, explicando su nefrotoxicidad y ototoxicidad características."
    },
    {
        "id": 47,
        "tema": "Antibacterianos II Síntesis de Proteína y Metabólicos",
        "pregunta": "Paciente tratado por una infección de tejidos blandos desarrolla colitis pseudomembranosa secundaria a proliferación de C. difficile. El mecanismo inicial del evento adverso se relaciona principalmente con:",
        "opciones": [
            "Inhibición de la síntesis de ácido fólico",
            "Eliminación de la microbiota intestinal protectora",
            "Inhibición de la ADN girasa bacteriana",
            "Activación de toxinas citolíticas bacterianas por el antibiótico"
        ],
        "correcta": 1,
        "explicacion": "Los antibióticos de amplio espectro alteran la microbiota intestinal normal, favoreciendo la proliferación de Clostridioides difficile y la producción de toxinas responsables de la colitis pseudomembranosa."
    },
    {
        "id": 48,
        "tema": "Antimicóticos",
        "pregunta": "Paciente con onicomicosis recibe un antimicótico tópico que inhibe una enzima localizada antes de la formación de lanosterol en la ruta biosintética del ergosterol. ¿Cuál es la enzima inhibida?",
        "opciones": [
            "β-(1,3)-glucano sintasa",
            "Escualeno epoxidasa",
            "Quitina sintasa",
            "14-α-desmetilasa"
        ],
        "correcta": 1,
        "explicacion": "La terbinafina inhibe la escualeno epoxidasa, enzima que participa en una etapa temprana de la síntesis de ergosterol. Esto provoca acumulación de escualeno y alteración de la membrana celular del hongo."
    },
    {
        "id": 49,
        "tema": "Antimicóticos",
        "pregunta": "Paciente con aspergilosis invasiva recibe un antifúngico que ejerce un efecto similar al de un detergente biológico al generar poros en la membrana fúngica. ¿Cuál de los siguientes mecanismos corresponde al fármaco administrado?",
        "opciones": [
            "Inhibición de la β-(1,3)-glucano sintasa",
            "Inhibición de la escualeno epoxidasa",
            "Unión al ergosterol con formación de canales transmembrana",
            "Inhibición de la 14-α-desmetilasa dependiente de CYP450"
        ],
        "correcta": 2,
        "explicacion": "La terbinafina inhibe la escualeno epoxidasa, enzima que participa en una etapa temprana de la síntesis de ergosterol. Esto provoca acumulación de escualeno y alteración de la membrana celular del hongo."
    },
    {
        "id": 50,
        "tema": "Antimicóticos",
        "pregunta": "Paciente tratado con fluconazol desarrolla toxicidad por un medicamento cuyo aclaramiento depende en gran medida de CYP2C9. La interacción farmacológica se explica por disminución de su metabolismo hepático. ¿Cuál de los siguientes fármacos presenta el mayor riesgo de esta interacción?",
        "opciones": [
            "Enalapril",
            "Warfarina",
            "Insulina glargina",
            "Metformina"
        ],
        "correcta": 1,
        "explicacion": "El fluconazol inhibe la enzima CYP2C9, disminuyendo el metabolismo de la warfarina y aumentando su concentración plasmática, con incremento del INR y del riesgo de hemorragia."
    },
    {
        "id": 51,
        "tema": "Antiparasitarios",
        "pregunta": "Paciente de 35 años es diagnosticado con estrongiloidiasis intestinal. Se prescribe un fármaco que también se utiliza para el tratamiento de escabiosis y pediculosis. El medicamento produce parálisis del parásito al aumentar la permeabilidad al cloro en células nerviosas y musculares del helminto. ¿De qué fármaco se trata y cuál es su mecanismo de acción?",
        "opciones": [
            "Praziquantel — Incremento de la entrada de calcio con contracción muscular sostenida.",
            "Albendazol — Inhibición de la polimerización de microtúbulos mediante unión a β-tubulina.",
            "Ivermectina — Activación de canales de cloro regulados por glutamato que producen hiperpolarización y parálisis.",
            "Pirantel — Agonismo nicotínico con despolarización persistente de la placa neuromuscular."
        ],
        "correcta": 2,
        "explicacion": "La ivermectina activa los canales de cloro regulados por glutamato presentes en los helmintos, produciendo hiperpolarización de las células nerviosas y musculares, parálisis y muerte del parásito."
    },
    {
        "id": 52,
        "tema": "Antiparasitarios",
        "pregunta": "Paciente con escabiosis recibe un ectoparasiticida tópico que prolonga la apertura de los canales de sodio neuronales del artrópodo, provocando descargas repetitivas seguidas de parálisis y muerte del parásito. ¿Cuál es el medicamento que cumple estas características?",
        "opciones": [
            "Azufre precipitado",
            "Ivermectina",
            "Permetrina",
            "Benzoato de bencilo"
        ],
        "correcta": 2,
        "explicacion": "El albendazol se une selectivamente a la β-tubulina del parásito, inhibiendo la polimerización de los microtúbulos, el transporte intracelular de vesículas y la captación de glucosa, lo que provoca la muerte del helminto."
    },
    {
        "id": 53,
        "tema": "Antivirales y Antirretrovirales",
        "pregunta": "Paciente con herpes recurrente recibe múltiples ciclos de aciclovir. A pesar del adecuado control de las reactivaciones, el virus persiste en estado latente dentro de neuronas sensitivas. ¿Cuál de las siguientes características del estado latente limita la eficacia erradicadora del fármaco?",
        "opciones": [
            "Producción de cápsides resistentes al medicamento.",
            "Ausencia de síntesis activa de ADN viral.",
            "Incremento de la eliminación renal del aciclovir.",
            "Sobreexpresión de ADN polimerasa viral."
        ],
        "correcta": 1,
        "explicacion": "La permetrina prolonga la apertura de los canales de sodio neuronales del artrópodo, produciendo despolarización persistente, parálisis y muerte del parásito."
    },
    {
        "id": 54,
        "tema": "Antivirales y Antirretrovirales",
        "pregunta": "Paciente con VIH recibe un medicamento que inhibe la transcriptasa inversa mediante unión alostérica directa a la enzima, sin requerir activación intracelular por fosforilación. ¿De qué fármaco se trata?",
        "opciones": [
            "Lamivudina",
            "Efavirenz",
            "Tenofovir",
            "Zidovudina"
        ],
        "correcta": 1,
        "explicacion": "El aciclovir inhibe la ADN polimerasa viral únicamente durante la replicación del virus. En el estado de latencia no existe síntesis activa de ADN viral, por lo que el fármaco no puede erradicar el virus."
    },
    {
        "id": 55,
        "tema": "Metaxénicas",
        "pregunta": "Paciente con leishmaniasis recibe un antimonial pentavalente. El efecto leishmanicida aparece después de la formación intracelular de un metabolito más activo que interfiere con el metabolismo energético del parásito. ¿Cuál es dicho metabolito?",
        "opciones": [
            "Antimonio monovalente (Sb⁺).",
            "Antimonio trivalente (Sb³⁺).",
            "Antimonio hexavalente (Sb⁶⁺).",
            "Antimonio tetravalente (Sb⁴⁺)."
        ],
        "correcta": 1,
        "explicacion": "Los antimoniales pentavalentes actúan como profármacos y son reducidos intracelularmente a antimonio trivalente (Sb³⁺), metabolito responsable de la actividad leishmanicida al interferir con el metabolismo energético del parásito."
    },
    {
        "id": 56,
        "tema": "Metaxénicas",
        "pregunta": "Paciente con bartonelosis aguda recibe un antimicrobiano cuya actividad depende de la estabilización del complejo ADN-enzima tras la inhibición de topoisomerasas bacterianas, produciendo roturas letales del ADN. ¿De qué grupo farmacológico se trata?",
        "opciones": [
            "Macrólidos",
            "Sulfonamidas",
            "Fluoroquinolonas",
            "Tetraciclinas"
        ],
        "correcta": 2,
        "explicacion": "Las fluoroquinolonas inhiben la ADN girasa y la topoisomerasa IV bacterianas, estabilizando el complejo ADN-enzima y produciendo roturas irreversibles del ADN que ocasionan la muerte bacteriana."
    },
    {
        "id": 57,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con asma recibe salbutamol inhalado. ¿Con cuál de los siguientes segundos mensajeros se asocia el efecto broncodilatador de este fármaco?",
        "opciones": [
            "AMPc.",
            "GMPc.",
            "IP₃.",
            "DAG."
        ],
        "correcta": 0,
        "explicacion": "Los receptores β₂ se encuentran acoplados a proteína Gs, activan la adenilato ciclasa, aumentan el AMPc y producen relajación del músculo liso bronquial."
    },
    {
        "id": 58,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con anafilaxia recibe adrenalina. ¿Con cuál de las siguientes proteínas G se asocia la vasoconstricción producida por la activación del receptor α₁?",
        "opciones": [
            "Gq.",
            "Gs.",
            "Gi.",
            "G12."
        ],
        "correcta": 0,
        "explicacion": "El receptor α₁ está acoplado a proteína Gq, la cual activa la fosfolipasa C y aumenta IP₃ y DAG, incrementando el calcio intracelular y produciendo contracción del músculo liso vascular."
    },
    {
        "id": 59,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con enfermedad de Parkinson recibe bromocriptina. ¿Con cuál de las siguientes proteínas G se asocia el receptor dopaminérgico D₂?",
        "opciones": [
            "Gi.",
            "Gq.",
            "Gs.",
            "G12."
        ],
        "correcta": 0,
        "explicacion": "Los receptores D₂ están acoplados a proteína Gi, inhiben la adenilato ciclasa y disminuyen la concentración intracelular de AMPc."
    },
    {
        "id": 60,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con diabetes mellitus recibe insulina. ¿Con cuál de los siguientes tipos de receptores se asocia el mecanismo de acción de esta hormona?",
        "opciones": [
            "Receptor tirosina quinasa.",
            "Receptor acoplado a proteína G.",
            "Canal iónico dependiente de ligando.",
            "Receptor nuclear."
        ],
        "correcta": 0,
        "explicacion": "El receptor de insulina posee actividad tirosina quinasa intrínseca y activa la vía PI3K/Akt, promoviendo la translocación de GLUT-4."
    },
    {
        "id": 61,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con hipotiroidismo recibe levotiroxina. ¿Con cuál de los siguientes tipos de receptores se asocia el mecanismo de acción de este fármaco?",
        "opciones": [
            "Receptor nuclear.",
            "Receptor tirosina quinasa.",
            "Receptor acoplado a proteína G.",
            "Canal iónico."
        ],
        "correcta": 0,
        "explicacion": "Las hormonas tiroideas atraviesan la membrana celular y se unen a receptores nucleares que regulan la transcripción génica."
    },
    {
        "id": 62,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con úlcera péptica recibe pantoprazol. ¿Con cuál de las siguientes proteínas G se asocia el receptor H₂ que normalmente estimula la secreción de ácido gástrico?",
        "opciones": [
            "Gs.",
            "Gi.",
            "Gq.",
            "Go."
        ],
        "correcta": 0,
        "explicacion": "El receptor H₂ está acoplado a proteína Gs, aumenta el AMPc y estimula la secreción de ácido por la célula parietal."
    },
    {
        "id": 63,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con glaucoma recibe pilocarpina. ¿Con cuál de las siguientes proteínas G se asocia el receptor muscarínico M₃ responsable de su efecto?",
        "opciones": [
            "Gq.",
            "Gi.",
            "Gs.",
            "G12."
        ],
        "correcta": 0,
        "explicacion": "El receptor M₃ activa proteína Gq, incrementando IP₃, DAG y calcio intracelular, lo que favorece la contracción del músculo ciliar."
    },
    {
        "id": 64,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con insuficiencia cardíaca recibe dobutamina. ¿Con cuál de los siguientes segundos mensajeros se asocia el aumento de la contractilidad cardíaca mediado por receptores β₁?",
        "opciones": [
            "AMPc.",
            "GMPc.",
            "IP₃.",
            "DAG."
        ],
        "correcta": 0,
        "explicacion": "Los receptores β₁ activan proteína Gs, aumentan el AMPc y favorecen la entrada de calcio al miocito, incrementando la fuerza de contracción."
    },
    {
        "id": 65,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con hipertensión recibe losartán. ¿Con cuál de las siguientes proteínas G se asocia el receptor AT₁ de angiotensina II sobre el que actúa este fármaco?",
        "opciones": [
            "Gq.",
            "Gi.",
            "Gs.",
            "Go."
        ],
        "correcta": 0,
        "explicacion": "El receptor AT₁ está acoplado a proteína Gq, promoviendo aumento de calcio intracelular y vasoconstricción."
    },
    {
        "id": 66,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con hiperplasia prostática benigna recibe tamsulosina. ¿Con cuál de las siguientes proteínas G se asocia el receptor α₁ bloqueado por este medicamento?",
        "opciones": [
            "Gq.",
            "Gi.",
            "Gs.",
            "G12."
        ],
        "correcta": 0,
        "explicacion": "Los receptores α₁ están acoplados a proteína Gq; su bloqueo disminuye el calcio intracelular y favorece la relajación del músculo liso prostático y del cuello vesical."
    },
    {
        "id": 67,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con diabetes mellitus recibe insulina. ¿Con cuál de los siguientes tipos de receptores se asocia su mecanismo de acción?",
        "opciones": [
            "Receptor acoplado a proteína G.",
            "Receptor tirosina quinasa.",
            "Canal iónico dependiente de ligando.",
            "Receptor intracelular nuclear."
        ],
        "correcta": 1,
        "explicacion": "El receptor de insulina posee actividad tirosina quinasa intrínseca y activa las vías PI3K/Akt y MAPK."
    },
    {
        "id": 68,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con enfermedad de Graves recibe levotiroxina. ¿Con cuál de los siguientes tipos de receptores se asocia la acción de este fármaco?",
        "opciones": [
            "Canal iónico dependiente de ligando.",
            "Receptor acoplado a proteína G.",
            "Receptor intracelular nuclear.",
            "Receptor tirosina quinasa."
        ],
        "correcta": 2,
        "explicacion": "Las hormonas tiroideas atraviesan la membrana celular y regulan la transcripción génica mediante receptores nucleares."
    },
    {
        "id": 69,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con asma recibe salbutamol inhalado. ¿Con cuál de los siguientes tipos de receptores se asocia su efecto broncodilatador?",
        "opciones": [
            "Receptor intracelular nuclear.",
            "Canal iónico dependiente de ligando.",
            "Receptor tirosina quinasa.",
            "Receptor acoplado a proteína G."
        ],
        "correcta": 3,
        "explicacion": "El receptor β₂ pertenece a la familia de receptores acoplados a proteína G y activa la proteína Gs."
    },
    {
        "id": 70,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con miastenia gravis recibe neostigmina. El neurotransmisor acumulado actúa sobre un receptor presente en la placa neuromuscular. ¿Con cuál de los siguientes tipos de receptores se asocia este efecto?",
        "opciones": [
            "Canal iónico dependiente de ligando.",
            "Receptor tirosina quinasa.",
            "Receptor intracelular nuclear.",
            "Receptor acoplado a proteína G."
        ],
        "correcta": 0,
        "explicacion": "El receptor nicotínico muscular es un canal iónico activado por acetilcolina que permite la entrada de sodio."
    },
    {
        "id": 71,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con acromegalia recibe pegvisomant. ¿Con cuál de los siguientes tipos de receptores se asocia el receptor de la hormona de crecimiento?",
        "opciones": [
            "Receptor intracelular nuclear.",
            "Receptor asociado a JAK/STAT.",
            "Receptor acoplado a proteína G.",
            "Canal iónico dependiente de ligando."
        ],
        "correcta": 1,
        "explicacion": "El receptor de hormona de crecimiento no posee actividad enzimática propia y transmite la señal mediante la vía JAK/STAT."
    },
    {
        "id": 72,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con hipertensión recibe losartán. ¿Con cuál de los siguientes tipos de receptores se asocia el receptor AT₁ bloqueado por este fármaco?",
        "opciones": [
            "Receptor tirosina quinasa.",
            "Receptor intracelular nuclear.",
            "Receptor acoplado a proteína G.",
            "Canal iónico dependiente de ligando."
        ],
        "correcta": 2,
        "explicacion": "El receptor AT₁ pertenece a la familia de receptores acoplados a proteína G, específicamente a Gq."
    },
    {
        "id": 73,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con hiperplasia prostática recibe tamsulosina. ¿Con cuál de los siguientes tipos de receptores se asocia el receptor bloqueado por este medicamento?",
        "opciones": [
            "Canal iónico dependiente de ligando.",
            "Receptor tirosina quinasa.",
            "Receptor acoplado a proteína G.",
            "Receptor intracelular nuclear."
        ],
        "correcta": 2,
        "explicacion": "Los receptores α₁ son receptores acoplados a proteína Gq que incrementan el calcio intracelular."
    },
    {
        "id": 74,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con enfermedad inflamatoria recibe prednisona. ¿Con cuál de los siguientes tipos de receptores se asocia su mecanismo de acción?",
        "opciones": [
            "Receptor tirosina quinasa.",
            "Canal iónico dependiente de ligando.",
            "Receptor acoplado a proteína G.",
            "Receptor intracelular nuclear."
        ],
        "correcta": 3,
        "explicacion": "Los glucocorticoides atraviesan la membrana celular y modifican la expresión génica mediante receptores nucleares."
    },
    {
        "id": 75,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con osteoporosis recibe denosumab. ¿Con cuál de los siguientes tipos de receptores se asocia RANK, blanco fisiológico de RANKL?",
        "opciones": [
            "Receptor acoplado a proteína G.",
            "Receptor asociado al TNF.",
            "Receptor tirosina quinasa.",
            "Canal iónico dependiente de ligando."
        ],
        "correcta": 1,
        "explicacion": "RANK pertenece a la superfamilia de receptores del factor de necrosis tumoral y participa en la diferenciación de osteoclastos."
    },
    {
        "id": 76,
        "tema": "Ciencias Básicas: Receptores y Segundos Mensajeros",
        "pregunta": "Paciente con artritis reumatoide recibe etanercept. ¿Con cuál de los siguientes tipos de receptores se asocia la molécula que normalmente reconoce al TNF-α?",
        "opciones": [
            "Canal iónico dependiente de ligando.",
            "Receptor tirosina quinasa.",
            "Receptor asociado al TNF.",
            "Receptor acoplado a proteína G."
        ],
        "correcta": 2,
        "explicacion": "El TNF-α ejerce sus efectos mediante receptores de la familia TNF, los cuales activan vías inflamatorias como NF-κB."
    },
    {
        "id": 151,
        "tema": "Farmacología: Antimicrobianos",
        "pregunta": "Niño con pústulas superficiales en el dorso de la mano. Del exudado se aisló Staphylococcus aureus sensible a meticilina, productor de penicilinasa y sin factores de riesgo para MRSA. ¿Cuál es el antibiótico oral más apropiado?",
        "opciones": [
            "Cefalexina",
            "Amoxicilina",
            "Penicilina G",
            "Aztreonam"
        ],
        "correcta": 0,
        "explicacion": "La cefalexina es una cefalosporina de primera generación activa frente a S. aureus sensible a meticilina. Es resistente a la penicilinasa estafilocócica y se utiliza por vía oral en infecciones cutáneas no complicadas."
    },
    {
        "id": 152,
        "tema": "Farmacología: Antimicrobianos",
        "pregunta": "Mujer en tratamiento estable con warfarina por fibrilación auricular consulta por vulvovaginitis por Candida. ¿Cuál tratamiento habitual incrementa el riesgo de hemorragia al potenciar el efecto de la warfarina por inhibición de su metabolismo hepático?",
        "opciones": [
            "Nistatina",
            "Clotrimazol",
            "Fluconazol",
            "Terbinafina"
        ],
        "correcta": 2,
        "explicacion": "El fluconazol inhibe enzimas del citocromo P450, especialmente CYP2C9, implicada en el metabolismo de la warfarina. Esto incrementa el INR y eleva el riesgo de hemorragia."
    },
    {
        "id": 153,
        "tema": "Farmacología: Antimicrobianos",
        "pregunta": "Varón de 35 años recibe isoniazida, rifampicina, pirazinamida y etambutol por tuberculosis sensible. A las nueve semanas presenta disminución progresiva bilateral de la agudeza visual y discromatopsia rojo-verde. ¿Cuál fármaco es el responsable más probable?",
        "opciones": [
            "Isoniazida",
            "Pirazinamida",
            "Etambutol",
            "Rifampicina"
        ],
        "correcta": 2,
        "explicacion": "El etambutol puede producir neuritis óptica, manifestada por disminución de agudeza visual y alteración de la discriminación rojo-verde. Por ello, se debe monitorizar la función visual durante el tratamiento."
    },
    {
        "id": 154,
        "tema": "Farmacología: Sistema nervioso y toxicología",
        "pregunta": "Mujer de 18 años llega somnolienta dos horas después de ingerir 30 tabletas de clonazepam. ¿Cuál es el antídoto antagonista específico para revertir una intoxicación por benzodiacepinas?",
        "opciones": [
            "Flumazenil",
            "N-acetilcisteína",
            "Naloxona",
            "Fisostigmina"
        ],
        "correcta": 0,
        "explicacion": "El flumazenil es un antagonista competitivo del sitio de unión de las benzodiacepinas en el receptor GABA-A. Revierte la sedación por benzodiacepinas; debe utilizarse con cautela por el riesgo de convulsiones en usuarios crónicos o intoxicaciones mixtas."
    },
    {
        "id": 155,
        "tema": "Farmacología: Sistema nervioso y toxicología",
        "pregunta": "Varón de 40 años con ansiedad generalizada e insomnio crónico inicia un fármaco que potencia GABA en el SNC y, a dosis terapéuticas, presenta bajo riesgo de depresión respiratoria y menor supresión del sueño REM que los barbitúricos. ¿Cuál es el fármaco indicado?",
        "opciones": [
            "Fenobarbital",
            "Etanol",
            "Zolpidem",
            "Diazepam"
        ],
        "correcta": 3,
        "explicacion": "El diazepam es una benzodiacepina que potencia la acción de GABA-A. A dosis terapéuticas causa menor depresión respiratoria y menor supresión del sueño REM que los barbitúricos; además, posee efecto ansiolítico."
    },
    {
        "id": 156,
        "tema": "Farmacología: Sistema nervioso y toxicología",
        "pregunta": "Varón de 35 años sometido a apendicectomía desarrolla rigidez muscular generalizada, taquicardia y elevación rápida de temperatura minutos después de recibir succinilcolina. ¿Cuál es la complicación y el tratamiento específico inicial?",
        "opciones": [
            "Hipertermia maligna; dantroleno",
            "Hiperpotasemia; gluconato de calcio",
            "Bradicardia; atropina",
            "Anafilaxia mediada por IgE; epinefrina"
        ],
        "correcta": 0,
        "explicacion": "La succinilcolina puede desencadenar hipertermia maligna en personas susceptibles por alteración del receptor de rianodina. El dantroleno reduce la liberación excesiva de calcio en el músculo esquelético y es el tratamiento específico."
    },
    {
        "id": 157,
        "tema": "Farmacología: Sistema nervioso y toxicología",
        "pregunta": "¿Cuál de los siguientes fármacos en sobredosis se metaboliza a NAPQI, un intermediario reactivo que agota el glutatión hepático y causa necrosis centrolobulillar?",
        "opciones": [
            "Diclofenaco",
            "Ketorolaco",
            "Paracetamol",
            "Indometacina"
        ],
        "correcta": 2,
        "explicacion": "En sobredosis, el paracetamol se metaboliza en mayor proporción por CYP2E1 a NAPQI. Cuando se agotan las reservas de glutatión, este metabolito causa necrosis hepatocelular centrolobulillar."
    },
    {
        "id": 158,
        "tema": "Farmacología: Sistema nervioso y toxicología",
        "pregunta": "Un adulto acude 10 horas después de ingerir una dosis tóxica de paracetamol. ¿Cuál es el antídoto que repone el glutatión hepático y favorece la detoxificación del metabolito tóxico?",
        "opciones": [
            "N-acetilcisteína",
            "Flumazenil",
            "Atropina",
            "Fomepizol"
        ],
        "correcta": 0,
        "explicacion": "La N-acetilcisteína repone las reservas hepáticas de glutatión y permite neutralizar el NAPQI. Es más eficaz cuando se administra tempranamente, pero puede aportar beneficio incluso en presentaciones tardías."
    },
    {
        "id": 159,
        "tema": "Farmacología: Farmacología cardiovascular, metabólica y endocrina",
        "pregunta": "Mujer de 54 años con hipercolesterolemia persistente pese a intervención dietaria. Se añade ezetimibe. ¿Cuál es su mecanismo de acción?",
        "opciones": [
            "Activa PPAR-alfa y aumenta la lipoproteinlipasa",
            "Neutraliza PCSK9 y aumenta receptores LDL",
            "Inhibe el transportador NPC1L1 en el borde en cepillo del enterocito",
            "Bloquea la ATP-citrato liasa en músculo esquelético"
        ],
        "correcta": 2,
        "explicacion": "El ezetimibe bloquea el transportador NPC1L1, reduciendo la absorción intestinal de colesterol. Como consecuencia, disminuye el colesterol circulante y aumenta la captación hepática de LDL."
    },
    {
        "id": 160,
        "tema": "Farmacología: Farmacología cardiovascular, metabólica y endocrina",
        "pregunta": "Varón de 35 años con crisis asmática recibe salbutamol inhalado, agonista β₂ de acción corta. ¿Cuál es un efecto adverso frecuente asociado a este fármaco?",
        "opciones": [
            "Hiperpotasemia",
            "Bradicardia",
            "Candidiasis orofaríngea",
            "Taquicardia"
        ],
        "correcta": 3,
        "explicacion": "El salbutamol puede causar taquicardia, temblor e hipopotasemia. Estos efectos se deben a la estimulación β-adrenérgica sistémica y, en parte, a la activación de receptores β₁ cardíacos a dosis elevadas."
    },
    {
        "id": 161,
        "tema": "Farmacología: Farmacología cardiovascular, metabólica y endocrina",
        "pregunta": "¿Cuál de las siguientes es una insulina basal de acción ultralarga?",
        "opciones": [
            "Lispro",
            "Degludec",
            "Aspart",
            "Glulisina"
        ],
        "correcta": 1,
        "explicacion": "La insulina degludec es una insulina basal de acción ultralarga, con efecto de más de 24 horas. Lispro, aspart y glulisina son análogos de acción rápida utilizados principalmente para el control posprandial."
    },
    {
        "id": 162,
        "tema": "Farmacología: Farmacología cardiovascular, metabólica y endocrina",
        "pregunta": "Varón de 45 años con hipertensión tratada con un diurético presenta dolor y edema agudo del primer dedo del pie; el ácido úrico está elevado. ¿Cuál diurético es la causa más probable?",
        "opciones": [
            "Hidroclorotiazida",
            "Amilorida",
            "Acetazolamida",
            "Espironolactona"
        ],
        "correcta": 0,
        "explicacion": "Las tiazidas disminuyen la excreción renal de ácido úrico y pueden producir hiperuricemia, favoreciendo crisis de gota. La afectación de la primera articulación metatarsofalángica es una presentación típica."
    },
    {
        "id": 163,
        "tema": "Farmacología: Farmacología cardiovascular, metabólica y endocrina",
        "pregunta": "Mujer posmenopáusica con cáncer de mama receptor hormonal positivo, tratada con tamoxifeno, presenta baja formación de endoxifeno por un polimorfismo de pérdida de función. ¿Cuál se asocia con menor eficacia del tamoxifeno?",
        "opciones": [
            "CYP2D6",
            "CYP2C19",
            "CYP2C9",
            "CYP3A4"
        ],
        "correcta": 0,
        "explicacion": "El tamoxifeno es un profármaco que requiere metabolismo por CYP2D6 para generar endoxifeno, su metabolito activo principal. Variantes de pérdida de función de CYP2D6 pueden reducir su eficacia terapéutica."
    },
    {
        "id": 164,
        "tema": "Farmacología: Farmacología cardiovascular, metabólica y endocrina",
        "pregunta": "Paciente con shock séptico e hipotensión refractaria tras reanimación inicial con cristaloides. Se requiere aumentar la resistencia vascular sistémica y mantener una PAM de al menos 65 mmHg. ¿Cuál es el vasopresor de primera elección?",
        "opciones": [
            "Epinefrina",
            "Norepinefrina",
            "Efedrina",
            "Dobutamina"
        ],
        "correcta": 1,
        "explicacion": "La norepinefrina es el vasopresor de primera elección en shock séptico. Su predominio de acción α₁ produce vasoconstricción y aumenta la resistencia vascular sistémica, elevando la presión arterial media."
    },
    {
        "id": 165,
        "tema": "Farmacología: Farmacología cardiovascular, metabólica y endocrina",
        "pregunta": "Varón de 70 años con bradicardia sinusal sintomática recibe atropina intravenosa. ¿Cuál es el conjunto de efectos sistémicos esperados por el bloqueo muscarínico?",
        "opciones": [
            "Midriasis, cicloplejia y taquicardia",
            "Lagrimeo, diarrea acuosa e hipotensión",
            "Miosis, broncoespasmo y bradicardia",
            "Hipersalivación, diaforesis y bradicardia"
        ],
        "correcta": 0,
        "explicacion": "La atropina bloquea receptores muscarínicos. Produce taquicardia, midriasis, cicloplejia, disminución de secreciones y reducción de la motilidad gastrointestinal."
    },
    {
        "id": 244,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "Gestante de 20 semanas con aumento de la presión arterial. ¿Cuál antihipertensivo sería de primera elección?",
        "opciones": [
            "Captopril",
            "Alfa-metildopa",
            "Irbesartán",
            "Atenolol"
        ],
        "correcta": 1,
        "explicacion": "La alfa-metildopa es un antihipertensivo seguro durante el embarazo y posee amplia experiencia clínica. Los inhibidores de la enzima convertidora de angiotensina y los antagonistas del receptor de angiotensina II están contraindicados por su riesgo fetal."
    },
    {
        "id": 245,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "Varón de 30 años ingiere organofosforados. ¿Cuál es el mecanismo por el que esta sustancia altera los impulsos nerviosos en la placa mioneural?",
        "opciones": [
            "Antagonismo de la acetilcolina",
            "Estimulación de la liberación de acetilcolina",
            "Inhibición de la degradación de acetilcolina",
            "Competencia por los receptores nicotínicos"
        ],
        "correcta": 2,
        "explicacion": "Los organofosforados inhiben de manera irreversible la acetilcolinesterasa. Esto produce acumulación de acetilcolina en receptores muscarínicos, nicotínicos y del sistema nervioso central."
    },
    {
        "id": 246,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "Mujer de 79 años con fibrilación auricular recibe warfarina. Este medicamento produce inhibición de:",
        "opciones": [
            "Vía intrínseca de la coagulación",
            "Factores dependientes de vitamina K",
            "Factor tisular de la coagulación",
            "Agregación plaquetaria"
        ],
        "correcta": 1,
        "explicacion": "La warfarina inhibe la vitamina K epóxido reductasa hepática. Esto disminuye la activación de los factores II, VII, IX y X, además de las proteínas C y S."
    },
    {
        "id": 247,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "Niño de 7 años ingiere gotas para el glaucoma y presenta sudoración excesiva, sialorrea, rinorrea, dificultad respiratoria, hipotensión y diarrea. ¿Qué fármaco puede revertir estos efectos?",
        "opciones": [
            "Neostigmina",
            "Pilocarpina",
            "Carbacol",
            "Atropina"
        ],
        "correcta": 3,
        "explicacion": "El cuadro corresponde a toxicidad colinérgica. La atropina bloquea receptores muscarínicos y revierte manifestaciones como broncorrea, broncoconstricción, bradicardia, hipotensión, diarrea y sialorrea."
    },
    {
        "id": 248,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "Varón de 30 años desarrolla choque anafiláctico con hipotensión severa tras una inyección intramuscular de penicilina. La adrenalina revierte la hipotensión principalmente por su acción en receptores:",
        "opciones": [
            "Alfa 1",
            "Alfa 2",
            "Beta 2",
            "Beta 3"
        ],
        "correcta": 0,
        "explicacion": "La activación de receptores alfa 1 produce vasoconstricción periférica, aumenta la resistencia vascular sistémica y eleva la presión arterial. La adrenalina también activa receptores beta 2, útiles para broncodilatación."
    },
    {
        "id": 249,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "Preescolar de 3 años presenta compromiso de conciencia, sialorrea, vómitos, bradicardia, fasciculaciones musculares y miosis. ¿Qué fármaco se debe administrar?",
        "opciones": [
            "Propranolol",
            "Adrenalina",
            "Dexametasona",
            "Atropina"
        ],
        "correcta": 3,
        "explicacion": "El cuadro es compatible con intoxicación por organofosforados, que produce exceso de acetilcolina. La atropina bloquea los efectos muscarínicos potencialmente mortales, como broncorrea, broncoespasmo y bradicardia."
    },
    {
        "id": 250,
        "tema": "Antimicrobianos",
        "pregunta": "Mujer de 29 años con VIH se confirma embarazada. ¿Qué medicamento debe indicarse para reducir el riesgo de transmisión de VIH al feto?",
        "opciones": [
            "Zidovudina",
            "Saquinavir",
            "Ritonavir",
            "Interferón alfa"
        ],
        "correcta": 0,
        "explicacion": "La zidovudina es un inhibidor nucleósido de la transcriptasa reversa y ha sido empleada para disminuir la transmisión vertical del VIH. Actualmente se usa como parte de un esquema antirretroviral combinado según el contexto clínico."
    },
    {
        "id": 251,
        "tema": "Antimicrobianos",
        "pregunta": "Varón de 70 años presenta neumonía adquirida en la comunidad por Haemophilus influenzae. ¿Cuál sería el antibiótico de elección?",
        "opciones": [
            "Cefalotina con inhibidor enzimático",
            "Penicilina benzatínica con inhibidor de betalactamasa",
            "Ácido clavulánico con penicilina V",
            "Amoxicilina con ácido clavulánico"
        ],
        "correcta": 3,
        "explicacion": "H. influenzae puede producir betalactamasas. La combinación amoxicilina/ácido clavulánico mantiene actividad frente a cepas productoras de estas enzimas y es útil en neumonía adquirida en la comunidad."
    },
    {
        "id": 252,
        "tema": "Antimicrobianos",
        "pregunta": "La eficacia de la amikacina en el tratamiento de un absceso hepático es baja debido a que existen:",
        "opciones": [
            "Hipoosmolaridad",
            "Condiciones anaerobias",
            "Déficit de perfusión",
            "Acumulación de calcio"
        ],
        "correcta": 1,
        "explicacion": "Los aminoglucósidos, como la amikacina, requieren transporte dependiente de oxígeno para ingresar a las bacterias. Por ello, pierden eficacia en ambientes anaerobios, como el interior de un absceso."
    },
    {
        "id": 253,
        "tema": "Antimicrobianos",
        "pregunta": "Varón de 40 años en terapia antituberculosa presenta problemas de visión para la discriminación de colores. ¿Cuál fármaco del esquema produce esta reacción adversa?",
        "opciones": [
            "Etambutol",
            "Pirazinamida",
            "Isoniazida",
            "Rifampicina"
        ],
        "correcta": 0,
        "explicacion": "El etambutol puede causar neuritis óptica, con disminución de agudeza visual y alteración de la discriminación rojo-verde. Es necesario vigilar la función visual durante el tratamiento."
    },
    {
        "id": 254,
        "tema": "Farmacología del sistema nervioso y toxicología",
        "pregunta": "Varón de 55 años bajo anestesia general comienza a agitarse, respira irregularmente, ríe, grita, actúa de forma incoherente y presenta micción involuntaria. ¿En qué etapa de anestesia general se encuentra?",
        "opciones": [
            "De delirio",
            "De mantenimiento",
            "De recuperación",
            "De inducción"
        ],
        "correcta": 0,
        "explicacion": "La fase de excitación o delirio corresponde al estadio II de la anestesia general. Se caracteriza por conducta desinhibida, respiración irregular, movimientos involuntarios y riesgo de vómito o laringoespasmo."
    },
    {
        "id": 255,
        "tema": "Farmacología del sistema nervioso y toxicología",
        "pregunta": "Varón de 20 años ingiere 6 g de paracetamol al día para aliviar dolor articular agudo. ¿Qué fármaco debería utilizarse para tratar esta sobredosis?",
        "opciones": [
            "Atropina",
            "Diazepam",
            "N-acetilcisteína",
            "Manitol"
        ],
        "correcta": 2,
        "explicacion": "La N-acetilcisteína repone las reservas de glutatión hepático y facilita la neutralización del metabolito tóxico NAPQI. Es el antídoto específico para sobredosis de paracetamol."
    },
    {
        "id": 256,
        "tema": "Farmacología del sistema nervioso y toxicología",
        "pregunta": "Adolescente de 15 años consume drogas con sus compañeros y posteriormente presenta una crisis de pánico. ¿Cuál es la droga más probable responsable de este cuadro?",
        "opciones": [
            "LSD",
            "Pasta básica de cocaína",
            "Éxtasis",
            "Cannabis sativa"
        ],
        "correcta": 3,
        "explicacion": "El cannabis puede provocar ansiedad intensa, ataques de pánico, paranoia y alteraciones perceptivas, en especial con dosis altas o en personas susceptibles."
    },
    {
        "id": 257,
        "tema": "Farmacología del sistema nervioso y toxicología",
        "pregunta": "Niño de 12 años presenta microcefalia, retraso mental, ptosis palpebral y puente nasal hundido y ancho. Su madre recibió tratamiento anticonvulsivante durante el embarazo. ¿Cuál fármaco se relaciona con este cuadro?",
        "opciones": [
            "Gabapentina",
            "Clobazam",
            "Topiramato",
            "Fenitoína"
        ],
        "correcta": 3,
        "explicacion": "La exposición fetal a fenitoína se asocia con síndrome fetal por hidantoína, que puede incluir retraso del crecimiento, alteraciones craneofaciales, hipoplasia ungueal y discapacidad del neurodesarrollo."
    },
    {
        "id": 258,
        "tema": "Farmacología endocrina, renal y respiratoria",
        "pregunta": "Mujer de 55 años con diabetes mellitus tipo 2 recibe un inhibidor de SGLT2. ¿Qué efecto adverso deriva de su mecanismo de acción?",
        "opciones": [
            "Acidosis láctica",
            "Aumento de eventos cardiovasculares",
            "Mayor riesgo de hipoglicemia",
            "Aumento de infecciones urinarias"
        ],
        "correcta": 3,
        "explicacion": "Los inhibidores de SGLT2 aumentan la excreción urinaria de glucosa. La glucosuria favorece infecciones urinarias y genitales micóticas."
    },
    {
        "id": 259,
        "tema": "Farmacología endocrina, renal y respiratoria",
        "pregunta": "Varón de 24 años asciende al nevado Huascarán y presenta mal de montaña agudo. ¿Qué medicamento puede prevenir este problema?",
        "opciones": [
            "Furosemida",
            "Acetazolamida",
            "Amilorida",
            "Manitol"
        ],
        "correcta": 1,
        "explicacion": "La acetazolamida inhibe la anhidrasa carbónica, produce acidosis metabólica leve y estimula la ventilación. Esto facilita la aclimatación y se utiliza en prevención del mal agudo de montaña."
    },
    {
        "id": 260,
        "tema": "Farmacología endocrina, renal y respiratoria",
        "pregunta": "Niño asmático tratado con corticoides durante cuatro años presenta talla baja. ¿En cuál tipo de receptores actúan los corticoides?",
        "opciones": [
            "Canales iónicos",
            "Asociados a proteína G",
            "Nucleares",
            "Enzimáticos"
        ],
        "correcta": 2,
        "explicacion": "Los glucocorticoides atraviesan la membrana celular y se unen a receptores intracelulares. El complejo fármaco-receptor regula la transcripción génica en el núcleo, explicando sus efectos antiinflamatorios y metabólicos."
    },
    {
        "id": 298,
        "tema": "Farmacología endocrina, renal y respiratoria",
        "pregunta": "La furosemida es un diurético cuyo mecanismo de acción consiste en inhibir:",
        "opciones": [
            "El receptor V2 de vasopresina",
            "La anhidrasa carbónica",
            "El canal epitelial de sodio",
            "El cotransportador Na⁺/K⁺/2Cl⁻"
        ],
        "correcta": 3,
        "explicacion": "La furosemida es un diurético de asa que bloquea el cotransportador Na⁺/K⁺/2Cl⁻ en la rama ascendente gruesa del asa de Henle, produciendo una diuresis intensa."
    },
    {
        "id": 299,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "En la clasificación de antihipertensivos según su mecanismo de acción, el atenolol corresponde a:",
        "opciones": [
            "Antagonista del receptor alfa",
            "Antagonista del receptor beta",
            "Agente adrenérgico de acción central",
            "Antagonista mixto de receptores alfa y beta"
        ],
        "correcta": 1,
        "explicacion": "El atenolol es un bloqueador beta, con predominio de acción sobre receptores β₁ cardíacos. Reduce la frecuencia cardíaca, la contractilidad y la liberación de renina."
    },
    {
        "id": 300,
        "tema": "Farmacología cardiovascular y del sistema nervioso autónomo",
        "pregunta": "El aumento de la presión arterial secundario a la administración rápida de dosis altas de adrenalina endovenosa se produce principalmente por:",
        "opciones": [
            "Efecto inotrópico negativo directo",
            "Vasodilatación de las arterias coronarias",
            "Predominio del efecto alfa-1 adrenérgico",
            "Vasodilatación venosa"
        ],
        "correcta": 2,
        "explicacion": "A dosis altas, la adrenalina activa predominantemente receptores α₁, generando vasoconstricción periférica. Esto aumenta la resistencia vascular sistémica y eleva la presión arterial."
    },
    {
        "id": 321,
        "tema": "Antidiabéticos orales",
        "pregunta": "¿Cuál de los siguientes fármacos incrementa directamente la secreción de insulina por las células beta del páncreas?",
        "opciones": [
            "Linagliptina",
            "Acarbosa",
            "Glimepirida",
            "Empagliflozina"
        ],
        "correcta": 2,
        "explicacion": "La glimepirida es una sulfonilurea que bloquea los canales de potasio sensibles a ATP de las células beta pancreáticas. Esto causa despolarización, entrada de calcio y liberación de insulina."
    },
    {
        "id": 389,
        "tema": "Cardiovascular y hematología",
        "pregunta": "¿Cuál es el mecanismo de acción del apixabán?",
        "opciones": [
            "Activa la antitrombina III",
            "Inhibe el factor Xa",
            "Inhibe la vitamina K",
            "Inhibe el factor IXa"
        ],
        "correcta": 1,
        "explicacion": "El apixabán es un anticoagulante oral directo que inhibe selectivamente el factor Xa, reduciendo la generación de trombina."
    },
    {
        "id": 390,
        "tema": "Cardiovascular y hematología",
        "pregunta": "¿Qué prueba se utiliza para monitorizar el efecto anticoagulante de la warfarina?",
        "opciones": [
            "Tiempo de tromboplastina parcial activada",
            "Recuento de plaquetas",
            "INR",
            "Tiempo de sangría"
        ],
        "correcta": 2,
        "explicacion": "La warfarina prolonga el tiempo de protrombina; el INR estandariza esta medición y permite ajustar la dosis del medicamento."
    },
    {
        "id": 391,
        "tema": "Sistema nervioso autónomo",
        "pregunta": "¿Qué fármaco antagoniza los efectos muscarínicos de la intoxicación por organofosforados?",
        "opciones": [
            "Atropina",
            "Pilocarpina",
            "Propranolol",
            "Neostigmina"
        ],
        "correcta": 0,
        "explicacion": "Los organofosforados inhiben la acetilcolinesterasa y aumentan la acetilcolina. La atropina bloquea los receptores muscarínicos y reduce broncorrea, broncoespasmo y bradicardia."
    },
    {
        "id": 392,
        "tema": "Sistema nervioso central y toxicología",
        "pregunta": "¿Qué fármaco antagoniza de forma específica el sitio de unión de las benzodiacepinas en el receptor GABA-A?",
        "opciones": [
            "Naloxona",
            "Atropina",
            "Pralidoxima",
            "Flumazenilo"
        ],
        "correcta": 3,
        "explicacion": "El flumazenilo es un antagonista competitivo de las benzodiacepinas en el receptor GABA-A. Se utiliza para revertir sus efectos sedantes en situaciones seleccionadas."
    },
    {
        "id": 393,
        "tema": "Sistema nervioso central y toxicología",
        "pregunta": "¿Qué fármaco es un antagonista competitivo de los receptores opioides y puede revertir depresión respiratoria por sobredosis de opioides?",
        "opciones": [
            "Naloxona",
            "Morfina",
            "Tramadol",
            "Codeína"
        ],
        "correcta": 0,
        "explicacion": "La naloxona bloquea principalmente los receptores μ-opioides. Revierte rápidamente la depresión respiratoria, la miosis y la disminución del estado de conciencia inducidas por opioides."
    },
    {
        "id": 394,
        "tema": "Sistema nervioso autónomo",
        "pregunta": "¿Cuál es el mecanismo responsable de la hipotensión ortostática producida por fármacos usados en hiperplasia prostática benigna, como la tamsulosina?",
        "opciones": [
            "Bloqueo de receptores beta-1",
            "Bloqueo de receptores alfa-1",
            "Activación de receptores alfa-2",
            "Activación de receptores beta-2"
        ],
        "correcta": 1,
        "explicacion": "El bloqueo alfa-1 produce vasodilatación y disminución de la resistencia vascular periférica. Por ello puede causar hipotensión ortostática."
    },
    {
        "id": 395,
        "tema": "Cardiovascular y hematología",
        "pregunta": "¿Qué efecto adverso importante se asocia con el uso prolongado de amiodarona?",
        "opciones": [
            "Fibrosis pulmonar",
            "Hipoglicemia intensa",
            "Insuficiencia suprarrenal",
            "Rotura del tendón de Aquiles"
        ],
        "correcta": 0,
        "explicacion": "La amiodarona puede causar toxicidad pulmonar, alteraciones tiroideas, depósitos corneales y hepatotoxicidad. La fibrosis pulmonar es una de sus complicaciones más importantes."
    },
    {
        "id": 396,
        "tema": "Cardiovascular y hematología",
        "pregunta": "¿Qué grupo farmacológico puede disminuir la presión intraocular al reducir la producción de humor acuoso?",
        "opciones": [
            "Corticoides",
            "Antihistamínicos",
            "Betabloqueantes",
            "Antibióticos"
        ],
        "correcta": 2,
        "explicacion": "Los betabloqueantes tópicos, como el timolol, reducen la producción de humor acuoso por el cuerpo ciliar y ayudan a disminuir la presión intraocular."
    },
    {
        "id": 397,
        "tema": "Antimicrobianos",
        "pregunta": "¿Qué efecto adverso se asocia con mayor frecuencia al uso de fluoroquinolonas?",
        "opciones": [
            "Tendinopatía y rotura tendinosa",
            "Fibrosis pulmonar",
            "Hipoglicemia neonatal",
            "Hiperplasia gingival"
        ],
        "correcta": 0,
        "explicacion": "Las fluoroquinolonas pueden producir tendinopatía, especialmente del tendón de Aquiles. El riesgo aumenta en adultos mayores y en quienes usan corticoides."
    },
    {
        "id": 398,
        "tema": "Antimicrobianos",
        "pregunta": "¿Qué antibiótico se asocia con mayor riesgo de convulsiones, especialmente en pacientes con insuficiencia renal?",
        "opciones": [
            "Amikacina",
            "Imipenem",
            "Ceftriaxona",
            "Ampicilina"
        ],
        "correcta": 1,
        "explicacion": "El imipenem puede disminuir el umbral convulsivo, sobre todo cuando se acumula por insuficiencia renal o se usan dosis elevadas."
    },
    {
        "id": 399,
        "tema": "Endocrino, renal y respiratorio",
        "pregunta": "¿Cuál es el principal riesgo del uso sistémico de retinoides durante el embarazo?",
        "opciones": [
            "Teratogenicidad",
            "Ototoxicidad",
            "Nefrotoxicidad",
            "Neutropenia grave"
        ],
        "correcta": 0,
        "explicacion": "Los retinoides sistémicos, como la isotretinoína, son altamente teratogénicos y pueden producir malformaciones craneofaciales, cardíacas y del sistema nervioso central."
    },
    {
        "id": 400,
        "tema": "Endocrino, renal y respiratorio",
        "pregunta": "¿Qué alteración metabólica grave puede favorecerse con metformina en un paciente con insuficiencia renal avanzada?",
        "opciones": [
            "Acidosis láctica",
            "Alcalosis respiratoria",
            "Hipernatremia",
            "Hipercalcemia"
        ],
        "correcta": 0,
        "explicacion": "La acumulación de metformina en insuficiencia renal incrementa el riesgo de acidosis láctica. Es una reacción infrecuente, pero potencialmente grave."
    },
    {
        "id": 401,
        "tema": "Fundamentos farmacológicos",
        "pregunta": "¿Por qué la carbamazepina puede reducir la eficacia de anticonceptivos hormonales?",
        "opciones": [
            "Inhibe la absorción intestinal de estrógenos",
            "Induce enzimas hepáticas que metabolizan hormonas esteroideas",
            "Bloquea receptores de progesterona",
            "Aumenta directamente la secreción de FSH"
        ],
        "correcta": 1,
        "explicacion": "La carbamazepina induce enzimas del sistema citocromo P450. Esto acelera el metabolismo de estrógenos y progestágenos, disminuyendo la eficacia anticonceptiva."
    },
    {
        "id": 402,
        "tema": "Sistema nervioso autónomo",
        "pregunta": "¿Qué mecanismo explica la retención urinaria producida por ipratropio?",
        "opciones": [
            "Bloqueo de receptores muscarínicos",
            "Activación de receptores nicotínicos",
            "Bloqueo de receptores beta-2",
            "Activación de receptores alfa-1"
        ],
        "correcta": 0,
        "explicacion": "El ipratropio es un antagonista muscarínico. El bloqueo parasimpático reduce la contracción del músculo detrusor y puede favorecer retención urinaria."
    },
        {
            "id": 403,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente con hipertensión recibe losartán y presenta disminución de la vasoconstricción mediada por angiotensina II. ¿Qué aspecto corresponde al estudio de la farmacodinamia?",
            "opciones": [
                "Absorción intestinal del fármaco",
                "Bloqueo del receptor AT₁",
                "Metabolismo hepático del fármaco",
                "Eliminación renal del fármaco"
            ],
            "correcta": 1,
            "explicacion": "La farmacodinamia estudia los efectos de los fármacos sobre el organismo y los mecanismos responsables de dichos efectos, como la interacción del losartán con el receptor AT₁."
        },
        {
            "id": 404,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente con taquicardia recibe metoprolol, que disminuye la frecuencia cardíaca mediante bloqueo β₁. ¿Qué elemento constituye la diana farmacológica?",
            "opciones": [
                "Proteína Gs intracelular",
                "Adenilato ciclasa celular",
                "Receptor β₁ adrenérgico",
                "AMPc intracelular"
            ],
            "correcta": 2,
            "explicacion": "La diana farmacológica es la estructura molecular con la que interactúa directamente el fármaco. En este caso, metoprolol se une al receptor β₁."
        },
        {
            "id": 405,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente recibe atropina. Después de disminuir su concentración plasmática, la acetilcolina vuelve a ocupar progresivamente los receptores muscarínicos. ¿Qué característica explica este fenómeno?",
            "opciones": [
                "Unión covalente",
                "Unión permanente",
                "Unión irreversible",
                "Unión reversible"
            ],
            "correcta": 3,
            "explicacion": "La atropina establece una interacción reversible con los receptores muscarínicos. Al disminuir su concentración, puede disociarse y permitir nuevamente la unión de acetilcolina."
        },
        {
            "id": 406,
            "tema": "Farmacodin?mica",
            "pregunta": "Dos antagonistas actúan sobre el mismo receptor. El fármaco X alcanza una elevada ocupación receptorial a una concentración menor que el fármaco Y. ¿Qué propiedad presenta X en mayor grado?",
            "opciones": [
                "Afinidad",
                "Eficacia",
                "Actividad",
                "Selectividad"
            ],
            "correcta": 0,
            "explicacion": "La afinidad representa la tendencia de un ligando a unirse a su receptor. Una elevada ocupación a concentraciones menores sugiere mayor afinidad."
        },
        {
            "id": 407,
            "tema": "Farmacodin?mica",
            "pregunta": "Dos agonistas β₂ son administrados en condiciones experimentales. Ambos ocupan sus receptores, pero el fármaco X produce una broncodilatación máxima superior. ¿Qué propiedad es mayor en X?",
            "opciones": [
                "Afinidad",
                "Eficacia",
                "Selectividad",
                "Reversibilidad"
            ],
            "correcta": 1,
            "explicacion": "La eficacia corresponde a la capacidad del fármaco para generar una respuesta una vez unido al receptor y se relaciona con el Emax alcanzado."
        },
        {
            "id": 408,
            "tema": "Farmacodin?mica",
            "pregunta": "Dos opioides alcanzan el mismo efecto analgésico máximo. El fármaco X logra el 50 % del efecto máximo con una dosis menor que el fármaco Y. ¿Qué propiedad presenta X?",
            "opciones": [
                "Mayor eficacia",
                "Menor afinidad",
                "Mayor potencia",
                "Menor actividad"
            ],
            "correcta": 2,
            "explicacion": "Si dos fármacos alcanzan el mismo Emax, pero uno necesita menor dosis o concentración para producir un determinado efecto, este posee mayor potencia."
        },
        {
            "id": 409,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente recibe dosis progresivamente mayores de un agonista hasta que nuevos incrementos de dosis ya no aumentan la respuesta clínica. ¿Qué parámetro farmacodinámico se ha alcanzado?",
            "opciones": [
                "Dosis mínima",
                "Afinidad máxima",
                "Potencia máxima",
                "Efecto máximo"
            ],
            "correcta": 3,
            "explicacion": "El Emax representa la mayor respuesta que el fármaco puede producir en un sistema determinado. Una vez alcanzado, aumentar la dosis no incrementa el efecto máximo."
        },
        {
            "id": 410,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente con bradicardia recibe un fármaco que se une a receptores β₁ y estabiliza su estado activo, aumentando la frecuencia cardíaca. ¿Cómo se clasifica esta interacción?",
            "opciones": [
                "Agonismo",
                "Antagonismo",
                "Inhibición",
                "Neutralización"
            ],
            "correcta": 0,
            "explicacion": "Un agonista posee afinidad por el receptor y eficacia para activarlo, produciendo una respuesta biológica."
        },
        {
            "id": 411,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente recibe naloxona por intoxicación con morfina. La naloxona ocupa receptores μ sin activarlos e impide la acción del opioide. ¿Cómo se clasifica farmacodinámicamente?",
            "opciones": [
                "Agonista",
                "Antagonista",
                "Activador",
                "Potenciador"
            ],
            "correcta": 1,
            "explicacion": "Un antagonista posee afinidad por el receptor, pero carece de eficacia agonista; al ocuparlo impide la activación producida por un agonista."
        },
        {
            "id": 412,
            "tema": "Farmacodin?mica",
            "pregunta": "Un agonista experimental produce la máxima respuesta posible del receptor incluso cuando continúa aumentando su concentración. ¿Cómo se clasifica el fármaco?",
            "opciones": [
                "Agonista parcial",
                "Antagonista neutro",
                "Agonista completo",
                "Agonista inverso"
            ],
            "correcta": 2,
            "explicacion": "El agonista completo posee suficiente eficacia para generar el Emax del sistema receptor."
        },
        {
            "id": 413,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente con dependencia de nicotina recibe vareniclina. El fármaco activa receptores nicotínicos α4β2, pero genera una respuesta menor que la nicotina. ¿Qué propiedad explica este comportamiento?",
            "opciones": [
                "Menor afinidad",
                "Mayor potencia",
                "Mayor selectividad",
                "Menor eficacia"
            ],
            "correcta": 3,
            "explicacion": "Un agonista parcial activa el receptor, pero posee menor eficacia que un agonista completo. Por ello genera una respuesta submáxima incluso cuando ocupa los receptores."
        },
        {
            "id": 414,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente recibe naloxona para revertir los efectos de un agonista opioide. Ambos compiten reversiblemente por el receptor μ. ¿Qué modificación se espera en la respuesta al agonista?",
            "opciones": [
                "Mayor dosis para igual efecto",
                "Menor Emax con igual dosis",
                "Mayor Emax con igual dosis",
                "Menor dosis para igual efecto"
            ],
            "correcta": 0,
            "explicacion": "Un antagonista competitivo desplaza la curva dosis-respuesta del agonista hacia la derecha. Se necesita una mayor concentración del agonista para obtener el mismo efecto, pero el Emax puede conservarse."
        },
        {
            "id": 415,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente recibe un antagonista que establece una unión irreversible con una proporción importante de receptores. Incrementar posteriormente la concentración del agonista no recupera la respuesta máxima. ¿Qué cambio se espera?",
            "opciones": [
                "Aumento del Emax",
                "Disminución del Emax",
                "Aumento de potencia",
                "Aumento de afinidad"
            ],
            "correcta": 1,
            "explicacion": "La inactivación irreversible de suficientes receptores reduce la capacidad del sistema para alcanzar su respuesta máxima una vez superada su reserva receptorial."
        },
        {
            "id": 416,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente con asma utiliza salbutamol inhalado. Tras administrar dosis excesivas presenta taquicardia además de broncodilatación. ¿Qué propiedad farmacodinámica explica mejor este hallazgo?",
            "opciones": [
                "Aumento de eficacia",
                "Aumento de afinidad",
                "Pérdida de selectividad",
                "Pérdida de potencia"
            ],
            "correcta": 2,
            "explicacion": "La selectividad depende de la concentración. A dosis elevadas, un fármaco relativamente selectivo puede interactuar con otros subtipos receptoriales y generar efectos adicionales."
        },
        {
            "id": 417,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente con congestión nasal utiliza repetidamente un agonista adrenérgico tópico y observa una reducción progresiva de la respuesta con la misma dosis. ¿Qué fenómeno explica mejor este hallazgo?",
            "opciones": [
                "Sensibilización receptorial",
                "Aumento de la eficacia",
                "Aumento de la afinidad",
                "Desensibilización receptorial"
            ],
            "correcta": 3,
            "explicacion": "La estimulación repetida de determinados receptores puede disminuir su capacidad de señalización mediante mecanismos como fosforilación, desacoplamiento, internalización o reducción de receptores disponibles."
        },
        {
            "id": 418,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente recibe salbutamol y posteriormente presenta broncodilatación. ¿Qué aspecto del tratamiento corresponde al estudio de la farmacodinamia?",
            "opciones": [
                "Efecto del fármaco sobre el organismo",
                "Absorción del fármaco por el organismo",
                "Distribución del fármaco hacia los tejidos",
                "Eliminación del fármaco por el organismo"
            ],
            "correcta": 0,
            "explicacion": "La farmacodinamia estudia lo que el fármaco hace sobre el organismo, incluyendo su mecanismo de acción, interacción con receptores y efectos farmacológicos."
        },
        {
            "id": 419,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente recibe propranolol y disminuye su frecuencia cardíaca debido al bloqueo de receptores β-adrenérgicos. ¿Qué función cumple el receptor en esta interacción?",
            "opciones": [
                "Transportador plasmático",
                "Diana farmacológica",
                "Enzima metabolizadora",
                "Sistema de eliminación"
            ],
            "correcta": 1,
            "explicacion": "Una diana farmacológica es una estructura molecular con la que interactúa un fármaco para modificar una función biológica. Los receptores constituyen uno de los principales tipos de dianas."
        },
        {
            "id": 420,
            "tema": "Farmacodin?mica",
            "pregunta": "Un agonista se une a un receptor mediante interacciones débiles y posteriormente se separa de este. ¿Qué característica presenta esta interacción?",
            "opciones": [
                "Unión irreversible",
                "Unión covalente",
                "Unión reversible",
                "Unión permanente"
            ],
            "correcta": 2,
            "explicacion": "La mayoría de las interacciones fármaco-receptor son reversibles y dependen de fuerzas no covalentes, permitiendo la asociación y disociación del fármaco."
        },
        {
            "id": 421,
            "tema": "Farmacodin?mica",
            "pregunta": "Dos fármacos reconocen el mismo receptor. El fármaco X presenta mayor tendencia a permanecer unido al receptor que el fármaco Y. ¿Qué propiedad es mayor en X?",
            "opciones": [
                "Eficacia",
                "Actividad",
                "Selectividad",
                "Afinidad"
            ],
            "correcta": 3,
            "explicacion": "La afinidad representa la capacidad o tendencia de un fármaco para unirse a su receptor. Tener alta afinidad no implica necesariamente producir una respuesta intensa."
        },
        {
            "id": 422,
            "tema": "Farmacodin?mica",
            "pregunta": "Dos agonistas actúan sobre el mismo receptor. El fármaco X puede alcanzar un efecto máximo mayor que el fármaco Y. ¿Qué propiedad farmacodinámica diferencia principalmente a X?",
            "opciones": [
                "Eficacia",
                "Afinidad",
                "Selectividad",
                "Reversibilidad"
            ],
            "correcta": 0,
            "explicacion": "La eficacia describe la capacidad del fármaco, una vez unido al receptor, para producir una respuesta. En una curva dosis-respuesta se relaciona con el efecto máximo o Emax."
        },
        {
            "id": 423,
            "tema": "Farmacodin?mica",
            "pregunta": "Dos analgésicos producen el mismo efecto máximo, pero el fármaco X requiere una dosis menor para alcanzar un efecto equivalente. ¿Qué característica presenta X?",
            "opciones": [
                "Mayor eficacia",
                "Mayor potencia",
                "Menor afinidad",
                "Menor actividad"
            ],
            "correcta": 1,
            "explicacion": "Un fármaco es más potente cuando requiere una dosis o concentración menor para conseguir un determinado efecto. Potencia y eficacia son conceptos diferentes."
        },
        {
            "id": 424,
            "tema": "Farmacodin?mica",
            "pregunta": "Se incrementa progresivamente la dosis de un agonista hasta alcanzar un punto en el que dosis adicionales ya no aumentan la respuesta. ¿Qué parámetro se ha alcanzado?",
            "opciones": [
                "Concentración mínima",
                "Afinidad máxima",
                "Efecto máximo",
                "Selectividad máxima"
            ],
            "correcta": 2,
            "explicacion": "El Emax representa la máxima respuesta que puede producir un fármaco en un determinado sistema biológico y es un indicador de su eficacia."
        },
        {
            "id": 425,
            "tema": "Farmacodin?mica",
            "pregunta": "Un fármaco se une a un receptor β₂ y estabiliza su conformación activa, produciendo broncodilatación. ¿Cómo se clasifica farmacodinámicamente?",
            "opciones": [
                "Antagonista",
                "Inhibidor",
                "Modulador",
                "Agonista"
            ],
            "correcta": 3,
            "explicacion": "Un agonista posee afinidad por el receptor y capacidad para activarlo, generando una respuesta biológica."
        },
        {
            "id": 426,
            "tema": "Farmacodin?mica",
            "pregunta": "Un fármaco presenta afinidad por un receptor, pero después de unirse no lo activa e impide la acción de su agonista. ¿Cómo se clasifica?",
            "opciones": [
                "Antagonista",
                "Agonista",
                "Potenciador",
                "Activador"
            ],
            "correcta": 0,
            "explicacion": "El antagonista posee afinidad por el receptor, pero carece de eficacia agonista. Su ocupación impide o disminuye la respuesta producida por un agonista."
        },
        {
            "id": 427,
            "tema": "Farmacodin?mica",
            "pregunta": "Un fármaco se une a un receptor y puede generar la máxima respuesta posible del sistema. ¿Con cuál de las siguientes propiedades se asocia?",
            "opciones": [
                "Agonismo parcial",
                "Agonismo completo",
                "Antagonismo competitivo",
                "Antagonismo irreversible"
            ],
            "correcta": 1,
            "explicacion": "Un agonista completo posee suficiente eficacia para alcanzar el Emax del sistema receptor en el que actúa."
        },
        {
            "id": 428,
            "tema": "Farmacodin?mica",
            "pregunta": "Buprenorfina ocupa receptores μ-opioides, pero produce un efecto máximo menor que un agonista completo sobre el mismo receptor. ¿Qué propiedad explica este comportamiento?",
            "opciones": [
                "Menor afinidad",
                "Mayor potencia",
                "Menor eficacia",
                "Mayor selectividad"
            ],
            "correcta": 2,
            "explicacion": "Un agonista parcial posee afinidad por el receptor, pero menor eficacia intrínseca. Por ello, incluso con elevada ocupación receptorial, produce una respuesta submáxima."
        },
        {
            "id": 429,
            "tema": "Farmacodin?mica",
            "pregunta": "Un antagonista reversible ocupa el mismo sitio receptor que un agonista. Al aumentar suficientemente la concentración del agonista se recupera el efecto máximo. ¿Qué interacción ocurre?",
            "opciones": [
                "Antagonismo irreversible",
                "Agonismo inverso",
                "Agonismo parcial",
                "Antagonismo competitivo"
            ],
            "correcta": 3,
            "explicacion": "En el antagonismo competitivo ambos fármacos compiten por el mismo sitio. Una concentración suficientemente elevada del agonista puede desplazar al antagonista y recuperar el Emax."
        },
        {
            "id": 430,
            "tema": "Farmacodin?mica",
            "pregunta": "Un antagonista inactiva permanentemente una proporción importante de receptores y el aumento del agonista no permite recuperar el efecto máximo. ¿Qué propiedad caracteriza esta interacción?",
            "opciones": [
                "Disminución del Emax",
                "Aumento del Emax",
                "Aumento de potencia",
                "Aumento de afinidad"
            ],
            "correcta": 0,
            "explicacion": "Cuando una cantidad suficiente de receptores queda inactivada de manera irreversible, disminuye la capacidad máxima de respuesta del sistema y, por tanto, puede reducirse el Emax."
        },
        {
            "id": 431,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente utiliza un agonista β₂ selectivo a dosis terapéuticas. Al administrar dosis elevadas desarrolla efectos β₁ cardíacos. ¿Qué principio explica este hallazgo?",
            "opciones": [
                "La eficacia es dosis-dependiente",
                "La selectividad es dosis-dependiente",
                "La afinidad es dosis-dependiente",
                "El receptor es dosis-dependiente"
            ],
            "correcta": 1,
            "explicacion": "La selectividad no es absoluta. Al aumentar la concentración de un fármaco, este puede comenzar a interactuar de manera relevante con otras dianas y producir efectos adicionales."
        },
        {
            "id": 432,
            "tema": "Farmacodin?mica",
            "pregunta": "Un paciente utiliza repetidamente un agonista β₂ y progresivamente obtiene menor broncodilatación con la misma dosis. ¿Qué fenómeno farmacodinámico explica mejor este cambio?",
            "opciones": [
                "Aumento de la eficacia",
                "Sensibilización receptorial",
                "Desensibilización receptorial",
                "Aumento de la afinidad"
            ],
            "correcta": 2,
            "explicacion": "La exposición repetida o sostenida a un agonista puede disminuir la respuesta del receptor mediante desacoplamiento de la señal, fosforilación, internalización o reducción del número de receptores disponibles."
    },
        {
            "id": 433,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente recibe un fármaco por vía oral. Posteriormente se estudian su absorción intestinal, distribución tisular, metabolismo hepático y eliminación renal. ¿Qué área de la farmacología estudia estos procesos?",
            "opciones": [
                "Farmacodinamia",
                "Farmacogenética",
                "Farmacocinética",
                "Farmacometría"
            ],
            "correcta": 2,
            "explicacion": "La farmacocinética estudia lo que el organismo hace al fármaco mediante los procesos de absorción, distribución, metabolismo y eliminación."
        },
        {
            "id": 434,
            "tema": "Farmacocin?tica",
            "pregunta": "Un fármaco liposoluble atraviesa el epitelio intestinal siguiendo su gradiente de concentración, sin utilizar ATP ni transportadores. ¿Qué mecanismo explica su absorción?",
            "opciones": [
                "Transporte activo",
                "Difusión pasiva",
                "Endocitosis celular",
                "Difusión facilitada"
            ],
            "correcta": 1,
            "explicacion": "La difusión pasiva permite el movimiento de moléculas a favor de su gradiente de concentración y no requiere energía ni transportadores."
        },
        {
            "id": 435,
            "tema": "Farmacocin?tica",
            "pregunta": "Un fármaco atraviesa con mayor facilidad las membranas celulares cuando se encuentra eléctricamente neutro. ¿Qué forma del fármaco favorece principalmente este proceso?",
            "opciones": [
                "Forma no ionizada",
                "Forma ionizada",
                "Forma conjugada",
                "Forma proteinizada"
            ],
            "correcta": 0,
            "explicacion": "La forma no ionizada suele presentar mayor liposolubilidad y atraviesa con mayor facilidad la bicapa lipídica por difusión pasiva."
        },
        {
            "id": 436,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente con resección extensa del intestino delgado presenta menor absorción de varios medicamentos administrados por vía oral. ¿Qué factor fisiológico explica principalmente este cambio?",
            "opciones": [
                "Mayor flujo sanguíneo",
                "Mayor secreción gástrica",
                "Menor filtración renal",
                "Menor superficie absortiva"
            ],
            "correcta": 3,
            "explicacion": "El intestino delgado es el principal sitio de absorción de muchos fármacos debido a su enorme superficie proporcionada por pliegues, vellosidades y microvellosidades."
        },
        {
            "id": 437,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente recibe paracetamol por vía oral junto con un fármaco que retrasa marcadamente el vaciamiento gástrico. ¿Qué cambio farmacocinético es más probable?",
            "opciones": [
                "Eliminación más rápida",
                "Distribución más amplia",
                "Absorción más lenta",
                "Metabolismo más intenso"
            ],
            "correcta": 2,
            "explicacion": "Para muchos medicamentos, el retraso del vaciamiento gástrico demora su llegada al intestino delgado y reduce la velocidad de absorción, aunque no necesariamente la cantidad total absorbida."
        },
        {
            "id": 438,
            "tema": "Farmacocin?tica",
            "pregunta": "Un medicamento oral alcanza la circulación sistémica solo parcialmente debido a absorción incompleta y metabolismo presistémico. ¿Qué parámetro farmacocinético se encuentra reducido?",
            "opciones": [
                "Depuración",
                "Biodisponibilidad",
                "Vida media",
                "Distribución"
            ],
            "correcta": 1,
            "explicacion": "La biodisponibilidad representa la fracción de la dosis administrada que alcanza la circulación sistémica sin modificaciones."
        },
        {
            "id": 439,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente hospitalizado recibe un medicamento directamente por vía intravenosa. ¿Cuál es la biodisponibilidad de esta administración?",
            "opciones": [
                "100 %",
                "25 %",
                "50 %",
                "75 %"
            ],
            "correcta": 0,
            "explicacion": "La administración intravenosa introduce directamente toda la dosis en la circulación sistémica, por lo que su biodisponibilidad es del 100 %."
        },
        {
            "id": 440,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente con angina recibe nitroglicerina por vía sublingual en lugar de ingerirla. ¿Qué fenómeno farmacocinético se evita principalmente?",
            "opciones": [
                "Filtración glomerular",
                "Distribución a tejidos",
                "Unión a proteínas",
                "Metabolismo de primer paso"
            ],
            "correcta": 3,
            "explicacion": "La vía sublingual permite que el fármaco alcance directamente la circulación sistémica, evitando en gran medida el metabolismo intestinal y hepático de primer paso."
        },
        {
            "id": 441,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente recibe un analgésico oral. Dos horas después se registra la concentración plasmática más alta alcanzada tras esa dosis. ¿Qué parámetro se está determinando?",
            "opciones": [
                "Tmax",
                "Vd",
                "Cmax",
                "Cl"
            ],
            "correcta": 2,
            "explicacion": "Cmax corresponde a la concentración plasmática máxima alcanzada después de administrar una dosis."
        },
        {
            "id": 442,
            "tema": "Farmacocin?tica",
            "pregunta": "Un fármaco alcanza su concentración plasmática máxima tres horas después de su administración. ¿Qué parámetro representa este intervalo?",
            "opciones": [
                "Cmax",
                "Tmax",
                "AUC",
                "Vd"
            ],
            "correcta": 1,
            "explicacion": "Tmax representa el tiempo necesario para alcanzar la concentración plasmática máxima y aporta información sobre la velocidad de absorción."
        },
        {
            "id": 443,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente con hipoalbuminemia recibe un fármaco altamente unido a proteínas plasmáticas. ¿Qué cambio inicial puede esperarse?",
            "opciones": [
                "Mayor fracción libre",
                "Menor fracción libre",
                "Mayor unión tisular",
                "Menor absorción oral"
            ],
            "correcta": 0,
            "explicacion": "Al disminuir la albúmina existen menos sitios de unión disponibles, aumentando inicialmente la proporción de fármaco libre capaz de distribuirse, ejercer efecto y ser eliminado."
        },
        {
            "id": 444,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente recibe un fármaco que circula parcialmente unido a albúmina. ¿Qué fracción puede atravesar membranas y acceder con mayor facilidad a sus dianas?",
            "opciones": [
                "Fracción conjugada",
                "Fracción unida",
                "Fracción ionizada",
                "Fracción libre"
            ],
            "correcta": 3,
            "explicacion": "En términos generales, la fracción libre es la disponible para distribuirse, interactuar con la diana farmacológica y participar en los procesos de eliminación."
        },
        {
            "id": 445,
            "tema": "Farmacocin?tica",
            "pregunta": "Un fármaco liposoluble presenta concentraciones plasmáticas muy bajas porque se distribuye extensamente hacia los tejidos. ¿Qué parámetro probablemente será elevado?",
            "opciones": [
                "Biodisponibilidad oral",
                "Filtración glomerular",
                "Volumen de distribución",
                "Absorción intestinal"
            ],
            "correcta": 2,
            "explicacion": "Un volumen aparente de distribución elevado indica que, en relación con la cantidad total presente en el organismo, una pequeña proporción permanece en el plasma."
        },
        {
            "id": 446,
            "tema": "Farmacocin?tica",
            "pregunta": "Un anticoagulante permanece predominantemente dentro del compartimento vascular debido a su gran tamaño molecular y elevada unión a proteínas. ¿Qué característica se espera?",
            "opciones": [
                "Vd extremadamente alto",
                "Vd relativamente bajo",
                "Aclaramiento completo",
                "Absorción acelerada"
            ],
            "correcta": 1,
            "explicacion": "Los fármacos confinados principalmente al espacio intravascular presentan un volumen aparente de distribución relativamente pequeño."
        },
        {
            "id": 447,
            "tema": "Farmacocin?tica",
            "pregunta": "Dos medicamentos presentan características similares, pero uno es considerablemente más liposoluble. ¿Qué propiedad favorece su penetración al sistema nervioso central?",
            "opciones": [
                "Mayor liposolubilidad",
                "Mayor ionización",
                "Mayor tamaño molecular",
                "Mayor unión plasmática"
            ],
            "correcta": 0,
            "explicacion": "Las moléculas liposolubles y no ionizadas atraviesan con mayor facilidad la barrera hematoencefálica por difusión transcelular."
        },
        {
            "id": 448,
            "tema": "Farmacocin?tica",
            "pregunta": "Un medicamento sufre oxidación hepática mediada por el sistema citocromo P450. ¿A qué fase del metabolismo corresponde este proceso?",
            "opciones": [
                "Fase II",
                "Fase III",
                "Fase IV",
                "Fase I"
            ],
            "correcta": 3,
            "explicacion": "Las reacciones de fase I comprenden principalmente oxidación, reducción e hidrólisis y pueden introducir o exponer grupos funcionales en la molécula."
        },
        {
            "id": 449,
            "tema": "Farmacocin?tica",
            "pregunta": "Un fármaco es conjugado con ácido glucurónico en el hígado, aumentando su hidrosolubilidad. ¿A qué proceso corresponde?",
            "opciones": [
                "Oxidación",
                "Reducción",
                "Conjugación",
                "Filtración"
            ],
            "correcta": 2,
            "explicacion": "La glucuronidación es una reacción de fase II. La conjugación suele generar metabolitos más polares que pueden eliminarse con mayor facilidad."
        },
        {
            "id": 450,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente estabilizado con un medicamento inicia rifampicina. Semanas después disminuyen las concentraciones plasmáticas del primer fármaco debido a aumento de su metabolismo. ¿Qué fenómeno explica este cambio?",
            "opciones": [
                "Inhibición enzimática",
                "Inducción enzimática",
                "Saturación enzimática",
                "Competencia tubular"
            ],
            "correcta": 1,
            "explicacion": "La rifampicina es un potente inductor de varias enzimas y transportadores. La inducción puede acelerar el metabolismo de otros medicamentos y disminuir su exposición."
        },
        {
            "id": 451,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente recibe un fármaco metabolizado por CYP3A4. Tras añadir un potente inhibidor de esta enzima aumentan sus concentraciones plasmáticas. ¿Qué proceso explica el hallazgo?",
            "opciones": [
                "Menor metabolismo",
                "Mayor metabolismo",
                "Mayor filtración",
                "Menor absorción"
            ],
            "correcta": 0,
            "explicacion": "La inhibición enzimática disminuye la velocidad de metabolismo del sustrato y puede aumentar su exposición plasmática y riesgo de toxicidad."
        },
        {
            "id": 452,
            "tema": "Farmacocin?tica",
            "pregunta": "Un medicamento administrado por vía oral posee escasa actividad hasta que el metabolismo hepático lo convierte en una molécula activa. ¿Cómo se clasifica la sustancia administrada?",
            "opciones": [
                "Antagonista",
                "Metabolito tóxico",
                "Agonista inverso",
                "Profármaco"
            ],
            "correcta": 3,
            "explicacion": "Un profármaco requiere una transformación metabólica para generar el compuesto responsable de una parte sustancial o de la totalidad de su actividad farmacológica."
        },
        {
            "id": 453,
            "tema": "Farmacocin?tica",
            "pregunta": "Un fármaco se elimina principalmente mediante filtración glomerular. ¿Qué fracción plasmática se encuentra disponible directamente para este proceso?",
            "opciones": [
                "Fracción unida",
                "Fracción conjugada",
                "Fracción libre",
                "Fracción tisular"
            ],
            "correcta": 2,
            "explicacion": "Las proteínas plasmáticas y los fármacos unidos a ellas no atraviesan libremente el filtro glomerular; por ello, principalmente la fracción no unida está disponible para filtración."
        },
        {
            "id": 454,
            "tema": "Farmacocin?tica",
            "pregunta": "Un adulto mayor con enfermedad renal crónica recibe un fármaco eliminado casi exclusivamente por vía renal. ¿Qué cambio farmacocinético es más probable?",
            "opciones": [
                "Mayor aclaramiento",
                "Menor aclaramiento",
                "Menor absorción",
                "Mayor biodisponibilidad"
            ],
            "correcta": 1,
            "explicacion": "La reducción de la función renal disminuye el aclaramiento de muchos medicamentos eliminados por esta vía, favoreciendo su acumulación si no se ajusta el régimen de dosificación."
        },
        {
            "id": 455,
            "tema": "Farmacocin?tica",
            "pregunta": "Dos fármacos utilizan el mismo transportador de aniones orgánicos en el túbulo proximal. Uno reduce la eliminación renal del otro. ¿Qué proceso ha sido afectado?",
            "opciones": [
                "Secreción tubular",
                "Filtración glomerular",
                "Reabsorción pasiva",
                "Difusión intestinal"
            ],
            "correcta": 0,
            "explicacion": "La secreción tubular es un proceso mediado por transportadores y puede presentar competencia entre fármacos que utilizan sistemas de transporte comunes."
        },
        {
            "id": 456,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente intoxicado con un ácido débil recibe bicarbonato de sodio para alcalinizar la orina. ¿Qué cambio favorece su eliminación renal?",
            "opciones": [
                "Menor ionización urinaria",
                "Mayor reabsorción tubular",
                "Mayor unión a albúmina",
                "Mayor ionización urinaria"
            ],
            "correcta": 3,
            "explicacion": "La alcalinización urinaria aumenta la proporción ionizada de determinados ácidos débiles, disminuye su reabsorción tubular pasiva y favorece su eliminación; es el principio del atrapamiento iónico."
        },
        {
            "id": 457,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente presenta disminución de la capacidad del organismo para eliminar un medicamento del plasma por unidad de tiempo. ¿Qué parámetro farmacocinético está reducido?",
            "opciones": [
                "Biodisponibilidad",
                "Potencia",
                "Aclaramiento",
                "Eficacia"
            ],
            "correcta": 2,
            "explicacion": "El aclaramiento o clearance expresa el volumen de plasma del cual el fármaco es eliminado por unidad de tiempo y representa la eficiencia global de eliminación."
        },
        {
            "id": 458,
            "tema": "Farmacocin?tica",
            "pregunta": "Un fármaco presenta una vida media de 8 horas. ¿Qué ocurre aproximadamente después de una vida media tras una dosis única, asumiendo cinética de primer orden?",
            "opciones": [
                "Queda 25 %",
                "Queda 50 %",
                "Queda 75 %",
                "Queda 100 %"
            ],
            "correcta": 1,
            "explicacion": "La vida media es el tiempo necesario para que la concentración o cantidad corporal del fármaco disminuya aproximadamente al 50 % durante una eliminación de primer orden."
        },
        {
            "id": 459,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente inicia un medicamento administrado a intervalos regulares. ¿Cuándo se alcanza aproximadamente el estado estacionario si su farmacocinética es lineal?",
            "opciones": [
                "4–5 vidas medias",
                "1 vida media",
                "2 vidas medias",
                "8–10 vidas medias"
            ],
            "correcta": 0,
            "explicacion": "Con administración repetida, aproximadamente el 94–97 % del estado estacionario se alcanza después de 4–5 vidas medias."
        },
        {
            "id": 460,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente con una infección grave necesita alcanzar rápidamente una concentración terapéutica de un medicamento con vida media prolongada. ¿Qué estrategia es más apropiada?",
            "opciones": [
                "Dosis mínima",
                "Dosis de rescate",
                "Dosis alternante",
                "Dosis de carga"
            ],
            "correcta": 3,
            "explicacion": "La dosis de carga permite alcanzar rápidamente una concentración objetivo. Su cálculo depende principalmente del volumen de distribución, la concentración deseada y la biodisponibilidad."
        },
        {
            "id": 461,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente recibe tratamiento crónico y se desea mantener una concentración plasmática estable compensando continuamente la cantidad eliminada. ¿Qué parámetro es particularmente importante para establecer la dosis de mantenimiento?",
            "opciones": [
                "Afinidad",
                "Eficacia",
                "Aclaramiento",
                "Selectividad"
            ],
            "correcta": 2,
            "explicacion": "La velocidad de dosificación de mantenimiento debe compensar la velocidad de eliminación; por ello depende fundamentalmente del aclaramiento y de la concentración plasmática objetivo."
        },
        {
            "id": 462,
            "tema": "Farmacocin?tica",
            "pregunta": "Un paciente presenta intoxicación por un fármaco cuya vía metabólica se encuentra saturada. A concentraciones elevadas se elimina aproximadamente una cantidad constante por unidad de tiempo. ¿Qué tipo de cinética presenta?",
            "opciones": [
                "Primer orden",
                "Orden cero",
                "Segundo orden",
                "Orden mixto"
            ],
            "correcta": 1,
            "explicacion": "Cuando las vías de eliminación están saturadas, puede eliminarse una cantidad relativamente constante por unidad de tiempo. Este comportamiento corresponde a cinética de orden cero."
        }
];
