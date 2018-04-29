<template>
 <v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-card-title class="justify-center"><h1>FAQs</h1></v-card-title>
    <v-content v-if="$store.state.lang ==='eng'">
        <v-container fluid grid-list-xl>
    <v-layout justify-space-around>

    <ul class="nav-images">
        <v-flex xs2 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74ZplvyrrpuZWG0j6'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57d753265016e169debd4989/1473729322973/?format=300w" alt="education">
                <div id="cats">
                  Education
                </div>
            </a>
        </v-flex>
        <v-flex xs2 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74o9dJC3dpk1TW7lp'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cd1771ebbd1afd7c11cbf8/1472582296716/?format=300w" alt="job">
                <div id="cats">
                  Jobs
                </div>
            </a>
        </v-flex>
        <v-flex xs2 class="nav-img">
            <a href="#" v-scroll-to="'#-LB74vjFL1tl0GDKMprJ'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cd1771ebbd1afd7c11cbf9/1472879828578/bookshelf.png?format=300w" alt="travel">
                <div id="cats">
                  Travel
                </div>
            </a>
        </v-flex>
        <v-flex xs2 class="nav-img">
            <a href="#" v-scroll-to="'#-LB751f5yvYSUPahtRKF'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cf818203596edd29edb6f9/1473216902429/?format=300w" alt="health">
                <div id="cats">
                  Health
                </div>
            </a>
        </v-flex>
        <v-flex xs2 class="nav-img">
            <a href="#" v-scroll-to="'#-LB751f5yvYSUPahtRKF'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cd1771ebbd1afd7c11cbfb/1472582368608/?format=300w" alt="document">
                <div id="cats">
                  Documentation
                </div>
            </a>
        </v-flex>
        <v-flex xs2 class="nav-img">
            <a href="#" v-scroll-to="'#-LB751f5yvYSUPahtRKF'">
                <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57d73b8b29687fe1896261b9/1473723301538/heart.png?format=300w" alt="citizenship">
                <div id="cats">
                  Citizenship
                </div>
            </a>
        </v-flex>
    </ul>
    </v-layout>
    <br>

    <v-expansion-panel popout focusable>
      <v-expansion-panel-content >
        <div slot="header"><b>EDUCATION</b>: What do I need to do in order to attend a “Bachillerato” or to take a “High School” equivalency exam?</div>
        <v-card>
          <v-card-text>
            <p>You will need a “Certificado de Terminación de Estudios de Educación
              Secundaria” (either a diploma from a Mexican school or a revalidated
              diploma/transcripts from the United States) in order to apply for a
              Bachillerato, to apply for the Prepa Abierta, or to take one of the high
              school equivalency exams.</p>

            <p>At this time, you CANNOT revalidate your Middle School studies without
              already being enrolled in a SECONDARY SCHOOL. If you are over 18 years old,
              that is likely not an option for you. Furthermore, because Mexico’s Primary
              School system requires six years (the equivalent of 1st-6th grades) and the
              Middle School system requires three years (the equivalent of 7th, 8th, and
              9th grades) you will need to have completed the first year of high school
              in order to apply for total revalidation of MIDDLE SCHOOL. If you did not
              finish 9th grade, technically you should be able to apply for a partial
              revalidation of your Middle School education. Although the G.E.D. is
              recognized widely in the United States and Canada, the SEP does NOT currently
              recognize or revalidate a G.E.D. exam from the US.</p>

            <p>To learn more about the SEP Revalidation Process:
              <a href="http://www.sincree.sep.gob.mx/es/sincree/EDUCACIO_BASICA http://www.sincree.sep.gob.mx/es/sincree/EDUCACIO_BASICA">Click here.</a>
              Given the current bureaucratic obstacles to partial and full revalidation of
              a US-based PRIMARY and MIDDLE SCHOOL education as an adult, you are better
              off NOT revalidating anything and starting from scratch. Deep breath!
              Hang in there!</p>

            <p><b>OPTION ONE</b>: The National Institute for Adult Education (INEA)
              has a system for Primary and Secondary Education for Adults. The INEA
              does not currently accept your Primary or Secondary transcripts from the
              United States, and the SEP does not currently revalidate those transcripts.
              So, you must study for and take all 12 units for Primary School certification
              and all 12 units for Secondary School certification. You will need to visit a
              Plaza Comunitaria near you (in the US or in Mexico, de hecho), although in
              some cases you can eventually take each unit exam online. If you have proof
              of studies in Mexico for any year of your Primary or Secondary education,
              INEA will give you credit for the equivalent units. There is no cost. Sam
              and Jorge report the process taking two to three months. On the positive
              side, you can practice your Spanish!</p>

            <p>To learn more about the INEA and to find a Plaza Comunitaria near
              you (in the United States or in Mexico): <a href="http://www.inea.gob.mx/index.php http://www.inea.gob.mx/index.php">Click here.</a>
            </p>

            <p><b>OPTION TWO</b>: The Centro Nacional de Evaluación para la Educación
              Superior, A.C., known as CENEVAL, provides equivalency exams for Secondary
              School and High School, as well as some University Degrees. You can take
              the exam entitled “ACREDITA-SEC” or the “Examen de Acreditación de Conocimientos
              Equivalentes a la Educación Secundaria con Base en el Acuerdo 286.”
              You must be over 15 years old, have an authorized Certificate of Completion
              of Primary Education (again, this probably only works for those who graduated
              from Primary School in Mexico). Its costs 431 pesos, and you have to
              find an institution that administers CENEVAL exams near you (ojo, we could
              not find this information on the website!). Within ODA we do not know anyone
              who has taken this exam. If you know something more, please let us know!</p>

            <p>To learn more about CENEVAL and these exams:
              <a href="http://www.ceneval.edu.mx/ceneval-web/content.do?page=1678 http://www.ceneval.edu.mx/ceneval-web/content.do?page=1678">Click here.</a>
            </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>EDUCATION</b>: How can I re-validate my K-12 education from the United States or another country?</div>
      <v-card>
        <v-card-text>
          <p>So, “revalidation” is a process by which the Mexican Secretariat of
            Education (the SEP) recognizes the validity of your education documents
            from the United States and your adequate preparation to continue studying
            in Mexico. As of June 2015, you NO LONGER need an international apostille
            on each of the documents and YOU can translate the documents from English to
            Spanish yourself and/or look for any translator (not necessarily an official
            government translator).</p>

          <p>(If you or your siblings were born in the United States, you will most
            likely need an international apostille and official translation
            (“por perrito”) of your birth certificate.)</p>

          <p>You will need the originals, one copy, and the translations of the following documents:<br>
            •	The application (pick one up at the designated SEP office)<br>
            •	Birth certificate or other identification document<br>
            •	Your elementary, middle school, and high school diploma. Some offices ask for all three, so best to be prepared. Although officially, and hopefully in most cases, you will only need your most recent diploma and the one before it.<br>
            •	Your full transcripts of the highest degree attained. For example, if you are trying to revalidate your high school education, you will need your high school transcripts.<br>
            •	Bank receipt of payment (pick up the form from local SEP office)<br>
            •	Any other supporting documents from your high school that you can provide re: the plan and study program: grades, requirements, electives etc.
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>JOBS</b>: What are some good websites where I can search for a job in Mexico?</div>
      <v-card>
        <v-card-text>
          <p>
            •	Acción Trabajo <br>
            •	Bolsa Mexicana de Trabajo<br>
            •	Bumeran México<br>
            •	CEBM, Empleos en Yucatán<br>
            •	Compu Trabajo<br>
            •	Monster México<br>
            •	OCCMundial Mexico<br>
            •	Templeo<br>
            •	Universia Empleo<br>
            •	Zona Jobs México
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>JOBS</b>: How do I get my RFC and why do employers require it?</div>
      <v-card>
        <v-card-text>
          <p>The RFC (Registro Federal de Contribuyente) is a code required for every
            individual or legal entity in Mexico in order to do any legal economic activity
            with obligations to pay taxes, and it can be processed by the SAT (Servicio de
            Administración Tributario). Every person who is 18 years old and has a CURP
            can process it. and are not obligated to issue receipts for the legal activity
            or income nor present periodic declarations. The process can be done through the
            SAT website. Before you used to only be ableto do it in person at the nearest SAT
            delegation, but now you can do it via internet. In order to get your RFC on line,
            you will need: <i>your curp</i>. Fill out the electronic application which is
            available in the SAT website. SAT lets you process your RFC online at anytime
            and your official number is issued immediately upon your request.
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>TRAVEL</b>: How can I get a certified copy of my Mexican birth certificate?</div>
      <v-card>
        <v-card-text>
          <p>A birth certificate is a legal document that certifies the physical origin of an individual. The process usually begins with a certificate of birth issued by the hospital/doctor/midwife when the infant was born. The certificate is then taken to the local civil registry office (“Registro Civil”) in order for the infant to be certified as a citizen.</p>

          <p>There are three options to obtain an official copy of a Mexican birth certificate. In most cases you will need to visit the local civil registry office where you or the person was registered, except if you use the kiosk option and/or if the civil register has an updated website.</p>

          <p>For more information, <a href="http://www.registro-civil.com.mx/acta-nacimiento">click</a> the link to check if you can request your birth certificate online visit.

          <p>If you need to register your Mexican nationality or the nationality of your children (people born in the United States to one or more Mexican parent have the constitutional right to Mexican citizenship), you need to go to your local “registro civil” with an original birth certificate (from the United States, or another country) and the parent’s birth certificate and identification.</p>

          <p>If you need to register your birth in Mexico but you were not registered at birth, you will need an extemporaneous birth certificate. You can find our more information <a href="http://www.tramitesyservicios.df.gob.mx/wb/TyS/levantamiento_de_acta_de_nacimiento_extemporane">here</a> (This website provides information about the government process in Mexico City, other states have different modules and offices).</p>

          <p>If you are having trouble with the process, you can contact ODA, IMUMI, or the Be Foundation for more information about your rights to (bi)national identity.</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>TRAVEL</b>: How can I get my INE (Instituto Nacional Electoral) identification card and number?</div>
      <v-card>
        <v-card-text>
          <p>The INE is a very important document to have in order to open a bank account, install utilities, buy a house or a car, etc. etc. It si the most widely accepted/expected form of identification in Mexican society. The INE is also the official identification so a Mexican citizen is able to vote in any kind of political elections.</p>

          <p>In order to apply for an INE, you must be a Mexican citizen and over the age of 18. You will need the following documents:<br>
            •Birth Certificate<br>
            •Identification (passport or other official ID document)<br>
            •Proof of address (electricity or other utility bill). You can schedule an appointment or walk in directly to your nearest branch office. This is the official INE website, where you can look up an office near you by clicking <a href="http://www.ine.mx/archivos2/portal/credencial/">here</a>.
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>TRAVEL</b>: How can I get the CURP and what is it used for?</div>
      <v-card>
        <v-card-text>
          <p>A CURP is a unique registry population code that is used to identify every Mexican, whether the person lives in Mexico or abroad. It is akin to a Social Security Number in the United States. If it is the first time you are processing your CURP, you will need to find to the nearest civil registry office with your birth certificate.
            To find a local civil registry office click <a href="http://www.registro-civil.com.mx/">here</a>.

          <p>If you have already done the paperwork for the first time and you only need a copy, then click here. You can print it out immediately. This is a good number to memorize since you will be asked for it often. <i>Hint: It always includes your initials and date of birth.</i>
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>HEALTH</b>: How can I sign up for health insurance in Mexico? And what is the difference between IMSS, ISSSTE, Seguro Popular, etc?</div>
      <v-card>
        <v-card-text>
          <p>Instituto Mexicano del Seguro Social (IMSS) is for employees only. Employees pay a share and the employer pays another rate. If you have been hired and your employer has registered you with IMSS, you can go online and sign up to request the nearest clinic and update your information <a href="http://www.imss.gob.mx/faq/como-darme-alta-clinica">here</a>.</p>

          <p>Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (ISSSTE) is for employees that work for the government. Government employees pay a rate and the government covers medication and hospitalization. If you work for the government and have been registered with ISSSTE, you can update your information and sign up <a href="https://oficinavirtual.issste.gob.mx/Registro">here</a>.</p>

          <p>Seguro Popular is for people that do not have access to IMSS nor ISSSTE. It is sponsored by the federal government. There is also a Seguro Popular system administered in Mexico City. Medical attention can be in high demand, and sometimes services may not be the best. In the following link you can learn about the requirements and how to sign up. Seguro Popular is free and available to everyone.
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>HEALTH</b>: Do I need to be employed in order to receive government-sponsored health care services?</div>
      <v-card>
        <v-card-text>
          <p>No. If you are not an employee and have a small business or company you can register yourself as an employer and pay a periodically rate to have IMSS health care insurance.</p>

          <p>You can also register for Seguro Popular, which is a healthcare insurance sponsored by the federal government for those who do not have IMSS nor ISSSTE. Medical attention can be in high demand, and sometimes services may not be the best. In the following link you can learn about the requirements and how to sign up. Seguro Popular is free and available to everyone.
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>DOCUMENTATION</b>: How do I apply for my Mexican passport?</div>
      <v-card>
        <v-card-text>
          <p>A passport is the document given to citizens of a country in order to identify them selves and be admitted into another country. The Mexican passport is an official document issued by the Secretary of Foreign Relations. </p>
          <p>In order to obtain your Mexican passport, you must first make an appointment with your local SRE office <i>(Some states have walk-in appointments available)</i>.</p>

          <p>The application will be given in person the day of your appointment. Identify your Mexican nationality using one of the following:<br>
            •	Certified birth certificate<br>
            •	Original birth certificate<br>
            •	Naturalization certificate</p>

          <p>Requirements: <i>Identify yourself with an official document that has photo and signature, the information must match your nationality identification.</i> You may present one of the following:<br>
            •	INE voting ID<br>
            •	Professional title<br>
            •	Military ID (applies only to males)<br>
            •	INAPAM current ID (applies only for elder people)<br>
            •	DIF ID (applies only to people with a certain disability)<br>
            •	Naturalization Letter<br>
            •	Retired ID or Public Health ID<br>
            •	Proof of payment<br>
            •	2 passport size photographs (TIP: get them near SRE office, because they already know how they are requested). They must be without glasses, facing straight, color with white background, uncovered face and recent.</p>

          <p>All the documents presented should be in good conditions, without alterations, ripped, and clean. SRE has the faculty to ask you for additional documents and/or information if it considers it. The time it takes to receive your passport varies from state to state. You will be notified the day of your application.
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel popout focusable>
    <v-expansion-panel-content>
      <div slot="header"><b>CITIZENSHIP</b>: How can I obtain proof of Mexican citizenship for my US citizen children in Mexico?</div>
      <v-card>
        <v-card-text>
          <p>All children of Mexican nationals have the constitutional right to Mexican citizenship. No one needs to renounce any other citizenship, by birth or otherwise. Binational citizenship provides currently important protections in both countries.</p>

          <p>If you need to register your Mexican nationality or the nationality of your children, you need to go to your local “registro civil” with an original birth certificate (from the United States, or another country) and the parent’s birth certificate and identification.</p>

          <p>For more information, click <a href="http://www.registro-civil.com.mx/acta-nacimiento">here</a> to check if you can request your birth certificate online visit.
          </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
