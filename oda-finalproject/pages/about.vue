<template>
<v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-layout v-if="$store.state.lang==='eng'">
    <v-tabs fixed-tabs>
        <v-tab  ripple>
            About
        </v-tab>
        <v-tab ripple>
            Media
        </v-tab>
    <v-tab-item v-if="$store.state.lang === 'eng'">
        <v-card>
            <v-card-title><h1>Background</h1></v-card-title>
            <v-card-text>
              <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
                  <p>What nourishes ODA is the value of being able to make a difference in a person’s life. It does not matter how or when we were going to grow in size, but rather how many seeds we can plant by showing up for our community of returning and deported immigrants. We know that by staying true to that simple principle, we will grow and evolve as a sustainable and powerful community.
                  </p>
              </v-card-text>
              <v-card-text>
                  Otros Dreams en Acción is significant in three important ways. First, ODA advocates for the claim to legal rights and responsibilities—including but not limited to legal international mobility—as members of the United States national community from our current location, al otro lado, in towns and cities across Mexico. Second, ODA advocates for integration and transformation in Mexico. And last but not least, the members of ODA support each other, independent of what someone may have done in the past, the circumstances under which someone returned to Mexico, and the diversity of immigration status and mobility within our community.
              </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>     <h1 class="sec02">Our Values</h1>
          </v-card-title>
          <v-card-text>
            In ODA, we seek to be authentic and adventurous.  We are determined to contribute to our community by accepting challenges, as well as letting friendship guide us. We fight the good fight when it comes to Justice for everyone. Kindness, Accountability, Optimism, Community and Love are the values that we share and try to put into action every day.
            We know, firsthand, about how the current immigration system in the United States criminalizes us and our families. Just like the seeds of a dandelion that grow where they are blown by the wind, we believe in our right and our potential to thrive wherever we land. Just like dandelion seeds that need soil, water and sunlight, we still need basic needs met in order to grow and thrive aquí y allá: safety, health, community, access to educational opportunities, family unification, and legal, international mobility.
          </v-card-text>
          <v-card-text>
            We are committed to the struggle for the full recognition of our Human Rights as immigrants wherever we may find ourselves, and we are also committed to our Human Responsibilities to care for ourselves, our families, our communities, and the natural resources that sustain all of us.

            We are not a typical non-profit organization. We are a members-based, grassroots organization funded through the heartfelt work and dedication of our members, direct donations, and project-based grants. We make decisions through consensus and distribute resources according to dynamic priorities and circumstances.
          </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title> <h1> Our Leadership Team </h1></v-card-title>
            <v-card-text> The idea of Otros Dreams en Acción was created just before sunset on October 28, 2015 over a meal in Newport Beach, California. Without knowing exactly what would come next, but with the determination to keep the embers glowing from all that had come before, Maggie Loredo and Jill Anderson committed to build ODA. They met each other and a growing network of bilingual and bicultural youth in Mexico via the book Los Otros Dreamers.  Donations from the book funded the founding of ODA and the creation of this website.
            </v-card-text>
            <v-card-text>
            Today, ODA is supported by allies around the world, a strong network of returned and deported youth across Mexico, and some of our Leadership Team are: Maggie Loredo, Jill Anderson, Victor Saucedo, Enrique Rojas, Cesar Maldonado, Adriana Figueroa, Victor Hugo Manuel and many more. </v-card-text>
            <v-card-text>
              <div id="carousel">
                <about-carousel :people="thePeople"></about-carousel>
              </div>
            </v-card-text>
        </v-card>
    </v-tab-item>
    <v-tab-item v-if="$store.state.lang === 'esp'">
        <v-card>
            <v-card-title><h1>Nosotros</h1></v-card-title>
            <v-card-text>
              <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
                  <p>Lo que alimenta ODA es el valor de poder hacer alguna diferencia en la vida de alguna persona. No importa cómo o cuando vayamos a crecer en tamaño, pero sí importa cuántas semillas podamos plantar atreves de hacer presencia por nuestra comunidad de migrantes retornados y deportados. Sabemos que al permanecer firmes con nuestros principios vamos a crecer y evolucionar como una comunidad empoderada y sustentable.
                  </p>
              </v-card-text>
              <v-card-text>
                  Otros Dreams en Acción cuenta con cuatro aspectos importantes y significativos. El primero, ODA aboga por la reunificación de nuestras familias que están divididas por la frontera militarizada entre México-EEUU. En segundo, reclamamos derechos legales y responsabilidades-incluyendo pero no limitada a movilidad internacional- como miembros de la comunidad nacional estadounidense desde nuestra localidad actual, al otro lado, en pueblos y ciudades a lo largo de México. Tercero, ODA aboga por la integración y transformación en México. Por ultimo pero no menos importante, los miembros de ODA se apoyan mutuamente sin importar bajo qué circunstancias hayan regresado alguien a México, y la diversidad de status migratorios y la movilidad entre nuestra comunidad.
              </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>     <h1 class="sec02">Nuestros Principios</h1>
          </v-card-title>
          <v-card-text>
              En ODA buscamos ser auténticos y venturosos. Estamos determinados a contribuir a nuestra comunidad aceptando los retos, así como dejar que la Amistad sea nuestra guía. Luchamos cuando se trata de justicia para todos. Amabilidad, responsabilidad, optimismo, comunidad y amor son los principios que compartimos y los cuales día a día tratamos de implementar.
                Sabemos de primera mano cómo está el sistema migratorio actual en Los Estados Unidos e incluso como este nos criminalice a nosotros y a nuestras familias. Así como las semillas de dientes de león crecen en donde sea que sean arrojadas por el viento, nosotros creemos en nuestros derechos y en nuestro potencial para crecer en donde sea que aterricemos. Así como las semillas de diente de león necesitan tierra, agua y rayos del sol, nosotros aun requerimos de nuestras necesidades básicas para crecer y prosperar aquí y allá: de manera segura, con salud, y en comunidad, a la par con acceso a oportunidades educativas, unificación familiar y movilidad internacional de manera legal.
          </v-card-text>
          <v-card-text>
            Estamos comprometidos con la lucha, por el reconocimiento en su totalidad de los derechos humanos de los migrantes en donde sea que nos encontremos, y de igual manera estamos comprometidos con los responsabilidades humanas para cuidarnos a nosotros mismos, nuestras familias, nuestras comunidades y los recursos naturales que nos sostienen.
            No somos una organización no lucrativa tradicional. Somos una organización basada en la comunidad y fundada por medio del trabajo y la dedicación de nuestros miembros voluntarios, donaciones directas, y proyectos basados en becas. Tomamos decisiones por medio de consenso y distribuimos los recursos de acuerdo a la dinámica de las prioridades y circunstancias.          </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title> <h1> Nuestro Equipo de Lideres </h1></v-card-title>
            <v-card-text> La idea de Otros Dreams en Acción fue creada justo antes de la puesta del sol el 28 de Octubre de 2016 en la Playa de Newport, California. Sin saber exactamente qué sucedería después, pero con la determinación de continuar iluminado las brasas de todo lo que había sucedido antes, Maggie Loredo y Jill Anderson se comprometieron a construir ODA. Ellas se conocieron como para de la red bilingüe y bicultural de jóvenes en México por medio del Libro Los Otros Dreamers. Las donaciones recaudadas ayudaron a fundar y a la creación de este sitio web.
            </v-card-text>
            <v-card-text>
                Hoy, ODA es apoyado por aliados en todo el mundo, una red solida de jóvenes retornados y deportados atreves de México, y por nuestro equipo de líderes: Maggie Loredo, Jill Anderson, Víctor Saucedo, Manuel Torres, Enrique Rojas, Víctor Hugo Manuel y Viridiana Chávez.
            </v-card-text>
            <v-card-text>
                <about-carousel :people="thePeople"></about-carousel>
            </v-card-text>
        </v-card>
    </v-tab-item>
    <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="row">
              <div class="column" id="sixteen">
                <h2>2016</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
              <div class="column" id="fifteen">
                <h2>2015</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
              <div class="column" id="fourteen">
                <h2>2014</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
              <div class="column" id="thirteen">
                <h2>2013</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
            </div>
          </v-card-text>
        </v-card>
    </v-tab-item>
    </v-tabs>
    </v-layout>
    <!-- Spanish version -->
    <v-layout v-else>
            <v-tabs fixed-tabs>
        <v-tab  ripple>
            Nosotros
        </v-tab>
        <v-tab ripple>
            Medios
        </v-tab>
    <v-tab-item>
        <v-card>
            <v-card-title><h1>Nosotros</h1></v-card-title>
            <v-card-text>
              <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
                  <p>Lo que alimenta ODA es el valor de poder hacer alguna diferencia en la vida de alguna persona. No importa cómo o cuando vayamos a crecer en tamaño, pero sí importa cuántas semillas podamos plantar atreves de hacer presencia por nuestra comunidad de migrantes retornados y deportados. Sabemos que al permanecer firmes con nuestros principios vamos a crecer y evolucionar como una comunidad empoderada y sustentable.
                  </p>
              </v-card-text>
              <v-card-text>
                  Otros Dreams en Acción cuenta con cuatro aspectos importantes y significativos. El primero, ODA aboga por la reunificación de nuestras familias que están divididas por la frontera militarizada entre México-EEUU. En segundo, reclamamos derechos legales y responsabilidades-incluyendo pero no limitada a movilidad internacional- como miembros de la comunidad nacional estadounidense desde nuestra localidad actual, al otro lado, en pueblos y ciudades a lo largo de México. Tercero, ODA aboga por la integración y transformación en México. Por ultimo pero no menos importante, los miembros de ODA se apoyan mutuamente sin importar bajo qué circunstancias hayan regresado alguien a México, y la diversidad de status migratorios y la movilidad entre nuestra comunidad.
              </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>     <h1 class="sec02">Nuestros Principios</h1>
          </v-card-title>
          <v-card-text>
              En ODA buscamos ser auténticos y venturosos. Estamos determinados a contribuir a nuestra comunidad aceptando los retos, así como dejar que la Amistad sea nuestra guía. Luchamos cuando se trata de justicia para todos. Amabilidad, responsabilidad, optimismo, comunidad y amor son los principios que compartimos y los cuales día a día tratamos de implementar.
                Sabemos de primera mano cómo está el sistema migratorio actual en Los Estados Unidos e incluso como este nos criminalice a nosotros y a nuestras familias. Así como las semillas de dientes de león crecen en donde sea que sean arrojadas por el viento, nosotros creemos en nuestros derechos y en nuestro potencial para crecer en donde sea que aterricemos. Así como las semillas de diente de león necesitan tierra, agua y rayos del sol, nosotros aun requerimos de nuestras necesidades básicas para crecer y prosperar aquí y allá: de manera segura, con salud, y en comunidad, a la par con acceso a oportunidades educativas, unificación familiar y movilidad internacional de manera legal.
          </v-card-text>
          <v-card-text>
            Estamos comprometidos con la lucha, por el reconocimiento en su totalidad de los derechos humanos de los migrantes en donde sea que nos encontremos, y de igual manera estamos comprometidos con los responsabilidades humanas para cuidarnos a nosotros mismos, nuestras familias, nuestras comunidades y los recursos naturales que nos sostienen.
            No somos una organización no lucrativa tradicional. Somos una organización basada en la comunidad y fundada por medio del trabajo y la dedicación de nuestros miembros voluntarios, donaciones directas, y proyectos basados en becas. Tomamos decisiones por medio de consenso y distribuimos los recursos de acuerdo a la dinámica de las prioridades y circunstancias.          </v-card-text>
        </v-card>
        <v-card flat>
            <v-card-title> <h1> Nuestro Equipo de Lideres </h1></v-card-title>
            <v-card-text> La idea de Otros Dreams en Acción fue creada justo antes de la puesta del sol el 28 de Octubre de 2016 en la Playa de Newport, California. Sin saber exactamente qué sucedería después, pero con la determinación de continuar iluminado las brasas de todo lo que había sucedido antes, Maggie Loredo y Jill Anderson se comprometieron a construir ODA. Ellas se conocieron como para de la red bilingüe y bicultural de jóvenes en México por medio del Libro Los Otros Dreamers. Las donaciones recaudadas ayudaron a fundar y a la creación de este sitio web.
            </v-card-text>
            <v-card-text>
                Hoy, ODA es apoyado por aliados en todo el mundo, una red solida de jóvenes retornados y deportados atreves de México, y por nuestro equipo de líderes: Maggie Loredo, Jill Anderson, Víctor Saucedo, Manuel Torres, Enrique Rojas, Víctor Hugo Manuel y Viridiana Chávez.
            </v-card-text>
            <v-card-text>
                <about-carousel :people="thePeople"></about-carousel>
            </v-card-text>
        </v-card>
    </v-tab-item>
    <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="row">
              <div class="column" id="sixteen">
                <h2>2016</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
              <div class="column" id="fifteen">
                <h2>2015</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
              <div class="column" id="fourteen">
                <h2>2014</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
              <div class="column" id="thirteen">
                <h2>2013</h2>
                  <ul>
                    <li>media</li>
                    <li>media</li>
                  </ul>
              </div>
            </div>
          </v-card-text>
        </v-card>
    </v-tab-item>
    </v-tabs>
    </v-layout>
    <site-footer></site-footer>
</v-app>
</template>

<script>
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'
import LangToggle from '~/components/LangToggle'
import thePeople from '~/static/personData.json'
import AboutCarousel from '~/components/AboutCarousel'
import { mapState } from 'vuex'

if (process.browser) {
  require('vue-carousel')
}
export default {
  components: {
      SiteHeader,
      LangToggle,
      AboutCarousel,
      SiteFooter
  },

  data() {
    return {
      thePeople
    };
  },

  methods: {
  }
}
</script>

<style>
.column {
    display: table-cell;
    float: left;
    width: 25%;
    padding: 50px;
    border-spacing: 1000px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
    width: 100%;
}
  #sixteen {
    margin: 5% auto;
    width: 20%;
    border-color: blue;
    background-color: pink;
  }
  #fifteen {
    margin: 5% auto;
    width: 20%;
    border-color: blue;
    background-color: green;
  }
  #fourteen {
    margin: 5% auto;
    width: 20%;
    border-color: blue;
    background-color: yellow;
  }
  #thirteen {
    margin: 5% auto;
    width: 20%;
    border-color: blue;
    background-color: grey;
  }
  #carousel {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
