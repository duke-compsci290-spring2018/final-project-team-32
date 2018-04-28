<template>
<v-app id="inspire">
    <site-header></site-header>
    <lang-toggle></lang-toggle>
    <v-layout v-if="$store.state.lang ==='eng'">
    <v-tabs fixed-tabs>
        <v-tab ripple>
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
                  <p>Otros Dreams en Acción is significant in three important ways. First, ODA advocates for the claim to legal rights and responsibilities—including but not limited to legal international mobility—as members of the United States national community from our current location, al otro lado, in towns and cities across Mexico. Second, ODA advocates for integration and transformation in Mexico. And last but not least, the members of ODA support each other, independent of what someone may have done in the past, the circumstances under which someone returned to Mexico, and the diversity of immigration status and mobility within our community.
                  </p>
              </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>
            <h1 class="sec02">Our Values</h1>
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
        <v-card>
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
    <v-tab-item>
        <v-card flat>
          <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
          <v-card-text>
                    <v-container fluid grid-list-xl>
          <v-layout row wrap justify-space-around>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
              <h2>2016</h2>
              <br>
                <ul>
                  <li>"<a href="http://www.boulderweekly.com/news/the-other-dreamers/" target="_blank">The Other Dreamers</a>" -- <b><i>Boulder Weekly</i></b>, Angela K. Evans September 22, 2016</li>
                  <br>
                  <li>"<a href="http://www.latimes.com/world/mexico-americas/la-fg-mexico-return-migration-schools-20160913-snap-story.html" target="_blank">Nearly half a million U.S. citizens are
                    enrolled in Mexican schools. Many of them are struggling</a>"
                    -- <b><i>Los Angeles Times</i></b>, Kate Linthicum, September 14, 2016</li>
                  <br>
                  <li>"<a href="http://www.pressdemocrat.com/news/5460734-181/speakers-at-sonoma-state-university?ref=TSM" target="_blank">Speakers at Sonoma State University, Roseland library tell of immigration difficulties</a>"
                    -- <b><i>The Press Democrat</i></b>, Eloísa Ruano González, April 4, 2016</li>
                  <br>
                  <li>"<a href="https://www.pbs.org/newshour/show/young-deportees-start-over-in-mexico-after-growing-up-in-the-u-s" target="_blank">Young returnees start over in Mexico after growing up in the U.S.</a>"
                    -- <b><i>PBS NEWSHOUR</i></b>, Fred de Sam Lazero and the Under-Told Stories Project, January 6, 2016</li>
                </ul>
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
                    <h2>2015</h2>
                    <br>
                        <ul>
                        <li>"<a href="http://latinalista.com/columns/guestvoz/guest-voz-after-88-months-in-mexico-as-a-dreamer-i-can-finally-return-home" target="_blank">Guest Voz: After 88 months in Mexico as a DREAMer, I can finally return home.</a>"
                            -- <b><i>Latina Lista</i></b>, Magdalena Loredo, Oct 20, 2015</li>
                        <br>
                        <li>"<a href="http://www.caller.com/news/immigration/mexican-immigrants-once-in-us-face-ongoing-struggle-2043568d-b53d-4758-e053-0100007f4ba5-331767761.html" target="_blank">Mexican immigrants, once in U.S., face ongoing struggle</a>"
                            -- <b><i>Corpus Christi Caller-Times</i></b>, Nadia Tamez-Robledo, Oct 10, 2015</li>
                        <br>
                        <li>"<a href="http://latinalista.com/columns/guestvoz/guest-voz-how-do-i-go-on-dreaming-when-mexican-govt-says-my-u-s-college-education-is-worthless" target="_blank">Guest Voz: How do I go on DREAMing when Mexican gov’t says my U.S. college education is worthless</a>"
                            -- <b><i>Latina Lista</i></b>, Nancy Landa, May 18, 2015</li>
                        <br>
                        <li>"<a href="https://www.theguardian.com/global/2015/may/17/deported-to-mexico-immigration-america" target="_blank">Deported to Mexico: a lost generation</a>"
                            -- <b><i>The Guardian</i></b>, Nina Lakhani, May 17, 2015</li>
                        <br><br>
                        </ul>
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
                        <h2>2014</h2>
                        <br>
                            <ul>
                            <li>"<a href="http://www.latimes.com/world/la-fg-c1-mexico-dreamers-20141104-story.html" target="_blank">U.S.-raised Dreamers are building new lives — back in Mexico</a>"
                                -- <b><i>Los Angeles Times</i></b>, Kate Linthicum, Nov 4, 2014</li>
                            <br>
                            <li>"<a href="https://www.nytimes.com/2014/07/23/opinion/two-countries-no-home.html?_r=0" target="_blank">Two Countries, No Home</a>"
                                -- <b><i>New York Times</i></b>, Op-Docs, Verity Oswin and Leslie Atkins, July 22, 2014</li>
                            <br>
                            <li>"<a href="http://kuow.org/post/immigrant-leaves-america-chase-his-dreams-mexico" target="_blank">An Immigrant Leaves America To Chase His Dreams In Mexico</a>"
                                -- <b><i>KUOW NPR</i></b>, Liz Jones, July 23, 2014</li>
                            <br><br><br><br><br><br><br><br>
                            </ul>
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
                            <h2>2013</h2>
                            <br>
                                <ul>
                                <li>"<a href="https://www.dallasnews.com/news/news/2013/10/27/from-mansfield-to-mexico-man-of-two-countries-is-at-home-in-neither" target="_blank">From Mansfield to Mexico: Man of two countries is at home in neither</a>"
                                    -- <b><i>The Dallas Morning News</i></b>, Dianne Solís and Alfredo Corchado, Oct 27, 2013</li>
                                <br>
                                <li>"<a href="http://latinousa.org/2013/10/25/los-otros-dreamers/" target="_blank">Los Otros Dreamers</a>"
                                    -- <b><i>Latino USA</i></b>, Maria Hinojosa and Brooke Binkowski, Oct 25, 2013</li>
                                <br><br><br><br><br><br><br><br><br><br><br><br>
                                </ul>
                </v-card-text>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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
          <v-card-title>
            <h1 class="sec02">Nuestros Principios</h1>
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
        <link href='https://fonts.googleapis.com/css?family=Montserrat|Cardo' rel='stylesheet' type='text/css'>
        <v-card-text>
        <v-container fluid grid-list-xl>
          <v-layout row wrap justify-space-around>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
              <h2>2016</h2>
              <br>
                <ul>
                  <li>"<a href="http://www.boulderweekly.com/news/the-other-dreamers/" target="_blank">The Other Dreamers</a>" -- <b><i>Boulder Weekly</i></b>, Angela K. Evans September 22, 2016</li>
                  <br>
                  <li>"<a href="http://www.latimes.com/world/mexico-americas/la-fg-mexico-return-migration-schools-20160913-snap-story.html" target="_blank">Nearly half a million U.S. citizens are
                    enrolled in Mexican schools. Many of them are struggling</a>"
                    -- <b><i>Los Angeles Times</i></b>, Kate Linthicum, September 14, 2016</li>
                  <br>
                  <li>"<a href="http://www.pressdemocrat.com/news/5460734-181/speakers-at-sonoma-state-university?ref=TSM" target="_blank">Speakers at Sonoma State University, Roseland library tell of immigration difficulties</a>"
                    -- <b><i>The Press Democrat</i></b>, Eloísa Ruano González, April 4, 2016</li>
                  <br>
                  <li>"<a href="https://www.pbs.org/newshour/show/young-deportees-start-over-in-mexico-after-growing-up-in-the-u-s" target="_blank">Young returnees start over in Mexico after growing up in the U.S.</a>"
                    -- <b><i>PBS NEWSHOUR</i></b>, Fred de Sam Lazero and the Under-Told Stories Project, January 6, 2016</li>
                </ul>
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
                    <h2>2015</h2>
                    <br>
                      <ul>
                        <li>"<a href="http://latinalista.com/columns/guestvoz/guest-voz-after-88-months-in-mexico-as-a-dreamer-i-can-finally-return-home" target="_blank">Guest Voz: After 88 months in Mexico as a DREAMer, I can finally return home.</a>"
                            -- <b><i>Latina Lista</i></b>, Magdalena Loredo, Oct 20, 2015</li>
                        <br>
                        <li>"<a href="http://www.caller.com/news/immigration/mexican-immigrants-once-in-us-face-ongoing-struggle-2043568d-b53d-4758-e053-0100007f4ba5-331767761.html" target="_blank">Mexican immigrants, once in U.S., face ongoing struggle</a>"
                            -- <b><i>Corpus Christi Caller-Times</i></b>, Nadia Tamez-Robledo, Oct 10, 2015</li>
                        <br>
                        <li>"<a href="http://latinalista.com/columns/guestvoz/guest-voz-how-do-i-go-on-dreaming-when-mexican-govt-says-my-u-s-college-education-is-worthless" target="_blank">Guest Voz: How do I go on DREAMing when Mexican gov’t says my U.S. college education is worthless</a>"
                            -- <b><i>Latina Lista</i></b>, Nancy Landa, May 18, 2015</li>
                        <br>
                        <li>"<a href="https://www.theguardian.com/global/2015/may/17/deported-to-mexico-immigration-america" target="_blank">Deported to Mexico: a lost generation</a>"
                            -- <b><i>The Guardian</i></b>, Nina Lakhani, May 17, 2015</li>
                        <br><br>
                      </ul>
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
                        <h2>2014</h2>
                        <br>
                          <ul>
                            <li>"<a href="http://www.latimes.com/world/la-fg-c1-mexico-dreamers-20141104-story.html" target="_blank">U.S.-raised Dreamers are building new lives — back in Mexico</a>"
                                -- <b><i>Los Angeles Times</i></b>, Kate Linthicum, Nov 4, 2014</li>
                            <br>
                            <li>"<a href="https://www.nytimes.com/2014/07/23/opinion/two-countries-no-home.html?_r=0" target="_blank">Two Countries, No Home</a>"
                                -- <b><i>New York Times</i></b>, Op-Docs, Verity Oswin and Leslie Atkins, July 22, 2014</li>
                            <br>
                            <li>"<a href="http://kuow.org/post/immigrant-leaves-america-chase-his-dreams-mexico" target="_blank">An Immigrant Leaves America To Chase His Dreams In Mexico</a>"
                                -- <b><i>KUOW NPR</i></b>, Liz Jones, July 23, 2014</li>
                            <br><br><br><br><br><br><br><br>
                          </ul>
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3 >
                <v-card dark color="primary" class="flex-pad">
                    <v-card-text>
                            <h2>2013</h2>
                            <br>
                              <ul>
                                <li>"<a href="https://www.dallasnews.com/news/news/2013/10/27/from-mansfield-to-mexico-man-of-two-countries-is-at-home-in-neither" target="_blank">From Mansfield to Mexico: Man of two countries is at home in neither</a>"
                                    -- <b><i>The Dallas Morning News</i></b>, Dianne Solís and Alfredo Corchado, Oct 27, 2013</li>
                                <br>
                                <li>"<a href="http://latinousa.org/2013/10/25/los-otros-dreamers/" target="_blank">Los Otros Dreamers</a>"
                                    -- <b><i>Latino USA</i></b>, Maria Hinojosa and Brooke Binkowski, Oct 25, 2013</li>
                                <br><br><br><br><br><br><br><br><br><br><br><br>
                              </ul>
                </v-card-text>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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
.flex-pad {
    padding: 20px;
    text-align: left;
    border-radius: 25px 25px 25px 25px;
}

  #carousel {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  a:visited {
    color: black;
  }

  h2 {
    text-align: center;
  }
</style>