</v-container>
</v-content>

<!-- spanish version -->
<v-content v-else>
    <v-container fluid grid-list-xl>
<v-layout justify-space-around>

<ul class="nav-images">
    <v-flex xs2 class="nav-img">
        <a href="#" v-scroll-to="'#-LB74ZplvyrrpuZWG0j6'">
            <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57d753265016e169debd4989/1473729322973/?format=300w" alt="education">
            <div id="cats">
              Educación
            </div>
        </a>
    </v-flex>
    <v-flex xs2 class="nav-img">
        <a href="#" v-scroll-to="'#-LB74o9dJC3dpk1TW7lp'">
            <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cd1771ebbd1afd7c11cbf8/1472582296716/?format=300w" alt="job">
            <div id="cats">
              Trabajos
            </div>
        </a>
    </v-flex>
    <v-flex xs2 class="nav-img">
        <a href="#" v-scroll-to="'#-LB74vjFL1tl0GDKMprJ'">
            <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cd1771ebbd1afd7c11cbf9/1472879828578/bookshelf.png?format=300w" alt="travel">
            <div id="cats">
              Viaje
            </div>
        </a>
    </v-flex>
    <v-flex xs2 class="nav-img">
        <a href="#" v-scroll-to="'#-LB751f5yvYSUPahtRKF'">
            <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cf818203596edd29edb6f9/1473216902429/?format=300w" alt="health">
            <div id="cats">
              Sanidad
            </div>
        </a>
    </v-flex>
    <v-flex xs2 class="nav-img">
        <a href="#" v-scroll-to="'#-LB751f5yvYSUPahtRKF'">
            <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57cd1771ebbd1afd7c11cbfb/1472582368608/?format=300w" alt="document">
            <div id="cats">
              Documentación
            </div>
        </a>
    </v-flex>
    <v-flex xs2 class="nav-img">
        <a href="#" v-scroll-to="'#-LB751f5yvYSUPahtRKF'">
            <img src="https://static1.squarespace.com/static/57374fc227d4bd28d984d633/t/57d73b8b29687fe1896261b9/1473723301538/heart.png?format=300w" alt="citizenship">
            <div id="cats">
              Ciudadanía
            </div>
        </a>
    </v-flex>
</ul>
</v-layout>
<br>

<v-expansion-panel popout focusable>
  <v-expansion-panel-content >
    <div slot="header"><b>EDUCACIÓN</b>: ¿Qué tengo que hacer para asistir a un "Bachillerato" o a tomar un examen de equivalencia de "High School"?</div>
    <v-card>
      <v-card-text>
        <p>Necesitará “Certificado de Terminación de Estudios de Educación Secundaria” (un diploma de una escuela mexicana o un diploma/transcripciones validado de nuevo de los Estados Unidos) a fin de solicitar Bachillerato, para solicitar Prepa Abierta o tomar uno de los exámenes de equivalencia de la escuela secundaria. </p>

        <p>En este tiempo, no PUEDE validar de nuevo sus estudios de la Escuela secundaria sin ser ya matriculado en una ESCUELA SECUNDARIA. Si tienen más de 18 años, que no es probable una opción para usted. Además, porque el sistema de la Escuela primaria de México requiere seis años (el equivalente del 1er - 6tos grados) y el sistema de la Escuela secundaria requiere tres años (el equivalente de 7mos, 8vos, y 9nos grados) tendrá que haber completado el primer año de la escuela secundaria a fin de solicitar la nueva validación total de la ESCUELA SECUNDARIA. Si no terminara el 9no grado, técnicamente debería ser capaz de solicitar una nueva validación parcial de su educación de la Escuela secundaria. Aunque el G.E.D. sea reconocido extensamente en los Estados Unidos y Canadá, el SEP no reconoce actualmente o valida de nuevo un examen G.E.D. de los EE.UU. </p>

        <p>Aprender más sobre el Proceso de Nueva validación SEP: <a href="http://www.sincree.sep.gob.mx/es">aquí</a>. </p>

        <p><b>OPCIÓN UN</b>: El Instituto Nacional de la Educación de adultos (INEA) tiene un sistema para la Educación secundaria y Primaria para Adultos. El INEA no acepta actualmente sus transcripciones Primarias o Secundarias de los Estados Unidos, y el SEP no valida de nuevo actualmente aquellas transcripciones. De este modo, debe estudiar para y tomar 12 unidades para la certificación de la Escuela primaria y 12 unidades para la certificación de la Escuela secundaria. Tendrá que visitar Plaza Comunitaria cerca de usted (en los EE.UU o en México, de hecho), aunque en algunos casos pueda tomar finalmente cada examen de la unidad en línea. Si tiene la prueba de estudios en México para algún año de su Educación secundaria o Primaria, INEA le dará el crédito de las unidades equivalentes. No hay coste. Sam y Jorge relatan el proceso que toma dos a tres meses. ¡En la parte positiva, puede practicar su español! </p>

        <p>Aprender más sobre el INEA y encontrar Plaza Comunitaria cerca de usted (en los Estados Unidos o en México) <a href="http://www.inea.gob.mx/index.php">aquí</a>.</p>


        <p><b>OPCIÓN DOS</b>: El Centro Nacional de Evaluación para la Educación Superior, A.C., conocido como CENEVAL, proporciona exámenes de equivalencia a Escuela secundaria y Escuela secundaria, así como algunos Títulos universitarios. Puede tomar el examen titulado “ACREDITA-SEC” o el “Examen de Acreditación de Conocimientos Equivalentes la Educación Secundaria engaña el Base en el Acuerdo 286”. Debe tener más de 15 años, tener un Certificado autorizado de la Finalización de la Educación  primaria (otra vez, esto probablemente sólo trabaja para aquellos que se graduaron de la Escuela primaria en México). Sus gastos 431 pesos, y tiene que encontrar una institución que administra exámenes CENEVAL cerca de usted (¡ojo, no podíamos encontrar esta información sobre el sitio web!). Dentro de ODA no conocemos a nadie que haya tomado este examen. ¡Si sabe algo más, por favor avísenos!
        </p>

        <p>Aprender más sobre CENEVAL y estos exámenes <a href="http://www.ceneval.edu.mx/ceneval-web/content.do?page=1678">aquí</a>.
        </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>EDUCACIÓN</b>: ¿Cómo puedo yo volver a validar mi educación K-12 desde los Estados Unidos u otro país?</div>
  <v-card>
    <v-card-text>
      <p>Así, "revalidación" es un proceso mediante el cual la Secretaria de Educación en México (SEP) reconoce la validez de sus documentos sobre educación de los Estados Unidos y su preparación adecuada para continuar estudiando en México. En junio de 2015, ya no necesita una internacional apostilla en cada uno de los documentos y puede traducir los documentos del inglés al español usted y/o buscar cualquier traductor (no necesariamente un gobierno oficial traductor). </p>

      <p>(Si usted o sus hermanos nacieron en los Estados Unidos, probablemente necesite una internacional apostilla y traducción oficial ("por perrito") de su certificado de nacimiento.)</p>

      <p>Necesitará los originales, una copia, y las traducciones de los documentos siguientes: <br>
        •	La aplicación (recoger uno al designado SEP oficina) <br>
        •	Certificado de nacimiento u otro documento de identificación <br>
        •	Su Elementary, middle school, y diploma de la escuela secundaria. Algunas oficinas pregunte por los tres, así que lo mejor es estar preparado. Aunque oficialmente, y es de esperar que en la mayoría de los casos, sólo necesitará su más reciente diploma y la anterior. <br>
        •	Las transcripciones completas del más alto grado alcanzado. Por ejemplo, si está intentando revalidar su educación secundaria, necesitará su high school transcripciones. <br>
        •	Comprobante de pago (recoger el formulario desde el local SEP oficina) <br>
        •	Cualesquiera otros documentos acreditativos de su escuela secundaria que puede proporcionar re: el plan y programa de estudios: grados, requisitos, asignaturas optativas, etc.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>TRABAJOS</b>: ¿Cuáles son algunos buenos sitios web donde puedo buscar un trabajo en México?</div>
  <v-card>
    <v-card-text>
      <p>
        •	Acción Trabajo <br>
        •	Bolsa Mexicana de Trabajo<br>
        •	Bumeran México<br>
        •	CEBM, Empleos en Yucatán<br>
        •	Compu Trabajo<br>
        •	Monster México<br>
        •	OCCMundial Mexico<br>
        •	Templeo<br>
        •	Universia Empleo<br>
        •	Zona Jobs México
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>TRABAJOS</b>: ¿Cómo puedo obtener mi RFC y ¿por qué lo empleadores requieren?</div>
  <v-card>
    <v-card-text>
      <p>El RFC (Registro Federal de Contribuyente) es un código necesario para cada persona natural o jurídica en México para realizar cualquier actividad económica legal con obligación de pagar impuestos, y puede ser procesado por el SAT (Servicio de Administración Tributario). Toda persona que tiene 18 años y tiene un CURPO puede procesarlo. y no están obligados a emitir recibos para la actividad legal ni ingresos ni presente declaraciones periódicas.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>VIAJE</b>: ¿Cómo puedo obtener una copia certificada de mi acta de nacimiento mexicana?</div>
  <v-card>
    <v-card-text>
      <p>Un certificado de nacimiento es un documento legal que certifica el origen físico de un individuo. El proceso comienza generalmente con un certificado de nacimiento emitido por el hospital / médico / partera cuando nació el bebé. El certificado, ha llevado a la oficina del registro civil local ( "Registro Civil") para que el bebé sea certificada como ciudadano. Hay tres opciones para obtener una copia oficial del acta de nacimiento mexicana. En la mayoría de los casos tendrá que visitar la oficina del registro civil local donde usted o la persona que se registró, excepto si se utiliza la opción kiosco y / o si el registro civil tiene un sitio web actualizado.</p>

      <p>Para obtener más información, y el enlace para comprobar si se puede solicitar su certificado de nacimiento en línea visite <a href="http://www.registro-civil.com.mx/acta-nacimiento">aquí</a>.</p>

      <p>Si necesita registrar su nacionalidad mexicana o la nacionalidad de sus hijos (las personas nacidas en los Estados Unidos a uno o más de los padres mexicana tienen el derecho constitucional de la ciudadanía mexicana), tiene que ir a su local de "Registro Civil" con un original acta de nacimiento (de los Estados Unidos, o de otro país) y el certificado de nacimiento de los padres y la identificación.</p>

      <p>Si necesita registrar su nacimiento en México, pero que no fueron inscritos al nacer, se necesita un certificado de nacimiento extemporánea. Puede encontrar nuestra más información
        <a href="http://www.tramitesyservicios.df.gob.mx/wb/TyS/levantamiento_de_acta_de_nacimiento_extemporanea">aquí</a>  <i>(Este sitio web proporciona información sobre el proceso de gobierno en la ciudad de México, otros estados tienen diferentes módulos y oficinas)</i>.</p>

      <p>Si usted está teniendo problemas con el proceso, puede comunicarse con la AOD, IMUMI, o la Fundación ser para más información sobre sus derechos a la (bi) la identidad nacional.</p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>VIAJE</b>: ¿Cómo puedo obtener mi INE (Instituto Nacional de Elecciones) y el número de tarjeta de identificación?</div>
  <v-card>
    <v-card-text>
      <p>El INE es un documento muy importante contar con el fin de abrir una cuenta bancaria, instalar utilidades, comprar una casa o un coche, etc, etc Se destaca la forma más aceptada / espera de la identificación en la sociedad mexicana. El INE es también la identificación oficial por lo que un ciudadano mexicano es capaz de votar en cualquier tipo de elecciones políticas. </p>
      <p>Con el fin de solicitar una INE, usted debe ser un ciudadano mexicano y sobre la edad de 18. Usted necesitará los siguientes documentos: <br>
        • Certificado de nacimiento<br>
        • La identificación (pasaporte u otro documento oficial de identificación)<br>
        • Comprobante de domicilio (electricidad u otra factura de servicios públicos) Usted puede programar una cita o caminar directamente a su sucursal más cercana. Este es el sitio oficial del INE, donde se puede buscar la oficina más cercana <a href="http://www.ine.mx/archivos2/portal/credencial/">aquí</a>.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>VIAJE</b>: ¿Cómo puedo obtener la CURP y para qué se utiliza?</div>
  <v-card>
    <v-card-text>
      <p>Un CURP es un código de registro único de población que se utiliza para
        identificar cada mexicana, si la persona vive en México o en el extranjero.
        Es similar a un número de Seguridad Social en los Estados Unidos. Si es la
        primera vez que se está procesando su CURP, tendrá que encontrar a la oficina
        de registro civil más cercano con su certificado de nacimiento. Para encontrar
        un local de la oficina de registro civil clic
        <a href="http://www.registro-civil.com.mx/">aquí</a>.</p>

      <p>Si ya ha realizado los trámites por primera vez y sólo necesita una copia,
        a continuación, haga clic aquí. Usted puede imprimir inmediatamente. Se trata
        de un buen número de memorizar ya que se le preguntó por él a menudo.
        Pista: Siempre incluye sus iniciales y la fecha de nacimiento.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>SANIDAD</b>: ¿Cómo puedo contratar un seguro de salud en México? ¿Y cuál es la diferencia entre el IMSS, ISSSTE, Seguro Popular, etc?</div>
  <v-card>
    <v-card-text>
      <p>Instituto Mexicano del Seguro Social (IMSS) es sólo para los empleados. Los empleados pagan una cuota y el empleador
        paga otra tasa. Si usted ha sido contratado y su empleador que se haya registrado en el IMSS, puede conectarse a Internet y registrarse para solicitar
        a la clínica más cercana y actualizar su información aquí. (<a href="http://www.imss.gob.mx/faq/como-darme-alta-clinica">Enlace</a>)

      <p>Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (ISSSTE) es para los empleados que trabajan para el gobierno. Los empleados del gobierno pagan una tarifa y el gobierno cubre la medicación y hospitalización. Si usted trabaja para el gobierno y haber estado a disposición del ISSSTE, puede actualizar su información e inscribirse aquí. (<a href="https://oficinavirtual.issste.gob.mx/Registro">Enlace</a>)

      <p>El Seguro Popular es para las personas que no tienen acceso al IMSS ni ISSSTE. Está patrocinado por el gobierno federal. También existe un sistema administrado por el Seguro Popular en la Ciudad de México. atención médica puede ser de gran demanda, ya veces los servicios puede no ser la mejor. En el siguiente enlace se puede aprender acerca de los requisitos y cómo inscribirse. El Seguro Popular es gratuito y está disponible para todo el mundo.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>SANIDAD</b>: ¿Necesito ser empleado con el fin de recibir los servicios de salud patrocinados por el gobierno?</div>
  <v-card>
    <v-card-text>
      <p>No. Si usted no es un empleado y tienen un pequeño negocio o empresa puede registrarse como empleador y pagar una tasa periódica para tener IMSS seguro de salud.</p>

      <p>También puede inscribirse en el Seguro Popular, que es un seguro de salud patrocinado por el gobierno federal para aquellos que no tienen ni el IMSS ISSSTE. atención médica puede ser de gran demanda, ya veces los servicios puede no ser la mejor. En el siguiente enlace se puede aprender acerca de los requisitos y cómo inscribirse. El Seguro Popular es gratuito y está disponible para todo el mundo.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>DOCUMENTACIÓN</b>: ¿Cómo aplico para mi pasaporte mexicano?</div>
  <v-card>
    <v-card-text>
      <p>Un pasaporte es el documento que se entregará a los ciudadanos de un país con el fin de identificar ellos mismos y ser admitidos en otro país. El pasaporte mexicano es un documento oficial expedido por el Secretario de Relaciones Exteriores. </p>
      <p>Con el fin de obtener su pasaporte mexicano, En primer lugar debe hacer una cita con su oficina local de la SRE <i>(Algunos estados tienen cabina de citas disponibles)</i>. </p>

      <p>The application will be given in person the day of your appointment. Identify your Mexican nationality using one of the following:<br>
        •	Certified birth certificate<br>
        •	Original birth certificate<br>
        •	Naturalization certificate</p>

      <p>Requirements: <i>Identify yourself with an official document that has photo and signature, the information must match your nationality identification.</i> You may present one of the following:<br>
        •	INE voting ID<br>
        •	Professional title<br>
        •	Military ID (applies only to males)<br>
        •	INAPAM current ID (applies only for elder people)<br>
        •	DIF ID (applies only to people with a certain disability)<br>
        •	Naturalization Letter<br>
        •	Retired ID or Public Health ID<br>
        •	Proof of payment<br>
        •	2 passport size photographs (TIP: get them near SRE office, because they already know how they are requested). They must be without glasses, facing straight, color with white background, uncovered face and recent.</p>

      <p>All the documents presented should be in good conditions, without alterations, ripped, and clean. SRE has the faculty to ask you for additional documents and/or information if it considers it. The time it takes to receive your passport varies from state to state. You will be notified the day of your application.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>

<v-expansion-panel popout focusable>
<v-expansion-panel-content>
  <div slot="header"><b>CITIZENSHIP</b>: How can I obtain proof of Mexican citizenship for my US citizen children in Mexico?</div>
  <v-card>
    <v-card-text>
      <p>All children of Mexican nationals have the constitutional right to Mexican citizenship. No one needs to renounce any other citizenship, by birth or otherwise. Binational citizenship provides currently important protections in both countries.</p>

      <p>If you need to register your Mexican nationality or the nationality of your children, you need to go to your local “registro civil” with an original birth certificate (from the United States, or another country) and the parent’s birth certificate and identification.</p>

      <p>For more information, click <a href="http://www.registro-civil.com.mx/acta-nacimiento">here</a> to check if you can request your birth certificate online visit.
      </p>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</v-expansion-panel>
</v-container>
</v-content>


<site-footer></site-footer>
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
import LangToggle from '~/components/LangToggle'
import { mapState } from 'vuex'
import firebase from '~/services/firebaseApp'
import { projectsRef } from '~/services/firebaseApp'
import axios from 'axios'

// let pRef = firebase.database().ref('projects')
export default {

  components: {
      SiteHeader,
      SiteFooter,
      LangToggle
  },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      image_title: '',
    };
  },
  methods : {
      addProject: function() {
        let self = this
        var myRef = firebase.database().ref().child('projects').push().key
        firebase.database().ref('projects/' + myRef).set({
            name: self.title,
            description: self.description,
            image_title: self.image,
            image: self.image,
            linkName: myRef
        })
        this.title='',
        this.description='',
        this.image='',
        this.image_title=''
      },

  }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.nav-img img{
    width: 100px;
}
#content-container{
    margin: 2%;
}
#cats {
  text-align: center;
}

</style>
